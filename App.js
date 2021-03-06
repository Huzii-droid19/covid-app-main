import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import SplashNavigator from "./Navigations/SplashNavigator";
import { Provider } from "react-redux";
import { store } from "./store/store";
import Toast from "react-native-toast-message";

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        {/* <SafeAreaView> */}
        <SplashNavigator />
        <Toast />
        {/* </SafeAreaView> */}
      </NavigationContainer>
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
