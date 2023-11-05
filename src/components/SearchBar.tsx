import { View, StyleSheet, TextInput } from "react-native"
import { Feather } from "@expo/vector-icons"

type SearchBarProps = {
  query: string
  onQueryChange: (val: string) => void
  onQuerySubmit: () => void
}

export const SearchBar = ({
  query,
  onQueryChange,
  onQuerySubmit,
}: SearchBarProps) => {
  return (
    <View style={styles.background}>
      <Feather name="search" style={styles.searchIcon} />
      <TextInput
        placeholder="search"
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={query}
        onChangeText={onQueryChange}
        onEndEditing={onQuerySubmit}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginTop: 15,
    marginHorizontal: 15,
    marginBottom: 10,
    flexDirection: "row",
  },
  input: {
    flex: 1,
    fontSize: 18,
  },
  searchIcon: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 15,
  },
})
