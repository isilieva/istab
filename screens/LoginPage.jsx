import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Image ,Alert, Keyboard, SafeAreaView } from 'react-native'
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { IsTab } from '../context';
import { styles } from '../styles/index';
import { connectUser } from '../api/auth';


export function LoginScreen() {
  const [login, setlogin] = useState("");
  const [mdp, setmdp] = useState("");
  const { setuser } = useContext(IsTab);
  const handleClick = () => {
      Keyboard.dismiss()
      connectUser(login, mdp).then(data => {
          setuser(data);
      }).catch(err => Alert.alert(err))
  }
  return (
      <SafeAreaView style={styles.safe}>
        <View>
        <Image
            style={styles.image}
            source={require('../assets/logo.png')}
            />
        </View>
          <View style={styles.contConnect}>
          
              <MyInput label={"login"} valeur={login} etat={setlogin} />

              <MyInput label={"Mot de passe"} valeur={mdp} etat={setmdp} />

              <MyBout label="Valider" click={handleClick} />

          </View>
          <StatusBar ></StatusBar>
      </SafeAreaView>

  )
}