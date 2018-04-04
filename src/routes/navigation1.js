import React, { Component } from "react";
import { View, Text, Animated, ScrollView } from "react-native";
import List from "../helper/list";

export default class App extends Component {
  static navigationOptions = {
    header: null
  };

  state = {
    scrollOffset: new Animated.Value(0)
  };

  handleScroll = e => {
    const scrollSensitivity = 4 / 3;
    const offset = e.nativeEvent.contentOffset.y / scrollSensitivity;
    this.state.scrollOffset.setValue(offset);
  };

  render() {
    const { scrollOffset } = this.state;
    return (
      <View style={styles.container}>
        <Animated.View
          style={[
            styles.header,
            {
              height: scrollOffset.interpolate({
                inputRange: [0, 50],
                outputRange: [100, 50],
                extrapolate: "clamp"
              }),
              position: "absolute"
            }
          ]}
        >
          <Animated.Text
            style={[
              styles.text,
              {
                fontSize: scrollOffset.interpolate({
                  inputRange: [0, 20],
                  outputRange: [20, 14],
                  extrapolate: "clamp"
                })
              }
            ]}
          >
            Navigation 1
          </Animated.Text>
        </Animated.View>
        <ScrollView onScroll={this.handleScroll} style={styles.scroll}>
          <List />
        </ScrollView>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1
  },
  header: {
    width: "100%",
    height: 100,
    backgroundColor: "#fff",
    elevation: 10,
    justifyContent: "center",
    alignItems: "center"
  },
  scroll: {
    paddingHorizontal: 15,
    paddingTop: 110
  },
  text: {
    color: "#000",
    fontWeight: "bold"
  }
};
