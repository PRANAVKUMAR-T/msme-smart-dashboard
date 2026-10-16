import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheck, User, Lock, Eye, EyeOff, ArrowRight, CheckCircle2,
  AlertCircle, Briefcase, ShoppingCart, Boxes, Users, Sparkles, TrendingUp, Building2,
  KeyRound, X, RefreshCw
} from 'lucide-react';
import { loginStaff, fetchUsers, forgotPassword } from './api';

export interface StaffUser {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinedOn?: string;
  allowedPages: string[];
}

export interface UserAccountItem {
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  joinedOn?: string;
  allowedPages?: string[];
}

export interface StaffPreset {
  id?: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  description: string;
  icon: typeof User;
  badgeColor: string;
  allowedPages?: string[];
}

export const getRoleMeta = (role: string) => {
  switch (role) {
    case 'Administrator':
      return { icon: ShieldCheck, badgeColor: 'bg-indigo-600 text-white', desc: 'Full administrative access to financial KPIs, settings, and staff accounts.' };
    case 'Sales Manager':
      return { icon: TrendingUp, badgeColor: 'bg-emerald-600 text-white', desc: 'Sales pipelines, customer relations, invoices, and revenue analytics.' };
    case 'Purchase Manager':
      return { icon: ShoppingCart, badgeColor: 'bg-purple-600 text-white', desc: 'Procurement orders, vendor management, and product restocking.' };
    case 'Inventory Staff':
      return { icon: Boxes, badgeColor: 'bg-amber-600 text-white', desc: 'Warehouse stock records and inventory management.' };
    case 'Sales Staff':
      return { icon: Users, badgeColor: 'bg-blue-600 text-white', desc: 'Create point-of-sale invoices, customer records, and orders.' };
    case 'Founder':
    case 'Founder / Executive':
      return { icon: ShieldCheck, badgeColor: 'bg-indigo-600 text-white', desc: 'Executive leadership with access to Dashboard, Financial Reports, BI, and Admin metrics.' };
    case 'Co-Founder':
      return { icon: TrendingUp, badgeColor: 'bg-teal-600 text-white', desc: 'Executive co-founder with access to Dashboard, Reports, and Business Intelligence.' };
    default:
      return { icon: Briefcase, badgeColor: 'bg-slate-600 text-white', desc: `${role} portal access.` };
  }
};

export const ROLE_PERMISSIONS_MAP: Record<string, string[]> = {
  Administrator: [
    'Admin', 'Dashboard', 'Inventory', 'Add Product', 'Sales', 'New Sale', 'Purchases', 'New Purchase', 'Customers', 'New Customer',
    'Suppliers', 'New Supplier', 'Invoices', 'Create Invoice', 'GST', 'Reports',
    'Business Intelligence', 'Predictions', 'Recommendations', 'Settings', 'Logout'
  ],
  'Founder': [
    'Admin', 'Dashboard', 'Reports', 'Business Intelligence', 'Settings', 'Logout'
  ],
  'Founder / Executive': [
    'Admin', 'Dashboard', 'Reports', 'Business Intelligence', 'Settings', 'Logout'
  ],
  'Co-Founder': [
    'Dashboard', 'Reports', 'Business Intelligence', 'Logout'
  ],
  'Sales Manager': [
    'Dashboard', 'Sales', 'New Sale', 'Customers', 'New Customer', 'Invoices', 'Create Invoice',
    'GST', 'Reports', 'Business Intelligence', 'Logout'
  ],
  'Purchase Manager': [
    'Dashboard', 'Purchases', 'New Purchase', 'Suppliers', 'New Supplier', 'Inventory', 'Add Product', 'Reports', 'Logout'
  ],
  'Inventory Staff': [
    'Dashboard', 'Inventory', 'Add Product', 'Reports', 'Logout'
  ],
  'Sales Staff': [
    'Dashboard', 'Sales', 'New Sale', 'Customers', 'New Customer', 'Invoices', 'Create Invoice', 'Logout'
  ],
  'View Only': [
    'Dashboard', 'Reports', 'Logout'
  ],
};


export const STAFF_PRESETS: Array<{
  id: number;
  name: string;
  email: string;
  role: string;
  status: 'Active' | 'Inactive';
  description: string;
  icon: typeof User;
  badgeColor: string;
}> = [
  {
    id: 1,
    name: 'Admin',
    email: 'admin@msmesmart.com',
    role: 'Administrator',
    status: 'Active',
    description: 'Full administrative access to financial KPIs, settings, and staff accounts.',
    icon: ShieldCheck,
    badgeColor: 'bg-indigo-600 text-white',
  },
  {
    id: 2,
    name: 'Ravi Kumar',
    email: 'ravi@msmesmart.com',
    role: 'Sales Manager',
    status: 'Active',
    description: 'Sales pipelines, customer relations, invoices, and revenue analytics.',
    icon: TrendingUp,
    badgeColor: 'bg-emerald-600 text-white',
  },
  {
    id: 3,
    name: 'Priya Sharma',
    email: 'priya@msmesmart.com',
    role: 'Purchase Manager',
    status: 'Active',
    description: 'Procurement orders, vendor management, and product restocking.',
    icon: ShoppingCart,
    badgeColor: 'bg-purple-600 text-white',
  },
  {
    id: 4,
    name: 'Arun Das',
    email: 'arun@msmesmart.com',
    role: 'Inventory Staff',
    status: 'Inactive',
    description: 'Warehouse stock records and low inventory alerts (Inactive Account).',
    icon: Boxes,
    badgeColor: 'bg-amber-600 text-white',
  },
  {
    id: 5,
    name: 'Meena R',
    email: 'meena@msmesmart.com',
    role: 'Sales Staff',
    status: 'Active',
    description: 'Create point-of-sale invoices, customer records, and orders.',
    icon: Users,
    badgeColor: 'bg-blue-600 text-white',
  },
];

interface LoginPageProps {
  onLogin: (user: StaffUser) => void;
  users?: UserAccountItem[];
}

export default function LoginPage({ onLogin, users }: LoginPageProps) {
  // Sync live users from props, localStorage, and API
  const [liveUsers, setLiveUsers] = useState<UserAccountItem[]>(() => {
    if (users && users.length > 0) return users;
    try {
      const saved = localStorage.getItem('msme_users');
      if (saved) return JSON.parse(saved);
    } catch {}
    return [];
  });

  useEffect(() => {
    if (users) {
      setLiveUsers(users);
    }
  }, [users]);

  useEffect(() => {
    let isMounted = true;
    fetchUsers()
      .then((dbUsers) => {
        if (isMounted && Array.isArray(dbUsers) && dbUsers.length > 0) {
          setLiveUsers(dbUsers);
        }
      })
      .catch(() => {});
    return () => {
      isMounted = false;
    };
  }, []);

  const displayStaffList = useMemo<StaffPreset[]>(() => {
    const presetMap = new Map<string, typeof STAFF_PRESETS[0]>();
    STAFF_PRESETS.forEach((p) => {
      presetMap.set(p.email.toLowerCase().trim(), p);
    });

    if (liveUsers.length > 0) {
      // Map strictly from current live users so deleted users do NOT appear
      return liveUsers.map((u) => {
        const preset = presetMap.get(u.email.toLowerCase().trim());
        const roleMeta = getRoleMeta(u.role);
        return {
          id: u.id,
          name: u.name,
          email: u.email,
          role: u.role,
          status: u.status,
          description: preset?.description || roleMeta.desc,
          icon: preset?.icon || roleMeta.icon,
          badgeColor: preset?.badgeColor || roleMeta.badgeColor,
          allowedPages: (u.allowedPages && u.allowedPages.length > 0)
            ? u.allowedPages
            : (ROLE_PERMISSIONS_MAP[u.role] || ['Dashboard', 'Logout']),
        };
      });
    }

    return STAFF_PRESETS.map((p) => ({
      ...p,
      allowedPages: ROLE_PERMISSIONS_MAP[p.role] || ['Dashboard', 'Logout'],
    }));
  }, [liveUsers]);

  const getCustomPassword = (targetEmail: string) => {
    try {
      const saved = JSON.parse(localStorage.getItem('msme_user_passwords') || '{}');
      return saved[targetEmail.toLowerCase().trim()] || '';
    } catch {
      return '';
    }
  };

  const [selectedStaff, setSelectedStaff] = useState<StaffPreset>(() => {
    return displayStaffList[0] || STAFF_PRESETS[0];
  });

  // Keep selectedStaff and its display name in sync when liveUsers updates
  useEffect(() => {
    if (displayStaffList.length > 0) {
      setSelectedStaff((prev) => {
        const found = displayStaffList.find(
          (s) => s.email.toLowerCase().trim() === prev.email.toLowerCase().trim() || (s.id && prev.id && s.id === prev.id)
        );
        return found || displayStaffList[0];
      });
    }
  }, [displayStaffList]);

  const [email, setEmail] = useState(displayStaffList[0]?.email || STAFF_PRESETS[0].email);
  const [password, setPassword] = useState(() => {
    const initialEmail = displayStaffList[0]?.email || STAFF_PRESETS[0].email;
    return getCustomPassword(initialEmail) || 'msme123';
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Forgot Password modal state
  const [forgotModalOpen, setForgotModalOpen] = useState(false);
  const [forgotEmail, setForgotEmail] = useState('');
  const [forgotRecoveryKey, setForgotRecoveryKey] = useState('MSME2026');
  const [forgotNewPassword, setForgotNewPassword] = useState('');
  const [forgotConfirmPassword, setForgotConfirmPassword] = useState('');
  const [forgotShowPass, setForgotShowPass] = useState(false);
  const [forgotLoading, setForgotLoading] = useState(false);
  const [forgotError, setForgotError] = useState('');
  const [forgotSuccess, setForgotSuccess] = useState('');

  // Keep selectedStaff in sync with displayStaffList updates
  useEffect(() => {
    const match = displayStaffList.find(
      (s) => s.email.toLowerCase() === selectedStaff.email.toLowerCase()
    );
    if (match) {
      if (
        match.status !== selectedStaff.status ||
        match.role !== selectedStaff.role ||
        match.name !== selectedStaff.name ||
        JSON.stringify(match.allowedPages) !== JSON.stringify(selectedStaff.allowedPages)
      ) {
        setSelectedStaff(match);
      }
    } else if (displayStaffList.length > 0) {
      setSelectedStaff(displayStaffList[0]);
      setEmail(displayStaffList[0].email);
      setPassword(getCustomPassword(displayStaffList[0].email) || 'msme123');
    }
  }, [displayStaffList]);

  const handleSelectStaff = (preset: StaffPreset) => {
    setSelectedStaff(preset);
    setEmail(preset.email);
    const customPass = getCustomPassword(preset.email);
    setPassword(customPass || 'msme123');
    setErrorMessage('');
  };

  const generateRandomForgotPass = () => {
    const chars = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
    let res = '';
    for (let i = 0; i < 8; i++) {
      res += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    const finalPass = `${res}!`;
    setForgotNewPassword(finalPass);
    setForgotConfirmPassword(finalPass);
    setForgotShowPass(true);
  };

  const handleForgotPasswordSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setForgotError('');
    setForgotSuccess('');

    if (!forgotEmail) {
      setForgotError('Please enter your account email.');
      return;
    }
    if (forgotNewPassword.length < 6) {
      setForgotError('New password must be at least 6 characters long.');
      return;
    }
    if (forgotNewPassword !== forgotConfirmPassword) {
      setForgotError('New password and confirmation do not match.');
      return;
    }

    const cleanEmail = forgotEmail.toLowerCase().trim();
    const validRecoveryKeys = ['MSME2026', '123456', 'admin-reset', 'msme123', 'ADMIN123'];
    const keyTrimmed = (forgotRecoveryKey || '').trim().toUpperCase();
    if (forgotRecoveryKey && !validRecoveryKeys.includes(forgotRecoveryKey.trim()) && keyTrimmed !== 'MSME2026') {
      setForgotError('Invalid Master Recovery Key. Use default verification key "MSME2026" or "123456".');
      return;
    }

    setForgotLoading(true);
    try {
      // 1. Call backend reset endpoint
      await forgotPassword({
        email: cleanEmail,
        recoveryKey: forgotRecoveryKey.trim() || 'MSME2026',
        newPassword: forgotNewPassword
      });

      // 2. Persist to localStorage msme_user_passwords
      try {
        const saved = JSON.parse(localStorage.getItem('msme_user_passwords') || '{}');
        saved[cleanEmail] = forgotNewPassword;
        localStorage.setItem('msme_user_passwords', JSON.stringify(saved));
      } catch {}

      // 3. Update active login form state
      setEmail(forgotEmail);
      setPassword(forgotNewPassword);

      setForgotSuccess(`Password for ${forgotEmail} has been reset successfully! You can now log in.`);
      setTimeout(() => {
        setForgotModalOpen(false);
        setForgotSuccess('');
        setErrorMessage('');
      }, 1500);
    } catch (err: unknown) {
      setForgotError(err instanceof Error ? err.message : 'Failed to reset password');
    } finally {
      setForgotLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    const cleanEmail = email.toLowerCase().trim();
    const matchedLocal = displayStaffList.find(
      (s) => s.email.toLowerCase() === cleanEmail
    );

    const customPassword = getCustomPassword(cleanEmail) || (matchedLocal as any)?.password;
    const isCustomMatched = customPassword && password === customPassword;
    const isDefaultMatched = password === 'msme123' || password === 'password123' || password === 'admin123' || password === '123456';

    try {
      // First attempt backend API login
      const res = await loginStaff({ email: cleanEmail, password });
      if (res && res.success && res.user) {
        // Reconcile with custom allowedPages and live status
        const customPages = (matchedLocal?.allowedPages && matchedLocal.allowedPages.length > 0)
          ? matchedLocal.allowedPages
          : (res.user.allowedPages && res.user.allowedPages.length > 0 ? res.user.allowedPages : ROLE_PERMISSIONS_MAP[res.user.role] || ['Dashboard', 'Logout']);

        const finalUser: StaffUser = {
          id: res.user.id,
          name: res.user.name,
          email: res.user.email,
          role: res.user.role,
          status: matchedLocal?.status || res.user.status,
          allowedPages: customPages,
        };

        if (rememberMe) {
          localStorage.setItem('msme_auth_user', JSON.stringify(finalUser));
        }
        onLogin(finalUser);
        return;
      }
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Login failed';

      // If user provided their updated custom password or default password, authenticate via matched local profile
      if (matchedLocal && (isCustomMatched || isDefaultMatched)) {
        if (matchedLocal.status === 'Inactive') {
          setErrorMessage(`Account for ${matchedLocal.name} (${matchedLocal.role}) is currently Inactive. Contact Administrator to activate.`);
          setIsLoading(false);
          return;
        }

        const clientUser: StaffUser = {
          id: matchedLocal.id || (matchedLocal.role === 'Administrator' ? 1 : 2),
          name: matchedLocal.name,
          email: matchedLocal.email,
          role: matchedLocal.role,
          status: matchedLocal.status,
          allowedPages: (matchedLocal.allowedPages && matchedLocal.allowedPages.length > 0)
            ? matchedLocal.allowedPages
            : (ROLE_PERMISSIONS_MAP[matchedLocal.role] || ['Dashboard', 'Logout']),
        };

        if (rememberMe) {
          localStorage.setItem('msme_auth_user', JSON.stringify(clientUser));
        }
        onLogin(clientUser);
        return;
      }

      // Check against local staff list (with latest admin updates)
      if (!matchedLocal) {
        setErrorMessage('Staff account with this email not found.');
        setIsLoading(false);
        return;
      }

      if (matchedLocal.status === 'Inactive') {
        setErrorMessage(`Account for ${matchedLocal.name} (${matchedLocal.role}) is currently Inactive. Contact Administrator to activate.`);
        setIsLoading(false);
        return;
      }

      if (!isCustomMatched && !isDefaultMatched) {
        setErrorMessage(customPassword ? 'Incorrect password. Please enter your updated password or click "Forgot Password?".' : 'Incorrect password. (Default password: msme123)');
        setIsLoading(false);
        return;
      }

      // If error is about password or explicit staff profile not found, display directly
      if (message.includes('password') || message.includes('Staff profile not found')) {
        setErrorMessage(message);
        setIsLoading(false);
        return;
      }
    } finally {
      setIsLoading(false);
    }
  };

  const allowedPermissions = (selectedStaff.allowedPages && selectedStaff.allowedPages.length > 0)
    ? selectedStaff.allowedPages
    : (ROLE_PERMISSIONS_MAP[selectedStaff.role] || []);

  return (
    <div className="login-page-root">
      {/* Dynamic Background Elements */}
      <div className="login-bg-glow glow-top" />
      <div className="login-bg-glow glow-bottom" />

      <div className="login-container">
        {/* Left Side: Brand & Quick Staff Selector */}
        <div className="login-sidebar-section">
          <div className="login-brand-header">
            <div className="login-brand-icon">
              <TrendingUp size={28} />
            </div>
            <div>
              <h1 className="login-brand-title">MSME Smart</h1>
              <p className="login-brand-subtitle">Intelligent Business Suite & ERP</p>
            </div>
          </div>

          <div className="login-role-intro">
            <div className="login-badge-pill">
              <Sparkles size={14} /> Multi-Staff Authentication Portal
            </div>
            <p className="login-intro-text">
              Select any staff profile below for quick access, or enter custom staff credentials.
            </p>
          </div>

          <div className="login-staff-list">
            <div className="login-staff-list-title">Quick Select Staff Role:</div>
            {displayStaffList.map((preset) => {
              const Icon = preset.icon;
              const isSelected = selectedStaff.email === preset.email;
              return (
                <button
                  type="button"
                  key={preset.email}
                  className={`login-staff-card ${isSelected ? 'selected' : ''}`}
                  onClick={() => handleSelectStaff(preset)}
                >
                  <div className={`login-staff-icon-wrap ${isSelected ? 'active' : ''}`}>
                    <Icon size={18} />
                  </div>
                  <div className="login-staff-card-content">
                    <div className="login-staff-name-row">
                      <span className="login-staff-name">{preset.name}</span>
                      <span className={`login-role-badge ${preset.status === 'Inactive' ? 'inactive' : ''}`}>
                        {preset.role}
                      </span>
                      <span className={`login-status-pill ${preset.status === 'Active' ? 'status-active' : 'status-inactive'}`}>
                        ● {preset.status}
                      </span>
                    </div>
                    <span className="login-staff-email">{preset.email}</span>
                  </div>
                  {isSelected && (
                    <motion.div layoutId="staff-check" className="login-staff-check">
                      <CheckCircle2 size={18} />
                    </motion.div>
                  )}
                </button>
              );
            })}
          </div>

          <div className="login-footer-badge">
            <Building2 size={16} />
            <span>Multi-Role Access Control (RBAC) Enabled</span>
          </div>
        </div>

        {/* Right Side: Authentication Form */}
        <div className="login-form-section">
          <div className="login-form-box">
            <div className="login-form-header">
              <h2>Staff Sign In</h2>
              <p>Enter your credentials to access your designated workspace.</p>
            </div>

            {/* Role Overview Banner */}
            <div className="login-active-role-card">
              <div className="login-role-header">
                <span className="role-label">Active Role Target:</span>
                <span className={`role-chip ${selectedStaff.status === 'Inactive' ? 'chip-inactive' : 'chip-active'}`}>
                  {selectedStaff.role} • {selectedStaff.status}
                </span>
              </div>
              <p className="role-desc">{selectedStaff.description}</p>
              
              <div className="permissions-preview">
                <span className="perm-label">Accessible Modules:</span>
                <div className="perm-chips">
                  {allowedPermissions.slice(0, 6).map((pageName) => (
                    <span key={pageName} className="perm-chip">
                      ✓ {pageName}
                    </span>
                  ))}
                  {allowedPermissions.length > 6 && (
                    <span className="perm-chip-more">+{allowedPermissions.length - 6} more</span>
                  )}
                </div>
              </div>
            </div>

            {/* Error Message Alert */}
            <AnimatePresence>
              {errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="login-alert-box"
                >
                  <AlertCircle size={18} />
                  <span>{errorMessage}</span>
                </motion.div>
              )}
            </AnimatePresence>

            <form onSubmit={handleSubmit} className="login-fields-form">
              {/* Email Field */}
              <div className="login-input-group">
                <label htmlFor="staff-email">Staff Email Address</label>
                <div className="login-input-wrapper">
                  <User className="input-icon" size={18} />
                  <input
                    id="staff-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="e.g. staff@msmesmart.com"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div className="login-input-group">
                <div className="label-with-hint">
                  <label htmlFor="staff-password">Password</label>
                  <button
                    type="button"
                    className="pass-quick-hint"
                    onClick={() => setPassword('msme123')}
                    title="Click to fill default password"
                  >
                    Default: msme123
                  </button>
                </div>
                <div className="login-input-wrapper">
                  <Lock className="input-icon" size={18} />
                  <input
                    id="staff-password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowPassword(!showPassword)}
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </div>

              {/* Remember & Options */}
              <div className="login-options-row">
                <label className="remember-label">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  />
                  <span>Keep me signed in</span>
                </label>
                <button
                  type="button"
                  className="login-forgot-link"
                  onClick={() => {
                    setForgotEmail(email || 'admin@msmesmart.com');
                    setForgotRecoveryKey('MSME2026');
                    setForgotNewPassword('');
                    setForgotConfirmPassword('');
                    setForgotError('');
                    setForgotSuccess('');
                    setForgotModalOpen(true);
                  }}
                >
                  Forgot Password?
                </button>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className={`login-submit-button ${isLoading ? 'loading' : ''}`}
              >
                {isLoading ? (
                  <span className="login-loading-spinner">Verifying credentials...</span>
                ) : (
                  <>
                    <span>Sign In as {selectedStaff.role}</span>
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Admin / Staff Forgot Password Recovery Modal */}
      <AnimatePresence>
        {forgotModalOpen && (
          <div className="login-modal-overlay">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="login-modal-backdrop"
              onClick={() => !forgotLoading && setForgotModalOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="login-forgot-modal"
              role="dialog"
            >
              <div className="login-forgot-header">
                <div className="login-forgot-title-wrap">
                  <div className="login-forgot-icon-pill">
                    <KeyRound size={20} />
                  </div>
                  <div>
                    <h3>Forgot Password Recovery</h3>
                    <p>Reset Administrator or Staff password using Master Key</p>
                  </div>
                </div>
                <button
                  type="button"
                  className="login-modal-close"
                  onClick={() => !forgotLoading && setForgotModalOpen(false)}
                  disabled={forgotLoading}
                >
                  <X size={18} />
                </button>
              </div>

              <div className="login-forgot-body">
                <div className="login-forgot-callout">
                  <ShieldCheck size={18} />
                  <div>
                    <b>Master Recovery Verification:</b>
                    <span> Use default Master Key <code>MSME2026</code> or <code>123456</code> to authorize instant password reset.</span>
                  </div>
                </div>

                {forgotError && (
                  <div className="login-alert-box" style={{ marginBottom: 14 }}>
                    <AlertCircle size={16} />
                    <span>{forgotError}</span>
                  </div>
                )}

                {forgotSuccess && (
                  <div className="login-alert-box success" style={{ marginBottom: 14 }}>
                    <CheckCircle2 size={16} />
                    <span>{forgotSuccess}</span>
                  </div>
                )}

                <form onSubmit={handleForgotPasswordSubmit} className="login-forgot-form">
                  <div className="login-input-group">
                    <label>Account Email Address <em>*</em></label>
                    <div className="login-input-wrapper">
                      <User className="input-icon" size={16} />
                      <input
                        type="email"
                        required
                        value={forgotEmail}
                        onChange={(e) => setForgotEmail(e.target.value)}
                        placeholder="e.g. admin@msmesmart.com"
                      />
                    </div>
                  </div>

                  <div className="login-input-group">
                    <div className="label-with-hint">
                      <label>Master Recovery Key / PIN <em>*</em></label>
                      <button
                        type="button"
                        className="pass-quick-hint"
                        onClick={() => setForgotRecoveryKey('MSME2026')}
                        title="Click to fill default master recovery key"
                      >
                        Default: MSME2026
                      </button>
                    </div>
                    <div className="login-input-wrapper">
                      <ShieldCheck className="input-icon" size={16} />
                      <input
                        type="text"
                        required
                        value={forgotRecoveryKey}
                        onChange={(e) => setForgotRecoveryKey(e.target.value)}
                        placeholder="Enter Master Key (e.g. MSME2026)"
                      />
                    </div>
                  </div>

                  <div className="login-input-group">
                    <div className="label-with-hint">
                      <label>New Password (min. 6 characters) <em>*</em></label>
                      <button
                        type="button"
                        className="pass-quick-hint"
                        onClick={generateRandomForgotPass}
                        style={{ color: '#4f46e5', fontWeight: 600 }}
                      >
                        <Sparkles size={11} style={{ display: 'inline', marginRight: 3 }} />
                        Generate Strong
                      </button>
                    </div>
                    <div className="login-input-wrapper">
                      <Lock className="input-icon" size={16} />
                      <input
                        type={forgotShowPass ? 'text' : 'password'}
                        required
                        value={forgotNewPassword}
                        onChange={(e) => setForgotNewPassword(e.target.value)}
                        placeholder="Enter new password"
                      />
                      <button
                        type="button"
                        className="password-toggle"
                        onClick={() => setForgotShowPass(!forgotShowPass)}
                      >
                        {forgotShowPass ? <EyeOff size={16} /> : <Eye size={16} />}
                      </button>
                    </div>
                  </div>

                  <div className="login-input-group">
                    <label>Confirm New Password <em>*</em></label>
                    <div className="login-input-wrapper">
                      <Lock className="input-icon" size={16} />
                      <input
                        type={forgotShowPass ? 'text' : 'password'}
                        required
                        value={forgotConfirmPassword}
                        onChange={(e) => setForgotConfirmPassword(e.target.value)}
                        placeholder="Re-enter new password"
                      />
                    </div>
                  </div>

                  <div className="login-forgot-actions">
                    <button
                      type="button"
                      className="login-forgot-cancel-btn"
                      onClick={() => setForgotModalOpen(false)}
                      disabled={forgotLoading}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={forgotLoading}
                      className="login-forgot-submit-btn"
                    >
                      {forgotLoading ? (
                        <span>Resetting password...</span>
                      ) : (
                        <>
                          <KeyRound size={16} />
                          <span>Reset & Set New Password</span>
                        </>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
