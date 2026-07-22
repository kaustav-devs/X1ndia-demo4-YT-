import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";

const Welcome = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.logo}>⚽</Text>

        <Text style={styles.title}>Welcome to X1ndia</Text>

        <Text style={styles.subtitle}>
          India's football ecosystem in one place.
        </Text>

        <Text style={styles.description}>
          Discover talent, connect with clubs, showcase your skills,
          and unlock opportunities like never before.
        </Text>
      </View>

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.primaryButton}
          onPress={() => router.push("/signup")}
        >
          <Text style={styles.primaryText}>Create Account</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.secondaryButton}
          onPress={() => router.push("/login")}
        >
          <Text style={styles.secondaryText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },

  content: {
    alignItems: "center",
    marginTop: 80,
  },

  logo: {
    fontSize: 90,
    marginBottom: 25,
  },

  title: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#FFFFFF",
    textAlign: "center",
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 18,
    color: "#00C853",
    fontWeight: "600",
    marginBottom: 18,
    textAlign: "center",
  },

  description: {
    fontSize: 16,
    color: "#BDBDBD",
    textAlign: "center",
    lineHeight: 25,
  },

  bottom: {
    width: "100%",
    gap: 15,
  },

  primaryButton: {
    backgroundColor: "#00C853",
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: "center",
  },

  primaryText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },

  secondaryButton: {
    borderWidth: 1.5,
    borderColor: "#00C853",
    paddingVertical: 17,
    borderRadius: 14,
    alignItems: "center",
  },

  secondaryText: {
    color: "#00C853",
    fontSize: 18,
    fontWeight: "bold",
  },
});