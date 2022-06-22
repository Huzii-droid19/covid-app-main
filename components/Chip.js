import { Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Chip = ({ label, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text>{label}</Text>
    </TouchableOpacity>
  );
};

export default Chip;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    height: 40,
    borderRadius: 10,
    marginHorizontal: 5,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: {
      height: 0,
      width: 3,
    },
    backgroundColor: "white",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
