import { createNativeStackNavigator } from "@react-navigation/native-stack"

export type RootStackParamList = {
  Search: undefined
  Business: { id: string }
}

export const NativeStackNavigator =
  createNativeStackNavigator<RootStackParamList>()
