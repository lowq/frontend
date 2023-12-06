import { Button } from "@mui/material";
import mxVitanovaLogo from "./../../assets/mxVitanovaLogo.png";
import { useNavigate } from "react-router-dom";

const AdminTopNavbar = () => {
  const navigate = useNavigate();

  const handleNavigate = (route: string): React.MouseEventHandler => {
    return () => {
      navigate(route);
    };
  };

  return (
    <nav className="bg-gray-900 h-[12%]">
      <div className="flex justify-between items-center h-full mx-5">
        <button onClick={handleNavigate("")}>
          <img
            src={mxVitanovaLogo}
            alt="mxVitanovaLogo"
            className="top-0 h-24 m-5 -rotate-12"
          />
        </button>
        <div className="grow"></div>
        <div className="m-5" onClick={handleNavigate("addFoto")}>
          <Button variant="contained" size="small" className="font-mono">
            Pridať fotku
          </Button>
        </div>
        <div className="m-5" onClick={handleNavigate("addNew")}>
          <Button variant="contained" size="small">
            Pridanie novinky
          </Button>
        </div>
        <div className="m-5" onClick={handleNavigate("addEvent")}>
          <Button variant="contained" size="small" className="font-mono">
            Pridanie podujatia
          </Button>
        </div>
        <div className="m-5" onClick={handleNavigate("")}>
          <Button variant="contained" size="small" className="font-mono">
            Kontakt
          </Button>
        </div>
        {/* <div className="grid mx-5">
        <div className="m-2">
          <Button variant="outlined" fullWidth>
            Login
          </Button>
          </div>
          <div className="m-2">
          <Button variant="outlined" fullWidth>
            Register
          </Button>
          </div>
        </div> */}
      </div>
    </nav>
  );
};

export default AdminTopNavbar;
