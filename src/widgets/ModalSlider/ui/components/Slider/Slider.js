import { forwardRef, useEffect, useRef, useState } from 'react'
import { useSlider } from 'shared/model'
import { useDispatch } from 'react-redux'
import { IconClose, IconPrev, IconNext } from 'shared/assets/icons'
import classes from '../../ModalSlider.module.scss'

export const Slider = forwardRef(({
  width,
  currentSlideID,
  isImageBoxBackward,
  onCloseClick
}, ref) => {

  const { slides, setSlideDescription } = useSlider()
  const dispatch = useDispatch()

  const [activeSlideID, setActiveSlideID] = useState(currentSlideID)
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchSEndX] = useState(null)

  const slidesRef = useRef(null)

  useEffect(() => {
    setActiveSlideID(currentSlideID)
  }, [isImageBoxBackward, currentSlideID])

  useEffect(() => {
    if (!activeSlideID || !slides.length || !slides) return

    dispatch(setSlideDescription(slides[activeSlideID - 1].alternate))
  }, [activeSlideID, dispatch, setSlideDescription, slides])

  useEffect(() => {
    if (!touchStartX || !touchEndX) return

    if (touchStartX < touchEndX) {
      setActiveSlideID((prevID) => prevID > 1 ? prevID - 1 : prevID)
    }

    if (touchStartX > touchEndX) {
      setActiveSlideID((prevID) => prevID < slides.length ? prevID + 1 : prevID)
    }
  }, [touchStartX, touchEndX, slides])

  const handlePrevClick = () => {
    setActiveSlideID((prevID) => prevID > 1 ? prevID - 1 : prevID)
  }
  const handleNextClick = () => {
    setActiveSlideID((prevID) => prevID < slides.length ? prevID + 1 : prevID)
  }

  const handleSliderTouchStart = (event) => {
    const startX = Math.floor(event.changedTouches[0].clientX)
    setTouchStartX(startX)
  }
  const handleSliderTouchEnd = (event) => {
    const endX = Math.floor(event.changedTouches[0].clientX)
    setTouchSEndX(endX)
  }

  return (
    <div
      className={classes.slider}
      ref={ref}
      onTouchStart={handleSliderTouchStart}
      onTouchEnd={handleSliderTouchEnd}
    >

      {!isImageBoxBackward && (
        <button
          className={classes.close}
          onClick={onCloseClick}
        >
          <IconClose />
        </button>
      )}

      <div
        className={classes.slides}
        style={{
          left: activeSlideID !== 1
            ? -(width * (activeSlideID - 1)) + 'px'
            : 0
        }}
        ref={slidesRef}
      >
        {slides.length > 0 && slides.map((slide) =>
          <img
            className={classes.slide}
            key={slide.id}
            style={{ width: `${width}px` }}
            src={slide.source}
            alt={slide.alternate}
          />
        )}
      </div>

      {!isImageBoxBackward && (
        <button
          className={classes.prev}
          onClick={handlePrevClick}
          disabled={activeSlideID === 1
            ? true
            : false
          }
        >
          <IconPrev />
        </button>
      )}

      {!isImageBoxBackward && (
        <button
          className={classes.next}
          onClick={handleNextClick}
          disabled={activeSlideID === slides.length}
        >
          <IconNext />
        </button>
      )}

      <div className={classes.pagination}>
        {`${activeSlideID} / ${slides.length}`}
      </div>
    </div>
  )
})