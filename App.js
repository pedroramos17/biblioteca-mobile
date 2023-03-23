import React from "react";
import { StyleSheet, View } from "react-native";
import Home from "./src/screens/Home/index";

export default function App() {
  return (
    <View style={styles.container}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
});
