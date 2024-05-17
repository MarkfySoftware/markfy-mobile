import NoProductsFound from "@/src/components/cases/products/NoProductsFound";
import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { useNavigation } from "expo-router";
import React from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function HomeRoot() {
  const { user } = useAuth();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>
              Olá, {user?.nome.split(" ")[0]}
            </StyledText>
          </View>
        }
      >
        <View>
          {/* Last Trendings */}
          <View>
            <ContentDrawer title="Últimas tendências" extraAction={() => {}}>
              <NoProductsFound />
            </ContentDrawer>
          </View>
        </View>
      </ContentWrapper>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  headerName: {
    fontSize: 24,

    color: "white",
  },
});
