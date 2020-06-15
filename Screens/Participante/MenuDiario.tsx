/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {SafeAreaView, StyleSheet, ScrollView, Text} from 'react-native';
import { Badge, Label } from 'native-base';
import AppBarNavigation from '../../components/AppBarNavigation';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';
import ModalProducts from './components/ModalProducts';
import ModalMetodoPago from './components/ModalMetodoPago';
import WaitScreenModal from '../../components/WaitScreenModal';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { gql } from 'apollo-boost';
import { useQuery, useMutation } from '@apollo/react-hooks';
import { View } from 'native-base';
import { PRODUCT_ACTIONS } from "../../constants";
import { cleanProductData, deleteProduct } from "../../actions/products";

export default ({navigation}) => {

  const dispatch = useDispatch();
  const [modalProductos, setModalProductos] = useState(false);
  const [modalMetodoPago, setModalMetodoPago] = useState(false);
  const [modalWaiting, setModalWaiting] = useState(false);
  const selectedProducts = useSelector(state => state.product.productCount);
  const totalCalories = useSelector(state => state.product.totalCalories);
  const productItems = useSelector(state => state.product.productItems);
  const userID = useSelector(state => state.user.userId);

  const [pedido,setPedido] = useState({
    FKUsuarioParticipante: parseInt(userID),
    PrecioTotal: 0,
    CaloriasTotales: totalCalories,
    MetodoPago: 'Efectivo',
    ProductosPedido: [],
  });

  const CREATE_PEDIDO = gql`
  mutation crearPedido($PedidoInput:PedidoInput!){
    crearPedido(PedidoInput:$PedidoInput){
      IdPedido
      PrecioTotal
      MetodoPago
    }
  }
  `;
  const [crearPedido] = useMutation(CREATE_PEDIDO,{variables:{
    PedidoInput:pedido,
  }});

  const sendPedido = async (MetodoPago:string) => {
    let PrecioTotal = 0;
    let ProductosPedido = [];
    productItems.forEach(product => {
      ProductosPedido.push(product.id);
      PrecioTotal += product.costo;
    });
    setPedido({
      FKUsuarioParticipante: parseInt(userID) ,
      PrecioTotal,
      CaloriasTotales:totalCalories,
      MetodoPago,
      ProductosPedido,
    });

    try {
      setModalWaiting(true);
      let { data } = await crearPedido()
    } catch (error) {
      console.error(error);
    } finally {
      setModalWaiting(false);
      setModalMetodoPago(false);
      setModalProductos(false);
      dispatch(cleanProductData());
    }
  };

  const GET_DINNERS_DISH = gql`
  {
    CafeteriasPlatillos{
      IdCafeteria
      Edificio
      Platillos{
        IdPlatillo
        NombrePlatillo
        Precio
        Calorias
        Existencias
        PlatilloImg
      }
    }
  }
  `;
  const deleteProductSeleted = (item) => {
    dispatch(deleteProduct(item))
  }
  const { data, loading } = useQuery(GET_DINNERS_DISH);

  return (
    <SafeAreaView style={Styles.container}>
      <AppBarNavigation title="Menu diario" navigation={navigation}/>
      <View style={Styles.buyIcon} onTouchStart={()=>{setModalProductos(true);}}>
        <Badge style={Styles.buyIconFB} success={true}>
          <Label style={Styles.buyIconText}>
            {selectedProducts}
          </Label>
        </Badge>
        <Icon style={{ zIndex:-1 }} name="local-grocery-store" size={50} color="#000"/>
      </View>
      <Text style={Styles.caloriasInfo}>
        Tus calorias: {totalCalories}
      </Text>
      <ScrollView>
        {
          loading ?
          <Text>
            Cargando
          </Text>
          :
          data.CafeteriasPlatillos.map((cafeteria: { Edificio: string, Platillos: Array<{ Calorias: number; Precio: number; NombrePlatillo: string ;IdPlatillo: number; PlatilloImg: string}> }, i: number) => {
            return (
              <ProductList title={`Cafeteria edificio ${cafeteria.Edificio}`} key={i}>
                {
                  cafeteria.Platillos.map((platillo: { Calorias: number, Precio: number, NombrePlatillo: string, IdPlatillo: number, PlatilloImg: string}, index:number) => {
                    return (
                      <ProductItem
                        key={index}
                        id={platillo.IdPlatillo}
                        nombre={platillo.NombrePlatillo}
                        calorias={platillo.Calorias}
                        costo={platillo.Precio}
                        img={platillo.PlatilloImg}
                      />
                    );
                  })
                }
              </ProductList>
            );
          })
        }
      </ScrollView>
      <ModalProducts
        visible={modalProductos}
        caption="Productos seleccionados"
        successModal={()=>{setModalMetodoPago(true);}}
        closeModal={()=>{setModalProductos(false);}}
        onBtnClearPress={item=>deleteProductSeleted(item)}
      />
      <ModalMetodoPago
        visible={modalMetodoPago}
        onSelectedMethod={sendPedido}
        onCancel={()=>setModalMetodoPago(false)}
      />
      <WaitScreenModal
        modalMessage="Espere un momento por favor"
        visible={modalWaiting}
      />
    </SafeAreaView>
  );
};

const Styles = StyleSheet.create({
  container:{
    height:'100%',
  },
  caloriasInfo:{
    position:'absolute',
    textAlign:'center',
    left:100,
    right:100,
    top:50,
    fontSize:17.5,
  },
  buyIcon:{
    position:'absolute',
    top:10,
    right:10,
  },
  buyIconFB:{
    position:'absolute',
    top:-7.5,
    right:-6,
    zIndex:20,
  },
  buyIconText:{
    fontSize:15,
  },
});
