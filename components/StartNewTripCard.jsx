import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const StartNewTripCard = () => {
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 55,
        display: "flex",
        alignItems: "center",
        gap: 20,
      }}
    >
      <Ionicons name="location-sharp" size={30} color="black" />
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 10 }}>
        No trip planned yet
      </Text>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "500",
          marginTop: 10,
          color: "gray",
        }}
      >
        Looks Like its time to plan a new travel experience! Get Started below
      </Text>
      <TouchableOpacity
        style={{
          padding: 13,
          backgroundColor: "#000",
          borderRadius: 15,
          paddingHorizontal: 40,
        }}
        onPress={() => alert("Button pressed!")}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 17 }}>
          Press Me
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default StartNewTripCard;
const styles = StyleSheet.create({});
