import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { View, Alert, Keyboard, SafeAreaView } from 'react-native'
import { MyBout } from '../components/bout';
import { MyInput } from '../components/input'
import { IsTab } from '../context';
import { styles } from '../styles/index';

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

            <View style={styles.contConnect}>
                <MyInput label={"login"} valeur={login} etat={setlogin} />
                <MyInput label={"Mot de passe"} valeur={mdp} etat={setmdp} />
                <MyBout label="Valider" click={handleClick} />

            </View>
            <StatusBar></StatusBar>
        </SafeAreaView>

    )
}

/**
 *  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("./assets/log2.png")} />
 
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
 
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
 
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
 
  image: {
    marginBottom: 40,
  },
 
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#FF1493",
  },
});
 */