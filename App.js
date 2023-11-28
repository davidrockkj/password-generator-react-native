/* Importando o NavigationContainer */
import { NavigationContainer } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';

/* Importando o componente das Rotas */
import { Routes } from './src/routes'


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor="#0000FF" barStyle="light-content" />
      <Routes />
      {/* Chamando o componente das rotas */}
    </NavigationContainer>
  );
}