export interface PaletteToneConfig {
  bgApp: string;
  bgCard: string;
  bgCardSecondary: string;
  bgSidebar: string;
  bgTopbar: string;
  borderSubtle: string;
  tagline: string;
}

export interface ColorPalette {
  id: string;
  name: string;
  tagline: string;
  badge: string;
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryGlow: string;
  primaryGradient: string;
  swatches: string[];
  light: PaletteToneConfig;
  dark: PaletteToneConfig;
}

export const COLOR_PALETTES: ColorPalette[] = [
  {
    id: 'ocean',
    name: 'Ocean Blue',
    tagline: 'Cool azure tones for crisp corporate focus',
    badge: 'Default',
    primary: '#1677ff',
    primaryHover: '#0958d9',
    primaryLight: 'rgba(22, 119, 255, 0.12)',
    primaryGlow: 'rgba(22, 119, 255, 0.35)',
    primaryGradient: 'linear-gradient(135deg, #1677ff 0%, #38bdf8 100%)',
    swatches: ['#1677ff', '#38bdf8', '#dbeafe', '#09152b'],
    light: {
      bgApp: '#f0f5fc',
      bgCard: '#ffffff',
      bgCardSecondary: '#e8f0fe',
      bgSidebar: '#09152b',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#dbeafe',
      tagline: 'Airy Azure'
    },
    dark: {
      bgApp: '#070f1e',
      bgCard: '#0e1b32',
      bgCardSecondary: '#152744',
      bgSidebar: '#040914',
      bgTopbar: '#0a1426',
      borderSubtle: '#1d3557',
      tagline: 'Midnight Ocean'
    }
  },
  {
    id: 'emerald',
    name: 'Emerald Mint',
    tagline: 'Lush botanical greens symbolizing financial growth & vitality',
    badge: 'Growth',
    primary: '#10b981',
    primaryHover: '#059669',
    primaryLight: 'rgba(16, 185, 129, 0.12)',
    primaryGlow: 'rgba(16, 185, 129, 0.35)',
    primaryGradient: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
    swatches: ['#10b981', '#34d399', '#bbf7d0', '#051912'],
    light: {
      bgApp: '#f0fbf5',
      bgCard: '#ffffff',
      bgCardSecondary: '#e6f7ee',
      bgSidebar: '#051912',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#bbf7d0',
      tagline: 'Fresh Spring'
    },
    dark: {
      bgApp: '#05140f',
      bgCard: '#0b2319',
      bgCardSecondary: '#103325',
      bgSidebar: '#030c09',
      bgTopbar: '#081c15',
      borderSubtle: '#154533',
      tagline: 'Deep Pine'
    }
  },
  {
    id: 'indigo',
    name: 'Royal Indigo',
    tagline: 'Deep violet & iris nuances for modern, executive authority',
    badge: 'Executive',
    primary: '#6366f1',
    primaryHover: '#4f46e5',
    primaryLight: 'rgba(99, 102, 241, 0.12)',
    primaryGlow: 'rgba(99, 102, 241, 0.35)',
    primaryGradient: 'linear-gradient(135deg, #6366f1 0%, #a855f7 100%)',
    swatches: ['#6366f1', '#a855f7', '#e0e7ff', '#0e0d26'],
    light: {
      bgApp: '#f5f3ff',
      bgCard: '#ffffff',
      bgCardSecondary: '#ede9fe',
      bgSidebar: '#0e0d26',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#e0e7ff',
      tagline: 'Imperial Iris'
    },
    dark: {
      bgApp: '#0a091a',
      bgCard: '#14122d',
      bgCardSecondary: '#1d1a3f',
      bgSidebar: '#060510',
      bgTopbar: '#0e0d24',
      borderSubtle: '#2c275e',
      tagline: 'Cosmic Violet'
    }
  },
  {
    id: 'amber',
    name: 'Amber Gold',
    tagline: 'Warm champagne & honey undertones brimming with energy',
    badge: 'Warmth',
    primary: '#f59e0b',
    primaryHover: '#d97706',
    primaryLight: 'rgba(245, 158, 11, 0.12)',
    primaryGlow: 'rgba(245, 158, 11, 0.35)',
    primaryGradient: 'linear-gradient(135deg, #f59e0b 0%, #fbbf24 100%)',
    swatches: ['#f59e0b', '#fbbf24', '#fde68a', '#18130a'],
    light: {
      bgApp: '#fdfaf2',
      bgCard: '#ffffff',
      bgCardSecondary: '#fef3c7',
      bgSidebar: '#18130a',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#fde68a',
      tagline: 'Sunlit Honey'
    },
    dark: {
      bgApp: '#15110a',
      bgCard: '#221b0f',
      bgCardSecondary: '#312716',
      bgSidebar: '#0c0905',
      bgTopbar: '#1a140b',
      borderSubtle: '#44351d',
      tagline: 'Obsidian Gold'
    }
  },
  {
    id: 'rose',
    name: 'Rose Crimson',
    tagline: 'Bold ruby & soft blush palette offering dynamic modern warmth',
    badge: 'Vibrant',
    primary: '#f43f5e',
    primaryHover: '#e11d48',
    primaryLight: 'rgba(244, 63, 94, 0.12)',
    primaryGlow: 'rgba(244, 63, 94, 0.35)',
    primaryGradient: 'linear-gradient(135deg, #f43f5e 0%, #fb7185 100%)',
    swatches: ['#f43f5e', '#fb7185', '#fecdd3', '#1c0a13'],
    light: {
      bgApp: '#fff1f4',
      bgCard: '#ffffff',
      bgCardSecondary: '#ffe4e6',
      bgSidebar: '#1c0a13',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#fecdd3',
      tagline: 'Velvet Blush'
    },
    dark: {
      bgApp: '#17080f',
      bgCard: '#260e18',
      bgCardSecondary: '#381524',
      bgSidebar: '#0d0408',
      bgTopbar: '#1d0913',
      borderSubtle: '#4e1b2f',
      tagline: 'Midnight Ruby'
    }
  },
  {
    id: 'teal',
    name: 'Electric Teal',
    tagline: 'Crisp marine cyan with high-tech clarity and airy contrast',
    badge: 'Modern',
    primary: '#06b6d4',
    primaryHover: '#0891b2',
    primaryLight: 'rgba(6, 182, 212, 0.12)',
    primaryGlow: 'rgba(6, 182, 212, 0.35)',
    primaryGradient: 'linear-gradient(135deg, #06b6d4 0%, #22d3ee 100%)',
    swatches: ['#06b6d4', '#22d3ee', '#ccfbf1', '#04161d'],
    light: {
      bgApp: '#f0fbfb',
      bgCard: '#ffffff',
      bgCardSecondary: '#ccfbf1',
      bgSidebar: '#04161d',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#99f6e4',
      tagline: 'Icy Cyan'
    },
    dark: {
      bgApp: '#041419',
      bgCard: '#09222a',
      bgCardSecondary: '#0f323e',
      bgSidebar: '#020b0e',
      bgTopbar: '#061c23',
      borderSubtle: '#134050',
      tagline: 'Abyssal Marine'
    }
  },
  {
    id: 'slate',
    name: 'Slate Minimal',
    tagline: 'Neutral monochrome tones for ultra-focused minimalists',
    badge: 'Clean',
    primary: '#475569',
    primaryHover: '#334155',
    primaryLight: 'rgba(71, 85, 105, 0.12)',
    primaryGlow: 'rgba(71, 85, 105, 0.3)',
    primaryGradient: 'linear-gradient(135deg, #475569 0%, #64748b 100%)',
    swatches: ['#475569', '#64748b', '#e2e8f0', '#0b172a'],
    light: {
      bgApp: '#f8fafc',
      bgCard: '#ffffff',
      bgCardSecondary: '#f1f5f9',
      bgSidebar: '#0b172a',
      bgTopbar: 'rgba(255, 255, 255, 0.88)',
      borderSubtle: '#e2e8f0',
      tagline: 'Pure Slate'
    },
    dark: {
      bgApp: '#090d16',
      bgCard: '#111827',
      bgCardSecondary: '#1e293b',
      bgSidebar: '#060911',
      bgTopbar: '#0b1329',
      borderSubtle: '#1f2937',
      tagline: 'Stealth Carbon'
    }
  }
];

