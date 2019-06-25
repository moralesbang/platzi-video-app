/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import { Text } from "react-native";
import Home from "./src/containers/Home";
import Header from "./src/components/Header";

export default class App extends Component {
  render() {
    return (
      <Home>
        <Header />
        <Text>Categories</Text>
      </Home>
    );
  }
}
