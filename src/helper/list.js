import React from "react";
import { View, Text } from "react-native";

export default () =>
  Array.from({ length: 20 }).map((_, index) => (
    <View style={styles.item} key={index}>
      <Text style={styles.itemText}>{`item ${index + 1}`}</Text>
    </View>
  ));

const styles = {
  item: {
    width: "100%",
    height: 50,
    borderBottomWidth: 1,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  itemText: {
    color: "#000",
    fontSize: 14
  }
};