export function getPaletteByIdOrColor(identifier: string): ColorPalette {
  if (!identifier) return COLOR_PALETTES[0];
  const lower = identifier.toLowerCase();

  // Try exact id match
  const byId = COLOR_PALETTES.find(p => p.id.toLowerCase() === lower);
  if (byId) return byId;

  // Try matching primary color hex
  const byPrimary = COLOR_PALETTES.find(p => p.primary.toLowerCase() === lower);
  if (byPrimary) return byPrimary;

  // Try matching color in swatches or loose name
  const byName = COLOR_PALETTES.find(p => p.name.toLowerCase().includes(lower) || lower.includes(p.name.toLowerCase()));
  if (byName) return byName;

  // Fallback map for legacy hex values
  if (lower === '#1677ff' || lower === '#2563eb' || lower.includes('blue')) return COLOR_PALETTES[0];
  if (lower === '#10b981' || lower === '#059669' || lower.includes('emerald') || lower.includes('green')) return COLOR_PALETTES[1];
  if (lower === '#6366f1' || lower === '#4f46e5' || lower.includes('indigo') || lower.includes('purple')) return COLOR_PALETTES[2];
  if (lower === '#f59e0b' || lower === '#d97706' || lower.includes('amber') || lower.includes('gold')) return COLOR_PALETTES[3];
  if (lower === '#f43f5e' || lower.includes('rose') || lower.includes('red')) return COLOR_PALETTES[4];
  if (lower === '#06b6d4' || lower.includes('teal') || lower.includes('cyan')) return COLOR_PALETTES[5];

  return COLOR_PALETTES[0];
}

