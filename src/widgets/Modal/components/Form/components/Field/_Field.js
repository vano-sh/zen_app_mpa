import { memo } from 'react'
import { classNames } from 'shared/lib/helpers'
import classes from '../../../../_Modal.module.scss'

export const Field = memo(
  ({ details, value, isValidField, onFieldChange }) => {
    return (
      <label
        className={classNames(classes.input, {
          [classes.value_success]: isValidField,
          [classes.value_error]: value?.length && !isValidField,
        })}>
        <input
          type={details.type}
          value={value}
          placeholder={details.placeholder}
          onChange={onFieldChange}
        />
      </label>
    )
  }
)
