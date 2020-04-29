/* eslint-disable prettier/prettier */
import {Dimensions, ScaledSize} from 'react-native';

export default (callback:CallableFunction) => {
    let callbackValue = null;
    const dim:ScaledSize = Dimensions.get('screen');
    const dimention:Boolean = dim.height >= dim.width;
    callbackValue = callback(dimention);
    Dimensions.addEventListener('change', () =>{
        const dimListener:ScaledSize = Dimensions.get('screen');
        const dimentionListener:Boolean = dimListener.height >= dimListener.width;
        callbackValue = callback(dimentionListener);
    });
    return callbackValue;
};
