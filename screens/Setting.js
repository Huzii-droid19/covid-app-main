import {
  View,
  Text,
  FlatList,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { logout, selectAuthSlice } from "../store/slice";
import { useDispatch, useSelector } from "react-redux/";
const Settings = ({ navigation }) => {
  const { userMeta } = useSelector(selectAuthSlice);
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.HBox}>
          <Text style={styles.Htext}>Profile</Text>
        </View>
        <View style={styles.mainBox}>
          <View style={styles.Box}>
            <Text style={styles.notiftext}>{userMeta?.name}</Text>
          </View>
          <View style={styles.Box}>
            <Text style={styles.notiftext}>{userMeta?.email}</Text>
          </View>
          <TouchableOpacity style={styles.Box}>
            <Text style={styles.notiftext}>Change Password</Text>
          </TouchableOpacity>
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
          <TouchableOpacity style={styles.Box}>
            <Text
              style={styles.notiftext}
              onPress={() => {
                dispatch(logout());
                navigation.reset({
                  index: 0,
                  routes: [{ name: "Login" }],
                });
              }}
            >
              Logout
            </Text>
          </TouchableOpacity>
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
