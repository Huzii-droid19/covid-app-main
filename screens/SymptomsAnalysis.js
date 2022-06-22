import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import React from "react";
import StyledInput from "../components/StyledInput";
import Button from "../components/Button";

const SymptomsAnalysis = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <StyledInput label="Heart Rate" placeholder="Enter Heart Rate" />
        <StyledInput label="Respiratory Rate" placeholder="Respiratory Rate" />
      </View>
      <View style={styles.inputWrapper}>
        <StyledInput label="Systolic BP" placeholder="Enter Systolic BP" />
        <StyledInput label="Diastolic BP" placeholder="Enter Diastolic BP" />
      </View>
      <View style={styles.inputWrapper}>
        <StyledInput label="Temperature" placeholder="Enter Temp °C" />
        <StyledInput label="SPO2 level" placeholder="Enter SPO2 level" />
      </View>
      <Button title="Predict" />
    </View>
  );
};

export default SymptomsAnalysis;

const styles = StyleSheet.create({
  container: {
    flex: 0.75,
    padding: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  inputWrapper: {
    flex: 1,
    flexDirection: "row",
  },
});
