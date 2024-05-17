import React from "react";
import { View } from "react-native";
import { StyledText } from "../../shared/StyledText";

export default function NoProductsFound() {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        paddingVertical: 20,
        gap: 8,
      }}
    >
      <StyledText style={{ fontSize: 18 }}>Ooops!</StyledText>
      <StyledText style={{ fontSize: 16, color: "#797979" }}>
        Não conseguimos encontrar nenhum produto
      </StyledText>
    </View>
  );
}
