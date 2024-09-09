import { createAccount } from "@/src/api/services/auth/create-account";
import Button from "@/src/components/shared/Button";
import Input from "@/src/components/shared/Input";
import RoundedIcon from "@/src/components/shared/RoundedIcon";
import { StyledText } from "@/src/components/shared/StyledText";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function Register() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const initialUserData = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const [userData, setUserData] = useState(initialUserData);

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreateAccount = () => {
    if (
      !userData.email ||
      !userData.password ||
      !userData.firstName ||
      !userData.lastName
    ) {
      Alert.alert("Erro", "Por favor, preencha todos os campos.");
      return;
    }

    createAccount(userData)
      .then(() => {
        navigation.navigate("login");

        Alert.alert("Pronto", "Conta criada com sucesso!");

        setUserData(initialUserData);
        return;
      })
      .catch((err) => {
        console.error(err);
        Alert.alert(
          "Erro na criação de conta",
          "Ocorreu um erro ao criar a conta. Por favor, tente novamente."
        );
      });
  };

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
            <Input
              onChangeText={(text) => handleInputChange("firstName", text)}
              value={userData.firstName}
              label="Nome"
            />
            <Input
              onChangeText={(text) => handleInputChange("lastName", text)}
              value={userData.lastName}
              label="Sobrenome"
            />
          </View>

          <Input
            onChangeText={(text) => handleInputChange("email", text)}
            value={userData.email}
            label="E-mail"
          />
          <Input
            onChangeText={(text) => handleInputChange("password", text)}
            value={userData.password}
            label="Senha"
          />
        </View>
      </View>

      <View style={styles.actions}>
        <Button onPress={handleCreateAccount} label="Criar minha conta" />
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
