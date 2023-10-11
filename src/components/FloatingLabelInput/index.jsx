import React, { useState, useRef } from 'react'
import { Animated, View, TextInput, Text, Easing } from 'react-native'

import { styles } from './styles'

const FloatingLabelInput = ({ label, onChangeText, ...props }) => {

    const [isFocused, setIsFocused] = useState(false)
    const [isEmty, setIsEmty] = useState(true)
    const [value, setValue] = useState('')

    const fadeAnim = useRef(new Animated.Value(0)).current
    const fontSizeAnim = useRef(new Animated.Value(17)).current;

    const handleFocus = () => {
        setIsFocused(true)
        handleAnimation()
    }
    const handleBlur = () => {
        setIsFocused(false)
        handleAnimation()
    }

    const handleChangeText = (text) => {
        setValue(text)
        setIsEmty(text.length == 0 ? true : false)
        onChangeText(text)
    }

    function handleAnimation() {
        if (isEmty && isFocused) {
            fadeOut()
            bigfontAnim()
        } else {
            fadeIn()
            smallfontAnim()
        }
    }

    function fadeIn() {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 500,
            useNativeDriver: true
        }).start();
    }

    function fadeOut() {
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }).start();
    }

    function smallfontAnim() {
        Animated.timing(fontSizeAnim, {
            toValue: 15,             // Tamaño de fuente final
            duration: 500,         // Duración de la animación en milisegundos
            easing: Easing.linear,  // Función de interpolación (puede variar según tus necesidades)
            useNativeDriver: false, // Usa el controlador nativo (puede variar según la configuración)
        }).start();
    }

    function bigfontAnim() {
        Animated.timing(fontSizeAnim, {
            toValue: 17,             // Tamaño de fuente final
            duration: 200,         // Duración de la animación en milisegundos
            easing: Easing.linear,  // Función de interpolación (puede variar según tus necesidades)
            useNativeDriver: false, // Usa el controlador nativo (puede variar según la configuración)
        }).start();
    }

    return (
        <View style={[styles.container, isFocused && styles.containerFocused]}>
            <Animated.View
                style={[styles.label, {
                    transform: [
                        {
                            translateY: fadeAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, -30]
                            }),
                        }
                    ],
                    backgroundColor: 'green',
                }]}
            >
                <Animated.Text
                    style={[styles.label, {
                        fontSize: fontSizeAnim, // Aplica la animación a la propiedad fontSize
                    }]}
                >
                    <Text style={styles.label}>{label}</Text>
                </Animated.Text>
            </Animated.View>
            <TextInput
                {...props}
                style={styles.input}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChangeText={handleChangeText}
            />
        </View>
    )
}

export default FloatingLabelInput
