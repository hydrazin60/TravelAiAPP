// import {
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   TextInput,
//   ScrollView,
//   ToastAndroid,
// } from "react-native";
// import React, { useEffect, useState } from "react";
// import { useRouter } from "expo-router";
// import { useNavigation } from "expo-router";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import { auth } from "../../../config/FiebaseConfig";
// const Signin = () => {
//   const router = useRouter();
//   const navigation = useNavigation();
//   useEffect(() => {
//     navigation.setOptions({ headerShown: false });
//   }, []);
//   const [email, setemail] = useState("");
//   const [password, setpassword] = useState("");
//   const onSignIn = () => {
//     if (!email || !password) {
//       ToastAndroid.show("Please enter all the fields", ToastAndroid.BOTTOM);
//       return;
//     }

//     signInWithEmailAndPassword(auth, email, password)
//       .then((userCredential) => {
//         // Signed in
//         const user = userCredential.user;
//         ToastAndroid.show(`Welcome back, ${user.email}!`, ToastAndroid.LONG);
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         if (errorCode === "auth/user-not-found") {
//           ToastAndroid.show(
//             "User not found. Please sign up.",
//             ToastAndroid.SHORT
//           );
//         } else if (errorCode === "auth/wrong-password") {
//           ToastAndroid.show(
//             "Wrong password. Please try again.",
//             ToastAndroid.SHORT
//           );
//         } else {
//           ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
//         }
//       });
//   };

//   return (
//     <ScrollView
//       style={{
//         padding: 20,
//         paddingTop: 80,
//         backgroundColor: "#fff",
//         height: "100%",
//       }}
//     >
//       <Text style={{ fontSize: 30, fontWeight: "bold" }}>
//         Let's Sign you In
//       </Text>
//       <Text style={{ fontSize: 30, fontWeight: "bold", color: "gray" }}>
//         Welcome Back
//       </Text>
//       <Text style={{ fontSize: 30, fontWeight: "bold", color: "gray" }}>
//         You've been missed!
//       </Text>
//       <View style={{ marginTop: 50 }}>
//         <Text style={styles.inputsectionLebal}>Email</Text>
//         <TextInput
//           placeholder="enter your email"
//           style={styles.inputsection}
//           onChangeText={(value) => setemail(value)}
//         />
//       </View>
//       <View style={{ marginTop: 10 }}>
//         <Text style={styles.inputsectionLebal}>Password</Text>
//         <TextInput
//           placeholder="enter your password"
//           style={styles.inputsection}
//           secureTextEntry={true}
//           onChangeText={(value) => setpassword(value)}
//         />
//       </View>
//       <TouchableOpacity
//         style={{
//           backgroundColor: "#000",
//           padding: 15,
//           borderRadius: 15,
//           marginTop: 50,
//         }}
//         onPress={onSignIn}
//       >
//         <Text style={{ color: "#fff", textAlign: "center", fontSize: 17 }}>
//           Sign In
//         </Text>
//       </TouchableOpacity>
//       {/*  */}
//       <TouchableOpacity
//         style={{
//           backgroundColor: "gray",
//           padding: 13,
//           borderRadius: 15,
//           marginTop: 30,
//           borderWidth: 1,
//           borderColor: "#F9F8F",
//         }}
//         onPress={() => router.replace("/auth/sign-up")}
//       >
//         <Text style={{ color: "#000", textAlign: "center", fontSize: 17 }}>
//           Create Account
//         </Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };

// export default Signin;

// const styles = StyleSheet.create({
//   inputsection: {
//     padding: 12,
//     borderWidth: 1,
//     borderColor: "gray",
//     borderRadius: 15,
//     marginBottom: 10,
//     marginTop: 10,
//     fontSize: 17,
//     fontWeight: "bold",
//   },
//   inputsectionLebal: {
//     fontSize: 18,
//     fontWeight: "bold",
//   },
// });

import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  ToastAndroid,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import { useNavigation } from "expo-router";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../config/FiebaseConfig";

const Signin = () => {
  const router = useRouter();
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({ headerShown: false });
  }, [navigation]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const onSignIn = () => {
  //   if (!email || !password) {
  //     ToastAndroid.show("Please enter all the fields", ToastAndroid.BOTTOM);
  //     return;
  //   }

  //   signInWithEmailAndPassword(auth, email, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       const emailName = user.email.split("@")[0];
  //       ToastAndroid.show(`Welcome back, ${emailName}!`, ToastAndroid.LONG);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       const errorMessage = error.message;
  //       if (errorCode === "auth/user-not-found") {
  //         ToastAndroid.show(
  //           "User not found. Please sign up.",
  //           ToastAndroid.SHORT
  //         );
  //       } else if (errorCode === "auth/wrong-password") {
  //         ToastAndroid.show(
  //           "Wrong password. Please try again.",
  //           ToastAndroid.SHORT
  //         );
  //       } else {
  //         ToastAndroid.show(errorMessage, ToastAndroid.SHORT);
  //       }
  //     });
  // };

  const onSignIn = () => {
    if (!email || !password) {
      ToastAndroid.show("Please enter all the fields", ToastAndroid.BOTTOM);
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        const emailName = user.email.split("@")[0];
        ToastAndroid.show(`Welcome back, ${emailName}!`, ToastAndroid.LONG);
        // navigation.navigate("HomeScreen"); // Navigate to home screen
      })
      .catch((error) => {
        const errorCode = error.code;
        if (errorCode === "auth/wrong-password") {
          ToastAndroid.show(
            "Incorrect password. Please try again.",
            ToastAndroid.SHORT
          );
        } else if (errorCode === "auth/user-not-found") {
          ToastAndroid.show(
            "User not found. Please sign up.",
            ToastAndroid.SHORT
          );
        } else {
          ToastAndroid.show(
            "An error occurred. Please try again.",
            ToastAndroid.SHORT
          );
        }
      });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Let's Sign you In</Text>
      <Text style={styles.subtitle}>Welcome Back</Text>
      <Text style={styles.subtitle}>You've been missed!</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Email</Text>
        <TextInput
          placeholder="Enter your email"
          style={styles.input}
          onChangeText={(value) => setEmail(value)}
          value={email}
        />
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Password</Text>
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
          value={password}
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={onSignIn}>
        <Text style={styles.buttonText}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.linkButton}
        onPress={() => router.replace("/auth/sign-up")}
      >
        <Text style={styles.linkText}>Create Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
    backgroundColor: "#fff",
    height: "100%",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 30,
    fontWeight: "bold",
    color: "gray",
  },
  inputContainer: {
    marginTop: 20,
  },
  inputLabel: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    padding: 12,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 15,
    marginBottom: 10,
    marginTop: 10,
    fontSize: 17,
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "#000",
    padding: 15,
    borderRadius: 15,
    marginTop: 50,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 17,
  },
  linkButton: {
    backgroundColor: "gray",
    padding: 13,
    borderRadius: 15,
    marginTop: 30,
    borderWidth: 1,
    borderColor: "#F9F8F",
  },
  linkText: {
    color: "#000",
    textAlign: "center",
    fontSize: 17,
  },
});

export default Signin;
