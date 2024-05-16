import ContentWrapper from '@/src/components/layout/ContentWrapper'
import { StyledText } from '@/src/components/shared/StyledText'
import Colors from '@/src/constants/Colors'
import { useNavigation } from 'expo-router'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeStackNavigationProp } from 'react-native-screens/lib/typescript/native-stack/types'

export default function HomeRoot() {
    return (
        <View style={{ flex: 1, backgroundColor: Colors.rootBackground }}>
            <ContentWrapper
                headerContent={
                    <View style={styles.header}>
                        <StyledText style={styles.headerName}>
                            Olá, Gabriel
                        </StyledText>
                    </View>
                }
            />
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
})
