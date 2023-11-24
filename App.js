/* Importando o NavigationContainer */
import { NavigationContainer } from '@react-navigation/native'; 

/* Importando o componente das Rotas */
import { Routes } from './src/routes'


export default function App() {

  return (
    <NavigationContainer>
      <Routes />
      {/* Chamando o componente das rotas */}
    </NavigationContainer>
  );
}