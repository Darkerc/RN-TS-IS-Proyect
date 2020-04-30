/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import Usuarios from './Usuarios';
import Citas from './Citas';
import MenuDiario from '../../components/ScreenComponent/MenuDiario';

const Drawer = createDrawerNavigator();

export default () =>{
    return (
        <Drawer.Navigator
            initialRouteName="MenuDiario"
            drawerContent={ props => <DrawerContent {...props} />}>
            <Drawer.Screen name="MenuDiario" component={MenuDiario} />
            <Drawer.Screen name="Usuarios" component={Usuarios} />
            <Drawer.Screen name="Citas" component={Citas} />
        </Drawer.Navigator>
    );
};
