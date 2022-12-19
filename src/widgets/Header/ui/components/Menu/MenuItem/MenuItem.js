import { memo } from 'react'
import { Link } from 'react-router-dom'
import { scrollToTop } from 'shared/lib/helpers'
import classes from '../../../Header.module.scss'

export const MenuItem = memo(({ item, setIsBurgerActive }) => {

  const handleSectionClick = () => {
    setIsBurgerActive(false)
    scrollToTop()
  }

  return (
    <li className={classes.item}>

      <button
        onClick={handleSectionClick}
      >
        <Link to={item.target} placeholder={item.target} >
          <span>{item.data}</span>
        </Link>
      </button>
    </li>
  )
})