import { View, StyleSheet, Image, Text, Button } from "react-native";
import React from "react";
import Modal from "react-native-modal";
import DefaultImage from "../assets/images/bg.png";

const StyledModal = ({ uri, visible, toggleState }) => {
  return (
    <Modal isVisible={visible}>
      <View style={styles.coontainer}>
        <Text style={styles.label}>Predicted Sample</Text>
        <View style={styles.imageWrapper}>
          <Image
            source={{ uri }}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        <Button
          title="Close"
          onPress={() => {
            toggleState((prevState) => ({
              ...prevState,
              visible: false,
            }));
          }}
        />
      </View>
    </Modal>
  );
};

export default StyledModal;
const styles = StyleSheet.create({
  coontainer: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 10,
    height: 400,
    borderRadius: 5,
    backgroundColor: "white",
  },
  imageWrapper: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: 200,
    width: 300,
    borderRadius: 5,
    borderWidth: 0.5,
    margin: 5,
  },
  label: {
    fontSize: 20,
    fontWeight: "800",
    color: "black",
    marginVertical: 20,
  },
});
