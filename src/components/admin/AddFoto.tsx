import { Button, TextField } from "@mui/material";
import axios from "axios";
import { ChangeEvent, useRef, useState } from "react";
import { toast } from "react-toastify";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useMutation } from "@tanstack/react-query";

const AddFoto = () => {
  const [description, setDescription] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [key, setKey] = useState<number>(0);

  const imageInput = useRef<HTMLInputElement | null>(null);

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleImagesChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setImage(e.target.files[0]);
  };

  const saveNew = useMutation({
    mutationFn: (dataUrl: string) => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/fotos/`,
        {
          description: description,
          url: dataUrl,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: () => {
      setKey(key + 1);
      toast.success("Novinka pridaná");
    },
    onError: () => {
      toast.error("Nepodarilo sa pridať novinku");
    },
  });

  const cloudinary = useMutation({
    mutationFn: () => {
      const formDataForCloudinary = new FormData();
      if (image) {
        formDataForCloudinary.append("file", image);
      }
      formDataForCloudinary.append("upload_preset", "r0ydgs0h");
      formDataForCloudinary.append("cloud_name", "dz36uhdsn");
      return axios.post(
        `https://api.cloudinary.com/v1_1/dz36uhdsn/upload`,
        formDataForCloudinary,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: (data) => {
      setImage(null);
      saveNew.mutate(data.data.url);
    },
    onError: () => {
      toast.error("Nepodarilo sa pridať novinku");
    },
  });

  const handleSubmit = async () => {
    if (!image) {
      toast.info("Pridaj fotku alebo fotky");
    }
    if (!description) {
      toast.info("Nastav popis");
    }
    cloudinary.mutate();
  };

  const clearData = () => {
    setDescription("");
    setImage(null);
    if (imageInput.current) imageInput.current.value = "";
  };

  return (
    <div className="flex w-1/2 px-6 py-4 text-left text-primary-content">
      <div className="p-4 w-full">
        <h2 className="text-4xl font-bold mb-4 ">Pridaj fotku</h2>
        <div className="mb-4">
          <h1 className="text-2xl block font-bold mb-2 ">Popis</h1>
          <TextField
            type="text"
            fullWidth
            label="Popis"
            id="fullWidth"
            value={description}
            onChange={handleDescriptionChange}
            required
            color="secondary"
            variant="filled"
            multiline
            inputProps={{ style: { color: "black" } }}
          />
        </div>
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2 ">Obrázok</h1>
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
              onChange={handleImagesChange}
              type="file"
              accept=".png, .jpg, .jpeg"
            />
          </Button>
          {image ? (
            <>
              <div className="flex justify-center">
                <Button
                  variant="contained"
                  color="error"
                  sx={{ m: "5px" }}
                  onClick={() => setImage(null)}
                >
                  X
                </Button>
              </div>
              <img src={URL.createObjectURL(image)} alt="Selected" />
            </>
          ) : null}
        </div>

        <div className="flex justify-end">
          <Button
            color="success"
            type="submit"
            variant="contained"
            onClick={handleSubmit}
          >
            Create
          </Button>
          <div className="grow"></div>
          <Button onClick={() => clearData()} variant="contained" color="error">
            Close
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AddFoto;
