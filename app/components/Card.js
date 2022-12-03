import React from "react";
import { View, StyleSheet, Image } from "react-native";

import defaultStyles from "../config/styles";
import AppText from "./AppText";

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText txtStyle={styles.title}>{title}</AppText>
        <AppText txtStyle={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: defaultStyles.colors.white,
    marginBottom: 20,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  title: {
    marginBottom: 7,
  },
  subTitle: {
    color: defaultStyles.colors.secondary,
    fontWeight: "bold",
  },
  detailsContainer: {
    padding: 20,
  },
});
export default Card;
