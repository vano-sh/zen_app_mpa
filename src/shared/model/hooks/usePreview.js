import { useSelector } from 'react-redux'
import { setPreviewDetails } from 'shared/model/reducers/previewSlice'

export const usePreview = () => {
  const { previewDetails } = useSelector((state) => state.previewReducer)

  return { previewDetails, setPreviewDetails }
}
