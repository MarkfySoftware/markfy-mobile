import React from "react";
import { StyleSheet, View } from "react-native";
import { StyledText } from "./StyledText";

export default function Alert() {
  return (
    <View style={styles.container}>
      <StyledText style={styles.title}>Em desenvolvimento</StyledText>
      <StyledText style={styles.description}>
        Essa seção está planejada para o futuro
      </StyledText>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#fffae8",
    borderWidth: 1,
    borderColor: "#c2ae69",
  },

  title: { color: "#a38827" },

  description: { color: "#a38827" },
});
