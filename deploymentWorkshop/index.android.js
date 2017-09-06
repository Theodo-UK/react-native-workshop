import React, { Component } from "react";
import { AppRegistry, Image, StyleSheet, Text, View } from "react-native";

export default class deploymentWorkshop extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to the React Native deployment workshop!
        </Text>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={require("./img/theodo.png")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1553A1"
  },
  welcome: {
    fontSize: 25,
    fontWeight: "600",
    color: "white",
    textAlign: "center",
    margin: 10
  },
  logo: {
    width: 200
  }
});

AppRegistry.registerComponent("deploymentWorkshop", () => deploymentWorkshop);
