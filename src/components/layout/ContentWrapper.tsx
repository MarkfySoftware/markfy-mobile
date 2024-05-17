import Colors from "@/src/constants/Colors";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyledText } from "../shared/StyledText";

interface ContentWrapperProps {
  children?: React.ReactNode;
  headerContent?: React.ReactNode;
}

export default function ContentWrapper({
  children,
  headerContent,
}: ContentWrapperProps) {
  return (
    <View style={{ flex: 1 }}>
      <View style={styles.container}></View>

      <SafeAreaView
        style={{
          flex: 1,
          paddingVertical: 20,
          paddingHorizontal: 20,
        }}
      >
        <View style={{ flex: 1 }}>
          {/* Header */}
          <View style={{ marginBottom: 20 }}>{headerContent}</View>

          {/* Content */}
          <View>{children}</View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
    top: 0,
    width: "100%",
    height: 140,
    position: "absolute",
  },
});
