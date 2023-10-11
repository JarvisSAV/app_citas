import React, { useEffect, useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import DatePicker, { getFormatedDate } from 'react-native-modern-datepicker'

import { styles } from './styles'
import FloatingLabelInput from '../FloatingLabelInput'

// obtener fecha actual
const date = new Date()
const day = date.getDate()
const month = date.getMonth() + 1
const year = date.getFullYear()
const startDate = `${year}/${month}/${day}`

function ModalFormulario({ isOpen, closeModal, setPacientes }) {

    const [open, setOpen] = useState(false)
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        paciente: '',
        propietario: '',
        email: '',
        telefono: '',
        fecha: startDate,
        sintomas: '',
    })

    const handleInputChange = (name, value) => {
        setFormData({ ...formData, [name]: value });
        console.log(formData)
    }

    const validateForm = () => {
        const newErrors = {};

        // console.log((Object.keys(newErrors).length === 0))

        if (!formData.paciente) {
            newErrors.paciente = 'El nombre del paciente es obligatorio'
        }
        if (!formData.propietario) {
            newErrors.propietario = 'El nombre del propietario es obligatorio'
        }
        if (!formData.email) {
            newErrors.email = 'El email del propietario es obligatorio'
        }
        if (!formData.telefono) {
            newErrors.telefono = 'El telefono del propietario es obligatorio'
        }
        if (!formData.fecha) {
            newErrors.fecha = 'La fecha es obligatoria'
        }
        if (!formData.sintomas) {
            newErrors.sintomas = 'Los sintomas son obligatorios'
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0
    }

    function handleOnPress() {
        setOpen(!open)
    }

    function handleChange(propDate) {
        setOpen(false)
        handleInputChange('fecha', propDate)
    }

    function handleSave() {
        if (validateForm()) {
            setPacientes(prevState => [...prevState, formData])
            setFormData({
                paciente: '',
                propietario: '',
                email: '',
                telefono: '',
                fecha: startDate,
                sintomas: '',
            })
            closeModal()
            return
        }
        console.log('error')
    }

    const handleOnPressClose = () => {
        closeModal()
        setErrors({})
    }

    return (
        <>
            <Modal visible={isOpen} animationType='slide'>
                <View style={styles.container}>
                    <FloatingLabelInput
                        label="Nombre del paciente"
                        style={styles.input}
                        onChangeText={(text) => handleInputChange('paciente', text)}
                    />
                    {errors.paciente && <Text style={styles.errorText} >{errors.paciente}</Text>}

                    <FloatingLabelInput
                        label="Nombre del propietario"
                        style={styles.input}
                        onChangeText={(text) => handleInputChange('propietario', text)}
                    />
                    {errors.propietario && <Text style={styles.errorText} >{errors.propietario}</Text>}

                    <FloatingLabelInput
                        label="Email del propietario"
                        keyboardType='email-address'
                        style={styles.input}
                        onChangeText={(text) => handleInputChange('email', text)}
                    />
                    {errors.email && <Text style={styles.errorText} >{errors.email}</Text>}

                    <FloatingLabelInput
                        label="Teléfono del propietario"
                        keyboardType='numeric'
                        style={styles.input}
                        onChangeText={(text) => handleInputChange('telefono', text)}
                    />
                    {errors.telefono && <Text style={styles.errorText} >{errors.telefono}</Text>}

                    <Text style={style.label}>Fecha</Text>
                    <TouchableOpacity onPress={handleOnPress} style={style.input}>
                        <Text style={{ color: '#fff', textAlignVertical: 'bottom', flex: 1 }}>{formData.fecha}</Text>
                    </TouchableOpacity>
                    {errors.fecha && <Text style={styles.errorText} >{errors.fecha}</Text>}

                    <FloatingLabelInput
                        label="Sintomas"
                        style={styles.input}
                        onChangeText={(text) => handleInputChange('sintomas', text)}
                    />
                    {errors.sintomas && <Text style={styles.errorText} >{errors.sintomas}</Text>}

                    <View style={styles.containerButtons}>
                        <TouchableOpacity style={styles.button} onPress={handleSave}>
                            <Text style={styles.buttonText} >Aceptar</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={handleOnPressClose}>
                            <Text style={styles.buttonText} >Cerrar</Text>
                        </TouchableOpacity>
                    </View>

                    <Modal
                        animationType='none'
                        onDismiss={() => console.log('cerrado')}
                        onShow={() => console.log('show')}
                        transparent
                        visible={open}
                    >
                        <View style={style.centeredView}>
                            <View style={style.modalView}>
                                <DatePicker
                                    options={{
                                        backgroundColor: '#090C08',
                                        textHeaderColor: '#FFA25B',
                                        textDefaultColor: '#F6E7C1',
                                        selectedTextColor: '#fff',
                                        mainColor: '#F4722B',
                                        textSecondaryColor: '#D6C7A1',
                                        borderColor: 'rgba(122, 146, 165, 0.1)',
                                    }}
                                    selected={startDate}
                                    mode="calendar"
                                    maximumDate={'2023-12-12'}
                                    style={{ borderRadius: 10 }}
                                    onDateChange={handleChange}
                                />
                                <TouchableOpacity onPress={handleOnPress}>
                                    <Text style={{ color: '#fff' }}>Cerrar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </Modal>
                </View>
            </Modal>
        </>
    )
}

export default ModalFormulario

const style = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: '#fff'
    },
    filaSave: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
    },
    buttonSave: {
        backgroundColor: '#F4722B',
        padding: 10,
        borderRadius: 10,
    },
    options: {
        flexDirection: 'row',
        padding: 10,
    },
    option: {
        padding: 15,
        width: '33%',
        // width: '50%',
        alignItems: 'center',
    },
    label: {
        color: '#fff',
        marginHorizontal: 20,
        marginTop: 20,
        fontWeight: 'bold',
    },
    input: {
        color: '#fff',
        borderColor: '#fff',
        borderWidth: 1,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        marginHorizontal: 20,
        height: 40,
        padding: 10,
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff24',
    },
    modalView: {
        margin: 20,
        backgroundColor: '#090C08',
        borderRadius: 20,
        width: '90%',
        paddingBottom: 20,
        alignItems: "center",
        shadowColor: "#fff",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
})