import { useEffect } from 'react'

export const useBodyHidden = (isHidden) => {
  useEffect(() => {
    if (isHidden) {
      document.body.classList.add('hidden')
    } else {
      document.body.classList.remove('hidden')
    }
  }, [isHidden])

  return null
}