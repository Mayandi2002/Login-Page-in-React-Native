import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';

const ForgotButton = ({ onPress, text }) => {
    return(
        <Pressable onPress={onPress} style={styles.container}>
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {  
        //backgroundColor:'#F9FBfC',//
        width: '100%',

        padding: 5,
        marginVertical: 3.5,

        alignItems: 'center',
    },

    text: {
        fontWeight: 'bold',
        color: 'grey',
    },
});

export default ForgotButton;