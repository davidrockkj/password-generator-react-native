import { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Modal } from 'react-native';
import Slider from '@react-native-community/slider'
import ModalPassword from './src/components/modal/index'


let charset = "abcdefghiabcdefghijklmnopqrstuvwxyzjklmnopqrstABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*-=_+;:,.<>/?";

const App = () => {
  const [size, setSize] = useState(8) // 10 é o valor que vai começar
  const [passwordValue, setPasswordValue] = useState(""); // para salvar o valor da senha
  const [modalVisible, setModalVisible] = useState(false); // Controlar a visibilidade do Modal

  function generatePassword() {
    let password = "";

    for(let i = 0, n = charset.length; i < size; i++){
      password += charset.charAt(Math.floor(Math.random() * n ))
    }

    setPasswordValue(password);
    setModalVisible(true);
  }

  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require("./src/assets/logo.png")}
      />

      <Text style={styles.title}>{size} caracteres</Text>

      <View style={styles.area}>
        <Slider
          style={{ height: 50 }}
          value={size}
          onValueChange={ (value) => setSize(value.toFixed(0)) }
          minimumValue={6}
          maximumValue={20}
          minimumTrackTintColor="#392DE9"
          thumbTintColor='#f39c36'
        />
      </View>

      <TouchableOpacity style={styles.button} onPress={generatePassword}>
        <Text style={styles.buttonText}>Gerar senha</Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType='fade' transparent={true}>
        <ModalPassword password={passwordValue} handleClose={ () => setModalVisible(false) } />
      </Modal>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: "#F3F3FF",
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 166,
    height: 212, 
    marginBottom: 60,
  },
  area: {
    marginTop: 14,
    marginBottom: 14,
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 8,
  },
  button: {
    backgroundColor: '#392de9',
    width:'80%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginBottom: 18
  },
  buttonText: {
    color: '#fff',
    fontSize: 20
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})