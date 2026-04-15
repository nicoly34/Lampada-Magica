import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';

export default function App() {

  const [comando, setComando] = useState('');
  const [ligado, setLigado] = useState(false);

  function alternarLuz() {
    if (comando.toLowerCase() === 'acender') {
      setLigado(true);
    } else if (comando.toLowerCase() === 'desligar') {
      setLigado(false);
    } else {
      Alert.alert('Erro', 'Digite "acender" ou "desligar"');
    }
  }

  return (
    <SafeAreaView
      style={[
        styles.container,
        { backgroundColor: ligado ? '#ffffff' : '#121212' }
      ]}
    >
      <View style={styles.box}>

        <Text style={styles.titulo}>Lâmpada</Text>

        <TextInput
          style={styles.input}
          placeholder="Digite: acender ou desligar"
          value={comando}
          onChangeText={setComando}
        />

        <TouchableOpacity style={styles.botao} onPress={alternarLuz}>
          <Text style={styles.botaoTexto}>Alavanca</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  box: {
    padding: 20,
  },

  titulo: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: '#fff',
  },

  botao: {
    backgroundColor: '#ff69b4',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },

  botaoTexto: {
    color: '#fff',
    fontWeight: 'bold',
  },
});