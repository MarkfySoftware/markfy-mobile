import Colors from "@/src/constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { Stack, Tabs } from "expo-router";
import React from "react";

function HomeStack() {
  return (
    <Stack>
      <Stack.Screen name="product" options={{ headerShown: false }} />
    </Stack>
  );
}

export default function HomeLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.primary,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          position: "absolute",
          height: 60,
          margin: 10,
          borderRadius: 20,
          borderTopWidth: 0,
          backgroundColor: "white",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          headerShown: false,
          tabBarLabel: "Página principal",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home-sharp" color={color} size={size} /> // Ajuste o tamanho do ícone
          ),
        }}
      />
      <Tabs.Screen
        name="product"
        options={{
          headerShown: false,
          tabBarButton: () => null,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarLabel: "Página principal",
          tabBarShowLabel: false,
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" color={color} size={size} /> // Ajuste o tamanho do ícone
          ),
        }}
      />
    </Tabs>
  );
}
