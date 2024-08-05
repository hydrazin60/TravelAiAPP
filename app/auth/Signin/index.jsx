import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from "react-native";
import React, { useEffect } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
const Signin = () => {
  const router = useRouter();
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);
  return (
    <View
      style={{
        padding: 20,
        paddingTop: 80,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <Text style={{ fontSize: 30, fontWeight: "bold" }}>
        Let's Sign you In
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "gray" }}>
        Welcome Back
      </Text>
      <Text style={{ fontSize: 30, fontWeight: "bold", color: "gray" }}>
        You've been missed!
      </Text>
      <View style={{ marginTop: 50 }}>
        <Text style={styles.inputsectionLebal}>Email</Text>
        <TextInput placeholder="enter your email" style={styles.inputsection} />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.inputsectionLebal}>Password</Text>
        <TextInput
          placeholder="enter your password"
          style={styles.inputsection}
          secureTextEntry={true}
        />
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          padding: 15,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 17 }}>
          Sign In
        </Text>
      </TouchableOpacity>
      {/*  */}
      <TouchableOpacity
        style={{
          backgroundColor: "gray",
          padding: 13,
          borderRadius: 15,
          marginTop: 30,
          borderWidth: 1,
          borderColor: "#F9F8F",
        }}
        onPress={() => router.replace("/auth/sign-up")}
      >
        <Text style={{ color: "#000", textAlign: "center", fontSize: 17 }}>
          Create Account
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  inputsection: {
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  inputsectionLebal: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
