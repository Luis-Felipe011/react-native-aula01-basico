import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';

function BoasVindas(props) {

const [nome, setNome]= useState('');
const [sobrenome, setSobrenome] = useState('');
const [mensagem, setMensagem]= useState('Welcome!');
const [mostraMensagem, setMostraMensagem] = useState(false);

const _apresentarMensagem = () => {
    if (!nome == '' && !sobrenome == '') {
        setMostraMensagem (true);
    } else {
        Alert.alert(
            'Mandatory completion',
            'Enter first and last name',
            [
                { text: 'OK'},
            ],
        );
    }
}

const _limpar = () => {
    setNome ('');
    setSobrenome ('');
    setMostraMensagem(false);
}

  return (
        <View style={styles.container}>

             <Text style={styles.titulo}>identify yourself</Text>

            <TextInput
            style={styles.campo}
            placeholder="type your name"
            onChangeText={nome => setNome(nome)}
            value={nome}
                />

            <TextInput
            style={styles.campo}
            placeholder="type your last name"
            onChangeText={sobrenome => setSobrenome(sobrenome)}
            value={sobrenome}
                />

            <View style={styles.botaoContainer}>
                <Button
                    onPress={_apresentarMensagem}
                    title='Ok'
                />
                </View>

                {mostraMensagem && (
              <View>
<Text style={styles.textos}>Hello, {nome} {sobrenome}! {props.saudacao} </Text>
<Text style={styles.textos}>{mensagem}</Text>
                    </View>
                )}

                <View style={styles.botaoContainer}>
                    <Button 
                    onPress={_limpar}
                    title="Clean"
                   />
                </View>
                </View>

)
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#081a31',
        width: 300,
        borderRadius: 5,
        padding: 10,
        margin: 10
    },
    titulo:{
        fontSize: 16,
        color: '#FFFFFF',
        fontWeight: 'bold',
        textAlign: "center",
    },
    textos: {
        fontSize: 14,
        color: '#FFFFFF',
        textAlign: "center"
    },
    campo: {
        backgroundColor: '#dcedff',
        textAlign: "center",
        fontSize: 14,
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
        height: 35,
    },
    botaoContainer:{
        marginBottom: 5,
        marginTop: 5,
        borderRadius: 5,
   },
});
export default BoasVindas;
