import { StyleSheet, View } from "react-native";
import Button from "@/src/components/shared/Button";
import Input from "@/src/components/shared/Input";
import RoundedIcon from "@/src/components/shared/RoundedIcon";
import { StyledText } from "@/src/components/shared/StyledText";
import { useNavigation } from "expo-router";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useAuth } from "@/src/contexts/AuthContext";
import Colors from "@/src/constants/Colors";

export default function LoginScreen() {
  const { signIn } = useAuth();

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [userData, setUserData] = useState({ email: "", password: "" });

  const handleInputChange = (name: string, value: string) => {
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

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
            onChangeText={(text) => handleInputChange("email", text)}
            value={userData.email}
            label="E-mail"
          />
          <Input
            onChangeText={(text) => handleInputChange("password", text)}
            value={userData.password}
            label="Senha"
          />

          <StyledText
            onPress={() => navigation.navigate("forgot-password")}
            style={{ color: Colors.primary }}
          >
            Esqueci a senha
          </StyledText>
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          onPress={() => navigation.navigate("(root)")}
          label="Entrar na conta"
        />
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
