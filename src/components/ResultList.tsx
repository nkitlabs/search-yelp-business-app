import { NavigationProp, useNavigation } from "@react-navigation/native"

import { YelpBusinessesResult } from "@src/types/yelpResult"
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native"
import { ResultDetail } from "./ResultDetail"
import { RootStackParamList } from "./NavigationStack"

type ResultListProps = {
  title: string
  results: YelpBusinessesResult[]
}

export const ResultList = ({ title, results }: ResultListProps) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>()

  if (results.length === 0) {
    return null
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Business", { id: item.id })}
          >
            <ResultDetail item={item} />
          </TouchableOpacity>
        )}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 15,
    marginBottom: 5,
  },
  container: {
    marginBottom: 10,
  },
})
