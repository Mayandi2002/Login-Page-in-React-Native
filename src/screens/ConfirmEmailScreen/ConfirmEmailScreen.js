import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/CustomButton/SignInButton';
import ForgotButton from '../../components/ForgotButton/ForgotButton';
const ConfirmEmailScreen = () => {
    const [Code,setCode] = useState('');
    
    const onConfirmPressed = () => {
        console.warn('Confirm Pressed');
    };

    const onSignInPressed = () => {
        console.warn('Sign In Pressed');
    };

    const onResendPressed = () => {
        console.warn('Resend Pressed');
    }
    
    return(
<View style={styles.root}>
    <Text style={styles.title}>Confirm your Email</Text>

    <CustomInput 
    placeholder="Enter your confirmation code" 
    value={Code} 
    setValue={setCode} 
    />
    
    <SignInButton 
    text="Confirm" 
    onPress={onConfirmPressed} 
    />

    <ForgotButton 
    text="Resend code"
    onPress={onResendPressed}
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
        color:'gray',
        marginVertical: 10
    }
});

export default ConfirmEmailScreen;