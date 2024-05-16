import React from 'react'
import { StyleSheet, View } from 'react-native'
import { StyledText } from '../shared/StyledText'

interface BottomDrawerProps {
    title: string
    description: string
    content?: React.ReactNode
}

export default function BottomDrawer({
    title,
    description,
    content,
}: BottomDrawerProps) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <StyledText style={styles.headerTitle}>{title}</StyledText>
            </View>

            <View style={styles.content}>
                <StyledText style={styles.contentDescription}>
                    {description}
                </StyledText>
            </View>

            <View>{content}</View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        padding: 24,
    },

    header: { marginBottom: 10 },

    headerTitle: {
        fontSize: 26,
        fontWeight: 700,
    },

    content: {
        marginBottom: 18,
    },

    contentDescription: { fontSize: 20, color: '#858585' },
})
