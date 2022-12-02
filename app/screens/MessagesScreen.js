import React from "react";
import { FlatList, StyleSheet, Platform } from "react-native";
import ListItem from "../components/ListItem";
import ListItemSeperator from "../components/ListItemSeperator";
import Screen from "../components/Screen";

const messages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/images/jacket.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D3",
    image: require("../assets/images/jacket.jpg"),
  },
];
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(messages) => messages.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.subTitle}
            image={item.image}
          />
        )}
        ItemSeparatorComponent={<ListItemSeperator />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    paddingTop: Platform.OS === "android" ? 20 : 0,
  },
});

export default MessagesScreen;
