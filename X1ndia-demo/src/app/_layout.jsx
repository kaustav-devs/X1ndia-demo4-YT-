import React from "react";
import { Stack } from "expo-router";

const RootLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        animation: "slide_from_right",
        contentStyle: {
          backgroundColor: "#ffffff",
        },
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          animation: "none",
        }}
      />

      <Stack.Screen
        name="welcome"
        options={{
          animation: "fade_from_bottom",
        }}
      />
    </Stack>
  );
};

export default RootLayout;