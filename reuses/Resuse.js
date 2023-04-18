
import {  Button, StyleSheet } from 'react-native';
import React, { useState,  } from 'react';
import { useNavigation } from '@react-navigation/native';


export const Reuses = () => {

const [screenNum, setScreenNum] = useState(1);
  
    const goToNextScreen = () => {
        setScreenNum(screenNum);
        if (navigation.navigate('DetailScreen', { id: id})) {
            screenNum +1;
        }else{
         setScreenNum(screenNum+1);
     }
    };

    const navigation = useNavigation();

    return (
        <View style={styles.containerOver}>
        <Button
            title="See"
            onPress={goToNextScreen}
            style={styles.button}
        />
    </View>
)};

const styles = StyleSheet.create({

    containerOver: {
        marginTop: 20,
        padding: 10,
        flexDirection: 'row', 
        alignItems: 'center',
        width: '100%', 
        height: 'auto',
        backgroundColor: '#fff',
        justifyContent:'space-between',
        alignItems: 'flex-start',
        
    },
});