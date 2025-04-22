import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

import * as Animatable from 'react-native-animatable'

import api from '../../services/api'

export default function SignUp(){
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [cpf, setCpf] = useState('')
    const [password, setPassword] = useState('')

    async function handleSubmit(){
        try{
            await api.post('/cadastro', {
                email: email,
                telefone: telefone,
                cpf: cpf,
                password: password,
            })
            
            alert('Usuário cadastrado com sucesso.')
        } catch(err) {
            console.log(err)
            alert('Erro ao cadastrar o usuário.')
        }

        console.log('Email', email)
        console.log('Telefone', telefone)
        console.log('CPF', cpf)
        console.log('Senha', password)
    }

    return(
        <View style={styles.container}>
            <Animatable.View animation='fadeInLeft' delay={500} style={styles.containerHeader}>
                <Text style={styles.message}>Cadastro</Text>
            </Animatable.View>

            <Animatable.View animation='fadeInUp' style={styles.containerForm}>
                <Text style={styles.title}>Email</Text>
                <TextInput
                    placeholder='Digite um email...'
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                />

                <Text style={styles.title}>Telefone</Text>
                <TextInput
                    placeholder='Digite um número de telefone'
                    style={styles.input}
                    value={telefone}
                    onChangeText={setTelefone}
                />

                <Text style={styles.title}>CPF</Text>
                <TextInput
                    placeholder='Digite seu CPF'
                    style={styles.input}
                    value={cpf}
                    onChangeText={setCpf}
                />

                <Text style={styles.title}>Senha</Text>
                <TextInput
                    placeholder='Digite sua senha'
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                    <Text style={styles.buttonText}>Cadastrar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: '#38a69d'
    },
    containerHeader: {
        marginTop: '14%',
        marginBottom: '8%',
        paddingStart: '5%'
    },
    message:{
        fontSize: 28,
        fontWeight: 'bold',
        color: '#FFF'
    },
    containerForm:{
        backgroundColor: '#FFF',
        flex:1,
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%'
    },
    title:{
        fontSize: 20,
        marginTop: 28
    },
    input:{
        borderBottomWidth: 1,
        height: 40,
        marginBottom: 12,
        fontSize: 14
    },
    button:{
        backgroundColor: '#38a69d',
        width: '100%',
        borderRadius: 4,
        paddingVertical: 8,
        marginTop: 14,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonText:{
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    }
})