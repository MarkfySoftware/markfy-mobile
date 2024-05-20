import React from "react";
import { StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { StyledText } from "../../shared/StyledText";
import { IProduct } from "@/src/types/Product";
import { useNavigation } from "expo-router";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";

export default function RowProduct({ product }: { product: IProduct }) {
  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("product", { id: product.id })}
      style={styles.container}
    >
      {/* Image */}
      <View style={styles.productImage}></View>

      {/* Product Data */}
      <View style={styles.productData}>
        {/* Name */}
        <StyledText style={styles.productTitle}>{product.nome}</StyledText>

        {/* Pricing */}
        <View>
          <StyledText style={styles.productFullPrice}>
            {product.valor.toLocaleString("pt-BR", {
              style: "currency",
              currency: "BRL",
            })}
          </StyledText>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    gap: 12,
  },

  productImage: {
    width: 90,
    height: 90,
    borderRadius: 8,
    backgroundColor: "#ededed",
  },

  productData: {
    display: "flex",
    gap: 4,
  },

  productFullPrice: {
    fontSize: 16,
    fontWeight: "bold",
  },

  productTitle: {
    fontSize: 18,
    color: "#797979",
  },
});
