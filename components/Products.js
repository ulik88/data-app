import React, { useState } from "react";
import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DetailScreen } from "../screens/DetailScreen";

const truncateTitle = (title) => {
  if (title.length > 28) {
    return title.substring(0, 30) + "...";
  } else {
    return title;
  }
};

export const Products = ({ image, name, price, date }) => {
  const navigation = useNavigation();

  return (
    <View style={styles.containerOver}>
      <Image source={{ uri: image }} style={styles.containerImage} />
      <Text style={styles.titleCard}>{truncateTitle(name)}</Text>
      <Text style={styles.dateProduct}>{date}</Text>
      <Text style={styles.titlePrice}>{price}/€</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  containerOver: {
    flex: 1,
    marginTop: 10,
    right: 0,
    left: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "95%",
    height: "auto",
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "flex-start",
    borderRadius: 20,
  },

  titleCard: {
    marginTop: 5,
    fontSize: 16,
    paddingStart: 0,
    width: "70%",
    top: 0,
    fontWeight: "bold",
  },

  containerImage: {
    width: 80,
    height: 80,
    borderRadius: 20,
  },

  titlePrice: {
    fontSize: 16,
    textAlign: "center",
    position: "absolute",
    right: 0,
    bottom: 0,
    padding: 10,
  },
  dateProduct: {
    fontSize: 14,
    textAlign: "center",
    position: "absolute",
    bottom: 0,
    padding: 10,
    left: 100,
  },
});
