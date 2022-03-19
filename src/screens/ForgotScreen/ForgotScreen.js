import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/CustomButton/SignInButton';
import ForgotButton from '../../components/ForgotButton/ForgotButton';
import { useNavigation } from '@react-navigation/native';
const ForgotScreen = () => {
    const [Username,setUsername] = useState('');
    const MyStack = useNavigation();
    
    const onSendPressed = () => {
        console.warn('Send Code Pressed');
        MyStack.navigate('Reset Password');
    };

    const onSignInPressed = () => {
        //console.warn('Back to Sign In Pressed');//
        MyStack.navigate('Login');
        
    };

    return(
<View style={styles.root}>
    <Text style={styles.title}>Forgot Password</Text>

    <CustomInput 
    placeholder="Username" 
    value={Username} 
    setValue={setUsername} 
    />

<Text style={styles.text}>Confirm your Username then, Click Send Code</Text>
    
    <SignInButton style={styles.sendcode}
    text="Send Code" 
    onPress={onSendPressed} 
    />
    
    <ForgotButton 
    text="Back to Sign in" 
    onPress={onSignInPressed}
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
    padding: 30   
    },

    text: {
        padding: 2,
        fontSize: 14,
        color: 'gray'
    }

});

export default ForgotScreen;