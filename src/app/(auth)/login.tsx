import { StyleSheet } from "react-native";

import EditScreenInfo from "@/src/components/EditScreenInfo";
import { View } from "@/src/components/Themed";
import RoundedIcon from "@/src/components/RoundedIcon";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyledText } from "@/src/components/StyledText";

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingVertical: 30,
    paddingHorizontal: 14,
    // justifyContent: "center",
  },

  header: { display: "flex", alignItems: "center", gap: 12 },

  headerTitle: {
    fontSize: 24,
  },

  headerDescription: { fontSize: 18, textAlign: "center", color: "#858585" },
});
