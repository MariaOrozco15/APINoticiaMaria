import { NavigationContainer } from "@react-navigation/native";//Biblioteca
import { createNativeStackNavigator } from "@react-navigation/native-stack"; //permitir navegacion en una fila de pantalla

import NewsList from "./src/NewsList"
import NewsDetail from './src/NewsDetail'

const Stack = createNativeStackNavigator();

function App() {
    return(
        <NavigationContainer>
            <Stack.Navigator>
            <Stack.Screen
                name = "NewsList"
                component = {NewsList}
                options = {{title: 'Últimas noticias'}}
            />
              <Stack.Screen
                name = "NewsDetail"
                component = {NewsDetail}
                options = {{title: 'Detalle de noticias'}}
            />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;



