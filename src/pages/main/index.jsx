import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { styles } from './styles'
import StyleText from '../../components/StyleText'
import ModalFormulario from '../../components/ModalFormulario'

function Main() {

    const [modalFormulario, setModalFormulario] = useState(false)
    const [pacientes, setPacientes] = useState(data)

    function handlePress() {
        setModalFormulario(!modalFormulario)
    }

    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <View style={styles.text}>
                <StyleText bold big >Administrador de citas</StyleText>
                <StyleText fontSize='subheading'>Veterinaria</StyleText>
                <TouchableOpacity style={styles.button} onPress={handlePress}>
                    <Text style={styles.buttonText}>Agregar cita</Text>
                </TouchableOpacity>
            </View>


            <View style={styles.containerBody}>
                {
                    pacientes.length === 0
                        ?
                        <Text style={styles.subtitle}>No hay pacientes</Text>
                        :
                        <FlatList
                            style={{width: '100%'}}
                            data={pacientes}
                            keyExtractor={item => item.id}
                            ItemSeparatorComponent={() => <View style={styles.separator} />}
                            renderItem={(item) => {
                                const paciente = item.item
                                return (
                                    <View style={styles.card} >
                                        <View style={styles.cardHeader}>
                                            <StyleText bold>{paciente.paciente}</StyleText>
                                            <StyleText fontSize='subheading'>{paciente.fecha}</StyleText>
                                        </View>
                                        <View style={styles.cardBody}>
                                            <StyleText fontSize='subheading'>Propietario: {paciente.propietario}</StyleText>
                                        </View>
                                        <View style={styles.containerButton}>
                                            <TouchableOpacity style={styles.button}>
                                                <Text style={styles.cardHeaderText}>Eliminar</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.button} onPress={handlePress}>
                                                <Text style={styles.cardHeaderText}>Editar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                }
            </View>

            <ModalFormulario isOpen={modalFormulario} closeModal={handlePress} setPacientes={setPacientes} />
        </View>
    )
}

const data = [
    {
        id: 1,
        paciente: 'Paciente 1',
        propietario: 'Propietario 1',
        email: 'Email 1',
        fecha: 'Fecha 1',
    },
    {
        id: 2,
        paciente: 'Paciente 1',
        propietario: 'Propietario 1',
        email: 'Email 1',
        fecha: 'Fecha 1',
    },
    {
        id: 3,
        paciente: 'Paciente 1',
        propietario: 'Propietario 1',
        email: 'Email 1',
        fecha: 'Fecha 1',
    },
]
export default Main