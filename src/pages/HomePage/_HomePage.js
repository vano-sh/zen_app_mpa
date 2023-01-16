import { useData } from 'shared/model'
import {
  SectionDownload,
  SectionWarranty,
  SectionCare,
  SectionInfo,
} from 'widgets'
import classes from './_HomePage.module.scss'

export const HomePage = () => {
  const { data } = useData()

  if (!data) return

  return (
    <div className={classes.home}>
      <SectionInfo data={data.pages.download} />
      <SectionInfo data={data.pages.warranty} />
      <SectionInfo data={data.pages.care} />
      {/* <SectionDownload data={data.pages.download} />
      <SectionWarranty data={data.pages.warranty} />
      <SectionCare data={data.pages.care} /> */}
    </div>
  )
}
