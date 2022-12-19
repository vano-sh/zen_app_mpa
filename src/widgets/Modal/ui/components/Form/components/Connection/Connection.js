import { memo } from 'react'
import { classNames } from 'shared/lib/helpers'
import classes from '../../../../Modal.module.scss'

export const Connection = memo(({
  details,
  connection,
  isValidConnection,
  onConnectionChange
}) => {

  if (!Object.keys(details).length) return null

  const { options } = details

  return (
    <label
      className={classNames(classes.select, { [classes.value_success]: isValidConnection })}
    >
      {!connection && <span>{details.label}</span>}

      <select
        value={connection}
        onChange={onConnectionChange}
      >
        <option></option>

        {options?.length > 0 && options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
    </label>
  )
})