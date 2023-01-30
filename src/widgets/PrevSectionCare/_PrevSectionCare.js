import { Link } from 'react-router-dom'
import { Title, Text, Preview } from 'shared/ui'
import classes from './_PrevSectionCare.module.scss'

export const PrevSectionCare = ({ data }) => {
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
