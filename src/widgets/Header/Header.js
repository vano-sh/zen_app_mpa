import { useCallback, useEffect, useState } from 'react'
import { Logo, Menu, Theme, Language, Burger } from './components'
import { useBodyHidden, useData } from 'shared/model'
import { scrollToTop } from 'shared/lib/helpers'
import classes from './Header.module.scss'

export const Header = () => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [isLogoClicked, setIsLogoClicked] = useState(null)
  const {
    data: { header: data },
  } = useData()

  useEffect(() => {
    if (isLogoClicked) {
      scrollToTop()
      setIsLogoClicked(false)
    }
  }, [isLogoClicked])

  useBodyHidden(isBurgerActive)

  const handleBurgerClick = useCallback(() => {
    setIsBurgerActive((prev) => !prev)
  }, [])

  const handleLogoClick = useCallback(() => {
    setIsBurgerActive(false)
    setIsLogoClicked(true)
  }, [])

  return (
    <header className={classes.header} data-name={data.name}>
      <div className={classes.wrapper}>
        <nav className={classes.nav}>
          <Logo onLogoClick={handleLogoClick} />

          <Menu
            menuItems={data.menuItems}
            isBurgerActive={isBurgerActive}
            setIsBurgerActive={setIsBurgerActive}
          />
        </nav>

        <Language />

        <Theme />

        <Burger
          isBurgerActive={isBurgerActive}
          onBurgerClick={handleBurgerClick}
        />
      </div>
    </header>
  )
}
