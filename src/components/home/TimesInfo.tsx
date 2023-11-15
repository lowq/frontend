import { Table, TableBody, TableCell } from "@mui/material";
import { TimesInfo } from "../../models/TimesInfo.model";

const TimesInfo = () => {
  const times: TimesInfo[] = [
    {
      day: "Pondelok",
      time: "9:00 - 18:00",
    },
    {
      day: "Streda",
      time: "9:00 - 18:00",
    },
    {
      day: "Piatok",
      time: "9:00 - 18:00",
    },
    {
      day: "Sobota",
      time: "9:00 - 18:00",
    },
    {
      day: "Nedeľa",
      time: "9:00 - 18:00",
    },
  ];

  return (
    <div className="h-64 mt-[18vh] ml-10 rounded">
      <Table aria-label="simple table">
        <TableBody>
          {times.map((row) => (
            <tr key={row.day} className="bg-gray-900 bg-opacity-50 rounded-lg">
              <TableCell align="center" sx={{ color: "yellow" }}>
                {row.day}
              </TableCell>

              <TableCell align="center" sx={{ color: "white" }}>
                {row.time}
              </TableCell>
            </tr>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default TimesInfo;
