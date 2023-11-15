import { Button } from "@mui/material";
import moment from "moment";
import { News } from "../../models/News.model";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Response } from "../../models/Response.model";
import { useState } from "react";
import NewModal from "./NewModal";
import CircularProgress from "@mui/material/CircularProgress";

const News = () => {
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

  const { data, isLoading } = useQuery({
    queryKey: ["news"],
    queryFn: fetchNews,
  });

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <CircularProgress color="primary" />
      </div>
    );
  }

  return (
    <>
      {data &&
        data.map((newsItem: News, key: number) => (
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
      <NewModal
        open={openModal}
        handleClose={handleCloseNew}
        news={selectedNew}
      />
    </>
  );
};

export default News;
