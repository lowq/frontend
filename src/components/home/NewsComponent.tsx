import { useState } from "react";
import { News } from "../../models/News.model";
import { Button } from "@mui/material";
import NewModal from "./NewModal";
import axios from "axios";
import { Response } from "../../models/Response.model";
import { useQuery } from "@tanstack/react-query";
import moment from "moment";

const NewsComponent = () => {
  const [openModal, setopenModal] = useState<boolean>(false);
  const [selectedNew, setselectedNew] = useState<News | null>(null);

  const handleOpenNew = (news: News) => {
    setopenModal(true);
    setselectedNew(news);
  };

  const handleCloseNew = () => {
    setopenModal(false);
    setselectedNew(null);
  };

  const fetchNews = async () => {
    const response = await axios.get<Response<News[]>>(
      `${import.meta.env.VITE_BACKEND_URL}/news/`,
      {
        headers: { "Content-type": "application/json; charset=utf-8" },
      }
    );

    return response.data.status ? response.data.data : [];
  };

  const { data: news } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  return (
    <div className="bg-gray-900 bg-opacity-50 mx-10 mt-6 w-96 rounded flex flex-col justify-center items-center">
      <div className="bg-amber-400 w-80 my-5 h-16 grid justify-center items-center rounded-sm">
        <h1 className="text-center text-3xl font-mono">Novinky</h1>
      </div>
      <div className="h-96 m-5 cursor-all-scroll overflow-y-scroll">
        {news &&
          news.map((newsItem: News, key: number) => (
            <div key={key} className="text-gray-300 h-40">
              <h1 className="my-3 text-lg font-bold h-1/3">{newsItem.title}</h1>
              <p className="my-3 text-ellipsis overflow-hidden h-1/3">
                {newsItem.content}
              </p>
              <div className="h-1/3 flex justify-between">
                <div>
                  <Button
                    variant="outlined"
                    onClick={() => handleOpenNew(newsItem)}
                  >
                    Viac
                  </Button>
                </div>
                <h1 className="m-2 text-center">
                  {moment(newsItem.dateCreated).format("DD/MM/YYYY")}
                </h1>
              </div>
            </div>
          ))}
      </div>
      <NewModal
        open={openModal}
        handleClose={handleCloseNew}
        news={selectedNew}
      />
    </div>
  );
};

export default NewsComponent;
