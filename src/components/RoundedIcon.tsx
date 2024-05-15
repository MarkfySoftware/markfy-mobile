import { FontAwesome } from "@expo/vector-icons";
import { FontAwesomeIconsType } from "@expo/vector-icons/build/FontAwesome";
import React from "react";
import { View } from "react-native";
import Colors from "../constants/Colors";

export default function RoundedIcon({ icon }: { icon: FontAwesomeIconsType }) {
  return (
    <View
      style={{
        backgroundColor: "#EDEDED",
        aspectRatio: 1 / 1,
        display: "flex",
        padding: 15,

        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <FontAwesome name={icon} color={Colors.primary} size={60} />
    </View>
  );
}
