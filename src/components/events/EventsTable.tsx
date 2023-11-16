import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";

const EventsTable = () => {
  return (
    <List sx={{ width: "100%", maxWidth: 700 }}>
      <ListItem className="m-5 shadow shadow-white rounded">
        <div className="m-5">
          <h1 className="text-5xl text-yellow-400">Nadpis</h1>
        </div>
      </ListItem>
      <Divider variant="inset" component="li" />
    </List>
  );
};

export default EventsTable;
