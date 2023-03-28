import { memo } from 'react'
import classes from '../../../../Modal.module.scss'

export const Policy = memo(({ policy, isPolicyChecked, onPolicyChange }) => {
  return (
    <label className={classes.policy}>
      <input
        type={policy.checkbox.type}
        checked={isPolicyChecked}
        onChange={onPolicyChange}
      />
      <a href={policy.linkPolicy.url}>{policy.linkPolicy.data}</a>
    </label>
  )
})
