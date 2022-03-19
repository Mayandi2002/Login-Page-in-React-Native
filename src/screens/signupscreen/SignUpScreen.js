import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/CustomButton/SignInButton';
import ForgotButton from '../../components/ForgotButton/ForgotButton';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
const SignUpScreen = () => {
    const [Username,setUsername] = useState('');
    const [Email,setEmail] = useState('');
    const [Password,setPassword] = useState('');
    const [PasswordRepeat,setPasswordRepeat] = useState('');
    const navigation = useNavigation()
async function signup(){
    navigation.navigate('Login');

    console.log('infun')
     axios.post('http://35.154.117.105:8080/api/v1/signup', {
        email: Email,
        username: Username,
        password:Password,
      })
      .then(function (response) {
          alert('Succesfully Registered')
        console.log(response,'res');
      })
      .catch(function (error) {
          alert(error)
        console.log(error);
      });
}
    const onRegisterPressed = () => {
        console.warn('Registering');
    };

    const onHaveaccountPressed = () => {
        //console.warn('Have Account Pressed');//
        navigation.navigate('Login');
    };

    const onTermsOfUsePressed = () => {
        console.warn('Terms of Use Pressed');
    };
    const onPrivacyPolicyPressed = () => {
        console.warn('Privacy Policy Pressed');
    };
    return(
<View style={styles.root}>
    <Text style={styles.title}>Create an Account</Text>

    <CustomInput 
    placeholder="Username" 
    value={Username} 
    setValue={setUsername} 
    />
    
    <CustomInput 
    placeholder="Email" 
    value={Email} 
    setValue={setEmail} 
    />

    <CustomInput
    placeholder="Password"
    value={Password} 
    setValue={setPassword} 
    secureTextEntry
    />

    <SignInButton 
    text="Register" 
    onPress={()=> signup()} 
    />
    <Text style={styles.text}>By registering, you confirming that you Accept our {' '} 
    <Text style={styles.link} onPress={onTermsOfUsePressed}>Terms of Use {' '}</Text>and
    <Text style={styles.link} onPress={onPrivacyPolicyPressed}> Privacy Policy.</Text>
    </Text>
    
    <ForgotButton 
    text="Have an account? Sign in" 
    onPress={onHaveaccountPressed}
    />
</View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 25,
    },
    title: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'gray',
    padding: 20   
    },
    text: {
        color:'gray',
        marginVertical: 10
    },
    link: {
        color: '#FDB075'
    }
});

export default SignUpScreen;