import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from './Screens/SplashScreen';
import HomeScreens from './Screens/HomeScreens';
import Nutricionista from './Screens/Nutricionista';
import Proveedor from './Screens/Proveedor';
import Usuario from './Screens/Usuario';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="HomeScreens" component={HomeScreens} />
        <Stack.Screen name="Nutricionista" component={Nutricionista} />
        <Stack.Screen name="Proveedor" component={Proveedor} />
        <Stack.Screen name="Usuario" component={Usuario} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
