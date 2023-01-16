import { Column } from './components/Column'
import { Info } from './components/Info'
import classes from './_Footer.module.scss'

export const Footer = ({ data }) => {
  return (
    <footer className={classes.footer}>
      <div className={classes.wrapper}>
        <div className={classes.columns}>
          {data.columns.length > 0 &&
            data.columns.map((column) => (
              <Column column={column} key={column.title.data} />
            ))}
        </div>

        <Info info={data.info} />
      </div>
    </footer>
  )
}
