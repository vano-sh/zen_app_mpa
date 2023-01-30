import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { Title, Text, Preview } from 'shared/ui'
import { classNames } from 'shared/lib/helpers'
import { Links } from './ui/Links'
import classes from './_PrevSection.module.scss'
import { useAnimateRef } from '../../shared/model/hooks/_useAnimateRef'

export const PrevSection = ({ data, odd }) => {
  const refMore = useRef(null)

  useAnimateRef(refMore)

  return (
    <section>
      <div className={classes.wrapper}>
        <div
          className={classNames(classes.body, {
            odd: odd,
          })}>
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
          <div className={classes.more} ref={refMore}>
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
