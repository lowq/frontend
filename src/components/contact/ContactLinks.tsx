import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";

const ContactLinks = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="m-2 text-yellow-400 text-4xl">Sociálne siete</h1>
      <div className="flex justify-center items-center">
        <a
          href="https://www.facebook.com/groups/1495861891185432in"
          className="m-2"
        >
          <FacebookIcon
            className="m-2"
            sx={{ color: "white", fontSize: "50px" }}
          />
        </a>
        <a href="https://www.instagram.com/mxtratvitanova/" className="m-2">
          <InstagramIcon
            className="m-2"
            sx={{ color: "white", fontSize: "50px" }}
          />
        </a>
        <a href="" className="m-2">
          <EmailIcon
            className="m-2"
            sx={{ color: "white", fontSize: "50px" }}
          />
        </a>
      </div>
    </div>
  );
};

export default ContactLinks;
