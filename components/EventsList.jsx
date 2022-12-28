import { EventCard } from "./EventCard";

export function EventsList({events}) {
  return (
    <ul>
    {events.map((e) => <EventCard e={e} />)}  
    </ul>
  )
}
