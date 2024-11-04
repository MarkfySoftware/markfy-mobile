import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import Button from "@/src/components/shared/Button";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import { IProduct } from "@/src/types/Product";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useState } from "react";
import { StyleSheet, View, Alert } from "react-native";
import { ProductsList } from ".";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Product() {
  const [product] = useState<IProduct>({
    estoque: 12,
    id: 1,
    marca: "Hering",
    nome: "Calça Jeans",
    tamanhoEnum: "G",
    valor: 120.99,
  });

  const navigation = useNavigation();
  const route = useRoute();
  const { id } = route.params as { id: string };

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <Ionicons
              onPress={() => navigation.navigate("index" as never)}
              name="arrow-back"
              color="white"
              size={30}
            />
          </View>
        }
      >
        <View style={styles.content}>
          <ContentDrawer>
            <ProductShowcase product={product} />
          </ContentDrawer>

          <ContentDrawer title="Você pode gostar também">
            <ProductsList />
          </ContentDrawer>
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
  content: {
    display: "flex",
    gap: 20,
  },
});

function ProductShowcase({ product }: { product: IProduct }) {
  const addToCart = async () => {
    try {
      const existingCart = await AsyncStorage.getItem("cart");
      const cart = existingCart ? JSON.parse(existingCart) : [];

      cart.push(product);

      await AsyncStorage.setItem("cart", JSON.stringify(cart));
      Alert.alert("Sucesso!", "Produto adicionado ao carrinho!");
    } catch (error) {
      console.error("Failed to add product to cart:", error);
      Alert.alert("Erro", "Falha ao adicionar o produto ao carrinho.");
    }
  };

  return (
    <View style={productShowcaseStyles.container}>
      <View style={productShowcaseStyles.content}>
        {/* Product Images */}
        <View style={productShowcaseStyles.productImages}>
          <View style={productShowcaseStyles.productSelectedImage} />
        </View>

        {/* Product Title */}
        <StyledText style={productShowcaseStyles.productTitle}>
          {product.nome}
        </StyledText>

        {/* Pricing */}
        <View style={productShowcaseStyles.pricingContainer}>
          <StyledText style={productShowcaseStyles.productPrice}>
            R$ {product.valor.toFixed(2)}
          </StyledText>
        </View>
      </View>

      <View style={productShowcaseStyles.actions}>
        <Button label="Adicionar ao carrinho" onPress={addToCart} />
        <Button variant="outline" label="Comprar agora" />
      </View>
    </View>
  );
}

const productShowcaseStyles = StyleSheet.create({
  container: { display: "flex", gap: 30 },
  content: { display: "flex", gap: 10 },
  productImages: { marginBottom: 10 },
  productSelectedImage: {
    height: 160,
    borderRadius: 8,
    width: "100%",
    backgroundColor: "#ededed",
  },
  productTitle: { fontSize: 19, color: "#434343" },
  pricingContainer: {},
  productPrice: { fontSize: 19, color: "#2D2D2D" },
  actions: { display: "flex", gap: 10 },
});
