import { Button } from "@mui/material";
import mxVitanovaLogo from "./../../assets/mxVitanovaLogo.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const TopNavbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigate = (route: string): React.MouseEventHandler => {
    return () => {
      navigate(route);
    };
  }

  useEffect(() => {
    console.log(location.pathname)
  }, [location])
  


  return (
    <nav className="bg-gray-900 h-[12%]">
      <div className="flex justify-between items-center h-full mx-5">
        <button onClick={handleNavigate("")}>
          {location.pathname === "/" ? (
            <img
              src={mxVitanovaLogo}
              alt="mxVitanovaLogo"
              className="top-0 h-[20%] absolute m-5 -rotate-12"
            />
          ) : (
            <img
              src={mxVitanovaLogo}
              alt="mxVitanovaLogo"
              className="top-0 h-24 m-5 -rotate-12"
            />
          )}
        </button>
        <div className="grow"></div>
        <div className="m-5" onClick={handleNavigate("")}>
          <Button variant="contained" size="small" className="font-mono">
            Home
          </Button>
        </div>
        <div className="m-5" onClick={handleNavigate("foto")}>
          <Button variant="contained" size="small">
            Fotky
          </Button>
        </div>
        <div className="m-5" onClick={handleNavigate("events")}>
          <Button variant="contained" size="small" className="font-mono">
            Podujatia
          </Button>
        </div>
        <div className="m-5" onClick={handleNavigate("contact")}>
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

export default TopNavbar;
