import Colors from '@/src/constants/Colors'
import { Ionicons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import React from 'react'

export default function HomeLayout() {
    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors.primary,
                tabBarInactiveTintColor: 'gray',
                tabBarItemStyle: { height: 70 }, // Aumentar a altura das abas
                tabBarLabelStyle: { fontSize: 24 }, // Aumentar o tamanho da fonte das labels das abas
                tabBarIconStyle: { width: 40, height: 40 }, // Ajustar o tamanho do ícone
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    headerShown: false,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="home" color={color} size={size} /> // Ajuste o tamanho do ícone
                    ),
                }}
            />
        </Tabs>
    )
}
