import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { SearchBar } from "@components/SearchBar"
import yelp from "@api/yelp"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const [result, setResult] = useState([])
  const [isError, setIsError] = useState(false)

  const searchApi = async () => {
    try {
      const result = await yelp.get("/search", {
        params: { limit: 50, term: query ?? "pizza", location: "san jose" },
      })

      setResult(result.data.businesses ?? [])
      setIsError(false)
    } catch (err) {
      console.log(err)
      setIsError(true)
    }
  }

  useEffect(() => {
    searchApi()
  }, [])

  return (
    <View>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={searchApi}
      />
      <Text>Search screen</Text>
      {isError ? <Text>Something went wrong</Text> : null}
      <Text>We have found {result.length} results</Text>
    </View>
  )
}

export default SearchScreen
