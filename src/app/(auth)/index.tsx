import { ImageBackground, StyleSheet, View } from "react-native";
import BottomDrawer from "@/src/components/layout/BottomDrawer";
import Button from "@/src/components/shared/Button";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { useAuth } from "@/src/contexts/AuthContext";
import { useEffect } from "react";

export default function AuthRoot() {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={styles.backgroundImage}
        source={require("../../../assets/images/auth-bg.png")}
        resizeMode="cover"
      >
        <BottomDrawer
          description="Confie em nosso olhar e destaque-se em cada esquina."
          title="Entrar ou criar conta."
          content={
            <View style={styles.actions}>
              <Button
                onPress={() => navigation.navigate("login")}
                label="Já tenho uma conta"
              />
              <Button
                variant="outline"
                onPress={() => navigation.navigate("register")}
                label="Ainda não tenho uma conta"
              />
            </View>
          }
        />
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    display: "flex",
    justifyContent: "flex-end",
    flex: 1,
  },

  actions: { display: "flex", flexDirection: "column", gap: 10 },
});
