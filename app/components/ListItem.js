import React from "react";
import { View, StyleSheet, Image, TouchableHighlight } from "react-native";
import defaultStyles from "../config/styles";
import AppText from "./AppText";
import Swipeable from "react-native-gesture-handler/Swipeable";

function ListItem({
  title,
  subTitle,
  image,
  IconComponent,
  onPress,
  renderRightActions,
}) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {IconComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailContainer}>
            <AppText txtStyle={styles.title}>{title}</AppText>
            {subTitle && (
              <AppText txtStyle={styles.subTitle}>{subTitle}</AppText>
            )}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
    backgroundColor: defaultStyles.colors.white,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  title: {
    fontWeight: "500",
  },
  subTitle: {
    color: defaultStyles.colors.medium,
  },
});

export default ListItem;
