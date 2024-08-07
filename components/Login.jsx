import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Link, useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  return (
    <View>
      <Image
        source={require("../assets/images/photo2.png")}
        style={{
          width: "100%",
          height: 500,
        }}
      />
      <View style={styles.container}>
        <Text
          style={{
            textAlign: "center",
            fontSize: 30,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          AI Travel planner
        </Text>
        <Text
          style={{
            textAlign: "center",
            textAlign: "left",
            color: "#7d7d7d",
            fontSize: 16,
            fontWeight: "700",
            padding: 20,
          }}
        >
          Nepal ipsum dolor sit amet consectetur adipisicing elit. Sit rem
          repudiandae consequuntur aperiam id. Quidem veniam consequatur
          expedita facilis odit! hello world HYDRAZEN
        </Text>
        <TouchableOpacity
          style={styles.Button}
          onPress={() => router.push("/auth/Signin")}
        >
          <Text style={{ color: "#fff", textAlign: "center", fontSize: 18 }}>
            Get Started
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    marginTop: -20,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    height: "100%",
    padding: 25,
  },
  Button: {
    padding: 13,
    backgroundColor: "#000",
    borderRadius: 99,
    marginTop: "20%",
  },
});
