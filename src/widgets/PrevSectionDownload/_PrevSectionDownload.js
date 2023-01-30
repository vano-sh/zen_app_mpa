import { Link } from 'react-router-dom'
import { Title, Text, Preview } from 'shared/ui'
import { Links } from './ui/Links'
import classes from './_PrevSectionDownload.module.scss'

export const PrevSectionDownload = ({ data }) => {
  return (
    <section>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          {data?.title && (
            <Title className={classes.title} size={2}>
              {data.title.data}
            </Title>
          )}
          {data.texts.map((text, index) => (
            <Text key={index} className={classes.copy}>
              {text}
            </Text>
          ))}
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
