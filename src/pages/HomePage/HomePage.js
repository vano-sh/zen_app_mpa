import { useData } from 'shared/model'
import { PrevSection } from 'widgets'
import classes from './HomePage.module.scss'

export const HomePage = () => {
  const { data } = useData()

  return (
    <div className={classes.home}>
      <PrevSection data={data.prevSections.download} />
      <PrevSection data={data.prevSections.warranty} odd={true} />
      <PrevSection data={data.prevSections.care} />
    </div>
  )
}
