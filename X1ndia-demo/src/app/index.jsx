import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

import ScreenWrapper from "../components/ScreenWrapper";
import { hp, wp } from "../helpers/common";
import { theme } from "../constants/theme";

const Index = () => {
  const router = useRouter();

  const handleStart = () => {
    router.push("/welcome");
  };

  return (
    <ScreenWrapper bg={theme.colors.background}>
      <View style={styles.container}>

        {/* Logo Area */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>⚽</Text>

          <Text style={styles.title}>
            X1ndia
          </Text>

          <Text style={styles.subtitle}>
            The future of Indian Football.
          </Text>
        </View>

        {/* Description */}
        <View style={styles.infoContainer}>
          <Text style={styles.description}>
            Discover players.
            {"\n"}
            Connect with clubs.
            {"\n"}
            Build your football journey.
          </Text>
        </View>

        {/* Button */}
        <TouchableOpacity
          activeOpacity={0.85}
          style={styles.button}
          onPress={handleStart}
        >
          <Text style={styles.buttonText}>
            Get Started
          </Text>
        </TouchableOpacity>

      </View>
    </ScreenWrapper>
  );
};

export default Index;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: wp(8),
    paddingVertical: hp(6),
  },

  logoContainer: {
    alignItems: "center",
    marginTop: hp(8),
  },

  logo: {
    fontSize: hp(8),
    marginBottom: hp(2),
  },

  title: {
    fontSize: hp(4.5),
    fontWeight: "800",
    color: theme.colors.text,
    letterSpacing: 1,
  },

  subtitle: {
    marginTop: hp(1),
    fontSize: hp(2),
    color: theme.colors.textLight,
    textAlign: "center",
  },

  infoContainer: {
    alignItems: "center",
  },

  description: {
    fontSize: hp(2.1),
    textAlign: "center",
    color: theme.colors.textLight,
    lineHeight: hp(3.2),
  },

  button: {
    width: "100%",
    height: hp(7),
    borderRadius: hp(2),
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.primary,
    marginBottom: hp(2),

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,

    elevation: 8,
  },

  buttonText: {
    color: "#FFFFFF",
    fontSize: hp(2.3),
    fontWeight: "700",
    letterSpacing: 0.5,
  },

});