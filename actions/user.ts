/* eslint-disable prettier/prettier */
import { SET_USER } from '../constants';
import {UserData} from '../interfaces/UserData';

export function setUser(userData:UserData){
    return {
        type:SET_USER,
        payload: userData,
    };
}