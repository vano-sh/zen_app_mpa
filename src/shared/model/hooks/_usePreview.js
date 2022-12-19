import { useSelector } from "react-redux"
import { setPreviewDetails } from 'shared/model/reducers/_previewSlice'

export const usePreview = () => {
  const { previewDetails } = useSelector((state) => state.previewReducer)

  return { previewDetails, setPreviewDetails }
}