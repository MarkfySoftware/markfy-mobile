import Button from "@/src/components/Button";
import Input from "@/src/components/Input";
import RoundedIcon from "@/src/components/RoundedIcon";
import { StyledText } from "@/src/components/StyledText";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function Register() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <RoundedIcon icon="code-fork" />

          {/* Header Title */}
          <StyledText style={styles.headerTitle}>Hora de começar!</StyledText>

          {/* Header description */}
          <StyledText style={styles.headerDescription}>
            Crie uma conta com dados que você não vai esquecer.
          </StyledText>
        </View>

        <View style={styles.form}>
          <View style={styles.formInputRow}>
            <Input label="Nome" />
            <Input label="Sobrenome" />
          </View>

          <Input label="E-mail" />
          <Input label="Senha" />
        </View>
      </View>

      <View style={styles.actions}>
        <Button label="Criar minha conta" />
        <Button
          variant="outline"
          onPress={() => navigation.navigate("login")}
          label="Já tenho uma conta"
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

  form: { display: "flex", width: "100%", marginTop: 20, gap: 20 },

  formInputRow: {
    width: "50%",
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },

  actions: {
    paddingHorizontal: 20,
    paddingVertical: 30,
    display: "flex",
    gap: 12,
  },
});
