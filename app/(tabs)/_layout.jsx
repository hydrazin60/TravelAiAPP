import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function _layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "blue", // Color for active tab
        tabBarInactiveTintColor: "black", // Color for inactive tabs
      }}
    >
      <Tabs.Screen
        name="MyTrip"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="location-sharp" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Discover"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="globe-sharp" size={35} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person-sharp" size={35} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
