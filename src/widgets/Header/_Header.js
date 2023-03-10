import { useCallback, useEffect, useState } from 'react'
import {
  Logo,
  Menu,
  Theme,
  Language,
  Burger,
} from './components'
import { useBodyHidden } from 'shared/model'
import { scrollToTop } from 'shared/lib/helpers'
import classes from './_Header.module.scss'

export const Header = ({ data }) => {
  const [isBurgerActive, setIsBurgerActive] = useState(false)
  const [isLogoClicked, setIsLogoClicked] = useState(null)

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
