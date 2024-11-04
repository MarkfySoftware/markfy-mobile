import React, { useState, useCallback } from "react";
import { View, FlatList, StyleSheet, Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { IProduct } from "@/src/types/Product";
import { StyledText } from "@/src/components/shared/StyledText";
import Button from "@/src/components/shared/Button";
import ContentWrapper from "@/src/components/layout/ContentWrapper";
import Colors from "@/src/constants/Colors";
import { useFocusEffect } from "@react-navigation/native";

export default function Cart() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para carregar os produtos do carrinho
  const loadCartItems = async () => {
    try {
      setLoading(true);
      const cartData = await AsyncStorage.getItem("cart");
      const parsedData = cartData ? JSON.parse(cartData) : [];

      // Filtra apenas itens válidos com ID
      const validItems = parsedData.filter((item: IProduct) => item && item.id);

      setCartItems(validItems);
    } catch (error) {
      console.error("Failed to load cart items:", error);
    } finally {
      setLoading(false);
    }
  };

  // Função para remover um item específico do carrinho
  const removeItemFromCart = async (productId: number) => {
    try {
      const updatedCart = cartItems.filter((item) => item.id !== productId);
      setCartItems(updatedCart);
      await AsyncStorage.setItem("cart", JSON.stringify(updatedCart));
      Alert.alert("Sucesso!", "Produto removido do carrinho!");
    } catch (error) {
      console.error("Failed to remove item from cart:", error);
      Alert.alert("Error", "Falha ao remover o produto do carrinho.");
    }
  };

  // Função para limpar o carrinho
  const clearCart = async () => {
    try {
      await AsyncStorage.removeItem("cart");
      setCartItems([]);
      Alert.alert("Sucesso!", "Carrinho esvaziado com sucesso!");
    } catch (error) {
      console.error("Failed to clear cart:", error);
      Alert.alert("Error", "Falha ao esvaziar o carrinho.");
    }
  };

  // Função para finalizar a compra
  const finalizePurchase = () => {
    if (cartItems.length === 0) {
      Alert.alert(
        "Carrinho vazio",
        "Adicione itens ao carrinho antes de finalizar a compra."
      );
      return;
    }

    Alert.alert("Compra finalizada", "Obrigado por sua compra!");
    clearCart();
  };

  // Usando useFocusEffect para carregar os itens toda vez que a tela é focada
  useFocusEffect(
    useCallback(() => {
      loadCartItems();
    }, [])
  );

  return (
    <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
      <ContentWrapper
        headerContent={
          <View style={styles.header}>
            <StyledText style={styles.headerName}>Meu Carrinho</StyledText>
          </View>
        }
      >
        {loading ? (
          <View style={styles.loadingContainer}>
            <StyledText style={styles.loadingText}>Carregando...</StyledText>
          </View>
        ) : (
          <View style={styles.content}>
            {cartItems.length === 0 ? (
              <StyledText style={styles.emptyCartText}>
                Seu carrinho está vazio.
              </StyledText>
            ) : (
              <FlatList
                data={cartItems}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                  <View style={styles.cartItem}>
                    <View>
                      <StyledText style={styles.productName}>
                        {item.nome}
                      </StyledText>
                      <StyledText style={styles.productPrice}>
                        R$ {item.valor.toFixed(2)}
                      </StyledText>
                    </View>
                    <Button
                      label="Remover"
                      onPress={() => removeItemFromCart(item.id)}
                    />
                  </View>
                )}
              />
            )}

            {cartItems.length > 0 && (
              <View style={styles.buttonContainer}>
                <Button label="Esvaziar carrinho" onPress={clearCart} />
                <Button label="Finalizar compra" onPress={finalizePurchase} />
              </View>
            )}
          </View>
        )}
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
    paddingHorizontal: 16,
    paddingTop: 20,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    fontSize: 16,
    color: "#666",
  },
  emptyCartText: {
    fontSize: 16,
    color: "#666",
    textAlign: "center",
    marginTop: 20,
  },
  cartItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2,
  },
  productName: {
    fontSize: 16,
    color: "#333",
  },
  productPrice: {
    fontSize: 16,
    color: "#333",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
});
