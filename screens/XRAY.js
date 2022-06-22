import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import SelectImage from "../components/SelectImage";

const XRAY = () => {
  const [image, setImage] = useState({});
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Upload image file to start prediction</Text>
      <SelectImage image={image} setImage={setImage} />
    </View>
  );
};

export default XRAY;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  label: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
