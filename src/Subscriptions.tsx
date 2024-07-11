import * as React from "react";
import { generateClient } from "aws-amplify/api";
import * as subscriptions from "./amplify/graphql/subscriptions";

const client = generateClient();



export default function Subscriptions(props: any) {
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
    const onCreateOrder = client
      .graphql({ query: subscriptions.onCreateOrder })
      .subscribe({
        next: (data) => handleEvent("onCreateOrder", data),
        error: (error) => console.warn(error),
      });

    // Subscribe to update of Todo
    const updateSubFilter = client
      .graphql({
        query: subscriptions.onUpdateOrder, variables: {
          filter: {
            orderId: {
              eq: props.id
            }
          }
        }
      })
      .subscribe({
        next: (data) => handleEvent("onUpdateOrderByID", data),
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
    const onDeleteOrder = client
      .graphql({ query: subscriptions.onDeleteOrder })
      .subscribe({
        next: (data) => handleEvent("onDeleteOrder", data),
        error: (error) => console.warn(error),
      });


    /**
     * WEBHOOK
     */
    const onUpdateWebhook = client
      .graphql({ query: subscriptions.onUpdateWebhook })
      .subscribe({
        next: (data) => handleEvent("onUpdateWebhook", data),
        error: (error) => console.warn(error),
      });
    const onCreateWebhook = client
      .graphql({ query: subscriptions.onCreateWebhook })
      .subscribe({
        next: (data) => handleEvent("onCreateWebhook", data),
        error: (error) => console.warn(error),
      });

    return () => {
      console.log("🚷  Unsubscribing...");

      onCreateOrder?.unsubscribe();
      updateSub?.unsubscribe();
      updateSubFilter?.unsubscribe();
      onDeleteOrder?.unsubscribe();
      onUpdateWebhook?.unsubscribe();
      onCreateWebhook?.unsubscribe();
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
          On Create=<span style={{ color: 'gray' }}>{props.id}</span>
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
