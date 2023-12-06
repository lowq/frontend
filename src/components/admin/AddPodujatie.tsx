import { Button, TextField } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { toast } from "react-toastify";

const AddPodujatie = () => {
  const [name, setName] = useState<string>("");
  const [date, setDate] = useState<Date | null>(null);
  const [description, setDescription] = useState<string>("");

  const mutationCreate = useMutation({
    mutationFn: () => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/podujatia/`,
        {
          name: name,
          description: description,
          date: date,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess() {
      clearData();
    },
    onError: () => {
      toast.error("Nepodarilo sa pridať novinku");
    },
  });

  const handleSubmit = () => {
    if (!date) {
      toast.info("Nastav dátum");
    }
    if (!description) {
      toast.info("Nastav popis");
    }
    if (!name) {
      toast.info("Nastav názov");
    }
    mutationCreate.mutate();
  };

  const clearData = () => {
    setName("");
    setDescription("");
    setDate(null);
  };

  return (
    <div className="flex w-1/2 px-6 py-4 text-left text-primary-content">
      <div className="p-4 w-full">
        <h2 className="text-2xl font-bold mb-4">Vytvor podujatie</h2>
        <div>
          <div className="mb-4">
            <label htmlFor="title" className="block font-bold mb-2">
              Názov
            </label>
            <TextField
              type="text"
              fullWidth
              label="Názov podujatia"
              id="fullWidth"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              color="secondary"
              variant="filled"
              inputProps={{ style: { color: "black" } }}
            />
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
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              color="secondary"
              variant="filled"
              multiline
              inputProps={{ style: { color: "black" } }}
            />
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

          <div className="w-1/2 flex justify-between">
            <Button
              color="success"
              variant="contained"
              className="btn bg-accent hover:bg-accent-focus"
              onClick={handleSubmit}
            >
              Create
            </Button>
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

export default AddPodujatie;
