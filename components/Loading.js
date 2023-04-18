import { View, Text, StyleSheet, ActivityIndicator } from "react-native";

export const Loading = () => {
  return (
    <View style={styles.activityIndicator}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text> Loading ...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    color: "#0000ff",
  },
});
