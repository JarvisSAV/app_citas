import React from "react"

function PacienteList({ paciente }) {

    const {} = paciente

    return (
        <View style={styles.card}>
            <View style={styles.cardHeader}>
                <StyleText bold>{paciente.paciente}</StyleText>
                <TouchableOpacity>
                    <Text style={styles.cardHeaderText}>Eliminar &times;</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardBody}>
                <StyleText fontSize='subheading'>Propietario: {paciente.propietario}</StyleText>
                <StyleText fontSize='subheading'>Email: {paciente.email}</StyleText>
            </View>
        </View>
    )
}

export default PacienteList