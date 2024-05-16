import React from 'react'
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'
import Colors from '../../constants/Colors'

interface ButtonProps {
    label: string
    onPress?: ((event: GestureResponderEvent) => void) | undefined
    variant?: 'outline'
}

export default function Button({ label, onPress, variant }: ButtonProps) {
    const baseStyles = {
        container: {
            padding: 10,
            borderRadius: 40,
        },
        label: {
            fontSize: 16,
            fontWeight: '600' as '600',
            textAlign: 'center' as 'center',
        },
    }

    const variantStyles = {
        // Default Styles
        default: {
            container: {
                backgroundColor: Colors.primary,
                padding: 10,
                borderRadius: 40,
            },
            label: {
                color: 'white',
            },
        },

        // Outline Styles
        outline: {
            container: {
                borderWidth: 1,
                borderColor: Colors.primary,
                padding: 10,
                borderRadius: 40,
            },
            label: {
                color: Colors.primary,
            },
        },
    }

    const selectedVariantStyles = variantStyles[variant ?? 'default']

    const combinedContainerStyles = {
        ...baseStyles.container,
        ...selectedVariantStyles.container,
    }

    const combinedLabelStyles = {
        ...baseStyles.label,
        ...selectedVariantStyles.label,
    }

    return (
        <TouchableOpacity onPress={onPress} style={combinedContainerStyles}>
            <Text style={combinedLabelStyles}>{label}</Text>
        </TouchableOpacity>
    )
}
