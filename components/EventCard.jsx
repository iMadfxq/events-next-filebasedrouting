import Classes from './EventCard.module.scss'

import Link from 'next/link'

export function EventCard({e}) {
  return (
    <Link href={`events/${e.id}`} className={Classes.card}>
      <img className={Classes.image} src={e.image} alt={e.title} />
      <div>
        <h3>{e.title}</h3>
        <address>{e.location}</address>
        <time>{e.date}</time>
      </div>
      
      
      </Link>
  )
}