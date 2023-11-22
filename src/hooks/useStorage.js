import AsyncStorage from "@react-native-async-storage/async-storage";

const useStorage = () => {

  // Buscar os itens salvos
  const getItem = async (key) => {
    try{
      const passwords = await AsyncStorage.getItem(key);
      return JSON.parse(passwords) || []; // Se não existir, vai mandar um array vazio

    }catch(error){
    // Caso dê erro
      console.log("Erro ao buscar", error);
      return [];

    }
  }

  // Salvar um item no storage
  const saveItem = async (key, value) => {
    try {
      // Para salvar uma nova, é necessário puxar as que já tem
      let passwords = await getItem(key);

      // Adicionando mais um item na array
      passwords.push(value);

      // Salvando no Async Storage
      await AsyncStorage.setItem(key, JSON.stringify(passwords));

    } catch (error) {
      console.log("Erro ao salvar", error);

    }
  }

  
  // Remover um item no storage
  const removeItem = async (key, item) => {
    try {
      
      // Consultando a lista
      let passwords = await getItem(key);

      // Filtrar
      let myPasswords = passwords.filter( (password) => {
        // Retornar todas as senhas que são diferentes da que eu cliquei
        return (password !== item)
      })

      // Atualizando Async Storage
      await AsyncStorage.setItem(key, JSON.stringify(myPasswords))

      // Retornar a lista atualizada
      return myPasswords;

    } catch (error) {
      console.log("Erro ao deletar", error);
    }
  }

  // Retornar as funcionalidades que é possível usar
  return {
    getItem,
    saveItem,
    removeItem,
  }
}

export default useStorage;