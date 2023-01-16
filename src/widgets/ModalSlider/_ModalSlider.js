import { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useBodyHidden, usePreview } from 'shared/model'
import { Description, Slider } from './components'
import { debounce } from 'shared/lib/helpers'
import classes from './_ModalSlider.module.scss'

export const ModalSlider = () => {
  const [isSliderActive, setIsSliderActive] = useState(false)
  const [isDescriptionHidden, setIsDescriptionHidden] =
    useState(true)
  const [isImageBoxBackward, setIsImageBoxBackward] =
    useState(false)
  const [isSliderCentered, setIsSliderCentered] = useState(true)

  const { previewDetails, setPreviewDetails } = usePreview()

  const dispatch = useDispatch()

  const sliderRef = useRef(null)

  useEffect(() => {
    const debouncedHandleSliderCentering = debounce(
      handleSliderCentering,
      500
    )

    window.addEventListener(
      'resize',
      debouncedHandleSliderCentering
    )

    return () =>
      window.removeEventListener(
        'resize',
        debouncedHandleSliderCentering
      )
  }, [])

  useEffect(() => {
    let timerID

    if (!previewDetails) return

    setIsSliderActive(true)

    const screenHeight = window.innerHeight
    const screenWidth = window.innerWidth

    sliderRef.current.style.top = previewDetails.top + 'px'
    sliderRef.current.style.left = previewDetails.left + 'px'
    sliderRef.current.style.height = previewDetails.height + 'px'
    sliderRef.current.style.width = previewDetails.width + 'px'

    setTimeout(() => {
      setIsDescriptionHidden(false)
      sliderRef.current.style.top =
        screenHeight / 2 - previewDetails.height / 2 + 'px'
      sliderRef.current.style.left =
        screenWidth / 2 - previewDetails.width / 2 + 'px'
    }, 500)

    return () => clearTimeout(timerID)
  }, [previewDetails])

  useEffect(() => {
    if (!isImageBoxBackward || !sliderRef.current) return

    sliderRef.current.style.top = `${previewDetails.top}px`
    sliderRef.current.style.left = `${previewDetails.left}px`

    const timerID = setTimeout(() => {
      setIsImageBoxBackward(false)
      dispatch(setPreviewDetails(null))
      setIsDescriptionHidden(false)
    }, 500)

    return () => clearTimeout(timerID)
  }, [
    isImageBoxBackward,
    dispatch,
    previewDetails,
    setPreviewDetails,
  ])

  useEffect(() => {
    if (!sliderRef.current) return

    const screenHeight = window.innerHeight
    const screenWidth = window.innerWidth

    sliderRef.current.style.top =
      screenHeight / 2 -
      sliderRef.current.offsetHeight / 2 +
      'px'
    sliderRef.current.style.left =
      screenWidth / 2 - sliderRef.current.offsetWidth / 2 + 'px'

    setIsSliderCentered(true)
  }, [isSliderCentered])

  const handleCloseClick = () => {
    setIsImageBoxBackward(true)
    setIsDescriptionHidden(true)
    setIsSliderActive(false)
  }

  const handleSliderCentering = () => {
    setIsSliderCentered(false)
  }

  useBodyHidden(isSliderActive)

  if (!previewDetails) return null

  return (
    <div className={classes.modal_slider}>
      <Description
        isHidden={isDescriptionHidden}
        currentSlideID={previewDetails.id}
      />

      <Slider
        ref={sliderRef}
        width={previewDetails.width}
        currentSlideID={previewDetails.id}
        isImageBoxBackward={isImageBoxBackward}
        onCloseClick={handleCloseClick}
      />

      <div className={classes.link}>
        <Link to={'/'} onClick={handleCloseClick}>
          More detailed...
        </Link>
      </div>

      <div
        className={classes.overlay}
        onClick={handleCloseClick}></div>
    </div>
  )
}
