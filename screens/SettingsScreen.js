// React Native Bottom Navigation
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import { Header } from "../components/Header";
import { Items } from "../components/Items";

export const SettingsScreen = ({ route, navigation }) => {
  return (
    <ImageBackground style={{ flex: 1 }}>
      <View style={styles.container}>
        <Header />
        <Items />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flexDirection: "column",
  },

  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    width: 300,
    marginTop: 16,
  },
});
