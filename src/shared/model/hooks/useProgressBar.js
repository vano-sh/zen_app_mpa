import { useEffect } from 'react'

export const useProgressBar = () => {

  const progressBar = () => {
    const clientRect = document.body.getBoundingClientRect()
    const clientPassed = Math.abs(clientRect.top)
    const clientHeight = document.body.clientHeight
    const screenHeight = window.screen.height
    const clientNotPassed = clientHeight - screenHeight
    const percentPassed = Math.floor(clientPassed / clientNotPassed * 100)
    const $progressBar = document.querySelector('[data-name="progress-bar"]')

    $progressBar.style.width = `${percentPassed}%`
  }

  useEffect(() => {
    window.addEventListener('scroll', progressBar)

    return () => window.removeEventListener('scroll', progressBar)
  }, [])

  return null
}