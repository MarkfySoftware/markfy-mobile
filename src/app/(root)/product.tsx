import { getProductById } from "@/src/api/services/products/get-product-by-id";
import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import Button from "@/src/components/shared/Button";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import { IProduct } from "@/src/types/Product";
import { Ionicons } from "@expo/vector-icons";
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { NativeStackNavigationProp } from "react-native-screens/lib/typescript/native-stack/types";
import { ProductsList } from ".";

export default function Product() {
  const [product, setProduct] = useState<IProduct | undefined>(undefined);

  const navigation = useNavigation<NativeStackNavigationProp<any>>();

  const route = useRoute();
  const { id } = route.params as { id: string };

  getProductById(id).then((data) => {
    setProduct(data);
  });

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <Ionicons
              onPress={() => navigation.navigate("index")}
              name="arrow-back"
              color="white"
              size={30}
            />
          </View>
        }
      >
        <View>
          {/* Last Trendings */}
          <View style={styles.content}>
            <ContentDrawer>
              <ProductShowcase product={product} />
            </ContentDrawer>

            <ContentDrawer title="Você pode gostar também">
              <ProductsList />
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

  content: {
    display: "flex",
    gap: 20,
  },
});

function ProductShowcase({ product }: { product?: IProduct }) {
  return (
    <View style={productShowcaseStyles.container}>
      <View style={productShowcaseStyles.content}>
        {/* Product Images */}
        <View style={productShowcaseStyles.productImages}>
          <View style={productShowcaseStyles.productSelectedImage} />
        </View>

        {/* Product Title */}
        <StyledText style={productShowcaseStyles.productTitle}>
          {product?.nome}
        </StyledText>

        {/* Pricing */}
        <View style={productShowcaseStyles.pricingContainer}>
          <StyledText style={productShowcaseStyles.productPrice}>
            R$ 119,90
          </StyledText>
        </View>
      </View>

      <View style={productShowcaseStyles.actions}>
        <Button label="Adicionar ao carrinho" />
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

  productImagesBelt: {},

  productTitle: { fontSize: 19, color: "#434343" },

  pricingContainer: {},

  productPrice: { fontSize: 19, color: "#2D2D2D" },

  actions: { display: "flex", gap: 10 },
});
