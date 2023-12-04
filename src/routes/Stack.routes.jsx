import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/Login';
import SignUpScreen from './screens/Cadastro';
import PasswordRecoveryScreen from './screens/RecoverPass';
import Profile from './screens/Profiler';

const Stack = createStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PasswordRecovery"
        component={PasswordRecoveryScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Cadastro"
        component={SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
      name='Profile'
      component={Profile}
      options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
