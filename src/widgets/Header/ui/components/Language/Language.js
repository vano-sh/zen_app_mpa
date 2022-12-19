import { memo } from 'react'
import { useLang } from 'shared/model'
import { useDispatch } from 'react-redux'
import classes from '../../Header.module.scss'

export const Language = memo(() => {

  const { lang, changeLang } = useLang()
  const dispatch = useDispatch()

  const handleLangChange = (event) => {
    const value = event.target.value

    localStorage.setItem('lang', value)
    dispatch(changeLang(value))
  }

  return (
    <label
      className={classes.lang}
    >
      <select
        value={lang}
        onChange={handleLangChange}
      >
        <option value={'en'}>EN</option>
        <option value={'ru'}>RU</option>
      </select>
    </label>
  )
})