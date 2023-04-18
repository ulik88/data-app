import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Ionicos from "@expo/vector-icons/Ionicons";

export const Item = ({
  desc,
  keyDone,
  index,
  sum,
  onToggleDone,
  onDeleteTodo,
}) => {
  return (
    <View
      style={
        keyDone
          ? [styles.baseContainer, styles.itemDoneCotaier]
          : [styles.baseContainer, styles.itemNotDoneCotaier]
      }
    >
      <View style={styles.todoItems}>
        <Pressable onPress={() => onToggleDone(index, desc, !keyDone, sum)}>
          <Text style={styles.todoTitle}>{desc} </Text>
        </Pressable>
      </View>
      <Text style={styles.todoSum}>{"Сом: " + sum} </Text>

      <View style={styles.todoButton}>
        {keyDone ? (
          <Pressable onPress={() => onDeleteTodo(index)}>
            <Ionicos name="checkmark-circle-sharp" size={34} color="#64d197" />
          </Pressable>
        ) : (
          <Ionicos name="md-close-circle" size={34} color="#bd2d39" />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  baseContainer: {
    margin: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    alignItems: "center",
    marginVertical: 4,
    borderRadius: 10,
  },
  itemNotDoneCotaier: {
    backgroundColor: "#c3dbce",
  },
  itemDoneCotaier: {
    backgroundColor: "#fff",
  },
  todoItems: {
    flexDirection: "row",
  },
  todoTitle: {
    fontWeight: "bold",
    fontSize: 16,
    position: "relative",
  },
  todoSum: {
    fontWeight: "italic",
    fontSize: 14,
    position: "absolute",
    right: 50,
  },
});
