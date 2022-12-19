import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useInfoData, useLang } from 'shared/model'
import { SectionInfo } from 'widgets'

export const InfoPage = () => {
  const { id } = useParams()
  const {
    fetchInfoData,
    isLoading,
    infoData,
    errorMessage
  } = useInfoData()

  const { lang } = useLang()

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchInfoData(id))
  }, [id, lang])

  return (
    <>
      {isLoading && <h1>Loading...</h1>}
      {errorMessage && <h1>{errorMessage}</h1>}

      {infoData && <SectionInfo data={infoData} />}
    </>
  )
}