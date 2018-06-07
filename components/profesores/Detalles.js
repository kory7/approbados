import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Rating } from 'react-native-elements';

class Detalles extends React.Component {
    static navigationOptions = {
        title:"Detalles"
      };
    render() {
        const { navigation } = this.props;
        const nombre = navigation.getParam('nombre', '');
        const apellido = navigation.getParam('apellido',);
        const imagen = navigation.getParam('imagen', '');
        const materia = navigation.getParam('materia', '');
        const rating = navigation.getParam('rating', '');
        return (
            <View style={styles.container}>
                <View>
                    <View>
                        <View style={styles.skyBlue}></View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={{ uri: imagen }} />
                            <Text style={styles.name}>{apellido} {nombre}</Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Materia:</Text>
                            <Text style={styles.detailData}>{materia}</Text>
                        </View>
                    </View>
                </View>
                <Rating
                        showRating
                        type="star"
                        fractions={1}
                        startingValue={rating}
                        imageSize={40}
                        style={styles.rating}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    skyBlue: {
        backgroundColor: 'gray',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 5,
        borderColor: 'white',
        borderRadius: 100
    },
    name: {
        fontSize: 15,
        color: 'grey'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10,
        alignItems: 'center'
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        marginRight: 5
    },
    rating:{
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default Detalles;