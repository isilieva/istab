import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Image ,Alert, Keyboard,SafeAreaView } from 'react-native'
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { IsTab } from '../context';
import { styles } from '../styles';
import { createUser } from '../api/auth';
import { HideInput } from '../components/hideInput';

export function RegisterScreen() {
    const [login, setlogin] = useState("");
    const [mdp, setmdp] = useState("");
    const [mdp2, setmdp2] = useState("");
    const { setuser } = useContext(IsTab);
    const handleClick = () => {
        Keyboard.dismiss()
        if (mdp === mdp2) {
            createUser(login, mdp).then(data => {
                setuser(data);
            }).catch(err => Alert.alert(err))
        } else {
            Alert.alert("The passwords don't match ! ")
        }
    }
    return (
        <SafeAreaView style={styles.safe}>

        <Image
            style={styles.image}
            source={require('../assets/logo.png')}
            />

            <View style={styles.contConnect}>
                <MyInput label={"Email"} valeur={login} etat={setlogin} />
                <></>
                <HideInput label={"Password"} valeur={mdp} secureTextEntry={true} etat={setmdp} />
                <></>
                <HideInput label={"Confirm your password"} valeur={mdp2} secureTextEntry={true} etat={setmdp2} />
                <></>
                <MyBout label="Sign Up" click={handleClick} />

            </View>
            <StatusBar ></StatusBar>
        </SafeAreaView>

    )
}