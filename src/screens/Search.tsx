import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { SearchBar } from "@components/SearchBar"
import yelp from "@api/yelp"
import { useYelpBusinessesResult } from "@src/hooks/useYelpBusinessesResult"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const { searchApi, result, isError } = useYelpBusinessesResult(query)

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
