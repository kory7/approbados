import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {Container,Button,Icon} from 'native-base';
import { List, ListItem } from 'react-native-elements';
const ASIGNATURAS= [
  {
    nombre: "COMPUTO MOVIL",
    clave: "674",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/ComputoMovil0674.png'
  },
  {
    nombre: "NEGOCIOS ELECTRONICOS",
    clave: "951",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/NegociosElectronicos0951.png'
  },
  {
    nombre: "COMPUTO DE ALTO DESEMPEÑO",
    clave: "676",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/ComputoaltoDesempentildeo0676.png'
  },
  {
    nombre: "ALGORITMOS Y ESTRUCTURAS DE DATOS",
    clave: "1422",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/AlgoritmosyEstructuras1422.png'
  },
  {
    nombre: "ESTRUCTURA Y PROGRAMACION DE COMPUTADORAS",
    clave: "1429",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/EstructurayRpogramacion1429.png'
  },
  {
    nombre: "ADMINISTRACIÓN DE REDES",
    clave: "1866",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/AdministracionRedes1866.png'
  },
  {
    nombre: "DISPOSITIVOS DE ALMACENAMIENTO DE ENTRADA Y SALIDA",
    clave: "1765",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/AlgoritmosyEstructuras1422.png'
  },
  {
    nombre: "CRIPTOGRAFÍA",
    clave: "681",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/Criptografia0681.png'
  },
  {
    nombre: "SEGURIDAD INFORMÁTICA I",
    clave: "880",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/SeguridadInformatica0880.png'
  },
  {
    nombre: "ARQUITECTURAS CLIENTE/SERVIDOR",
    clave: "606",
    imagen: 'http://i1219.photobucket.com/albums/dd431/Yackmar/Movil/ArquitecturaClienteServidor_0606.png'
  }
]

export default class Asignatura extends Component {
  static navigationOptions = {
    title:"Asignaturas"
  };
  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
      <ScrollView>
      {
        ASIGNATURAS.map((l, i) => (
          <ListItem
            key={i}
            title={l.nombre}
            subtitle={l.clave}
            onPress={()=>{
              this.props.navigation.navigate("Plan",{
                plan:l.imagen
              })
            }}
          />
        ))
      }
      </ScrollView>
      </List>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});