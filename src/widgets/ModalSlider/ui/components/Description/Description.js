import { useRef } from 'react'
import { usePreview, useSlider, useAnimateDescripton } from 'shared/model'
import classes from '../../ModalSlider.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Description = ({ isHidden }) => {

  const { previewDetails } = usePreview()
  const { slideDescription } = useSlider()

  const descriptionRef = useRef(null)

  useAnimateDescripton(descriptionRef, slideDescription)

  return (
    <div
      ref={descriptionRef}
      className={classNames(classes.description, { [classes.hidden]: isHidden })}
      style={{ width: `${previewDetails.width}px` }}
    ></div>
  )
}