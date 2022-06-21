import * as React from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Image,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
} from "react-native";
import img from "../assets/images/vector.png";
import Space from "../components/Space";
import Button from "../components/Button";
import bg from "../assets/images/Splashbg.png";

const Splash = ({ navigation }) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground source={bg} style={styles.container}>
        <View style={styles.outerbody}>
          <View style={styles.body}>
            <View style={{ padding: 50, marginTop: "60%" }}>
              <Space height={100} />
              <Text style={styles.title}>DISCLAIMER</Text>
              <Space height={20} />
              <Text>
                Our project is completely research-based. We donot claim
                responsibility for any data that we collect or any test we
                perform.
              </Text>
            </View>
            <Space height={20} />
            <Button
              buttonStyle={{ backgroundColor: "#ff7573" }}
              title={"NEXT"}
              textStyle={{ color: "white" }}
              onPress={() => navigation.navigate("Login")}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

export default Splash;
const styles = StyleSheet.create({
  container: {
    paddingTop: 5,
    display: "flex",
    width: "100%",
    height: "100%",
    backgroundColor: "#ffffff",
    resizeMode: "contain",
    margin: 0,
  },
  outerbody: {
    display: "flex",
    width: "100%",
    height: "100%",
    // padding: "3%",
  },
  body: {
    padding: "5%",
    flex: 8,
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  inputFieldOuter: {
    flexDirection: "row",
    alignSelf: "center",
    width: "80%",
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "rgba(216, 216, 216, 255)",
    backgroundColor: "#ffffff",
  },

  inputFieldInner: {
    width: "90%",
    padding: 10,
    fontSize: 15,
  },
  title: {
    fontSize: 30,
    paddingTop: 10,
    fontWeight: "bold",
  },
});
