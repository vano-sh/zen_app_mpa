import { memo } from 'react'
import { Link } from 'react-router-dom'
import { IconLogo } from 'shared/assets/icons'
import classes from '../../_Header.module.scss'

export const Logo = memo(({ onLogoClick }) => {

  return (
    <button
      className={classes.logo}
      onClick={onLogoClick}
    >
      <Link to='/'>
        <IconLogo />
      </Link>
    </button>
  )
})