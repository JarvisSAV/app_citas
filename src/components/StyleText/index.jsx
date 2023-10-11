import React from "react";
import { StyleSheet, Text } from "react-native";

import theme from "../../theme.js"

const styles = StyleSheet.create({
    text: {
        color: theme.colors.textPrimary,
        fontSize: theme.fontSizes.body,
        fontFamily: theme.fonts.main,
        fontWeight: theme.fontsWeights.normal
    },
    colorPrimary:{
        color: theme.colors.textPrimary
    },
    colorSecondary:{
        color: theme.colors.textSecondary
    },
    bold: {
        fontWeight: theme.fontsWeights.bold
    },
    subheading: {
        fontSize: theme.fontSizes.subheading
    },
    blue: {
        color: 'blue'
    },
    big: {
        fontSize: 30
    },
    small: {
        fontSize: 10
    }
})

export default function StyledText({ blue, bold, children, big, small, color, fontSize, fontWeight, style, ...restOfProps}) {
    const textStyles = [
        styles.text,
        //evalua el contenido de la prop
        color === 'primary' && styles.colorPrimary,
        color === 'secondary' && styles.colorSecondary,
        fontSize === 'subheading' && styles.subheading,
        fontWeight === 'bold' && styles.bold,
        style,
        //solo valida si la prop existe
        blue && styles.blue,
        bold && styles.bold,
        big && styles.big,
        small && styles.small
    ]

    return (
        <Text style={textStyles} {...restOfProps} >
            {children}
        </Text>
    )
}