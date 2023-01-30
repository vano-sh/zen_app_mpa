import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useData, useLang } from 'shared/model'
import { SectionInfo } from 'widgets'

export const InfoPage = () => {
  const { id } = useParams()
  const { data, isLoading, errorMessage } = useData()

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {errorMessage && <h1>{errorMessage}</h1>}

      {data && <SectionInfo data={data.pages[id]} />}
    </>
  )
}
