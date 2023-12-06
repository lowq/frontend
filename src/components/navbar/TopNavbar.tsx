import { Button } from "@mui/material";
import mxVitanovaLogo from "./../../assets/mxVitanovaLogo.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const TopNavbar = () => {
  const navigate = useNavigate();
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const handleNavigate = (route: string): React.MouseEventHandler => {
    return () => {
      navigate(route);
    };
  };

  const isMobile: boolean = window.innerWidth < 768;

  return (
    <nav className="bg-gray-900 md:h-[12%] h-16">
      <div className="flex justify-between items-center h-full mx-5">
        <button onClick={handleNavigate("")}>
          {location.pathname === "/" ? (
            <img
              src={mxVitanovaLogo}
              alt="mxVitanovaLogo"
              className="top-0 md:h-[20%] h-[10%] absolute m-5 -rotate-12"
            />
          ) : (
            <img
              src={mxVitanovaLogo}
              alt="mxVitanovaLogo"
              className="top-0 md:h-24 h-16 m-5 -rotate-12"
            />
          )}
        </button>
        <div className="grow"></div>

        <div className="md:flex hidden">
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
        {isMobile ? (
          <Button
            variant="contained"
            size="small"
            className="font-mono"
            onClick={() => setOpenMenu(!openMenu)}
          >
            Menu
          </Button>
        ) : null}
        {openMenu ? (
          <div className="z-50 absolute right-2 top-14 bg-gray-900 bg-opacity-90">
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
          </div>
        ) : null}
      </div>
    </nav>
  );
};

export default TopNavbar;
