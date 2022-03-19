import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const CustomInput = ({Value, setValue, placeholder, secureTextEntry}) => {
    return(
<View style={styles.container}>
    <TextInput 
    Value={Value}
    onChangeText={setValue}
    //required={required}//
    placeholder={placeholder} 
    style={styles.input} 
    secureTextEntry={secureTextEntry}
    />
</View>
    );
};
 const styles =StyleSheet.create({
     container: {
         backgroundColor: 'lightgrey',
         width:'100%',

         borderColor: '#e8e8e8',
         borderWidth: 1,
         borderRadius: 7,
         
         
         paddingHorizontal:5,
         marginHorizontal:10,
         marginVertical:5,
     },
     input: {
         color:'black'
     },
 });

export default CustomInput;