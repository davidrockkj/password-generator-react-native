// Importando a biblioteca das rotas
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Importando as páginas
import { Home } from './pages/home';
import { Passwords } from './pages/passwords';

// Importando a biblioteca de icones
import { Ionicons } from '@expo/vector-icons';


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
          tabBarIcon: ({ focused, size, color }) => {

            // Se estiver com foco na tela
            if (focused) {
              return <Ionicons size={size} color={color} name='home' />
            }
            // Se não
            return <Ionicons size={size} color={color} name='home-outline' />
          }
        }}
      />

      <Tab.Screen 
        name='passwords' // nome da página
        component={Passwords} // qual componente vai exibir nessa página
        options={{
          headerShown: false, // Removendo o Header
          tabBarIcon: ({ focused, size, color }) => {

            // Se estiver com foco na tela
            if (focused) {
              return <Ionicons size={size} color={color} name='lock-closed' />
            }
            // Se não
            return <Ionicons size={size} color={color} name='lock-closed-outline' />
          }
        }}
      />
    </Tab.Navigator>
  )
}