import * as React from "react";
import { generateClient } from "aws-amplify/api";
import * as subscriptions from "./amplify/graphql/subscriptions";

const client = generateClient();

const ID_FILTER = "1438050512220-01";

export default function Subscriptions() {
  const [styleContainer, setStyleContainer] = React.useState({
    border: "1px solid transparent",
  });
  const [events, setEvents] = React.useState([] as any[]);

  const [lastEvent, setLastEvent] = React.useState({
    type: "",
    event: {},
    time: "",
  });

  const timeoutStyle = () => {
    setStyleContainer({ border: "1px solid green" });
    setTimeout(() => {
      setStyleContainer({ border: "1px solid transparent" });
    }, 1000);
  };

  const handleEvent = (typeEvent: string, event: any) => {
    console.log(`[${typeEvent}] Event:`, event);

    timeoutStyle();

    setLastEvent({
      type: typeEvent,
      event,
      time: new Date().toLocaleString(),
    });
    setEvents([
      ...events,
      {
        type: typeEvent,
        event,
        time: new Date().toLocaleString(),
      },
    ]);

    setStyleContainer({ border: "1px solid green" });
  };

  React.useEffect(() => {
    console.log("🚀 Subscribing...");
    // Subscribe to creation of Todo
    const createSub = client
      .graphql({ query: subscriptions.onCreateOrder })
      .subscribe({
        next: (data) => handleEvent("onCreate", data),
        error: (error) => console.warn(error),
      });

    // Subscribe to update of Todo
    const updateSubFilter = client
      .graphql({
        query: subscriptions.onUpdateOrder, variables: {
          filter: {
            orderId: {
              eq: ID_FILTER
            }
          }
        }
      })
      .subscribe({
        next: (data) => handleEvent("onUpdate", data),
        error: (error) => console.warn(error),
      });

    // Subscribe to update of Todo
    const updateSub = client
      .graphql({ query: subscriptions.onUpdateOrder })
      .subscribe({
        next: (data) => handleEvent("onUpdate", data),
        error: (error) => console.warn(error),
      });

    // Subscribe to deletion of Todo
    const deleteSub = client
      .graphql({ query: subscriptions.onDeleteOrder })
      .subscribe({
        next: (data) => handleEvent("onDelete", data),
        error: (error) => console.warn(error),
      });
    return () => {
      console.log("🚷  Unsubscribing...");

      createSub?.unsubscribe();
      updateSub?.unsubscribe();
      updateSubFilter?.unsubscribe();
      deleteSub?.unsubscribe();
    };
  }, []);

  return (
    <>
      <h3>Listening to events</h3>
      <fieldset>
        <legend>
          Filters
        </legend>
        <div>
          On Create=<span style={{ color: 'gray' }}>{ID_FILTER}</span>
        </div>

      </fieldset>
      <br />
      <br />
      <div
        style={{
          padding: "10px",
          ...styleContainer,
        }}
      >
        <p>Last Event: {lastEvent.type}</p>
        <p>Time: {lastEvent.time}</p>
        <pre>{JSON.stringify(lastEvent.event, null, 2)}</pre>
      </div>
      <br />
      <div>
        <h4>History Events</h4>
        <ul>
          {events.map((event, index) => (
            <li key={index}>
              <p>Event: {event.type}</p>
              <p>Time: {event.time}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
