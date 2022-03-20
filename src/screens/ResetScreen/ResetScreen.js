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
    
    const onSubmitPressed = () => {

        if(Code == ""){
            alert("Please Enter Code")
            return true
        }
        else if(Password == ""){
            alert("Please Enter Password")
            return true
        }
        else if(ReType == ""){
            alert("Please Enter Re-Type Password")
            return true
        }
        else if(isNaN(Code)){
            alert("Code Must be an Number Format")
            return true
        }
        else if(Code.length > 6 || Code.length < 6){
            alert("Code Should be an 6 Characters")
            return true
        }
        else if(Password.length < 8){
            alert("Password Should be an 8 Characters")
            return true
        }
        else if(ReType.length < 8){
            alert("Re-Type Password Should be an 8 Characters")
            return true
        }
        console.warn('Submit Pressed');
        MyStack.navigate('Login');
    };

    const onSignInPressed = () => {
        //console.warn('Back to SignIn Pressed');//
        MyStack.navigate('Login');
    };

    return(
<View style={styles.root}>
    <Text style={styles.title}> Reset Password</Text>
    <Text style={{fontSize:12, fontWeight:'bold', color:'gray', padding:5}}>Code is Sended to your Email</Text>

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
    text="Submit" 
    onPress={onSubmitPressed} 
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