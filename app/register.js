import React,{useState} from "react";
import {View,Text,TextInput,Button,StyleSheet,Alert} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { router } from "expo-router";

export default function Register(){

const [phone,setPhone] = useState("");
const [password,setPassword] = useState("");

const registerUser = async () => {

await AsyncStorage.setItem("phone",phone);
await AsyncStorage.setItem("password",password);

Alert.alert("Registered Successfully");

router.replace("/login");

};

return(

<View style={styles.container}>

<Text style={styles.title}>Register</Text>

<TextInput
placeholder="Phone Number"
style={styles.input}
onChangeText={setPhone}
/>

<TextInput
placeholder="Password"
secureTextEntry
style={styles.input}
onChangeText={setPassword}
/>

<Button title="Register" onPress={registerUser}/>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
justifyContent:"center",
padding:20
},

title:{
fontSize:26,
textAlign:"center",
marginBottom:20
},

input:{
borderWidth:1,
padding:10,
marginBottom:15
}

});