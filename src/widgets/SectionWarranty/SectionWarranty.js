import { Link } from 'react-router-dom'
import { Title, Text, Preview } from 'shared/ui'
import classes from './SectionWarranty.module.scss'

export const SectionWarranty = ({ data }) => {
  return (
    <section>
      <div className={classes.wrapper}>
        {data?.image && (
          <div className={classes.image}>
            <Preview image={data.image} />
          </div>
        )}
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
          <div className={classes.link}>
            <Link to={data.name}>More detailed...</Link>
          </div>
        </div>


      </div>
    </section>
  )
}