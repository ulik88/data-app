import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Products } from "../components/Products";
import { Loading } from "../components/Loading";

export const DetailScreen = ({ route, navigation }) => {
  const { id, name } = route.params;

  const [isLoading, setIsLoading] = React.useState(true);
  const [offerSingleData, setOfferSingleData] = useState([]);

  const uri = "https://642489959e0a30d92b1e38cc.mockapi.io/my-offers/" + id;

  useEffect(() => {
    navigation.setOptions({ title: name });
    setIsLoading(true);
    axios
      .get(uri)
      .then(({ data }) => {
        setOfferSingleData(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert(
          "Fehler",
          "Es ist ein Fehler aufgetreten beim Laden der Daten"
        );
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View style={styles.boxTop} />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 8,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Produktdetails
          </Text>
        </View>
        <View style={styles.containerOver}>
          <Image
            source={{ uri: offerSingleData.product.image }}
            style={styles.containerImage}
          />
          <Text style={styles.header}>{offerSingleData.product.name}</Text>

          <Text style={styles.description}>
            {offerSingleData.product.description}
          </Text>
          <Text style={styles.category}>
            {offerSingleData.product.category}
          </Text>
          <Text style={styles.price}>{offerSingleData.offer_price}</Text>

          <Text
            style={{
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            Ingredients
          </Text>
          <View style={styles.containerIngredients}>
            <Text style={styles.ingredientsTitle}>
              {offerSingleData.product.ingredients}
              {({ item }) => <Text style={styles.ingredients}>{item}</Text>}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ flex: 1, padding: 16 }}>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    flexDirection: "column",
  },
  containerOver: {
    alignItems: "stretch",
    width: "100%",
    height: "auto",
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    paddingTop: 10,
    fontSize: 14,
    paddingStart: 10,
    width: "100%",
  },
  header: {
    fontSize: 20,
    paddingTop: 10,
    fontWeight: "bold",
  },

  containerImage: {
    width: 300,
    height: 300,
    borderRadius: 0,
    paddingBottom: 10,
  },
  boxTop: {
    height: 5,
  },

  containerIngredients: {
    alignItems: "flex-start",
    width: "100%",
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    backgroundColor: "#fff",
    justifyContent: "space-evenly",
    alignItems: "center",
    flexDirection: "column",
  },
  ingredientsTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  ingredients: {
    fontSize: 14,
    marginVertical: 2,
  },
});
