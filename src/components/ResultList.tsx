import { YelpBusinessesResult } from "@src/types/yelpResult"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { ResultDetail } from "./ResultDetail"

type ResultListProps = {
  title: string
  results: YelpBusinessesResult[]
}

export const ResultList = ({ title, results }: ResultListProps) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        data={results}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ResultDetail item={item} />}
        showsHorizontalScrollIndicator={false}
      ></FlatList>
    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: "bold",
  },
})
