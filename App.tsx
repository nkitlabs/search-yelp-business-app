import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"

import SearchScreen from "@src/screens/Search"
import BusinessScreen from "@screens/Business"
import { NativeStackNavigator } from "@components/NavigationStack"

type RootStackParamList = {
  Search: undefined
  Business: { id: string }
}

const App = () => {
  return (
    <NavigationContainer>
      <NativeStackNavigator.Navigator>
        <NativeStackNavigator.Screen name="Search" component={SearchScreen} />
        <NativeStackNavigator.Screen
          name="Business"
          component={BusinessScreen}
        />
      </NativeStackNavigator.Navigator>
    </NavigationContainer>
  )
}

export default App
