// Product.js

class Product {
    constructor(
        ean, 
        title, 
        description, 
        image
        )
    {
      this.ean = ean;
      this.title = title;
      this.description = description;
      this.image = image;
    }
  }
  
/*   export default Product;

  '../assets/img/1.png'

      const uri = 'https://642489959e0a30d92b1e38cc.mockapi.io/offers';

  
  import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { View, Text, Button, StyleSheet, Alert, FlatList, ActivityIndicator } from 'react-native';
import { Products } from '../components/Products';


export default function HomeScreen() {

    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);

    const fetchProducts = () => {
        setIsLoading(true);
        axios
        .get('https://642489959e0a30d92b1e38cc.mockapi.io/offers')
        .then(({data})  => {
            setItems(data);
        }).catch((error) => {
            console.log(error);
            Alert.alert('Error', 'Something went wrong');
        }).finally(() => {
            setIsLoading(false);
        });
    };

    React.useEffect(fetchProducts(), []); 

    if (isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size="large" 
                animating={isLoading} />
                <Text>Loading...</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={items} renderItem={( {item} ) => 
                <Products 
                    price={item.offer_price}
                    name={item.product.name}
                    image={item.product.image}
                    date={item.expiration_date}
                    
                /> }
            />
        </View>
      );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'flex-start',
        flexDirection: 'column',
    },
    activityIndicator: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        color: '#0000ff',

    }
});

 */