export function applyPaletteToDom(
  paletteIdOrColor: string,
  theme: 'light' | 'dark',
  toneAtmosphere: 'full' | 'balanced' | 'minimal' = 'full'
): ColorPalette {
  const palette = getPaletteByIdOrColor(paletteIdOrColor);
  if (typeof window === 'undefined') return palette;

  const tone = theme === 'dark' ? palette.dark : palette.light;
  const root = document.documentElement;

  // Ensure theme class is synced
  if (theme === 'dark') {
    root.classList.add('dark');
  } else {
    root.classList.remove('dark');
  }

  // Primary colors
  root.style.setProperty('--primary', palette.primary);
  root.style.setProperty('--primary-hover', palette.primaryHover);
  root.style.setProperty('--primary-light', palette.primaryLight);
  root.style.setProperty('--primary-glow', palette.primaryGlow);
  root.style.setProperty('--primary-gradient', palette.primaryGradient);
  root.style.setProperty('--accent-indigo', palette.primary);
  root.style.setProperty('--accent-blue', palette.primary);

  // Backgrounds & Surface Tones based on Tone Atmosphere
  if (toneAtmosphere === 'minimal') {
    const neutralApp = theme === 'dark' ? '#090d16' : '#f8fafc';
    const neutralCard = theme === 'dark' ? '#111827' : '#ffffff';
    const neutralSidebar = theme === 'dark' ? '#060911' : '#0b172a';
    const neutralTopbar = theme === 'dark' ? '#0b1329' : 'rgba(255, 255, 255, 0.85)';
    root.style.setProperty('--bg-app', neutralApp);
    root.style.setProperty('--bg-card', neutralCard);
    root.style.setProperty('--bg-card-secondary', theme === 'dark' ? '#1e293b' : '#f1f5f9');
    root.style.setProperty('--bg-sidebar', neutralSidebar);
    root.style.setProperty('--bg-sidebar-active', palette.primary);
    root.style.setProperty('--bg-topbar', neutralTopbar);
    root.style.setProperty('--border-subtle', theme === 'dark' ? '#1f2937' : '#e2e8f0');
  } else if (toneAtmosphere === 'balanced') {
    const neutralSidebar = theme === 'dark' ? '#060911' : '#0b172a';
    root.style.setProperty('--bg-app', tone.bgApp);
    root.style.setProperty('--bg-card', tone.bgCard);
    root.style.setProperty('--bg-card-secondary', tone.bgCardSecondary);
    root.style.setProperty('--bg-sidebar', neutralSidebar);
    root.style.setProperty('--bg-sidebar-active', palette.primary);
    root.style.setProperty('--bg-topbar', tone.bgTopbar);
    root.style.setProperty('--border-subtle', tone.borderSubtle);
  } else {
    // 'full' Harmonious Tonal Atmosphere (Default)
    root.style.setProperty('--bg-app', tone.bgApp);
    root.style.setProperty('--bg-card', tone.bgCard);
    root.style.setProperty('--bg-card-secondary', tone.bgCardSecondary);
    root.style.setProperty('--bg-sidebar', tone.bgSidebar);
    root.style.setProperty('--bg-sidebar-active', palette.primary);
    root.style.setProperty('--bg-topbar', tone.bgTopbar);
    root.style.setProperty('--border-subtle', tone.borderSubtle);
  }

  root.setAttribute('data-color-palette', palette.id);
  root.setAttribute('data-tone-atmosphere', toneAtmosphere);
  root.setAttribute('data-theme', theme);

  // Store in localStorage
  localStorage.setItem('msme_accent', palette.primary);
  localStorage.setItem('msme_palette_id', palette.id);
  localStorage.setItem('msme_tone_atmosphere', toneAtmosphere);
  localStorage.setItem('msme_theme', theme);

  window.dispatchEvent(
    new CustomEvent('msme_appearance_changed', {
      detail: { palette, theme, toneAtmosphere }
    })
  );

  return palette;
}
