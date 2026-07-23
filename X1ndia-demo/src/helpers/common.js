import { Dimensions, Platform, StatusBar } from "react-native";

const { width, height } = Dimensions.get("window");

// Screen Dimensions
export const screenWidth = width;
export const screenHeight = height;

// Percentage Helpers
export const wp = (percentage) => (width * percentage) / 100;
export const hp = (percentage) => (height * percentage) / 100;

// Device Checks
export const isIOS = Platform.OS === "ios";
export const isAndroid = Platform.OS === "android";

// Status Bar Height
export const statusBarHeight = StatusBar.currentHeight || 0;

// Responsive Font Size
export const rf = (size) => {
  const scale = width / 375; // 375 = iPhone X reference width
  return Math.round(size * scale);
};

// Spacing Helpers
export const spacing = {
  xs: hp(0.5),
  sm: hp(1),
  md: hp(2),
  lg: hp(3),
  xl: hp(4),
  xxl: hp(6),
};

// Border Radius
export const radius = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 18,
  xl: 24,
  round: 999,
};

// Shadow (Android + iOS)
export const shadow = {
  shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.12,
  shadowRadius: 6,
  elevation: 5,
};

// Device Information
export const device = {
  width,
  height,
  isSmall: height < 700,
  isMedium: height >= 700 && height < 900,
  isLarge: height >= 900,
};