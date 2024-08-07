import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Login from "../components/Login";
import { auth } from "../config/FiebaseConfig";
import { Redirect } from "expo-router";
const index = () => {
  const user = auth.currentUser;

  return <View>{user ? <Redirect href={"/MyTrip"} /> : <Login />}</View>;
};

export default index;
