import React from "react";
import { Text, StyleSheet, Platform } from "react-native";

function AppText({ children, txtStyle, ...otherProps }) {
  return (
    <Text style={[styles.text, txtStyle]} {...otherProps}>
      {children}
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontFamily: "Roboto",
  },
});

export default AppText;
