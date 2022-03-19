import React, { useState } from 'react';
import { View, Image, StyleSheet, useWindowDimensions } from 'react-native';
import Logo from '../../../assets/images/Logo.png';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/CustomButton/SignInButton';
import ForgotButton from '../../components/ForgotButton/ForgotButton';
import SignUpButton from '../../components/SignUpButton/SignUpButton';
import axios from 'axios';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
const SignInScreen = () => {
    const [Username,setUsername] = useState('');
    const [Password,setPassword] = useState('');
    const [msg, setMsg] = useState({error: null, color: "green"})
    
    const {height} = useWindowDimensions();
    const MyStack = useNavigation();
    async function login(){
    
        console.log('infun')
         axios.put('http://35.154.117.105:8080/api/v1/login', {
            username: Username,
            password:Password,
          })
          .then(function (response) {
              alert('Login Succesfully')
            console.log(response,'res');
          })
          .catch(function (error) {
              alert(error)
            console.log(error);
          });
    }
    
    
    const onSignInPressed = () => {
        console.warn('Logging In');
    };

    const onForgotPasswordPressed = () => {
        //console.warn('Forgot Password');//
        MyStack.navigate('Forgot Password');
    };

    const onSignUpPressed = () => {
        //console.warn('Signing Up');//
        MyStack.navigate('Register');
    }
    
    return(
<View style={styles.root}>
    <Image 
    source={Logo} 
    style={[styles.Logo, {height: height * 0.3}]} 
    resizeMode="contain" 
    />

    <CustomInput 
    placeholder="Username" 
    value={Username} 
    setValue={setUsername} 
    />
    <CustomInput
    placeholder="Password"
    value={Password} 
    setValue={setPassword} 
    secureTextEntry
    />

    <SignInButton 
    text="Log In" 
    onPress={()=> login()} 
    />
    <SignUpButton 
    text="Sign Up"
    onPress={onSignUpPressed}
    />
    <ForgotButton 
    text="Forgot Password?" 
    onPress={onForgotPasswordPressed}
    />
</View>
    );
};

const styles = StyleSheet.create({
    root: {
        alignItems: 'center',
        padding: 15,
    },
    Logo: {
        width: '100%',
        maxWidth: 200,
        maxHeight: 150,
    },
});

export default SignInScreen;