import React,{Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import {Container,Button,Icon} from 'native-base';

class Home extends Component {
    static navigationOptions = {
        title:"Approbados"
    };
  render() {
    return (
        <Container style={styles.container}>
            <Image style={{width: 200, height: 200, alignItems: 'center', marginBottom: 100}} source={require('./../image/unam.png')}/>
            <Button block success onPress={()=>this.props.navigation.navigate('Asignatura')}><Icon name="book"/><Text>Asignatura</Text></Button>
            <Button block info onPress={()=>this.props.navigation.navigate('Profesor')}><Icon name="people"/><Text>Profesores</Text></Button>
        </Container>
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
export default Home;