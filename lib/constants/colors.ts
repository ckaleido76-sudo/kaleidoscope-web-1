export const colors = {
  primary: '#5B2CFA',
  secondary: '#FFBC44',
  background: '#0A0A0F',
  surface: '#1A1A2E',
  textPrimary: '#FFFFFF',
  textSecondary: '#B8B8C8',
  accentLight: '#E5D9FF'
} as const;

export const themes = {
  ethereal: {
    name: 'Ethereal',
    background: 'linear-gradient(135deg, #5B2CFA 0%, #3A1BA0 50%, #2A1454 100%)',
    accent: '#E5D9FF',
    glow: 'rgba(229, 217, 255, 0.3)',
    pattern: 'flowing'
  },
  bold: {
    name: 'Bold Transformation',
    background: 'linear-gradient(135deg, #FF0080 0%, #5B2CFA 50%, #00FFB3 100%)',
    accent: '#FFBC44',
    glow: 'rgba(255, 188, 68, 0.4)',
    pattern: 'geometric'
  },
  organic: {
    name: 'Organic Healing',
    background: 'linear-gradient(135deg, #2ECC71 0%, #27AE60 50%, #1E8B4C 100%)',
    accent: '#F39C12',
    glow: 'rgba(243, 156, 18, 0.3)',
    pattern: 'organic'
  }
} as const;

export type ThemeName = keyof typeof themes;