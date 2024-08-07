import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/FiebaseConfig";

const Signup = () => {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  const onCreateAccount = () => {
    if (!email || !password || !fullName) {
      ToastAndroid.show("Please enter all the fields", ToastAndroid.BOTTOM);
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        router.replace("/MyTrip");
        ToastAndroid.show(`Welcome back, ${fullName}!`, ToastAndroid.LONG);

        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/email-already-in-use") {
          ToastAndroid.show(
            "User already exists. Please log in.",
            ToastAndroid.SHORT
          );
        } else {
          ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
        }
        // ..
      });
  };

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [fullName, setFullName] = useState("");
  return (
    <ScrollView
      style={{
        padding: 20,
        paddingTop: 40,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <TouchableOpacity onPress={() => router.push("auth/Signin")}>
        <Ionicons name="arrow-back" size={29} color="black" />
      </TouchableOpacity>
      <Text style={{ fontSize: 30, fontWeight: "bold", marginTop: 30 }}>
        Create your Account
      </Text>
      <View style={{ marginTop: 40 }}>
        <Text style={styles.inputsectionLebal}>User Name</Text>
        <TextInput
          placeholder="enter your name"
          style={styles.inputsection}
          onChangeText={(value) => setFullName(value)}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.inputsectionLebal}>Email</Text>
        <TextInput
          placeholder="enter your email"
          style={styles.inputsection}
          onChangeText={(value) => setemail(value)}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={styles.inputsectionLebal}>Password</Text>
        <TextInput
          placeholder="enter your password"
          style={styles.inputsection}
          secureTextEntry={true}
          onChangeText={(value) => setpassword(value)}
        />
      </View>
      <TouchableOpacity
        onPress={onCreateAccount}
        style={{
          backgroundColor: "#000",
          padding: 15,
          borderRadius: 15,
          marginTop: 50,
        }}
      >
        <Text style={{ color: "#fff", textAlign: "center", fontSize: 17 }}>
          Sign Up
        </Text>
      </TouchableOpacity>
      {/*  */}
      <TouchableOpacity
        style={{
          backgroundColor: "#fff",
          padding: 13,
          borderRadius: 15,
          marginTop: 30,
          borderWidth: 1,
          borderColor: "##F9F8F",
        }}
        onPress={() => router.push("auth/Signin")}
      >
        <Text style={{ color: "#000", textAlign: "center", fontSize: 17 }}>
          Sign In
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Signup;

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
