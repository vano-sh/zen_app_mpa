import { useEffect } from 'react'

export const useAnimateDescripton = (descriptionRef, slideDescription) => {

  useEffect(() => {
    if (!descriptionRef.current || !slideDescription) return

    descriptionRef.current.innerHTML = ''

    const textRef = document.createElement('span')
    const cursorRef = document.createElement('span')

    descriptionRef.current.append(textRef)
    descriptionRef.current.append(cursorRef)

    let count = 0

    const writeSymbolToString = () => {

      let timerID

      if (slideDescription.length > count) {
        textRef.textContent += slideDescription[count]
        count++
        timerID = setTimeout(writeSymbolToString, 50);
      } else {
        cursorRef.classList.add('blink')
        return () => clearTimeout(timerID)
      }
    }

    writeSymbolToString()

  }, [descriptionRef, slideDescription])
}