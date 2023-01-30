import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addSlides } from 'shared/model/reducers/_sliderSlice'
import { setPreviewDetails } from 'shared/model/reducers/_previewSlice'
import { useAnimateRef } from 'shared/model'
import ZoomIcon from '../../assets/icons/svg/zoom.svg'
import classes from './_Preview.module.scss'

export const Preview = ({ image }) => {
  const previewRef = useRef(null)

  const dispatch = useDispatch()

  useAnimateRef(previewRef)

  const handlePreviewClick = () => {
    const { top, left, height, width } =
      previewRef.current.getBoundingClientRect()

    const details = {
      id: image.id,
      src: image.source,
      alt: image.alternate,
      top,
      left,
      height,
      width,
    }

    dispatch(setPreviewDetails(details))
  }

  useEffect(() => {
    dispatch(addSlides(image))
  }, [image, dispatch])

  return (
    <div className={classes.preview}>
      <button ref={previewRef} onClick={handlePreviewClick}>
        <img src={image.source} alt={image.alternate} />
      </button>
      <div className={classes.zoom}>
        <ZoomIcon />
      </div>
    </div>
  )
}
