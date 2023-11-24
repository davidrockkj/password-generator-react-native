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
        name='home'
        component={Home}
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {

            if (focused) {
              return <Ionicons size={size} color={color} name='home' />
            }
            return <Ionicons size={size} color={color} name='home-outline' />
          }
        }}
      />

      <Tab.Screen 
        /* nome da página */
        name='passwords'
        /* qual componente vai exibir nessa página */
        component={Passwords}
        options={{
          /* Removendo o Header */
          headerShown: false,
          tabBarIcon: ({ focused, size, color }) => {

            {/* Se estiver com foco na tela */}
            if (focused) {
              return <Ionicons size={size} color={color} name='lock-closed' />
            }
            {/* Se não */}
            return <Ionicons size={size} color={color} name='lock-closed-outline' />
          }
        }}
      />
    </Tab.Navigator>
  )
}