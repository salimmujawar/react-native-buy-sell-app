import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, txtStyle }) {
  return <Text style={[styles.text, txtStyle]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Avenir",
  },
});

export default AppText;
