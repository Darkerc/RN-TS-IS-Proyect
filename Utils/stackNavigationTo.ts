/* eslint-disable prettier/prettier */
import { CommonActions } from '@react-navigation/native';

export default (screenName:string, navigation:any) => {
    navigation.dispatch(CommonActions.reset({
        index:1,
        routes:[
            { name:screenName },
        ],
    }));
}