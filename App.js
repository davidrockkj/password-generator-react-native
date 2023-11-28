/* Importando o NavigationContainer */
import { NavigationContainer } from '@react-navigation/native'; 
import { StatusBar } from 'expo-status-bar';

/* Importando o componente das Rotas */
import { Routes } from './src/routes'


export default function App() {

  return (
    <NavigationContainer>
      <StatusBar style='dark' />
      <Routes />
      {/* Chamando o componente das rotas */}
    </NavigationContainer>
  );
}