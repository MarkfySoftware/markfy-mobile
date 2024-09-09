import React, { useEffect, useRef } from "react";
import { View, Animated, StyleSheet } from "react-native";

export default function Skeleton() {
  const opacity = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 0.5,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [opacity]);

  const animatedStyle = {
    opacity,
  };

  return (
    <Animated.View style={[styles.skeleton, animatedStyle]}></Animated.View>
  );
}

const styles = StyleSheet.create({
  skeleton: {
    width: "100%",
    height: 60,
    backgroundColor: "#d6d6d6",
    borderRadius: 10,
  },
});
