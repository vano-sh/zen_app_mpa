import { Link } from 'react-router-dom'
import { Title, Text, Preview } from 'shared/ui'
import { Links } from './ui/Links'
import classes from './SectionDownload.module.scss'

export const SectionDownload = ({ data }) => {
  return (
    <section>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          {data?.title && (
            <Title className={classes.title} size={2} >
              {data.title.data}
            </Title>
          )}
          {data?.texts && (
            <Text className={classes.copy}>
              {data.texts[0]}
            </Text>
          )}
          {data?.links && <Links links={data.links} />}
          <div className={classes.link}>
            <Link to={data.name}>More detailed...</Link>
          </div>
        </div>
        {data?.image && (
          <div className={classes.image}>
            <Preview image={data.image} />
          </div>
        )}
      </div>
    </section>
  )
}