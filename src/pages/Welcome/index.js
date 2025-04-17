
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Welcome() {
    return (
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Image
                    source={require('../../assets/logo.png')}
                    style={{ width: '100%'}}
                    resizeMode="contain"
                />
            </View>

            <View style={styles.containerForm}>
                <Text style={styles.title}>Da horta para a sua casa!</Text>
                <Text style={styles.text}>Faça o login para começar</Text>

                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1, //pega o tamanho inteiro da tela
        backgroundColor: '#fff'
    },
    containerLogo:{
        flex:2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm: {
        flex:1,
        backgroundColor: '#38a69d',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12
    },
    text:{
        color: 'black',
    },
    button:{
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '75%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#38a69d',
        fontWeight: 'bold'
    }
})