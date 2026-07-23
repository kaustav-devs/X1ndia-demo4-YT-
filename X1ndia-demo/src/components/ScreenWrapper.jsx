import React from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  StatusBar,
  StyleSheet,
} from "react-native";
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const ScreenWrapper = ({
  children,
  bg = "#FFFFFF",
  style = {},
  safeArea = true,
  keyboard = false,
  statusBarStyle = "dark-content",
}) => {
  const insets = useSafeAreaInsets();

  const Container = safeArea ? SafeAreaView : View;

  const content = (
    <Container
      style={[
        styles.container,
        {
          backgroundColor: bg,
          paddingTop: safeArea ? 0 : insets.top,
        },
        style,
      ]}
    >
      <StatusBar
        barStyle={statusBarStyle}
        backgroundColor={bg}
        translucent={false}
      />

      {children}
    </Container>
  );

  if (keyboard) {
    return (
      <KeyboardAvoidingView
        style={styles.keyboard}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        {content}
      </KeyboardAvoidingView>
    );
  }

  return content;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  keyboard: {
    flex: 1,
  },
});

export default ScreenWrapper;