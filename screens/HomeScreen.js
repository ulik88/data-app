import React, { useState } from "react";
import axios from "axios";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  SafeAreaView,
} from "react-native";
import { Products } from "../components/Products";
import { useNavigation } from "@react-navigation/native";

export const HomeScreen = ({ navigation }) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [items, setOffers] = useState([]);

  /*     const getUriIndex = () => {
        const uri = 'https://642489959e0a30d92b1e38cc.mockapi.io/offers';
        
        return uri;
    } */

  const uri = "https://642489959e0a30d92b1e38cc.mockapi.io/my-offers";

  const fetchOffers = () => {
    setIsLoading(true);
    axios
      .get(uri)
      .then(({ data }) => {
        setOffers(data);
      })
      .catch((err) => {
        console.log(err);
        Alert.alert("Fehler", "Es ist ein Fehler aufgetreten");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  React.useEffect(fetchOffers, []);
  {
    if (isLoading) {
      return (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="#0000ff" />
          <Text> Loading ...</Text>
        </View>
      );
    }
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <FlatList
          refreshControl={
            <RefreshControl refreshing={isLoading} onRefresh={fetchOffers} />
          }
          data={items}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("DetailScreen", {
                  id: item.id,
                  name: item.product.name,
                })
              }
            >
              <Products
                price={item.offer_price}
                name={item.product.name}
                image={item.product.image}
                date={item.expiration_date}
              />
            </TouchableOpacity>
          )}
        />
        <View style={{ flex: 1, padding: 16 }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            You are on Home Screen
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
