import { useRef } from 'react'
import { usePreview, useSlider, useAnimateDescription } from 'shared/model'
import { classNames } from 'shared/lib/helpers'
import classes from '../../ModalSlider.module.scss'

export const Description = ({ isHidden }) => {
  const { previewDetails } = usePreview()
  const { slideDescription } = useSlider()

  const descriptionRef = useRef(null)

  useAnimateDescription(descriptionRef, slideDescription)

  return (
    <div
      ref={descriptionRef}
      className={classNames(classes.description, {
        [classes.hidden]: isHidden,
      })}
      style={{ width: `${previewDetails.width}px` }}
    ></div>
  )
}
