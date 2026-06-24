export const theme = {
  font: 'font-display',
  hex: '#40DF01',
  bgApp: 'bg-[#0F1418]',
  bgPanel: 'bg-[#1F2937]',
  border: 'border-[#37464F]',
  borderHover: 'hover:border-[#1CB0F6]',
  textAccent: 'text-[#1CB0F6]',
  bgAccent: 'bg-[#40DF01]',
  bgAccentHover: 'hover:bg-[#61D908]',
  bgAccentMuted: 'bg-[#40DF01]/20',
  borderAccent: 'border-[#40DF01]',
  textPrimary: 'text-white',
  textSecondary: 'text-gray-400',
  glow: 'shadow-[0_0_24px_rgba(64,223,1,0.3)]',
  glowHover: 'hover:shadow-[0_0_40px_rgba(64,223,1,0.5)]',
  shadowGlow: 'shadow-[0_0_40px_rgba(255,200,0,0.4)]',
  bgAccentFaded: 'bg-[#1CB0F6]/20',
  terminal: {
    bgLines: 'bg-[repeating-linear-gradient(0deg,transparent,transparent_2px,rgba(0,255,0,0.012)_2px,rgba(0,255,0,0.012)_4px)]',
    bgRadial: 'bg-[radial-gradient(ellipse_at_center,_rgba(0,30,0,0.5)_0%,_black_70%)]',
    bgCard: 'bg-[#0a1a0a]/80',
    iconBg: 'bg-[#0a1a0a]',
    textAccent: 'text-[#40DF01]',
    textAccent25: 'text-[#40DF01]/25',
    textAccent30: 'text-[#40DF01]/30',
    textAccent40: 'text-[#40DF01]/40',
    textAccent50: 'text-[#40DF01]/50',
    textAccent60: 'text-[#40DF01]/60',
    textAccent70: 'text-[#40DF01]/70',
    textAccent80: 'text-[#40DF01]/80',
    textAccent90: 'text-[#40DF01]/90',
    bgAccent10: 'hover:bg-[#40DF01]/10',
    bgAccent20: 'bg-[#40DF01]/20',
    bgAccent30: 'bg-[#40DF01]/30',
    borderAccent20: 'border-[#40DF01]/20',
    borderAccent30: 'border-[#40DF01]/30',
    borderAccentHover60: 'hover:border-[#40DF01]/60',
    textAccentHover80: 'hover:text-[#40DF01]/80',
    highlight: 'text-[#ff4444]'
  }
};

export function getTheme() {
  return theme;
}
