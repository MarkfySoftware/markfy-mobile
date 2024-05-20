import { getAllProducts } from '@/src/api/services/products/get-all-products'
import NoProductsFound from '@/src/components/cases/products/NoProductsFound'
import NoTrendingProductsFound from '@/src/components/cases/products/NoTrendingProductsFound'
import RowProduct from '@/src/components/cases/products/RowProduct'
import ContentDrawer from '@/src/components/layout/ContentDrawer'
import ContentWrapper from '@/src/components/layout/ContentWrapper'
import { StyledText } from '@/src/components/shared/StyledText'
import Colors from '@/src/constants/Colors'
import { useAuth } from '@/src/contexts/AuthContext'
import { IProduct } from '@/src/types/Product'
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'

export default function HomeRoot() {
    const { user } = useAuth()

    return (
        <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
            <ContentWrapper
                headerContent={
                    <View style={styles.header}>
                        <StyledText style={styles.headerName}>
                            Olá, {user?.nome.split(' ')[0]}
                        </StyledText>
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
    )
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    headerName: {
        fontSize: 24,

        color: 'white',
    },

    content: {
        display: 'flex',
        gap: 20,
    },
})

export function ProductsList() {
    const { user } = useAuth()

    const [products, setProducts] = useState<IProduct[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const fetchProducts = async () => {
        try {
            const products = await getAllProducts()
            setProducts(products)
            console.log(products)
        } catch (error) {
            console.error('Failed to fetch products:', error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        if (user) {
            fetchProducts()
        }
    }, [user])

    if (loading) {
        return <StyledText>Loading...</StyledText>
    }

    if (products.length === 0) {
        return <NoProductsFound />
    }

    return (
        <View style={{ display: 'flex', gap: 20 }}>
            {products.map((product) => (
                <RowProduct key={product.id} product={product} />
            ))}
        </View>
    )
}
