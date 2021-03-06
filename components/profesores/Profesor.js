import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {Container,Button,Icon} from 'native-base';
import { List, ListItem } from 'react-native-elements';
import Detalles from './Detalles';

const PROFESORES=
 [
    {
      first_name: "MARDUK",
      last_name: "PEREZ DE LARA DOMINGUEZ",
      materias: "COMPUTO MOVIL",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "5.0"
    },
    {
      first_name: "MARCO ANTONIO",
      last_name: "MARTINEZ QUINTANA",
      materias: "COMPUTO MOVIL",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.2"
    },
    {
      first_name: "AMAURY HECTOR",
      last_name: "PEREA MATSUMURA",
      materias: "COMPUTO MOVIL",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "3.6"
    },
    {
      first_name: "JORGE ANGEL",
      last_name: "HERNANDEZ LOPEZ",
      materias: "COMPUTO MOVIL",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "5.0"
    }, {
      first_name: "OSCAR",
      last_name: "SULVARAN RODRIGUEZ",
      materias: "NEGOCIOS ELECTRONICOS",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.8"
    },
    {
      first_name: "ELBA KAREN",
      last_name: "SAENZ GARCIA",
      materias: "COMPUTO DE ALTO DESEMPEÑO",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "3.9"
    },
    {
      first_name: "OSCAR RENE",
      last_name: "VALDEZ CASILLAS",
      materias: "COMPUTO DE ALTO DESEMPEÑO",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "3.8"
    },
    {
      first_name: "RAYMUNDO HUGO",
      last_name: "RANGEL GUTIERREZ",
      materias: "ALGORITMOS Y ESTRUCTURAS DE DATOS",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.4"
    },
    {
      first_name: "LUIS",
      last_name: "ARENAS HERNANDEZ",
      materias: "ALGORITMOS Y ESTRUCTURAS DE DATOS",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.5"
    },
    {
      first_name: "LUCIRALIA",
      last_name: "HERNANDEZ HERNANDEZ",
      materias: "ESTRUCTURA Y PROGRAMACION DE COMPUTADORAS",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "3.2"
    },
    {
      first_name: "PEDRO IGNACIO",
      last_name: "RINCON GOMEZ",
      materias: "ESTRUCTURA Y PROGRAMACION DE COMPUTADORAS",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.4"
    },
    {
      first_name: "JUAN JOSE",
      last_name: "GARCIA ROMERO",
      materias: "ADMINISTRACION DE REDES",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "5.0"
    },
    {
      first_name: "EDGAR",
      last_name: "MARTINEZ MEZA",
      materias: "ADMINISTRACION DE REDES",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.0"
    },
    {
      first_name: "CINTIA",
      last_name: "QUEZADA REYES",
      materias: "ADMINISTRACION DE REDES",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "4.6"
    },
    {
      first_name: "MAGDALENA",
      last_name: "REYES GRANADOS",
      materias: "ADMINISTRACION DE REDES",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "3.1"
    },
    {
      first_name: "JAVIER",
      last_name: "LEON COTONIETO",
      materias: "ADMINISTRACION DE REDES",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.2"
    },
    {
      first_name: "AURELIO ADOLFO",
      last_name: "MILLAN NAJERA",
      materias: "DISPOSITIVOS DE ALMACENAMIENTO DE ENTRADA Y SALIDA",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.7"
    },
    {
      first_name: "AYESHA SAGRARIO",
      last_name: "ROMAN GARCIA",
      materias: "DISPOSITIVOS DE ALMACENAMIENTO DE ENTRADA Y SALIDA",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "4.0"
    },
    {
      first_name: "CARLOS",
      last_name: "SAUCEDO MACIEL",
      materias: "DISPOSITIVOS DE ALMACENAMIENTO DE ENTRADA Y SALIDA",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "2.5"
    },
    {
      first_name: "MARIA JAQUELINA",
      last_name: "LOPEZ BARRIENTOS",
      materias: "CRIPTOGRAFÍA",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "3.5"
    },
    {
      first_name: "PAULO SANTIAGO DE JESUS",
      last_name: "CONTRERAS FLORES",
      materias: "CRIPTOGRAFÍA",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "4.5"
    },
    {
      first_name: "DEMIAN ROBERTO",
      last_name: "GARCIA VELAZQUEZ",
      materias: "SEGURIDAD INFORMÁTICA I",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "3.7"
    },
    {
      first_name: "CINTIA",
      last_name: "QUEZADA REYES",
      materias: "SEGURIDAD INFORMÁTICA I",
      image: "http://icons-for-free.com/icon/download-avatar_female_person_user_woman_young_icon-329418.png",
      rating: "4.5"
    },
    {
      first_name: "CARLOS ALBERTO",
      last_name: "ROMAN ZAMITIZ",
      materias: "ARQUITECTURAS CLIENTE/SERVIDOR",
      image: "https://i.pinimg.com/originals/7c/c7/a6/7cc7a630624d20f7797cb4c8e93c09c1.png",
      rating: "3.0"
    }
  ];

export default class Profesor extends Component {
  static navigationOptions = {
    title:"Profesores"
  };
  render() {
    return (
      <List containerStyle={{marginBottom: 20}}>
      <ScrollView>
      {
        PROFESORES.map((l, i) => (
          <ListItem
            roundAvatar
            avatar={{uri: l.image}}
            key={i}
            title={l.last_name+" "+l.first_name}
            subtitle={l.materias}
            onPress={() => {
              this.props.navigation.navigate('Detalles', {
                nombre:l.first_name,
                apellido:l.last_name,
                imagen:l.image,
                materia:l.materias,
                rating:l.rating  
              })}}
          />
        ))
      }
      </ScrollView>
      </List>
    );
  }
}

styles = StyleSheet.create({
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5
  },
  ratingImage: {
    height: 19.21,
    width: 100
  },
  ratingText: {
    paddingLeft: 10,
    color: 'grey'
  }
})