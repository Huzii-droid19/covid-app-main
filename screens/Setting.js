import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from "react-native";
import React from "react";

const Settings = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
      <View style={styles.HBox}>
        <Text style={styles.Htext}>Profile</Text>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.Box}>
          <Text style={styles.notiftext}>Username</Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.notiftext}>Email</Text>
        </View>
        <View style={styles.Box}>
          <Text
            style={styles.notiftext}
            
          >
            Change Password
          </Text>
        </View>
      </View>
      </View>
      <View>
      <View style={styles.HBox}>
        <Text style={styles.Htext}>Settings</Text>
      </View>
      <View style={styles.mainBox}>
        <View style={styles.Box}>
          <Text style={styles.notiftext}>About us</Text>
        </View>
        <View style={styles.Box}>
          <Text style={styles.notiftext}>Contact us</Text>
        </View>
        <View style={styles.Box}>
          <Text
            style={styles.notiftext}
            onPress={() => navigation.navigate("Login")}
          >
            Logout
          </Text>
        </View>
      </View>
      </View>
    </SafeAreaView>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 5,
    // backgroundColor: "#ffffff",
  },
  HBox: {
    // backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 3,
    borderColor: "#eeeeee",
    marginHorizontal: 10,
  },
  Htext: {
    fontSize: 18,
    fontWeight: "600",
  },
  mainBox: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 3,
    width: "90%",
    marginLeft: "5%",
    borderRadius: 10,
  },
  Box: {
    backgroundColor: "#ffffff",
    padding: 20,
    marginVertical: 3,
    borderColor: "#eeeeee",
    borderBottomWidth: 1,
  },
  notiftext: {
    fontSize: 15,
    fontWeight: "600",
  },
});
