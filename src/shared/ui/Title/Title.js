import { memo, useRef } from 'react'
import { useAnimateRef } from 'shared/model'

export const Title = memo(({ className, size, children }) => {

  const titleRef = useRef(null)

  useAnimateRef(titleRef)

  switch (size) {
    case 6: return (
      <h6 className={className} ref={titleRef}>
        {children}
      </h6>
    )

    case 5: return (
      <h5 className={className} ref={titleRef}>
        {children}
      </h5>
    )

    case 4: return (
      <h4 className={className} ref={titleRef}>
        {children}
      </h4>
    )

    case 3: return (
      <h3 className={className} ref={titleRef}>
        {children}
      </h3>
    )

    case 2: return (
      <h2 className={className} ref={titleRef}>
        {children}
      </h2>
    )

    default: return (
      <h1 className={className} ref={titleRef}>
        {children}
      </h1>
    )
  }
})