import { useData } from 'shared/model'
import {
  PrevSectionDownload,
  PrevSectionWarranty,
  PrevSectionCare,
} from 'widgets'
import classes from './_HomePage.module.scss'

export const HomePage = () => {
  const { data } = useData()

  if (!data) return

  return (
    <div className={classes.home}>
      <PrevSectionDownload data={data.prevSections.download} />
      <PrevSectionWarranty data={data.prevSections.warranty} />
      <PrevSectionCare data={data.prevSections.care} />
    </div>
  )
}
