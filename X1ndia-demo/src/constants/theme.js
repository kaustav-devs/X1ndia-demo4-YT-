// theme.js

const colors = {
  // Brand
  primary: "#0F9D58",       // X1ndia Green
  primaryDark: "#0A7A43",
  secondary: "#1C1C1E",

  // Backgrounds
  background: "#FFFFFF",
  surface: "#F5F5F5",
  card: "#FFFFFF",

  // Text
  text: "#111111",
  textSecondary: "#6B7280",
  textLight: "#9CA3AF",

  // Basic
  white: "#FFFFFF",
  black: "#000000",

  // Status
  success: "#22C55E",
  warning: "#F59E0B",
  error: "#EF4444",
  info: "#3B82F6",

  // Borders
  border: "#E5E7EB",
  divider: "#F1F5F9",

  // Misc
  transparent: "transparent",
  overlay: "rgba(0,0,0,0.4)",
};

const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

const fontSize = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20,
  xl: 24,
  xxl: 32,
  display: 40,
};

const fontWeight = {
  light: "300",
  regular: "400",
  medium: "500",
  semibold: "600",
  bold: "700",
  extrabold: "800",
};

const borderRadius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 30,
  round: 999,
};

const shadow = {
  light: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },

  medium: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 4,
  },

  heavy: {
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.18,
    shadowRadius: 16,
    elevation: 8,
  },
};

const theme = {
  colors,
  spacing,
  fontSize,
  fontWeight,
  borderRadius,
  shadow,
};

export default theme;