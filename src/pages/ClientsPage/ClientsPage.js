import { useRef } from 'react'
import { useTheme, useAnimateRef, useData } from 'shared/model'
import classes from './ClientsPage.module.scss'

export const ClientsPage = () => {
  const { data } = useData()
  const { theme } = useTheme()

  const clientsRef = useRef(null)
  useAnimateRef(clientsRef)

  if (!data) return

  const clients =
    theme === 'light'
      ? data.pages.clients.lightThemeClients
      : data.pages.clients.darkThemeClients

  return (
    <section className={classes.clients} data-name={data.name}>
      <div className={classes.wrapper} ref={clientsRef}>
        {clients.length > 0 &&
          clients.map((client) => (
            <img
              key={client.source}
              src={client.source}
              alt={client.alt}
            />
          ))}
      </div>
    </section>
  )
}
