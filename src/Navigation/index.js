import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignInScreen from '../screens/signinscreen/SignInScreen';
import SignUpScreen from '../screens/signupscreen/SignUpScreen';
import ForgotScreen from '../screens/ForgotScreen/ForgotScreen';
import ResetScreen from '../screens/ResetScreen/ResetScreen';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator initialRouteName='Login'>
      <Stack.Screen name="Login" component={SignInScreen} />
      <Stack.Screen name="Register" component={SignUpScreen} />
      <Stack.Screen name="Forgot Password" component={ForgotScreen} />
      <Stack.Screen name="Reset Password" component={ResetScreen} />
    </Stack.Navigator>
  );
}