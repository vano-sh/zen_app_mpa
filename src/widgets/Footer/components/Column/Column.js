import { Title } from 'shared/ui'
import { ColumnItem } from './components'
import classes from '../../Footer.module.scss'

export const Column = ({ column }) => {
  return (
    <div className={classes.column}>
      {column?.title && (
        <Title className={classes.title} size={column.title.priority}>
          {column.title.data}
        </Title>
      )}

      <ul className={classes.list}>
        {column?.links.length > 0 &&
          column.links.map((link) => (
            <ColumnItem key={link.data} link={link} />
          ))}
      </ul>
    </div>
  )
}
