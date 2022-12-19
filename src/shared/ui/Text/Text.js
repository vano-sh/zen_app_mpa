import { memo, useRef } from 'react'
import { useAnimateRef } from 'shared/model'

export const Text = memo(({ className, children }) => {

  const refText = useRef(null)

  useAnimateRef(refText)

  return (
    <p className={className} ref={refText} >
      {children}
    </p>
  )
})