import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Icon from "../components/Icon";

import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";
import defaultStyles from "../config/styles";

const menuItems = [
  {
    title: "My Listings",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: defaultStyles.colors.primary,
    },
  },
  {
    title: "My Messages",
    icon: {
      name: "email",
      backgroundColor: defaultStyles.colors.secondary,
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Salim Mujawar"
          subTitle="salim685@gmail.com"
          image={require("../assets/images/jacket.jpg")}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItem) => menuItem.title}
          ItemSeparatorComponent={ListItemSeperator}
          renderItem={({ item }) => (
            <ListItem
              title={item.title}
              subTitle={item.subTitle}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <ListItem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: defaultStyles.colors.light,
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
