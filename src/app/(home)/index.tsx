import Button from "@/src/components/Button";
import { StyledText } from "@/src/components/StyledText";
import { useNavigation } from "expo-router";
import React from "react";
import { View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function HomeRoot() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View>
      <StyledText>Test</StyledText>

      <Button onPress={() => navigation.navigate("(auth)")} label="Voltar " />
    </View>
  );
}
