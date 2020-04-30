/* eslint-disable prettier/prettier */
import { SET_USER, USER_TYPES } from '../constants';
import {UserResolver} from '../interfaces/UserData';

const initialState = {
    userImg:'',
    userType:'',
    userName:'',
    userDrawerScreens:[],
};

const userReducer = (state = initialState, action:UserResolver) => {
    switch (action.type) {
        case SET_USER:
            const reducer:Function = ()=>{
                switch (action.payload.userType) {
                    case USER_TYPES.NUTRICIONISTA:
                        return {
                            ...state,
                            ...action.payload,
                            userDrawerScreens:[
                                {  screenName:'MenuDiario' ,drawerScreenName:'Menu Diario' },
                                {  screenName:'Usuarios' ,drawerScreenName:'Usuarios' },
                                {  screenName:'Citas' ,drawerScreenName:'Citas' },
                            ],
                        };
                    case USER_TYPES.PROVEEDOR:
                        return {
                            ...state,
                            ...action.payload,
                            userDrawerScreens:[
                                {  screenName:'MenuDiario' ,drawerScreenName:'Menu Diario' },
                                {  screenName:'Platillos' ,drawerScreenName:'Platillos' },
                                {  screenName:'Pagos' ,drawerScreenName:'Pagos' },
                            ],
                        };
                    case USER_TYPES.USUARIO:
                        return {
                            ...state,
                            ...action.payload,
                            userDrawerScreens:[
                                {  screenName:'MenuDiario' ,drawerScreenName:'Menu Diario' },
                                {  screenName:'Control' ,drawerScreenName:'Control' },
                                {  screenName:'Citas' ,drawerScreenName:'Citas' },
                            ],
                        };
                    default:
                        return state;
                }
            };
            return reducer();
        default:
            return state;
    }
};

export default userReducer;
