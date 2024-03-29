import { Title, Text } from 'shared/ui'
import { Link } from './components'
import classes from './SectionInfo.module.scss'

export const SectionInfo = ({ data }) => {
  return (
    <section>
      <div className={classes.wrapper}>
        <div className={classes.body}>
          {data?.title && (
            <Title className={classes.title} size={2}>
              {data.title.data}
            </Title>
          )}
          {data?.texts &&
            data.texts.map((text, index) => (
              <Text key={index} className={classes.copy}>
                {text}
              </Text>
            ))}

          {data?.links && <Link links={data.links} />}
        </div>
      </div>
    </section>
  )
}
