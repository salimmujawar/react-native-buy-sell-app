import React from "react";
import { View, StyleSheet } from "react-native";
import defaultStyles from "../config/styles";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function Icon({
  name,
  size = 40,
  backgroundColor = defaultStyles.colors.black,
  iconColor = defaultStyles.colors.white,
}) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
    </View>
  );
}

export default Icon;
