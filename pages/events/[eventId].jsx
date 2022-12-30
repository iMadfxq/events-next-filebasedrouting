import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getEventById } from "../../dummy-data";

export default function EventPage() {
  const router = useRouter();

  const { eventId } = router.query;
    const event = getEventById(eventId);
  return (
    <section>
      {event && (
        <>
          <p>{event.title}</p>
          <p>{event.description}</p>
        </>
      )}
    </section>
  );
}
