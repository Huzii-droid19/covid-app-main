import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import React from "react";
import Button from "./Button";
import { addToast, pickImage } from "../utils";

const SelectImage = ({ image, setImage }) => {
  const handleImagePicker = () => {
    pickImage()
      .then((res) => {
        setImage({
          uri: res?.uri,
          name: "hrct.jpg",
          type: "image/jpg",
        });
      })
      .catch((err) => addToast(err.message, true));
  };
  return (
    <View>
      <View style={styles.container}>
        <View style={styles.imageWrapper}>
          <TouchableOpacity style={styles.imageBox} onPress={handleImagePicker}>
            {Object.keys(image).length > 0 ? (
              <Image source={{ uri: image?.uri }} style={styles.imageStyle} />
            ) : (
              <Text style={styles.textLabel}>Pick Image</Text>
            )}
          </TouchableOpacity>
          <Text style={styles.textLabel}>Uploaded File</Text>
        </View>
        <View style={styles.imageWrapper}>
          <View style={styles.imageBox}>
            <Image style={styles.imageStyle} />
          </View>
          <Text style={styles.textLabel}>Predicted File</Text>
        </View>
      </View>
      <View>
        <Button title="Predict" />
      </View>
    </View>
  );
};

export default SelectImage;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 20,
  },
  imageWrapper: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  imageBox: {
    justifyContent: "center",
    alignItems: "center",
    height: 150,
    width: 150,
    borderRadius: 5,
    borderWidth: 0.5,
    marginHorizontal: 20,
  },
  imageStyle: {
    width: "95%",
    height: "95%",
    // resizeMode: "contain",
  },
  textLabel: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    marginVertical: 10,
  },
});
