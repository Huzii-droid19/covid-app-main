import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

const StyledInput = ({ label, placeholder }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput placeholder={placeholder} style={styles.inputContainer} />
    </View>
  );
};

export default StyledInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginHorizontal: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "bold",
  },
  inputContainer: {
    borderWidth: 1,
    height: 45,
    paddingHorizontal: 15,
    borderRadius: 5,
    marginVertical: 10,
    fontSize: 13,
  },
});
