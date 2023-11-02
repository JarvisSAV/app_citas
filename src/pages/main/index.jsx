import React, { useState } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { StatusBar } from 'expo-status-bar'

import { styles } from './styles'
import StyleText from '../../components/StyleText'
import ModalFormulario from '../../components/ModalFormulario'

function Main() {

    const [modalFormulario, setModalFormulario] = useState(false)
    const [pacientes, setPacientes] = useState(data)
    const [paciente, setPaciente] = useState({})

    function handlePress() {
        setModalFormulario(!modalFormulario)
    }

    const editar = (paciente) => {
        setPaciente(paciente)
        handlePress()
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
                                            <TouchableOpacity style={styles.buttonEliminar}>
                                                <Text style={styles.cardHeaderText}>Eliminar</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity style={styles.buttonEditar} onPress={()=>{editar(paciente)}}>
                                                <Text style={styles.cardHeaderText}>Editar</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                }
            </View>

            <ModalFormulario isOpen={modalFormulario} closeModal={handlePress} setPacientes={setPacientes} paciente={paciente} />
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
        telefono: 'Telefono 1',
        sintomas: 'Sintomas 1',
    },
    {
        id: 2,
        paciente: 'Paciente 1',
        propietario: 'Propietario 1',
        email: 'Email 1',
        fecha: 'Fecha 1',
        telefono: 'Telefono 1',
        sintomas: 'Sintomas 1',
    },
    {
        id: 3,
        paciente: 'El Firulais',
        propietario: 'El Chema',
        email: 'chemamo@gmail.com',
        fecha: '2021-05-10',
        telefono: '1234567890',
        sintomas: 'Tos de perro',
    },
]
export default Main