import React, { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import CustomInput from '../../components/CustomInput';
import SignInButton from '../../components/CustomButton/SignInButton';
import ForgotButton from '../../components/ForgotButton/ForgotButton';
import { useNavigation } from '@react-navigation/native';

const ResetScreen = () => {
    const [Code,setCode] = useState('');
    const [Password,setPassword] = useState('');
    const [ReType,setReType] = useState('');
    const MyStack = useNavigation();
    
    const onConfirmPressed = () => {
        console.warn('Confirm Pressed');
        MyStack.navigate('Login');
    };

    const onSignInPressed = () => {
        //console.warn('Back to SignIn Pressed');//
        MyStack.navigate('Login');
    };

    return(
<View style={styles.root}>
    <Text style={styles.title}> Reset Password</Text>

    <CustomInput 
    placeholder="Code" 
    value={Code} 
    setValue={setCode} 
    />

<CustomInput 
    placeholder="New Password" 
    value={Password} 
    setValue={setPassword} 
    />

<CustomInput 
    placeholder="Re-Type Password" 
    value={ReType}
    setValue={setReType} 
    />
    
    <SignInButton style={styles.sendcode}
    text="Confirm Password" 
    onPress={onConfirmPressed} 
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

export default ResetScreen;