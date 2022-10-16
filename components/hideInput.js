import { View, Text, TextInput } from 'react-native'
import { styles } from '../styles'
export function HideInput({ label, valeur, etat }) {
    return (
        <View style={styles.contener}>
            <Text style={styles.labelInput}>{label}</Text>
            <></>
            <TextInput value={valeur} secureTextEntry={true} onChangeText={etat} style={styles.input} />
            <></>
        </View>
    )
}