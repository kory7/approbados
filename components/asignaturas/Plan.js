import React,{Component} from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import {Container,Button,Icon} from 'native-base';

class Plan extends Component {
    static navigationOptions = {
        title:"Plan de estudios"
    };
    
  render() {
    const { navigation } = this.props;
    const imagen = navigation.getParam('plan', '');
    return (
            <ScrollView directionalLockEnabled={false}
            horizontal={true}>
                <Image style={styles.image}
                source={{ uri: imagen }}/>
            </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 735,
    height: 567,
    resizeMode: 'cover' 
}
});
export default Plan;