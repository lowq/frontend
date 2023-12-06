import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import { TrackEdit } from "../../models/Footer.model";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import { Response } from "../../models/Response.model";
import moment from "moment";
import { CircularProgress } from "@mui/material";
import { Event } from "../../models/Events.models";

const Footer = () => {
  const fetchLastTrackEdit = async () => {
    const response = await axios.get<Response<TrackEdit>>(
      `${import.meta.env.VITE_BACKEND_URL}/podujatia/lastTrackEdit`
    );

    return response.data.status ? response.data.data : null;
  };

  const { data: lastTrackEdit, isLoading: isLoadingLastTrackEdit } = useQuery({
    queryKey: ["lastTrackEdit"],
    queryFn: fetchLastTrackEdit,
    gcTime: 360000,
  });

  const fetchLastEvent = async () => {
    const response = await axios.get<Response<Event>>(
      `${import.meta.env.VITE_BACKEND_URL}/podujatia/lastEvent`
    );

    return response.data.status ? response.data.data : null;
  };

  const { data: lastEvent, isLoading: isLoadingLastEvent } = useQuery({
    queryKey: ["lastEvent"],
    queryFn: fetchLastEvent,
    gcTime: 360000,
  });

  return (
    <div className="bg-black md:bg-opacity-60 bg-opacity-80  md:fixed bottom-0 w-screen md:h-32 h-72">
      <div className="flex md:flex-row flex-col justify-between items-center my-5 mx-20 h-24">
        <div className="flex justify-center items-center ">
          <h1 className="m-2 text-yellow-400">Najbližšie podujatie</h1>
          {isLoadingLastEvent ? (
            <CircularProgress color="primary" />
          ) : (
            <p className="m-2 text-white">
              {lastEvent
                ? moment(lastEvent?.date).format("DD.MM.YYYY HH:MM")
                : ""}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <h1 className="m-2 text-yellow-400">Posledná úprava trate</h1>
          {isLoadingLastTrackEdit ? (
            <CircularProgress color="primary" />
          ) : (
            <p className="m-2 text-white">
              {lastTrackEdit
                ? moment(lastTrackEdit?.date).format("DD.MM.YYYY")
                : ""}
            </p>
          )}
        </div>
        <div className="flex justify-center items-center">
          <h1 className="m-2 text-yellow-400">Najrýchlejší čas na trati</h1>
          <p className="m-2 text-white">18.3.2023 18:00</p>
        </div>
        <div className="flex justify-center items-center">
          <h1 className="m-2 text-yellow-400">Sociálne siete</h1>
          <a href="https://www.facebook.com/groups/1495861891185432in">
            <FacebookIcon className="m-2" sx={{ color: "white" }} />
          </a>
          <a href="https://www.instagram.com/mxtratvitanova/">
            <InstagramIcon className="m-2" sx={{ color: "white" }} />
          </a>
          <a href="">
            <EmailIcon className="m-2" sx={{ color: "white" }} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer