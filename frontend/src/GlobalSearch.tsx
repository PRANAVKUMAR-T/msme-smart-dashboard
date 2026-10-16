import React, { useState, useEffect, useRef, useMemo, type KeyboardEvent } from 'react';
import {
  Search, X, Clock, CalendarDays, Users, FileText, Boxes,
  ShoppingCart, Truck, Settings, ShieldCheck, Home, Percent,
  BarChart3, Lightbulb, ChevronRight, ArrowUpRight, Check,
  CornerDownLeft, Sparkles, Tag
} from 'lucide-react';
import { getTranslation, type SupportedLanguage } from './i18n';

export interface SearchCustomer {
  id: number;
  shop: string;
  contact: string;
  phone: string;
  email: string;
  location: string;
  gstin: string;
  category: string;
  limit: number;
  balance: number;
}

export interface SearchSupplier {
  id: number;
  name: string;
  contact: string;
  phone: string;
  email: string;
  location: string;
  category: string;
  rating: number;
}

export interface SearchProduct {
  id: string;
  name: string;
  stock: number;
  price: number;
  category: string;
  reorderLevel?: number;
}

export interface SearchSaleOrder {
  id: string;
  customer: string;
  product: string;
  quantity: number;
  amount: number;
  date: string;
  status: 'Paid' | 'Pending';
}

export interface SearchPurchaseOrder {
  id: string;
  supplier: string;
  product: string;
  quantity: number;
  price: number;
  gst: number;
  total: number;
  date: string;
}

export interface SearchInvoiceItem {
  id: string;
  customer: string;
  date: string;
  dueDate: string;
  amount: number;
  gst: number;
  total: number;
  status: 'Paid' | 'Pending' | 'Overdue';
}

export interface GlobalSearchResultItem {
  id: string;
  type: 'customer' | 'invoice' | 'product' | 'sale' | 'supplier' | 'page';
  title: string;
  subtitle: string;
  badge?: string;
  badgeTone?: 'blue' | 'green' | 'violet' | 'amber' | 'teal' | 'red';
  targetPage: string;
  filterQuery?: string;
}

// ----------------------------------------------------
// 1. Live Time & Date Hook and Component
// ----------------------------------------------------
export function useLiveClock() {
  const [now, setNow] = useState<Date>(() => new Date());

  useEffect(() => {
    // Tick every 1000ms
    const timer = setInterval(() => {
      setNow(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const dayOfWeek = now.toLocaleDateString('en-GB', { weekday: 'long' });
  const formattedDate = now.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
  const formattedTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  const shortTime = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: true });

  return { now, dayOfWeek, formattedDate, formattedTime, shortTime };
}

export function LiveClockBadge({ variant = 'admin' }: { variant?: 'admin' | 'topbar' }) {
  const { dayOfWeek, formattedDate, formattedTime, shortTime } = useLiveClock();

  if (variant === 'topbar') {
    return (
      <div className="topbar-clock-badge" title={`Live System Time: ${formattedDate} ${formattedTime} (${dayOfWeek})`}>
        <Clock size={14} className="topbar-clock-icon" />
        <div className="topbar-clock-text">
          <span className="topbar-clock-time">{shortTime}</span>
          <span className="topbar-clock-date">{formattedDate}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="admin-date-badge" title="Live System Time & Date">
      <CalendarDays size={20} />
      <div>
        <b>{formattedDate}, {formattedTime}</b>
        <small>
          <span className="live-clock-dot" /> {dayOfWeek} • Live System Time
        </small>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// 2. Text Highlight Component
// ----------------------------------------------------
function HighlightText({ text, query }: { text: string; query: string }) {
  if (!query || !query.trim()) return <>{text}</>;
  const escaped = query.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const parts = text.split(new RegExp(`(${escaped})`, 'gi'));
  return (
    <>
      {parts.map((part, i) =>
        part.toLowerCase() === query.trim().toLowerCase() ? (
          <mark key={i} className="search-highlight">{part}</mark>
        ) : (
          part
        )
      )}
    </>
  );
}

// ----------------------------------------------------
// 3. Navigation Pages Definitions for Search
// ----------------------------------------------------
const SYSTEM_NAVIGATION_PAGES = [
  { name: 'Admin', label: 'Admin Panel', icon: ShieldCheck, keywords: ['admin', 'users', 'access', 'permissions', 'roles', 'system'] },
  { name: 'Dashboard', label: 'Business Dashboard', icon: Home, keywords: ['dashboard', 'home', 'overview', 'kpi', 'summary', 'growth'] },
  { name: 'Inventory', label: 'Inventory & Stock', icon: Boxes, keywords: ['inventory', 'stock', 'products', 'items', 'catalog', 'reorder'] },
  { name: 'Sales', label: 'Sales Orders', icon: ShoppingCart, keywords: ['sales', 'orders', 'revenue', 'selling', 'pos'] },
  { name: 'Purchases', label: 'Purchase Orders', icon: ShoppingCart, keywords: ['purchases', 'po', 'procurement', 'vendor order', 'inward'] },
  { name: 'Customers', label: 'Customers Directory', icon: Users, keywords: ['customers', 'clients', 'buyers', 'directory', 'ledger', 'balance'] },
  { name: 'Suppliers', label: 'Suppliers & Vendors', icon: Truck, keywords: ['suppliers', 'vendors', 'sellers', 'distributors'] },
  { name: 'Invoices', label: 'Tax Invoices & Billing', icon: FileText, keywords: ['invoices', 'bills', 'billing', 'tax invoice', 'payment'] },
  { name: 'GST', label: 'GST Compliance & Returns', icon: Percent, keywords: ['gst', 'gstin', 'tax', 'compliance', 'gstr1', 'gstr3b', 'hsn'] },
  { name: 'Reports', label: 'Financial & Business Reports', icon: BarChart3, keywords: ['reports', 'analytics', 'statements', 'p&l', 'metrics', 'exports'] },
  { name: 'Business Intelligence', label: 'Business Intelligence', icon: Lightbulb, keywords: ['bi', 'business intelligence', 'ai', 'insights', 'analytics'] },
  { name: 'Settings', label: 'System Settings', icon: Settings, keywords: ['settings', 'preferences', 'theme', 'dark mode', 'backup', 'currency', 'company'] },
];

// ----------------------------------------------------
// 4. Global Search Bar Component
// ----------------------------------------------------
interface GlobalSearchBarProps {
  query: string;
  setQuery: (q: string) => void;
  language: SupportedLanguage;
  customers: SearchCustomer[];
  invoices: SearchInvoiceItem[];
  products: SearchProduct[];
  sales: SearchSaleOrder[];
  purchases: SearchPurchaseOrder[];
  suppliers: SearchSupplier[];
  onSelectResult: (result: GlobalSearchResultItem) => void;
  onNavigate: (page: string) => void;
  allowedPages?: string[];
  isMobileModal?: boolean;
  onCloseMobileModal?: () => void;
}

type SearchTab = 'All' | 'Customers' | 'Invoices' | 'Products' | 'Sales' | 'Suppliers' | 'Pages';

export function GlobalSearchBar({
  query,
  setQuery,
  language,
  customers = [],
  invoices = [],
  products = [],
  sales = [],
  purchases = [],
  suppliers = [],
  onSelectResult,
  onNavigate,
  allowedPages,
  isMobileModal = false,
  onCloseMobileModal
}: GlobalSearchBarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<SearchTab>('All');
  const [activeIndex, setActiveIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    if (isMobileModal) return;
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileModal]);

  // Global keyboard shortcut: Ctrl+K or / to focus search
  useEffect(() => {
    const handleGlobalKeyDown = (e: globalThis.KeyboardEvent) => {
      // Don't trigger if already inside an editable input or textarea
      const target = e.target as HTMLElement | null;
      const isInput = target && (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.isContentEditable);

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      } else if (e.key === '/' && !isInput) {
        e.preventDefault();
        inputRef.current?.focus();
        setIsOpen(true);
      }
    };
    window.addEventListener('keydown', handleGlobalKeyDown);
    return () => window.removeEventListener('keydown', handleGlobalKeyDown);
  }, []);

  // Compute search results across all data collections
  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return [];

    const items: GlobalSearchResultItem[] = [];

    // 1. Pages Navigation Matching
    SYSTEM_NAVIGATION_PAGES.forEach(p => {
      if (allowedPages && !allowedPages.includes(p.name)) return;
      const matchName = p.name.toLowerCase().includes(q) || p.label.toLowerCase().includes(q);
      const matchKeywords = p.keywords.some(k => k.toLowerCase().includes(q));
      if (matchName || matchKeywords) {
        items.push({
          id: `page-${p.name}`,
          type: 'page',
          title: p.label,
          subtitle: `Quick Navigation • Go to ${p.name}`,
          badge: 'Page',
          badgeTone: 'violet',
          targetPage: p.name
        });
      }
    });

    // 2. Customers Matching
    customers.forEach(c => {
      const matchShop = (c.shop || '').toLowerCase().includes(q);
      const matchContact = (c.contact || '').toLowerCase().includes(q);
      const matchPhone = (c.phone || '').includes(q);
      const matchEmail = (c.email || '').toLowerCase().includes(q);
      const matchLoc = (c.location || '').toLowerCase().includes(q);
      const matchGst = (c.gstin || '').toLowerCase().includes(q);

      if (matchShop || matchContact || matchPhone || matchEmail || matchLoc || matchGst) {
        items.push({
          id: `cust-${c.id}`,
          type: 'customer',
          title: c.shop || c.contact || `Customer #${c.id}`,
          subtitle: `Contact: ${c.contact || 'N/A'} • 📞 ${c.phone || 'N/A'} • Bal: ₹${(c.balance || 0).toLocaleString('en-IN')}`,
          badge: 'Customer',
          badgeTone: 'blue',
          targetPage: 'Customers',
          filterQuery: c.shop || c.contact
        });
      }
    });

    // 3. Invoices Matching
    invoices.forEach(inv => {
      const matchId = (inv.id || '').toLowerCase().includes(q);
      const matchCust = (inv.customer || '').toLowerCase().includes(q);
      const matchStatus = (inv.status || '').toLowerCase().includes(q);
      const matchDate = (inv.date || '').toLowerCase().includes(q);
      const matchAmt = String(inv.total || inv.amount || '').includes(q);

      if (matchId || matchCust || matchStatus || matchDate || matchAmt) {
        const tone = inv.status === 'Paid' ? 'green' : (inv.status === 'Overdue' ? 'red' : 'amber');
        items.push({
          id: `inv-${inv.id}`,
          type: 'invoice',
          title: `Invoice ${inv.id}`,
          subtitle: `${inv.customer} • ₹${(inv.total || 0).toLocaleString('en-IN')} • ${inv.date}`,
          badge: inv.status || 'Pending',
          badgeTone: tone,
          targetPage: 'Invoices',
          filterQuery: inv.id
        });
      }
    });

    // 4. Products Matching
    products.forEach(p => {
      const matchName = (p.name || '').toLowerCase().includes(q);
      const matchId = (p.id || '').toLowerCase().includes(q);
      const matchCat = (p.category || '').toLowerCase().includes(q);
      const matchPrice = String(p.price || '').includes(q);

      if (matchName || matchId || matchCat || matchPrice) {
        const isLow = p.stock <= (p.reorderLevel || 10);
        items.push({
          id: `prod-${p.id}`,
          type: 'product',
          title: p.name,
          subtitle: `SKU: ${p.id} • ${p.category} • ₹${(p.price || 0).toLocaleString('en-IN')}`,
          badge: `Stock: ${p.stock}`,
          badgeTone: isLow ? 'red' : 'green',
          targetPage: 'Inventory',
          filterQuery: p.name
        });
      }
    });

    // 5. Sales Orders Matching
    sales.forEach(s => {
      const matchId = (s.id || '').toLowerCase().includes(q);
      const matchCust = (s.customer || '').toLowerCase().includes(q);
      const matchProd = (s.product || '').toLowerCase().includes(q);
      const matchStatus = (s.status || '').toLowerCase().includes(q);

      if (matchId || matchCust || matchProd || matchStatus) {
        items.push({
          id: `sale-${s.id}`,
          type: 'sale',
          title: `Sale Order ${s.id}`,
          subtitle: `${s.customer} • ${s.product} • ₹${(s.amount || 0).toLocaleString('en-IN')}`,
          badge: s.status,
          badgeTone: s.status === 'Paid' ? 'green' : 'amber',
          targetPage: 'Sales',
          filterQuery: s.id
        });
      }
    });

    // 6. Suppliers Matching
    suppliers.forEach(s => {
      const matchName = (s.name || '').toLowerCase().includes(q);
      const matchCat = (s.category || '').toLowerCase().includes(q);
      const matchContact = (s.contact || '').toLowerCase().includes(q);
      const matchLoc = (s.location || '').toLowerCase().includes(q);

      if (matchName || matchCat || matchContact || matchLoc) {
        items.push({
          id: `sup-${s.id}`,
          type: 'supplier',
          title: s.name,
          subtitle: `${s.category} • ${s.location} • Contact: ${s.contact}`,
          badge: `★ ${s.rating || 4.5}`,
          badgeTone: 'teal',
          targetPage: 'Suppliers',
          filterQuery: s.name
        });
      }
    });

    return items;
  }, [query, customers, invoices, products, sales, suppliers, allowedPages]);

  // Tab counts
  const counts = useMemo(() => {
    return {
      All: results.length,
      Customers: results.filter(r => r.type === 'customer').length,
      Invoices: results.filter(r => r.type === 'invoice').length,
      Products: results.filter(r => r.type === 'product').length,
      Sales: results.filter(r => r.type === 'sale').length,
      Suppliers: results.filter(r => r.type === 'supplier').length,
      Pages: results.filter(r => r.type === 'page').length,
    };
  }, [results]);

  // Filtered by active tab
  const filteredResults = useMemo(() => {
    if (activeTab === 'All') return results;
    if (activeTab === 'Customers') return results.filter(r => r.type === 'customer');
    if (activeTab === 'Invoices') return results.filter(r => r.type === 'invoice');
    if (activeTab === 'Products') return results.filter(r => r.type === 'product');
    if (activeTab === 'Sales') return results.filter(r => r.type === 'sale');
    if (activeTab === 'Suppliers') return results.filter(r => r.type === 'supplier');
    if (activeTab === 'Pages') return results.filter(r => r.type === 'page');
    return results;
  }, [results, activeTab]);

  // Reset activeIndex when query or tab changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query, activeTab]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const items = listRef.current.querySelectorAll('.search-result-item');
    if (items[activeIndex]) {
      items[activeIndex].scrollIntoView({ block: 'nearest' });
    }
  }, [activeIndex]);

  const handleSelect = (item: GlobalSearchResultItem) => {
    setIsOpen(false);
    if (onCloseMobileModal) onCloseMobileModal();
    onSelectResult(item);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!isOpen && (e.key === 'ArrowDown' || e.key === 'Enter')) {
      setIsOpen(true);
      return;
    }

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex(prev => (filteredResults.length ? (prev + 1) % filteredResults.length : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex(prev => (filteredResults.length ? (prev - 1 + filteredResults.length) % filteredResults.length : 0));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredResults.length > 0 && filteredResults[activeIndex]) {
        handleSelect(filteredResults[activeIndex]);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      setIsOpen(false);
      inputRef.current?.blur();
      if (onCloseMobileModal) onCloseMobileModal();
    }
  };

  const getResultIcon = (type: GlobalSearchResultItem['type']) => {
    switch (type) {
      case 'customer': return Users;
      case 'invoice': return FileText;
      case 'product': return Boxes;
      case 'sale': return ShoppingCart;
      case 'supplier': return Truck;
      case 'page': return ArrowUpRight;
      default: return Tag;
    }
  };

  return (
    <div className={`top-search-wrapper ${isMobileModal ? 'mobile-mode' : ''}`} ref={containerRef}>
      <div className={`top-search ${isOpen ? 'active-focused' : ''}`}>
        <Search size={16} className="top-search-icon" />
        <input
          ref={inputRef}
          placeholder={getTranslation(language, 'topbar.search_placeholder', 'Search customers, invoices, products...')}
          value={query}
          onChange={e => {
            setQuery(e.target.value);
            setIsOpen(true);
          }}
          onFocus={() => setIsOpen(true)}
          onKeyDown={handleKeyDown}
        />
        {query ? (
          <button
            type="button"
            className="search-clear-btn"
            onClick={() => {
              setQuery('');
              inputRef.current?.focus();
            }}
            title="Clear search query"
          >
            <X size={14} />
          </button>
        ) : (
          !isMobileModal && <span className="search-kbd-badge" title="Press Ctrl+K or / to search">Ctrl K</span>
        )}
      </div>

      {isOpen && (
        <div className={`top-search-dropdown ${isMobileModal ? 'mobile-dropdown' : ''}`}>
          {query.trim() ? (
            <>
              {/* Category Filter Tabs */}
              <div className="search-tabs">
                {(['All', 'Customers', 'Invoices', 'Products', 'Sales', 'Suppliers', 'Pages'] as SearchTab[]).map(tab => {
                  const count = counts[tab];
                  return (
                    <button
                      key={tab}
                      type="button"
                      className={`search-tab ${activeTab === tab ? 'active' : ''} ${count === 0 ? 'empty' : ''}`}
                      onClick={() => setActiveTab(tab)}
                    >
                      {tab} <span className="search-tab-count">{count}</span>
                    </button>
                  );
                })}
              </div>

              {/* Results List */}
              <div className="search-results-list" ref={listRef}>
                {filteredResults.length === 0 ? (
                  <div className="search-no-results">
                    <Search size={28} className="search-no-results-icon" />
                    <b>No matches found in {activeTab}</b>
                    <p>Try searching for a customer name, invoice ID (e.g. INV-), product SKU or supplier name.</p>
                  </div>
                ) : (
                  filteredResults.map((item, index) => {
                    const IconComp = getResultIcon(item.type);
                    const isSelected = index === activeIndex;
                    return (
                      <div
                        key={item.id}
                        className={`search-result-item ${isSelected ? 'highlighted' : ''}`}
                        onMouseEnter={() => setActiveIndex(index)}
                        onClick={() => handleSelect(item)}
                      >
                        <div className={`search-result-icon tone-${item.badgeTone || 'blue'}`}>
                          <IconComp size={16} />
                        </div>
                        <div className="search-result-info">
                          <div className="search-result-title-row">
                            <span className="search-result-title">
                              <HighlightText text={item.title} query={query} />
                            </span>
                            {item.badge && (
                              <span className={`search-result-badge tone-${item.badgeTone || 'blue'}`}>
                                {item.badge}
                              </span>
                            )}
                          </div>
                          <span className="search-result-subtitle">{item.subtitle}</span>
                        </div>
                        <div className="search-result-action">
                          <span className="action-tag">Open <ChevronRight size={13} /></span>
                        </div>
                      </div>
                    );
                  })
                )}
              </div>

              {/* Dropdown Footer Hints */}
              <div className="search-footer">
                <span className="search-footer-hint">
                  <kbd>↑</kbd> <kbd>↓</kbd> navigate • <kbd>↵</kbd> select • <kbd>esc</kbd> close
                </span>
                <span className="search-footer-total">
                  {filteredResults.length} {filteredResults.length === 1 ? 'match' : 'matches'}
                </span>
              </div>
            </>
          ) : (
            /* Empty Query: Quick Suggestions & Module Jumps */
            <div className="search-quick-panel">
              <div className="search-quick-section">
                <span className="search-quick-title">
                  <Sparkles size={13} style={{ color: '#4f46e5' }} /> Quick Module Jump
                </span>
                <div className="search-quick-chips">
                  {SYSTEM_NAVIGATION_PAGES.filter(p => !allowedPages || allowedPages.includes(p.name)).slice(0, 8).map(p => {
                    const Icon = p.icon;
                    return (
                      <button
                        key={p.name}
                        type="button"
                        className="search-quick-chip"
                        onClick={() => {
                          setIsOpen(false);
                          if (onCloseMobileModal) onCloseMobileModal();
                          onNavigate(p.name);
                        }}
                      >
                        <Icon size={13} />
                        <span>{p.name}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="search-quick-section" style={{ marginTop: 12 }}>
                <span className="search-quick-title">Popular Searches</span>
                <div className="search-popular-list">
                  <button
                    type="button"
                    className="search-popular-item"
                    onClick={() => { setQuery('INV'); setIsOpen(true); }}
                  >
                    <FileText size={14} /> <span>Search All Invoices (INV)</span>
                  </button>
                  <button
                    type="button"
                    className="search-popular-item"
                    onClick={() => { setQuery('Pending'); setIsOpen(true); }}
                  >
                    <Clock size={14} /> <span>Pending Payments & Orders</span>
                  </button>
                  <button
                    type="button"
                    className="search-popular-item"
                    onClick={() => { setQuery('Motor'); setIsOpen(true); }}
                  >
                    <Boxes size={14} /> <span>Motors & Inventory Stock</span>
                  </button>
                  <button
                    type="button"
                    className="search-popular-item"
                    onClick={() => { setQuery('Admin'); setIsOpen(true); }}
                  >
                    <ShieldCheck size={14} /> <span>Admin & User Permissions</span>
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
