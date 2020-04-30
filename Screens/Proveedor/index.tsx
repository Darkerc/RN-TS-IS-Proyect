/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import Platillos from './Platillos';
import Pagos from './Pagos';
import MenuDiario from '../../components/ScreenComponent/MenuDiario';

const Drawer = createDrawerNavigator();

export default () =>{
    return (
        <Drawer.Navigator
            initialRouteName="MenuDiario"
            drawerContent={ props => <DrawerContent {...props} />}>
            <Drawer.Screen name="MenuDiario" component={MenuDiario} />
            <Drawer.Screen name="Platillos" component={Platillos} />
            <Drawer.Screen name="Pagos" component={Pagos} />
        </Drawer.Navigator>
    );
};
