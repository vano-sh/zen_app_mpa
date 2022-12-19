import { memo } from 'react'
import classes from '../../../../Modal.module.scss'
import { classNames } from 'shared/lib/helpers'

export const Field = memo(({
  details,
  value,
  isValidField,
  onFieldChange,
}) => {

  return (
    <label className={classNames(
      classes.input,
      {
        [classes.value_success]: isValidField,
        [classes.value_error]: value?.length && !isValidField
      }
    )}>
      <input
        type={details.type}
        value={value}
        placeholder={details.placeholder}
        onChange={onFieldChange}
      />
    </label>
  )
})