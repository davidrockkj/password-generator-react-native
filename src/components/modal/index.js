import { View, Text, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import * as Clipboard from 'expo-clipboard'; // Importando as funcionalidades da Clipboard
import useStorage from '../../hooks/useStorage';

const Modal = ({ password, handleClose }) => {

  // Declarando o hook useStorage dentro do componente
  const { saveItem } = useStorage();

  async function handleCopyPassword() {
    await Clipboard.setStringAsync(password) // Salvar uma string(password) no CTRL+C

    // Salvando a senha quando ela for copiada
    await saveItem("@pass", (password))
    
    alert("Senha salva com sucesso!"); // Mensagem de retorno


    handleClose(); // Ele fecha o modal assim que a senha for copiada
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Senha gerada</Text>

        <Pressable style={styles.innerPassword} onPress={handleCopyPassword}> // Ao apertar na área preta, a função é chamada
          <Text style={styles.text}>{password}</Text>
        </Pressable>

        <View style={styles.buttonArea}>
          <TouchableOpacity style={styles.button} onPress={handleClose} >
            <Text style={styles.buttonText}>Voltar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.buttonSave]}>
            <Text style={styles.buttonSaveText}>Salvar senha</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  );
}

export default Modal;


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(24, 24, 24, 0.6)',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#fff',
    width: '85%',
    paddingTop: 24,
    paddingBottom: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 24,
  },
  innerPassword: {
    backgroundColor: '#0e0e0e',
    width: '90%',
    padding: 14,
    borderRadius: 8,
  },
  text: {
    color: '#fff',
    textAlign: 'center',
  },
  buttonArea: {
    flexDirection: 'row',
    width: '90%',
    marginTop: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    marginTop: 14,
    marginBottom: 14,
    padding: 14,
  },
  buttonSave: {
    backgroundColor: '#392de9',
    borderRadius: 8,
  },
  buttonSaveText: {
    color: '#fff',
    fontWeight: 'bold',
  }
})