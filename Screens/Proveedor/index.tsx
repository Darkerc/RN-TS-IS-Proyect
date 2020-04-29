/* eslint-disable prettier/prettier */
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DrawerContent from '../../components/DrawerContent';
import Platillos from './Platillos';
import Pagos from './Pagos';

const Drawer = createDrawerNavigator();

export default () =>{
    return (
        <Drawer.Navigator
            initialRouteName="Platillos"
            drawerContent={ props => <DrawerContent {...props} />}>
            <Drawer.Screen name="Platillos" component={Platillos} />
            <Drawer.Screen name="Pagos" component={Pagos} />
        </Drawer.Navigator>
    );
};
