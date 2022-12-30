import { EventCard } from "./EventCard";

export function EventsList({events}) {
  return (
    <ul style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
    {events.map((e) => <EventCard key={e.id} e={e} />)}  
    </ul>
  )
}
