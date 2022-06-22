import * as React from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
import Setting from "../screens/Setting";
import Centers from "../screens/Centers";
import Statistics from "../screens/Statistics";
import History from "../screens/History";
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();
const Dashboard = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 13, color: focused ? "#2386F6" : color }}>
              Home
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="md-home"
                size={24}
                color={tabInfo.focused ? "#2386F6" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Centers"
        component={Centers}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 13, color: focused ? "#2386F6" : color }}>
              Centers
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="briefcase"
                size={24}
                color={tabInfo.focused ? "#2386F6" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Statistics"
        component={Statistics}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 13, color: focused ? "#2386F6" : color }}>
              Statistics
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="earth"
                size={24}
                color={tabInfo.focused ? "#2386F6" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="History"
        component={History}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 13, color: focused ? "#2386F6" : color }}>
              History
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="compass"
                size={24}
                color={tabInfo.focused ? "#2386F6" : "#8e8e93"}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{
          tabBarLabel: ({ focused, color }) => (
            <Text style={{ fontSize: 13, color: focused ? "#2386F6" : color }}>
              Profile
            </Text>
          ),
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons
                name="person"
                size={24}
                color={tabInfo.focused ? "#2386F6" : "#8e8e93"}
              />
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default Dashboard;
