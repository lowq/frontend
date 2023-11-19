import { useState } from "react";
import AddNovinka from "../components/admin/AddNovinka";
import AddPodujatie from "../components/admin/AddPodujatie";
import AddFoto from "../components/admin/AddFoto";
import { Button } from "@mui/material";

const Admin = () => {
  const [isModalAddNovinkaOpen, setIsModalAddNovinkaOpen] = useState(false);

  const openModalAddNovinka = () => {
    setIsModalAddNovinkaOpen(true);
  };

  const closeModalAddNovinka = (good: boolean) => {
    if (good) {
      setIsModalAddNovinkaOpen(false);
    } else {
      setIsModalAddNovinkaOpen(false);
    }
  };

  const [isModalAddPodujatieOpen, setIsModalAddPodujatieOpen] = useState(false);

  const openModalAddPodujatie = () => {
    setIsModalAddPodujatieOpen(true);
  };

  const closeModalAddPodujatie = (good: boolean) => {
    if (good) {
      setIsModalAddPodujatieOpen(false);
    } else {
      setIsModalAddPodujatieOpen(false);
    }
  };

  const [isModalAddFotoOpen, setIsModalAddFotoOpen] = useState(false);

  const openModalAddFoto = () => {
    setIsModalAddFotoOpen(true);
  };

  const closeModalAddFoto = () => {
    setIsModalAddFotoOpen(false);
  };

  return (
    <>
      <div className="md:mx-80 mx-10 items-center">
        <div className="flex flex-col items-center">
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "5vh", margin: "2vh" }}
            onClick={openModalAddNovinka}
          >
            Pridaj novinku
          </Button>
          <AddNovinka
            isOpen={isModalAddNovinkaOpen}
            onClose={closeModalAddNovinka}
          />
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "5vh", margin: "2vh" }}
            onClick={openModalAddPodujatie}
          >
            Pridaj podujatie
          </Button>
          <AddPodujatie
            isOpen={isModalAddPodujatieOpen}
            onClose={closeModalAddPodujatie}
          />
        </div>
        <div className="flex flex-col items-center">
          <Button
            variant="contained"
            size="large"
            sx={{ fontSize: "5vh", margin: "2vh" }}
            onClick={openModalAddFoto}
          >
            Pridaj fotku
          </Button>
          <AddFoto open={isModalAddFotoOpen} handleClose={closeModalAddFoto} />
        </div>
      </div>
    </>
  );
};

export default Admin;
