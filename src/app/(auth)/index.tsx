import { ImageBackground, StyleSheet, View } from "react-native";
import BottomDrawer from "@/src/components/BottomDrawer";
import Button from "@/src/components/Button";

export default function TabOneScreen() {
  return (
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
            <Button label="Já tenho uma conta" />
            <Button variant="outline" label="Ainda não tenho uma conta" />
          </View>
        }
      />
    </ImageBackground>
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
