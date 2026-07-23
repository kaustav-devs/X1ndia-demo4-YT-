import React from "react";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

const Layout = () => {
  return (
    <>
      <StatusBar style="light" translucent />

      <Stack
        screenOptions={{
          // Hide the default navigation header
          headerShown: false,

          // Smooth transitions
          animation: "slide_from_right",

          // App background
          contentStyle: {
            backgroundColor: "#0F172A",
          },

          // Prevent screen flicker
          animationDuration: 250,

          // Enable gestures
          gestureEnabled: true,

          // Use full screen
          presentation: "card",
        }}
      >
        {/* Authentication / Entry */}
        <Stack.Screen
          name="index"
          options={{
            title: "Home",
          }}
        />

        {/* Welcome Screen */}
        <Stack.Screen
          name="welcome"
          options={{
            title: "Welcome",
          }}
        />
      </Stack>
    </>
  );
};

export default Layout;