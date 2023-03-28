import { useCallback } from 'react'
import { useState } from 'react'

export const useFetch = (baseURL) => {

  const [isLoading, setIsLoading] = useState(true)

  const getData = useCallback((endPoint) => {

    return new Promise((resolve, reject) => {
      fetch(baseURL + endPoint)
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            reject(data)
          }
          resolve(data)
        })
        .catch((error) => reject(error))
    })
  }, [baseURL])

  const postData = useCallback((endPoint, body) => {

    return new Promise((resolve, reject) => {
      fetch(baseURL + endPoint, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      })
        .then((response) => response.json())
        .then((data) => {
          if (!data) {
            reject(data)
          }
          resolve(data)
        })
        .catch((error) => reject(error))
        .finally(() => setIsLoading(false))
    })
  }, [baseURL])

  return { getData, postData, isLoading, setIsLoading }
}