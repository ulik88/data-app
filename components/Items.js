import { React, useEffect, useState } from "react";
import {
  Keyboard,
  StyleSheet,
  View,
  Text,
  Alert,
  SafeAreaView,
} from "react-native";
import { Item } from "./Item";
import { NewItem } from "../components/NewItem";
import { FlatList } from "react-native-gesture-handler";

export const Items = () => {
  const [todos, setTodos] = useState([
    /* 
    { desc: "Einkaufen ", keyDone: false, sum: 0 },
    { desc: "Lesen ", keyDone: false, sum: 0 },
    { desc: "Programmieren", keyDone: false, sum: 0 }, */
  ]);

  const ToggleDone = (index, desc, keyDone, sum) => {
    const itemsCopy = [...todos];
    itemsCopy[index] = {
      desc: desc,
      keyDone: keyDone,
      sum: sum,
    };
    //console.log(itemsCopy);
    setTodos(itemsCopy);
  };

  const DeleteTodo = (index) => {
    const reduceArray = [...todos];
    reduceArray.splice(index, 1);
    setTodos(reduceArray);
  };

  const AddTodo = (text, result) => {
    if (text === "" && result === null) {
      Alert.alert("Error", "Please enter a todo");
      return;
    }

    const filteredItems = todos.filter((item) => {
      return item.desc === text && item.sum === result;
    });

    if (filteredItems.length > 0) {
      Alert.alert("Error", "Todo already exists");
      return;
    }

    const newTodo = { desc: text, keyDone: false, sum: result };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  return (
    <View>
      <NewItem onAddTodo={AddTodo}></NewItem>
      <FlatList
        data={todos}
        renderItem={({ item, index }) => {
          return (
            <Item
              index={index}
              desc={item.desc}
              keyDone={item.keyDone}
              sum={item.sum}
              onToggleDone={ToggleDone}
              onDeleteTodo={DeleteTodo}
            />
          );
        }}
        keyExtractor={(item, index) => index}
      />
    </View>
  );
};
