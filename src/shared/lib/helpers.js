export const scrollToTop = () => {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
}

export const scrollToSection = (targetName) => {
  const $section = document.querySelector(
    `[data-name="${targetName}"]`
  )
  const $header = document.querySelector('[data-name="header"]')

  const clientPosition = window.pageYOffset
  const sectionPosition = $section?.getBoundingClientRect().top
  const headerHeight = $header?.getBoundingClientRect().height
  const targetPosition =
    clientPosition + sectionPosition - headerHeight

  window.scrollTo({
    top: targetPosition,
    behavior: 'smooth',
  })
}

export const scrollToLastMessage = (dialog) => {
  if (!dialog) return

  const lastMessage =
    dialog.childNodes[dialog.childNodes.length - 1]

  if (!lastMessage) return

  const lastMessageTopPosition = lastMessage.offsetTop

  dialog.scrollTo({
    top: lastMessageTopPosition,
    behavior: 'smooth',
  })
}

export const validateName = (value) => {
  const regexp = /[^a-z]+/gi

  return value.length >= 2 && value.search(regexp) === -1
    ? true
    : false
}

export const validateTel = (value) => {
  const regexp = /[^0-9]+/gi

  return value.length >= 10 && value.search(regexp) === -1
    ? true
    : false
}

export const validateEmail = (value) => {
  const regexp = /[a-z0-9.]+@[a-z]{4,6}\.(ru|com|by)/gi

  return value.length >= 9 && value.search(regexp) !== -1
    ? true
    : false
}

export const showAnimateRef = (ref) => {
  const element = ref.current
  const screenHeight = window.screen.height
  const elementTopPosition = element.getBoundingClientRect().top

  if (screenHeight - 20 >= elementTopPosition) {
    element.classList.remove('off')
    element.classList.add('on')
  } else {
    element.classList.remove('on')
    element.classList.add('off')
  }
}

export const debounce = (func, timeout) => {
  let timerID

  return (...arg) => {
    clearTimeout(timerID)
    const callback = () => func.apply(this, arg)
    timerID = setTimeout(callback, timeout)
  }
}

export const throttle = (func, timeout) => {
  let timerID = null

  return (...arg) => {
    if (timerID) return
    const callback = () => func.apply(this, arg)
    timerID = setTimeout(() => {
      callback()
      clearTimeout(timerID)
      timerID = null
      timerID = setTimeout(() => {
        func.apply(this, arg)
      })
    }, timeout)
  }
}

export const getCurrentTime = () => {
  return new Date().toLocaleTimeString().slice(0, -3)
}

export const classNames = (
  basicClassName,
  extraClasses = '',
  ...arrayClasses
) => {
  let result = basicClassName + ' ' || ''
  let extraClass = ''
  let arrayClass = arrayClasses
    .map((item) => item + ' ')
    .join('')

  for (const key in extraClasses) {
    console.log(extraClass)

    if (extraClasses[key]) {
      extraClass += key + ' '
    }
  }

  return result.concat(extraClass, arrayClass)
}
