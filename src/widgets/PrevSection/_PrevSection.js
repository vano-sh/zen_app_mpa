import { Link } from 'react-router-dom'
import { Title, Text, Preview } from 'shared/ui'
import { classNames } from 'shared/lib/helpers'
import { Links } from './ui/Links'
import classes from './_PrevSection.module.scss'

export const PrevSection = ({ data, odd }) => {
  const classOdd = classes.odd
  const classNameBody = classNames(classes.body, {
    classOdd: odd,
  })

  return (
    <section>
      <div className={classes.wrapper}>
        <div className={classNameBody}>
          {data?.title && (
            <Title className={classes.title} size={2}>
              {data.title.data}
            </Title>
          )}
          <div className={classes.copies}>
            {data.texts.map((text, index) => (
              <Text key={index} className={classes.copy}>
                {text}
              </Text>
            ))}
          </div>
          {data?.links && <Links links={data.links} />}
          <div className={classes.more}>
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
