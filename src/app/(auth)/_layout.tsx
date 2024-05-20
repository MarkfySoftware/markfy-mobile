import { useAuth } from "@/src/contexts/AuthContext";
import { Stack, useNavigation } from "expo-router";
import React, { useEffect } from "react";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="register" options={{ headerShown: false }} />
      <Stack.Screen name="forgot-password" options={{ headerShown: false }} />
    </Stack>
  );
}
