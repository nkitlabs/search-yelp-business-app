import yelp from "@api/yelp"
import { useCallback, useEffect, useState } from "react"

export const useYelpBusinessesResult = (query: string) => {
  const [result, setResult] = useState([])
  const [isError, setIsError] = useState(false)

  const searchApi = useCallback(async () => {
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
  }, [query])

  useEffect(() => {
    searchApi()
  }, [])

  return { searchApi, result, isError }
}
