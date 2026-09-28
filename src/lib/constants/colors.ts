export const ROQUACE_COLORS = {
  black: '#0A0A0A',
  'warm-white': '#F5F3EF',
  'soft-gray': '#A7A39E',
  'accent-blue': '#3B82F6',
} as const;

export const SEMANTIC_COLORS = {
  background: ROQUACE_COLORS.black,
  foreground: ROQUACE_COLORS['warm-white'],
  muted: ROQUACE_COLORS['soft-gray'],
  accent: ROQUACE_COLORS['accent-blue'],
  border: 'rgba(167, 163, 158, 0.2)',
} as const;
