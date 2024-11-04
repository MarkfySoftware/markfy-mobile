import { getAllProducts } from "@/src/api/services/products/get-all-products";
import NoProductsFound from "@/src/components/cases/products/NoProductsFound";
import NoTrendingProductsFound from "@/src/components/cases/products/NoTrendingProductsFound";
import RowProduct from "@/src/components/cases/products/RowProduct";
import ContentDrawer from "@/src/components/layout/ContentDrawer";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import Button from "@/src/components/shared/Button";
import Skeleton from "@/src/components/shared/Skeleton";
import { StyledText } from "@/src/components/shared/StyledText";
import Colors from "@/src/constants/Colors";
import { useAuth } from "@/src/contexts/AuthContext";
import { IProduct } from "@/src/types/Product";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";

export default function HomeRoot() {
  const { user } = useAuth();
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>
              Olá, Bruno{user?.nome.split(" ")[0]}
            </StyledText>

            <Ionicons
              onPress={() => navigation.navigate("cart" as never)}
              name="cart"
              color={"#FFF"}
              size={24}
            />
          </View>
        }
      >
        <View>
          {/* Last Trendings */}
          <View style={styles.content}>
            <ContentDrawer title="Últimas tendências">
              <NoTrendingProductsFound />
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

  headerName: {
    fontSize: 24,
    color: "white",
  },

  content: {
    display: "flex",
    gap: 20,
  },
});

export function ProductsList() {
  const mockProducts: IProduct[] = [
    {
      id: 1,
      nome: "Calça Jeans",
      valor: 120.99,
      marca: "Levis",
      tamanhoEnum: "M",
      estoque: 15,
      imagem:
        "https://dondoca.com.br/wp-content/uploads/2024/06/dondoca_com_br-calca-jeans-premium-bordado-margaridas-img-6559.jpg",
    },
    {
      id: 2,
      nome: "Jaqueta de Couro",
      valor: 199.9,
      marca: "Zara",
      tamanhoEnum: "L",
      estoque: 7,
      imagem: "https://example.com/jaqueta-de-couro.jpg",
    },
    {
      id: 3,
      nome: "Blusa de Moletom",
      valor: 79.9,
      marca: "Hering",
      tamanhoEnum: "G",
      estoque: 20,
      imagem: "https://example.com/blusa-de-moletom.jpg",
    },
    {
      id: 4,
      nome: "Vestido Floral",
      valor: 149.9,
      marca: "Farm",
      tamanhoEnum: "P",
      estoque: 5,
      imagem: "https://example.com/vestido-floral.jpg",
    },
    {
      id: 5,
      nome: "Camiseta Básica",
      valor: 29.9,
      marca: "Uniqlo",
      tamanhoEnum: "M",
      estoque: 30,
      imagem: "https://example.com/camiseta-basica.jpg",
    },
  ];

  const [products, setProducts] = useState<IProduct[]>(mockProducts);

  return (
    <View style={{ display: "flex", gap: 20 }}>
      {products.length === 0 ? (
        <NoProductsFound />
      ) : (
        products.map((product) => (
          <RowProduct key={product.id} product={product} />
        ))
      )}
    </View>
  );
}
