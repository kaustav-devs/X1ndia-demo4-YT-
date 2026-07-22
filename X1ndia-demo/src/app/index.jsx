import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

const Index = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>X1ndia</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/welcome")}
      >
        <Text style={styles.buttonText}>Welcome</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0F1A",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 40,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#00A651",
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});