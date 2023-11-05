import React, { useMemo, useState } from "react"
import { View, Text, StyleSheet } from "react-native"

import { SearchBar } from "@components/SearchBar"
import yelp from "@api/yelp"
import { useYelpBusinessesResult } from "@src/hooks/useYelpBusinessesResult"
import { ResultList } from "@components/ResultList"

const SearchScreen = () => {
  const [query, setQuery] = useState("")
  const { searchApi, result, isError } = useYelpBusinessesResult(query)

  const [costEffectiveResult, bitPricierResult, bigSpenderResult] =
    useMemo(() => {
      const costEffectiveResult = result.filter((item) => item.price === "$")
      const bitPricierResult = result.filter((item) => item.price === "$$")
      const bigSpenderResult = result.filter((item) => item.price === "$$$")

      return [costEffectiveResult, bitPricierResult, bigSpenderResult]
    }, [result])

  return (
    <View style={styles.container}>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={searchApi}
      />
      <Text>Search screen</Text>
      {isError ? <Text>Something went wrong</Text> : null}
      <Text>We have found {result.length} results</Text>

      <ResultList results={costEffectiveResult} title="Cost Effective" />
      <ResultList results={bitPricierResult} title="Bit Pricier" />
      <ResultList results={bigSpenderResult} title="Big Spender" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    // marginLeft: 30,
  },
})

export default SearchScreen
