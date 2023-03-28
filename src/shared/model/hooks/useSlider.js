import { useSelector } from 'react-redux'
import {
  addSlides,
  setSlideDescription,
} from 'shared/model/reducers/sliderSlice'

export const useSlider = () => {
  const { slides, slideDescription } = useSelector(
    (state) => state.sliderReducer
  )

  return { slides, slideDescription, addSlides, setSlideDescription }
}
