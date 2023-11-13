import { ImageListItemBar } from "@mui/material";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { useQuery } from "@tanstack/react-query";
import { Foto } from "../../models/Fotos.model";
import axios from "axios";
import { Response } from "../../models/Response.model";

const FotoList = () => {
  const fetchFotos = async () => {
    const response = await axios.get<Response<Foto[]>>(
      `${import.meta.env.VITE_BACKEND_URL}/fotos/`,
      {
        headers: { "Content-type": "application/json; charset=utf-8" },
      }
    );

    return response.data.status ? response.data.data : [];
  };

  const {
    isLoading,
    isError,
    data: foto,
    error,
    isSuccess,
  } = useQuery({
    queryKey: ["fotos"],
    queryFn: fetchFotos,
  });

  if (isLoading) {
    return <span>Loading...</span>;
  }

  if (isError) {
    return <span>Error: {error.message}</span>;
  }

  if (isSuccess) {
    return (
      <div className="flex justify-center w-full overflow-y-auto mb-48">
        <ImageList cols={foto.length < 4 ? foto.length : 4} gap={8}>
          {foto.map((item) => (
            <ImageListItem key={item.id}>
              <img
                srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.url}?w=248&fit=crop&auto=format`}
                alt={item.description}
                loading="lazy"
              />
              <ImageListItemBar
                className="text-white"
                title={item.description}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </div>
    );
  }
};

export default FotoList;