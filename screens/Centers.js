import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Image,
} from "react-native";
import Space from "../components/Space";
import map from "../assets/images/map.png";
import Ionicons from "@expo/vector-icons/Ionicons";

const Centers = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.main}>
        <Space height={20} />
        <View style={styles.innerContainer}>
          <Text style={styles.boxFont}>Vaccination Centers</Text>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Image
                source={map}
                style={{ width: "100%", height: "100%", borderRadius: 20}}
              ></Image>
            </View>
          </View>
          <Text style={styles.boxFont}>Testing Centers</Text>
          <View style={styles.box}>
            <View style={styles.inner}>
              <Image
                source={map}
                style={{ width: "100%", height: "100%", borderRadius: 20 }}
              ></Image>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Centers;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  main: {
    flex: 2,
    backgroundColor: "#Ffffff",
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
    height: "90%",
    flexDirection: "row",
    flexWrap: "wrap",
    // paddingLeft: 35,
    justifyContent: "center",
  },
  box: {
    width: "90%",
    height: "50%",
    padding: 10,
  },
  inner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // padding: 20,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#2386F6",
    backgroundColor: "#ffffff",
  },
  boxFont: {
    fontSize: 18,
    color: "#062a5c",
    fontWeight: "bold",
    paddingLeft: 10,
  },
});
