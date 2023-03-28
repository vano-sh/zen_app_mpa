import { useParams } from 'react-router-dom'
import { useData } from 'shared/model'
import { Preloader, SectionInfo } from 'widgets'

export const InfoPage = () => {
  const { id } = useParams()
  const { data, isLoading, errorMessage } = useData()

  return (
    <>
      {isLoading && <Preloader />}
      {errorMessage && <h1>{errorMessage}</h1>}

      {data && <SectionInfo data={data.pages[id]} />}
    </>
  )
}
