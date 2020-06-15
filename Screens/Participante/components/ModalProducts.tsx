/* eslint-disable prettier/prettier */
import React from 'react';
import { View, Modal, StyleSheet, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatGrid } from 'react-native-super-grid';
import { Button,Label } from 'native-base';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface ModalProductsInterface{
    visible: boolean,
    caption: string,
    successModal: Function,
    closeModal: Function,
    onBtnClearPress: (item:any) => void
}

const ModalProducts = (options: ModalProductsInterface) => {
    const { productItems, productCount, totalCalories } = useSelector(state => state.product);
    return (
        <Modal animationType={'slide'} transparent={true} visible={options.visible}>
            <View style={Styles.ModalStyle}>
                <Label style={Styles.caption}>
                    {options.caption}
                </Label>
                <FlatGrid
                    itemDimension={130}
                    items={productItems}
                    renderItem={
                        ({item}) => (
                            <View style={Styles.productItem}>
                                <Icon style={Styles.deleteIcon} onPress={()=>options.onBtnClearPress(item)} name="clear" color="red" size={50}/>
                                <Image style={Styles.imgProduct} source={{ uri:item.img }}/>
                                <Text style={Styles.productText}>
                                    {item.nombre}
                                </Text>
                                <Text style={Styles.productText}>
                                    Precio: {item.costo}
                                </Text>
                                <Text style={Styles.productText}>
                                    calorias: {item.calorias}
                                </Text>
                            </View>
                        )
                    }
                />
                <View style={Styles.modalActions}>
                    <Button style={Styles.btnAction} success={true} onPress={()=>{options.successModal();}}>
                        <Label style={Styles.btnAction}>
                            Realizar pedido
                        </Label>
                    </Button>
                    <Button style={Styles.btnAction} danger={true} onPress={()=>{options.closeModal();}}>
                        <Label style={Styles.btnAction}>
                            Cerrar
                        </Label>
                    </Button>
                </View>
            </View>
        </Modal>
    );
};

const Styles = StyleSheet.create({
    ModalStyle:{
        backgroundColor:'rgba(0,0,0,.5)',
        width:'100%',
        height:'100%',
    },
    caption:{
        backgroundColor:'rgba(0,0,0,.65)',
        color:'white',
        fontSize:25,
        textAlign:'center',
        paddingVertical:10,
    },
    productItem:{
        justifyContent:'center',
        position:"relative"
    },
    productText:{
        color:'white',
        fontSize:20,
        textAlign:'center',
    },
    deleteIcon:{
        position:'absolute',
        top:-10,
        right:10,
        zIndex:10
    },
    imgProduct:{
        width:'75%',
        height:120,
        alignSelf:'center',
        borderRadius:10,
    },
    modalActions:{
        backgroundColor:'rgba(0,0,0,.65)',
        padding:15,
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center',
    },
    btnAction:{
        color:'white',
        padding:15,
        fontSize:20
    }
});

export default ModalProducts;
