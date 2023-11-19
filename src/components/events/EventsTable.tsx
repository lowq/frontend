import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import { Button, CircularProgress } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Response } from "../../models/Response.model";
import { Event } from "../../models/Events.models";
import moment from "moment";
import { useState } from "react";
import EventModal from "./EventModal";

const EventsTable = () => {
  const [openModal, setopenModal] = useState<boolean>(false);
  const [selectedEvent, setselectedEvent] = useState<Event | null>(null);

  const handleOpenNew = (event: Event) => {
    setopenModal(true);
    setselectedEvent(event);
  };

  const handleCloseNew = () => {
    setopenModal(false);
    setselectedEvent(null);
  };

  const fetchEvents = async () => {
    const response = await axios.get<Response<Event[]>>(
      `${import.meta.env.VITE_BACKEND_URL}/podujatia/`,
      {
        headers: { "Content-type": "application/json" },
      }
    );

    return response.data.status ? response.data.data : [];
  };

  const { data, isLoading } = useQuery({
    queryKey: ["events"],
    queryFn: fetchEvents,
  });

  if (isLoading) {
    return (
      <div className="m-10 flex justify-center items-center">
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <List sx={{ width: "80%", maxWidth: 700 }}>
      {data
        ? data.map((event) => (
            <>
              <ListItem className="m-5 shadow shadow-white rounded">
                <div className="m-5 grid justify-center items-center w-full">
                  <h1 className="text-5xl mb-5 text-yellow-400">
                    {event.name}
                  </h1>
                  <p className="text-white text-2xl text-center mb-5">
                    {moment(event.date).format("DD/MM/YYYY HH:MM")}
                  </p>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={() => handleOpenNew(event)}
                  >
                    Zobraz viac
                  </Button>
                </div>
              </ListItem>
              <Divider variant="inset" component="li" />
            </>
          ))
        : null}
      <EventModal
        open={openModal}
        handleClose={handleCloseNew}
        event={selectedEvent}
      />
    </List>
  );
};

export default EventsTable;
