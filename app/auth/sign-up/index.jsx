import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRouter } from "expo-router";
import Ionicons from "@expo/vector-icons/Ionicons";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../config/FiebaseConfig";
 

const Signup = () => {
  const navigation = useNavigation();
  const router = useRouter();
  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, []);

  // const onCreateAccount = () => {
  //   createUserWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed up
  //       const user = userCredential.user;
  //       // ...
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       console.log("errorMessage", errorMessage);
  //       console.log("errorCode", errorCode);

  //       // ..
  //     });
  // };

  return (
    <View
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
        <TextInput placeholder="enter your name" style={styles.inputsection} />
      </View>
      <View style={{ marginTop: 10 }}>
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
    </View>
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
