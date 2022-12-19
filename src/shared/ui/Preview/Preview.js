import { useRef, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { addSlides } from 'shared/model/reducers/_sliderSlice'
import { setPreviewDetails } from 'shared/model/reducers/_previewSlice'
import { useAnimateRef } from 'shared/model'
import classes from './Preview.module.scss'

export const Preview = ({ image }) => {

  const previewRef = useRef(null)

  const dispatch = useDispatch()

  useAnimateRef(previewRef)

  const handlePreviewClick = () => {
    const { top, left, height, width } = previewRef.current.getBoundingClientRect()

    const details = {
      id: image.id,
      src: image.source,
      alt: image.alternate,
      top,
      left,
      height,
      width
    }

    dispatch(setPreviewDetails(details))
  }

  useEffect(() => {
    dispatch(addSlides(image))
  }, [image, dispatch])

  return (
    <button
      className={classes.preview}
      ref={previewRef}
      onClick={handlePreviewClick}
    >
      <img
        src={image.source}
        alt={image.alternate}
      />
    </button>
  )
}