// Importando a biblioteca das rotas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importando as páginas
import { Home } from './pages/home'
import { Passwords } from './pages/passwords'


// Inicializando o componente
const Tab = createBottomTabNavigator(); 

// Criando a configuração de rotas
export function Routes(){
  return(
    <Tab.Navigator>
      <Tab.Screen 
        name='home' // nome da página
        component={Home} // qual componente vai exibir nessa página
        options={{
          headerShown: false, // Removendo o Header
        }}
      />

      <Tab.Screen 
        name='passwords' // nome da página
        component={Passwords} // qual componente vai exibir nessa página
        options={{
          headerShown: false, // Removendo o Header
        }}
      />
    </Tab.Navigator>
  )
}