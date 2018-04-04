import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default class App extends Component {
  static navigationOptions = {
    title: "RN Animations"
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => navigate("Navigation1")}
        >
          <Text>Navigation 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => navigate("Navigation1")}
        >
          <Text>Navigation 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => navigate("Navigation1")}
        >
          <Text>Navigation 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => navigate("Navigation1")}
        >
          <Text>Navigation 1</Text>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={1}
          style={styles.button}
          onPress={() => navigate("Navigation1")}
        >
          <Text>Navigation 1</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = {
  button: {
    width: 200,
    height: 50,
    borderColor: "#7a7a7a",
    borderWidth: 1 / 2,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10
  }
};
