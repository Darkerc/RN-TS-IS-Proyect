/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Principal from './Principal';
import Register from './Register';
import Login from './Login';

const Stack = createStackNavigator();

export default () =>{
    return (
        <Stack.Navigator headerMode="none" initialRouteName="Principal">
            <Stack.Screen name="Principal" component={Principal} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Login" component={Login} />
        </Stack.Navigator>
    );
};
