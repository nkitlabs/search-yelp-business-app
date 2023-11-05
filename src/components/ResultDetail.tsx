import { YelpBusinessesResult } from "@src/types/yelpResult"
import { Image, StyleSheet, Text, View } from "react-native"

type ResultDetailProps = {
  item: YelpBusinessesResult
}
export const ResultDetail = ({ item }: ResultDetailProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: item.image_url }} style={styles.image}></Image>
      <Text style={styles.textName}>{item.name}</Text>
      <Text>
        {item.rating} Stars, {item.review_count} Reviews
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: 15,
  },
  image: {
    width: 250,
    height: 120,
    borderRadius: 4,
  },
  textName: {
    fontWeight: "bold",
    fontSize: 16,
  },
})
