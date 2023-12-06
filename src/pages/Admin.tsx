import { Button } from "@mui/material";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (route: string): React.MouseEventHandler => {
    return () => {
      navigate(route);
    };
  };

  const lastTratEditMutation = useMutation({
    mutationFn: () => {
      return axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/podujatia/lastTrackEdit`,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success("Podarilo sa pridať poslednú úpravu trate");
    },
    onError: () => {
      toast.error("Nepodarilo sa pridať poslednú úpravu trate");
    },
  });

  return (
    <>
      {!location.pathname.includes("/admin/") ? (
        <div className="md:mx-80 mx-10 items-center">
          <div className="flex flex-col items-center">
            <h1 className="text-white text-5xl">Admin menu na pre správu</h1>
            <div className="m-5" onClick={handleNavigate("addFoto")}>
              <Button variant="contained" size="large" className="font-mono">
                Pridať fotku
              </Button>
            </div>
            <div className="m-5" onClick={handleNavigate("addNew")}>
              <Button variant="contained" size="large">
                Pridanie novinky
              </Button>
            </div>
            <div className="m-5" onClick={handleNavigate("addEvent")}>
              <Button variant="contained" size="large" className="font-mono">
                Pridanie podujatia
              </Button>
            </div>
            <div className="m-5" onClick={() => lastTratEditMutation.mutate()}>
              <Button variant="contained" size="large" className="font-mono">
                Posledná úprava trate
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center w-full">
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Admin;
