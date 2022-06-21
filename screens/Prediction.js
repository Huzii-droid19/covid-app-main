import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import Space from "../components/Space";
import Ionicons from "@expo/vector-icons/Ionicons";
import bg from "../assets/images/bg.png";

const Prediction = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Space height={30} />
        <View style={{ marginLeft: "5%" }}>
          <Text style={styles.headFont}>
            Predict using one of the following methods
          </Text>
        </View>
        <Space height={30} />
        <TouchableOpacity
          style={styles.XContainer}
          onPress={() => navigation.navigate("HRCTPrediction")}
        >
          <View
            style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 20 }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#57A4F7",
                paddingTop: 65,
                fontWeight: "bold",
              }}
            >
              HCRT Prediction
            </Text>
            <View style={{ paddingLeft: 100, paddingTop: 40 }}>
              <Ionicons name="scan-circle" size={80} color={"#57A4F7"} />
            </View>
          </View>
        </TouchableOpacity>
        <Space height={20} />
        <TouchableOpacity
          style={styles.XContainer}
          onPress={() => navigation.navigate("xRayPrediction")}
        >
          <View
            style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 20 }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#59B86F",
                paddingTop: 65,
                fontWeight: "bold",
              }}
            >
              X-Ray Prediction
            </Text>
            <View style={{ paddingLeft: 100, paddingTop: 40 }}>
              <Ionicons name="tablet-landscape" size={70} color={"#59B86F"} />
            </View>
          </View>
        </TouchableOpacity>
        <Space height={20} />
        <View style={styles.SContainer}>
          <View
            style={{ flexDirection: "row", paddingTop: 20, paddingLeft: 20 }}
          >
            <Text
              style={{
                fontSize: 18,
                color: "#ff9b66",
                paddingTop: 65,
                fontWeight: "bold",
              }}
            >
              Symptoms Anlysis
            </Text>
            <View style={{ paddingLeft: 85, paddingTop: 40 }}>
              <Ionicons name="radio" size={70} color={"#ff9b66"} />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Prediction;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  main: {
    flex: 2,
    backgroundColor: "#FFFFFF",
  },
  HContainer: {
    backgroundColor: "#E9F2FD",
    width: "90%",
    height: "25%",
    borderRadius: 15,
    flexDirection: "row",
    marginLeft: "5%",
  },
  XContainer: {
    backgroundColor: "#e9f6ed",
    width: "90%",
    height: "25%",
    borderRadius: 15,
    flexDirection: "row",
    marginLeft: "5%",
  },
  SContainer: {
    backgroundColor: "#f9e2d4",
    width: "90%",
    height: "25%",
    borderRadius: 15,
    flexDirection: "row",
    marginLeft: "5%",
  },
  headFont: {
    fontSize: 17,
    paddingTop: 10,
    color: "black",
    fontWeight: "bold",
    paddingLeft: 5,
  },
});
