// import { StyleSheet, Text, View } from "react-native";
// import React, { useState } from "react";
// import Ionicons from "@expo/vector-icons/Ionicons";
// import StartNewTripCard from "../../components/StartNewTripCard";

// const MyTrip = () => {
//   const [userTrips, setUserTrips] = useState([]);

//   return (
//     <View
//       style={{
//         padding: 25,
//         paddingTop: 55,
//       }}
//     >
//       <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
//         <Text style={{ fontSize: 30, fontWeight: "bold" }}>MyTrip</Text>
//         <Ionicons name="add-circle" size={50} color="black" />
//       </View>
//       {userTrips.length === 0 ? <StartNewTripCard /> : null}
//     </View>
//   );
// };

// export default MyTrip;
// const styles = StyleSheet.create({});



import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import StartNewTripCard from "../../components/StartNewTripCard";

const MyTrip = () => {
  const [userTrips, setUserTrips] = useState([]);

  return (
    <View
      style={{
        padding: 25,
        paddingTop: 55,
        backgroundColor: "#fff",
        height: "100%",
      }}
    >
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>MyTrip</Text>
        <Ionicons name="add-circle" size={50} color="black" />
      </View>
      {userTrips.length === 0 ? <StartNewTripCard /> : null}
    </View>
  );
};

export default MyTrip;

const styles = StyleSheet.create({});
