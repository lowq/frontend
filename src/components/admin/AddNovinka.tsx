import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useRef, useState } from "react";
import { toast } from "react-toastify";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useMutation } from "@tanstack/react-query";

const AddNovinka = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState<Date | null>(null);
  const [images, setImages] = useState<File[]>([]);
  const [key, setKey] = useState<number>(0);

  const imageInput = useRef(null);

  const handleImageDelete = (id: number) => {
    const newArray = images;
    newArray.splice(id, 1);
    setImages(newArray);
  };

  const saveNew = useMutation({
    mutationFn: (ursl: string[]) => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/news/`,
        {
          title: title,
          content: content,
          urls: ursl,
          date: date,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Novinka pridaná");
      clearData();
    },
    onError: () => {
      toast.error("Nepodarilo sa pridať novinku");
    },
  });

  const mutateCloudinary = useMutation({
    mutationFn: (image: File) => {
      const formDataForCloudinary = new FormData();
      formDataForCloudinary.append("file", image);
      formDataForCloudinary.append("upload_preset", "r0ydgs0h");
      formDataForCloudinary.append("cloud_name", "dz36uhdsn");
      return axios.post(
        `https://api.cloudinary.com/v1_1/dz36uhdsn/image/upload`,
        formDataForCloudinary,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: (data) => {
      return data.data.url;
    },
    onError: () => {
      toast.error("Nepodarilo sa pridať novinku");
    },
  });

  const handleSubmit = async () => {
    if (!date) {
      toast.info("Nastav dátum");
    }
    if (!content) {
      toast.info("Nastav popis");
    }
    if (!title) {
      toast.info("Nastav názov");
    }
    if (!images) {
      toast.info("Pridaj fotku alebo fotky");
    }

    const urls: string[] = [];
    for (const element of images) {
      const response = await mutateCloudinary.mutateAsync(element);
      urls.push(response.data.url);
    }
    saveNew.mutate(urls);
  };

  const clearData = () => {
    setKey(key + 1);
    setTitle("");
    setContent("");
    setImages([]);
    setDate(null);
  };

  return (
    <div className="flex w-1/2 px-6 py-4 text-left text-primary-content">
      <div className="p-4 w-full">
        <h2 className="text-4xl font-bold mb-4 ">Pridaj Novinku</h2>
        <div className="mb-4">
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2">
              Názov
            </label>
            <TextField
              type="text"
              fullWidth
              label="Názov"
              id="fullWidth"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              color="secondary"
              variant="filled"
              inputProps={{ style: { color: "black" } }}
            />
            {/* 
            <input
              type="text"
              id="title"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-neutral-focus"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            /> */}
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block font-bold mb-2">
              Popis
            </label>
            <TextField
              type="text"
              fullWidth
              label="Popis"
              id="fullWidth"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
              color="secondary"
              variant="filled"
              multiline
              inputProps={{ style: { color: "black" } }}
            />
            {/* 
            <textarea
              id="content"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500 text-neutral-focus"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            /> */}
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block font-bold mb-2">
              Date
            </label>
            <input
              id="date"
              className="w-full px-3 py-2 border border-slate-500 rounded-md focus:outline-none focus:outline outline-[#fc8114] text-neutral-focus"
              onChange={(e) => setDate(new Date(e.target.value))}
              type="date"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="content" className="block font-bold mb-2">
              Obrázky
            </label>
            <Button
              component="label"
              variant="contained"
              startIcon={<CloudUploadIcon />}
              fullWidth
              color="secondary"
            >
              Upload file
              <input
                key={key}
                name="images"
                className="h-1 absolute b-0 l-0 whitespace-nowrap w-1 hidden"
                ref={imageInput}
                onChange={(e) => {
                  const file = e.target.files;
                  file ? setImages([...images, file[0]]) : null;
                }}
                type="file"
                accept=".png, .jpg, .jpeg"
              />
            </Button>
            <ul className="m-4">
              {images.length > 0
                ? images.map((image, id) => (
                    <li className="flex" key={id}>
                      <div>
                        <h1 className="truncate">{image?.name}</h1>
                        <img
                          src={URL.createObjectURL(image)}
                          alt={image?.name}
                          width="500"
                        />
                      </div>
                      <Button
                        sx={{ height: "10vh" }}
                        variant="contained"
                        color="error"
                        onClick={() => {
                          handleImageDelete(id);
                        }}
                      >
                        X
                      </Button>
                    </li>
                  ))
                : null}
            </ul>
          </div>
          <div className="w-1/2 flex justify-between">
            <Button
              color="success"
              variant="contained"
              className="btn bg-accent hover:bg-accent-focus"
              onClick={handleSubmit}
            >
              Create
            </Button>
            <div className="grow"></div>
            <Button
              color="error"
              variant="contained"
              onClick={() => clearData()}
              className="btn bg-accent hover:bg-accent-focus left-full"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNovinka;
