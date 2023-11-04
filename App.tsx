import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SearchScreen from "./src/screens/Search"

const StackNavigator = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator.Navigator>
        <StackNavigator.Screen name="Search" component={SearchScreen} />
      </StackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default App
