import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import Space from "../components/Space";
import { BlurView } from "@react-native-community/blur";
import Ionicons from "@expo/vector-icons/Ionicons";
import bg from "../assets/images/bg.png";
import illust from "../assets/images/illustcovid.jpg";
import doc from "../assets/images/illustdoc.png";
import Prediction from "./Prediction";

const Home = ({ navigation }) => {
  return (
    // <SafeAreaView style={styles.container}>
    // <ImageBackground source={bg} style={styles.container}>
    <ScrollView>
      <View style={styles.main}>
        <StatusBar barStyle="dark-content" />
        <Space height={160} />
        <View style={{ marginLeft: "5%" }}>
          <Text style={styles.boxFont}>Welcome Back!</Text>
        </View>
        <Space height={20} />
        <View style={styles.tipContainer}>
          <View style={{ paddingTop: 30 }}>
            <Image source={illust} style={{ width: 200, height: 100 }} />
          </View>
          <View style={{ paddingRight: 10 }}>
            <Text
              style={{
                fontSize: 16,
                color: "black",
                paddingTop: 60,
                fontWeight: "bold",
              }}
            >
              How to recover from {"\n"}covid-19
            </Text>
            <View style={{ paddingLeft: 120 }}>
              <Ionicons name="arrow-forward-circle" size={40} color={"black"} />
            </View>
          </View>
        </View>
        <Space height={20} />
        <View style={{ marginLeft: "3%" }}>
          <Text style={styles.numFont}>Statistics</Text>
        </View>
        <Space height={5} />
        <View style={styles.innerContainer}>
          <View style={styles.box}>
            <View
              style={
                (styles.inner, { backgroundColor: "#fbe7ec", borderRadius: 15 })
              }
            >
              <Text
                style={{
                  fontSize: 17,
                  paddingTop: 10,
                  fontWeight: "bold",
                  paddingLeft: 10,
                  color: "#ED393F",
                }}
              >
                Confirmed
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#ED393F",
                  fontWeight: "bold",
                  paddingLeft: 100,
                  paddingTop: 65,
                }}
              >
                167829
              </Text>
              <Space height={10} />
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={
                (styles.inner, { backgroundColor: "#E8F2FD", borderRadius: 15 })
              }
            >
              <Text
                style={{
                  fontSize: 17,
                  paddingTop: 10,
                  fontWeight: "bold",
                  paddingLeft: 10,
                  color: "#2386F6",
                }}
              >
                Active
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#2386F6",
                  fontWeight: "bold",
                  paddingLeft: 100,
                  paddingTop: 65,
                }}
              >
                167829
              </Text>
              <Space height={10} />
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={
                (styles.inner, { backgroundColor: "#EAF6ED", borderRadius: 15 })
              }
            >
              <Text
                style={{
                  fontSize: 17,
                  paddingTop: 10,
                  fontWeight: "bold",
                  paddingLeft: 10,
                  color: "#4DAA52",
                }}
              >
                Recovered
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#4DAA52",
                  fontWeight: "bold",
                  paddingLeft: 100,
                  paddingTop: 65,
                }}
              >
                167829
              </Text>
              <Space height={10} />
            </View>
          </View>
          <View style={styles.box}>
            <View
              style={
                (styles.inner, { backgroundColor: "#F0F1F2", borderRadius: 15 })
              }
            >
              <Text
                style={{
                  fontSize: 17,
                  paddingTop: 10,
                  fontWeight: "bold",
                  paddingLeft: 10,
                  color: "#767E85",
                }}
              >
                Deceased
              </Text>
              <Text
                style={{
                  fontSize: 20,
                  color: "#767E85",
                  fontWeight: "bold",
                  paddingLeft: 100,
                  paddingTop: 65,
                }}
              >
                167829
              </Text>
              <Space height={10} />
            </View>
          </View>
          <View style={{ paddingRight: 300 }}>
            <Text style={styles.numFont}>Prediction</Text>
          </View>
          <Space height={10} />
          <View style={styles.preContainer}>
            <View style={{ flexDirection: "column" }}>
              <Text
                style={{
                  fontSize: 20,
                  color: "black",
                  paddingTop: 30,
                  paddingLeft: 20,
                  fontWeight: "bold",
                }}
              >
                Have Symptoms? {"\n"}
                Predict Now
              </Text>
              <View style={{ paddingTop: 10, paddingLeft: 20 }}>
                <Ionicons
                  name="arrow-forward-circle"
                  size={40}
                  color={"black"}
                  onPress={() => navigation.navigate("Prediction")}
                />
              </View>
            </View>
            <View style={{ paddingTop: 10, paddingLeft: 40 }}>
              <Image source={doc} style={{ width: 145, height: 125 }} />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    // </ImageBackground>
    // </SafeAreaView>
  );
};

export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  main: {
    paddingTop: 50,
    flex: 2,
    backgroundColor: "#Ffffff",
    justifyContent: "center",
  },
  tipContainer: {
    backgroundColor: "#CFE3FC",
    width: "95%",
    height: "20%",
    borderRadius: 15,
    flexDirection: "row",
    marginLeft: "2.5%",
  },
  preContainer: {
    backgroundColor: "#FAD8C4",
    width: "95%",
    height: "22%",
    borderRadius: 15,
    flexDirection: "row",
  },
  Text: {
    fontSize: 25,
    color: "#fff",
  },
  Texts: {
    fontSize: 25,
    color: "#fff",
  },
  innerContainer: {
    width: "100%",
    height: "80%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  box: {
    width: "50%",
    height: "25%",
    padding: 10,
  },
  inner: {
    flex: 1,
    // justifyContent: "center",
    // padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#ff8280",
    backgroundColor: "#ffffff",
    opacity: 0.8,
  },
  boxFont: {
    fontSize: 30,
    fontWeight: "bold",
  },
  numFont: {
    fontSize: 17,
    color: "black",
    fontWeight: "bold",
  },
});
