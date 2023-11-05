import React, { useMemo, useState } from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

import { SearchBar } from "@components/SearchBar"
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
    <>
      <SearchBar
        query={query}
        onQueryChange={setQuery}
        onQuerySubmit={searchApi}
      />
      {isError ? <Text>Something went wrong</Text> : null}
      <ScrollView>
        <ResultList results={costEffectiveResult} title="Cost Effective" />
        <ResultList results={bitPricierResult} title="Bit Pricier" />
        <ResultList results={bigSpenderResult} title="Big Spender" />
      </ScrollView>
    </>
  )
}

const styles = StyleSheet.create({})

export default SearchScreen
