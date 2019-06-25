import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";

function Header(props) {
  return (
    <View>
      <SafeAreaView>
        <View style={styles.container}>
          <Image
            source={require("../../assets/logo.png")}
            style={styles.logo}
          />
          <View style={styles.navItems}>{props.children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  logo: {
    width: 80,
    height: 26,
    resizeMode: "contain"
  },
  container: {
    padding: 20,
    flexDirection: "row"
  },
  navItems: {
    flexDirection: "row",
    flex: 1,
    justifyContent: "flex-end"
  }
});

export default Header;
