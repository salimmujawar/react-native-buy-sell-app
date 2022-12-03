import React from "react";
import { Text } from "react-native";

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

export default AppText;
