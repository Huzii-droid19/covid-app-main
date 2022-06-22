import React from "react";
import { View, Text } from "react-native";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Dashboard from "../screens/Dashboard";
import Splash from "../screens/Splash";
import Prediction from "../screens/Prediction";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SymptomsAnalysis from "../screens/SymptomsAnalysis";
import HRCT from "../screens/HRCT";
import XRAY from "../screens/XRAY";

const Stack = createNativeStackNavigator();

const SplashNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="Splash"
        component={Splash}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Login"
        component={Login}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Signup"
        component={Signup}
      />
      <Stack.Screen
        options={{ headerShown: false }}
        name="Dashboard"
        component={Dashboard}
      />
      <Stack.Screen name="Prediction" component={Prediction} />
      <Stack.Screen name="HRCTPrediction" component={HRCT} />
      <Stack.Screen name="xRayPrediction" component={XRAY} />
      <Stack.Screen name="SymptomsAnalysis" component={SymptomsAnalysis} />
    </Stack.Navigator>
  );
};

export default SplashNavigator;
