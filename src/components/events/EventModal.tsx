import { Backdrop, Fade, Modal, Typography } from "@mui/material";
import { Event } from "../../models/Events.models";
import moment from "moment";

interface Props {
  open: boolean;
  handleClose: () => void;
  event: Event | null;
}

const EventModal: React.FC<Props> = (props) => {
  const handleClose = () => props.handleClose();

  return (
    <>
      {props.event ? (
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={props.open}
          onClose={handleClose}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={props.open}>
            <div className="w-1/2 bg-gray-900  bg-cover absolute letf-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 p-10">
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h1"
                color="primary"
                textAlign="center"
              >
                {`${props.event.name} |
              ${moment(props.event.date).format("DD/MM/YYYY")}`}
              </Typography>
              <Typography
                textAlign="center"
                id="transition-modal-description"
                sx={{ mt: 2 }}
                color="white"
              >
                {props.event.description}
              </Typography>
              <Typography
                textAlign="center"
                id="transition-modal-description"
                sx={{ mt: 2 }}
                color="primary"
              >
                Prihlásený ľudia
              </Typography>
              <div className="grid justify-center items-center">
                {props.event.users.map((user) => (
                  <div className="m-5 outline outline-white">
                    <Typography
                      fontSize="18px"
                      textAlign="center"
                      id="transition-modal-description"
                      sx={{ m: 2 }}
                      color="white"
                    >
                      {user.name}
                    </Typography>
                    <Typography
                      fontSize="14px"
                      textAlign="center"
                      id="transition-modal-description"
                      sx={{ m: 2 }}
                      color="primary"
                    >
                      {user.email}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>
          </Fade>
        </Modal>
      ) : null}
    </>
  );
};

export default EventModal;
