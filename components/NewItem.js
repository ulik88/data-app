import React from "react";
import { useState, useRef } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  SafeAreaView,
  TextInput,
} from "react-native";

export const NewItem = ({ onAddTodo }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");

  // Create a state to store the results
  const [results, setResults] = useState([]);

  // Reduce the array to a single value
  const sum = results.reduce((total, value) => total + value, 0);

  const trackInput = (text) => {
    setText(text);
  };

  const textInput = useRef(null);
  const textInputAmount = useRef(null);
  const textInputPrice = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        enabled={true}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <TextInput
          value={text}
          autoFocus={true}
          blurOnSubmit={false}
          style={styles.inputName}
          placeholder="Client Name"
          onChangeText={trackInput}
          ref={textInput}
        />

        <Text style={styles.todoResult}>{"Жалпы: " + (sum ? sum : "")} </Text>

        <View style={styles.inputContainer}>
          <TextInput
            autoFocus={true}
            value={amount.toString()}
            blurOnSubmit={false}
            keyboardType="numeric"
            maxLength={6}
            style={styles.inputAmount}
            placeholder="Amount, kg, liter..."
            onChangeText={(text) => setAmount(parseInt(text, 10))}
            ref={textInputAmount}
          />
          <TextInput
            autoFocus={true}
            value={price.toString()}
            blurOnSubmit={false}
            keyboardType="numeric"
            maxLength={6}
            style={styles.inputPrice}
            placeholder="Price"
            onChangeText={(text) => setPrice(parseInt(text, 10))}
            ref={textInputPrice}
          />
          <View style={styles.titleContainer}>
            <Button
              title="Add"
              onPress={() => {
                const result = amount * price;
                setResults([...results, result]);

                onAddTodo(text, result);
                setAmount("");
                setPrice("");
                setText("");
                textInputAmount.current.clear();
                textInputPrice.current.clear();
                textInput.current.clear();
              }}
            />
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    marginBottom: 0,
    marginTop: 0,
    margin: 20,

    /*   position: "absolute", */
  },

  inputName: {
    width: 200,
    borderColor: "transparent",
    backgroundColor: "#dadce0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: "relative",
    height: 30,
    borderRadius: 5,
    borderWidth: 1,
    marginRight: 130,
  },

  todoResult: {
    flex: 1,
    fontSize: 16,
    position: "absolute",
    right: 0,
    height: 30,
    backgroundColor: "#dadce0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "transparent",
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: "bold",
  },

  inputContainer: {
    flexDirection: "row",
    marginVertical: 10,
    marginHorizontal: 0,
    marginBottom: 0,
  },

  inputAmount: {
    flex: 1,
    borderColor: "transparent",
    backgroundColor: "#dadce0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 30,
    borderRadius: 5,
  },
  inputPrice: {
    marginLeft: 10,
    flex: 1,
    borderColor: "transparent",
    backgroundColor: "#dadce0",
    paddingHorizontal: 10,
    paddingVertical: 5,
    height: 30,
    borderRadius: 5,
  },
});
