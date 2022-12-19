import { useData } from 'shared/model'
import {
  SectionDownload,
  SectionWarranty,
  SectionCare
} from 'widgets'
import classes from './HomePage.module.scss'

export const HomePage = () => {

  const { data } = useData()

  if (!data) return

  return (
    <div className={classes.home}>
      <SectionDownload data={data.pages.download} />
      <SectionWarranty data={data.pages.warranty} />
      <SectionCare data={data.pages.care} />
    </div>
  )
}