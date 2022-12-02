import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image
        style={styles.image}
        source={require("../assets/images/jacket.jpg")}
      />
      <View style={styles.detailsContainer}>
        <AppText txtStyle={styles.title}>Red jackect for sale</AppText>
        <AppText txtStyle={styles.price}>$100</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
});

export default ListingDetailsScreen;
