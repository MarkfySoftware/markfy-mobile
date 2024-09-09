import React, { useState } from "react";
import { StyleSheet, TextInput, TextInputProps, View } from "react-native";
import Colors from "../../constants/Colors";
import { StyledText } from "./StyledText";

interface InputProps extends TextInputProps {
  label?: string;
}

export default function Input({ label, ...props }: InputProps) {
  const [isFocused, setIsFocused] = useState(false);

  const mixedStyles = {
    ...styles.input,
    ...(isFocused && styles.inputFocused),
  };

  return (
    <View style={styles.container}>
      {label && <StyledText style={styles.label}>{label}</StyledText>}

      <TextInput
        {...props}
        style={mixedStyles}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
    gap: 4,
  },

  label: { fontSize: 16 },

  input: {
    borderWidth: 1,
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 18,
    borderColor: "#DDDDDD",
    fontSize: 18,
  },

  // Focused styles
  inputFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
});
