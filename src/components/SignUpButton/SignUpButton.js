import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const SignUpButton = ({ onPress, text }) => {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#e3e3e3',  

        width: '86%',

        padding: 15,
        marginVertical: 8,

        alignItems: 'center',
        borderRadius: 20,
    },

    text: {
        fontWeight: 'bold',
        color: 'dimgrey',
    },
    
});

export default SignUpButton;