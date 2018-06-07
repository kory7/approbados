import React,{Component}from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {createStackNavigator} from 'react-navigation';
import Profesor from './components/profesores/Profesor';
import Asignatura from './components/asignaturas/Asignatura';
import Home from './components/Home';
import Detalles from './components/profesores/Detalles';
import Plan from './components/asignaturas/Plan';
export default class App extends React.Component {
  
  render() {
    return (
        <AppNavigator/>
    );
  }
}

//Navegador
const AppNavigator = createStackNavigator({
  Home,
  Profesor,
  Asignatura,
  Detalles,
  Plan 
});

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});