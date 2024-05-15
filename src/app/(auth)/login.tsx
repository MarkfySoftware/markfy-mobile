import { StyleSheet, TextInput } from "react-native";

import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import RoundedIcon from "@/src/components/RoundedIcon";
import { StyledText } from "@/src/components/StyledText";
import { View } from "@/src/components/Themed";
import { useNavigation } from "expo-router";
import { useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function LoginScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const passwordRef = useRef<TextInput>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <RoundedIcon icon="lock" />

          {/* Header Title */}
          <StyledText style={styles.headerTitle}>Vamos te conectar!</StyledText>

          {/* Header description */}
          <StyledText style={styles.headerDescription}>
            Coloque o e-mail e senha utilizados na hora da criação da conta.
          </StyledText>
        </View>

        <View style={styles.form}>
          <Input
            label="E-mail"
            onSubmitEditing={() => passwordRef.current?.focus()}
          />
          <Input label="Senha" />
        </View>
      </View>

      <View style={styles.actions}>
        <Button label="Entrar na conta" />
        <Button
          onPress={() => navigation.navigate("register")}
          variant="outline"
          label="Ainda não tenho uma conta"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    minHeight: 550,
    paddingVertical: 30,
    paddingHorizontal: 20,
    // justifyContent: "center",
  },

  header: { display: "flex", alignItems: "center", gap: 12 },

  headerTitle: {
    fontSize: 24,
  },

  headerDescription: { fontSize: 18, textAlign: "center", color: "#858585" },

  form: {
    display: "flex",
    gap: 20,
    height: "100%",
    width: "100%",
    marginTop: 20,
  },

  // formInputRow: {
  //   width: "100%",
  //   display: "flex",
  //   flexDirection: "row",
  //   gap: 8,
  // },

  actions: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    display: "flex",
    gap: 12,
  },
});