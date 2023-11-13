import * as React from 'react';
import Backdrop from "@mui/material/Backdrop";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Typography from "@mui/material/Typography";
import { News } from "../../models/News.model";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import moment from "moment";

interface Props {
  open: boolean;
  handleClose: () => void;
  news: News | null;
}

const NewModal: React.FC<Props> = (props) => {
  const handleClose = () => props.handleClose();

  return (
    <>
      {props.news ? (
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
            <div className="w-1/2 bg-gray-900  bg-cover absolute shadow-2xl letf-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 p-10 shadow-white">
              <Typography
                id="transition-modal-title"
                variant="h3"
                component="h1"
                color="white"
                textAlign="center"
              >
                {`${props.news.title} |
                ${moment(props.news.dateCreated).format("DD/MM/YYYY")}`}
              </Typography>
              <Typography
                textAlign="center"
                id="transition-modal-description"
                sx={{ mt: 2 }}
                color="white"
              >
                {props.news.content}
              </Typography>
              <div className="flex justify-center overflow-y-auto">
                <ImageList
                  cols={
                    props.news.urslNews.length < 4
                      ? props.news.urslNews.length
                      : 4
                  }
                  gap={8}
                >
                  {props.news.urslNews.map((item) => (
                    <ImageListItem key={item.id}>
                      <img
                        srcSet={`${item.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                        src={`${item.url}?w=248&fit=crop&auto=format`}
                        alt={props.news?.title}
                        loading="lazy"
                      />
                    </ImageListItem>
                  ))}
                </ImageList>
              </div>
            </div>
          </Fade>
        </Modal>
      ) : null}
    </>
  );
};

export default NewModal
