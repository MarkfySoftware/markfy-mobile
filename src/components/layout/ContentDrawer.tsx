import React from "react";
import { StyleSheet, View } from "react-native";
import { StyledText } from "../shared/StyledText";
import Colors from "@/src/constants/Colors";

interface ContentDrawerProps {
  title?: string;
  extraAction?: () => void;
  children?: React.ReactNode;
}

export default function ContentDrawer({
  title,
  extraAction,
  children,
}: ContentDrawerProps) {
  return (
    <View style={styles.container}>
      {/* Header */}
      {title && (
        <View style={styles.header}>
          <StyledText style={styles.headerTitle}>{title}</StyledText>

          {extraAction && (
            <StyledText style={styles.headerExtraAction}>Ver mais</StyledText>
          )}
        </View>
      )}

      {/* Content */}
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    padding: 12,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#ebebeb",
    display: "flex",
    gap: 20,
  },

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerTitle: {
    fontSize: 20,
  },

  headerExtraAction: {
    fontSize: 14,
    color: Colors.primary,
  },
});
