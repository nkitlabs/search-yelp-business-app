import { RouteProp, useRoute } from "@react-navigation/native"
import { FlatList, Image, StyleSheet, Text } from "react-native"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useCallback, useEffect, useState } from "react"

import { RootStackParamList } from "@components/NavigationStack"
import yelp from "@api/yelp"
import { YelpBusinessResult } from "@src/types/yelpResult"

const BusinessScreen = () => {
  const [result, setResult] = useState<YelpBusinessResult | undefined>(
    undefined
  )

  const route = useRoute<RouteProp<RootStackParamList, "Business">>()
  const id = route.params.id

  const getResult = async (id: string) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }

  useEffect(() => {
    getResult(id)
  }, [id])

  if (!result) {
    return null
  }

  return (
    <>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => (
          <Image style={styles.image} source={{ uri: item }} />
        )}
      />
    </>
  )
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
  },
})

export default BusinessScreen
