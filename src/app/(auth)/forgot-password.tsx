import { checkEmail } from "@/src/api/services/recover-password/check-email";
import Button from "@/src/components/shared/Button";
import Input from "@/src/components/shared/Input";
import RoundedIcon from "@/src/components/shared/RoundedIcon";
import { StyledText } from "@/src/components/shared/StyledText";
import { AxiosError } from "axios";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function ForgotPassword() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const [emailToCheck, setEmailToCheck] = useState("");

  const handleEmailCheck = () => {
    checkEmail(emailToCheck)
      .then(() => {
        console.log("deu certo");
      })
      .catch((err: AxiosError) => {
        console.error(err);
      });
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.header}>
          <RoundedIcon icon="lock" />

          {/* Header Title */}
          <StyledText style={styles.headerTitle}>
            Esqueceu sua senha?
          </StyledText>

          {/* Header description */}
          <StyledText style={styles.headerDescription}>
            Não tem problema! Acontece com todo mundo.
          </StyledText>
        </View>

        <View style={styles.form}>
          <Input
            label="Insira seu e-mail"
            value={emailToCheck}
            onChangeText={(text) => setEmailToCheck(text)}
          />
        </View>
      </View>

      <View style={styles.actions}>
        <Button
          onPress={handleEmailCheck}
          label="Mandar e-mail de recuperação"
        />
        <Button
          variant="outline"
          label="Voltar"
          onPress={() => navigation.navigate("login")}
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
