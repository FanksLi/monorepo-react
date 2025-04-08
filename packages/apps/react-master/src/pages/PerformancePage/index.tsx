import React, { useEffect, useRef } from "react";
import performanceSDK from "@fan/performanceSDK";
import { Button, Modal } from "antd";

import "./index.css";
import PlayerModal from "./PlayerModal";

export default function Page() {
  const performanceRef: any = useRef(null);
  const [open, setOpen] = React.useState(false);
  const [events, setEvents] = React.useState([]);

  useEffect(() => {
    performanceRef.current = performanceSDK();
  }, []);
  function handleClick() {
    const res = performanceRef.current.recordScreen.getEventList();
    const events = res.eventList;
    setEvents(events);
    setOpen(true);
  }
  function hanldeColse() {
    setOpen(false);
    setEvents([]);
  }
  return (
    <div>
      <Button onClick={handleClick}>回放</Button>
      {open ? (
        <PlayerModal open={open} hanldeColse={hanldeColse} events={events} />
      ) : null}
    </div>
  );
}
