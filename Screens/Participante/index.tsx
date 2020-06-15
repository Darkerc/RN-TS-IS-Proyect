/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import MenuDiario from './MenuDiario';
import Control from './Control';
import Citas from './Citas';

const Drawer = createDrawerNavigator();

export default () =>{
    return (
        <Drawer.Navigator
            initialRouteName="MenuDiario"
            drawerContent={ props => <DrawerContent {...props} />}>
            <Drawer.Screen name="MenuDiario" component={MenuDiario} />
            <Drawer.Screen name="Control" component={Control} />
            <Drawer.Screen name="Citas" component={Citas} />
        </Drawer.Navigator>
    );
};
