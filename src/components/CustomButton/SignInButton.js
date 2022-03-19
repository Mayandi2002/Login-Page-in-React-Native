import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const SignInButton = ({ onPress, text }) => {
    return(
        
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#3B71F3',  

        width: '90%',

        padding: 15,
        marginVertical: 8,

        alignItems: 'center',
        borderRadius: 20,
    },

    text: {
        fontWeight: 'bold',
        color: 'white',
    },
    
});

export default SignInButton;