import { useState, useEffect } from 'react';
  /* useEffect é o efeito colateral - nesse caso pra carregar algo quando a entrar na tela */
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';
import useStorage from '../../hooks/useStorage'
import { PasswordItem } from './components/passworditem';

export function Passwords(){

  /* Criando uma State que passa as listas */
  const [listPasswords, setListPasswords] = useState([]);

  /* Inicializando o useIsFocused (que é um booleano) */
  const focused = useIsFocused();

  /* Inicializando o useStorage */
  const { getItem, removeItem } = useStorage();
  

  /** Criando useEffect
   * '[] = array de dependencia' - vai chamar o que tiver dentro da função anônima quando o componente for carregado
   * Tudo que estiver dentro do [] irá chamar o useEffect novamente quando sofrer alterações
   */ 
  useEffect( () => {

    /* Buscar a lista de senhas */
    async function loadPasswords(){
      const passwords = await getItem("@pass");
      
      /* Salvando as senhas */
      setListPasswords(passwords);
    }

    loadPasswords();

  }, [focused] ) 


  /** Função que deleta o item */
  async function handleDeletePassword(item) {

    const passwords = await removeItem("@pass", item);
      /**  Chamando o hook personalizado para remover o item
       * Precisa passar a chave
       * Precisa passar o item que é pra remover
       * A função removeItem irá devolver uma lista atualizada e salvar na variável 'passwords'
       */

    /* Informando ao useState que a lista mudou */
    setListPasswords(passwords);
    
  }

  return (
    <SafeAreaView style={{ flex: 1, }}>
      {/* Usando para o texto não ficar escondido */}

      <View style={styles.header}>
        <Text style={styles.title}>Minhas senhas</Text>
      </View>

      <View style={styles.content}>
        <FlatList 
          style={{ flex:1, paddingTop: 14, }}
          data={listPasswords}
          keyExtractor={ (item) => String(item)
            /* identificar qual é um item único */
          } 
          renderItem={ ({ item }) => <PasswordItem data={item} removePassword={ () => handleDeletePassword(item)} />
          /* Quando vai renderizar os itens */
          } 
          showsHorizontalScrollIndicator={
            false
            /* Tentando esconder o scrollbar */}
        />
      </View>

    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    backgroundColor: '#392de9',
    paddingTop: 58,
    paddingBottom: 14,
    paddingLeft: 14,
    paddingRight: 14
  },
  title: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
    paddingLeft: 14,
    paddingRight: 14,
  }
})