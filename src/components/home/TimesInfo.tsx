import { Table, TableBody, TableCell, TableRow } from "@mui/material"
import { TimesInfo } from "../../models/TimesInfo.model"


const TimesInfo = () => {
    const times: TimesInfo[] = [
        {
            day: "Pondelok",
            time: "9:00 - 18:00"
        },
        {
            day: "Streda",
            time: "9:00 - 18:00"
        },
        {
            day: "Piatok",
            time: "9:00 - 18:00"
        },
        {
            day: "Sobota",
            time: "9:00 - 18:00"
        },
        {
            day: "Nedeľa",
            time: "9:00 - 18:00"
        },
    ]


  return (
    <div className="bg-gray-900 bg-opacity-50 h-64 mt-[18vh] ml-10 rounded">
      <Table sx={{ maxWidth: 200 }} aria-label="simple table">
        <TableBody>
          {times.map((row) => (
            <TableRow
              key={row.day}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="center"   sx={{ "color": "yellow" }}>
                {row.day}
              </TableCell>
              
              <TableCell align="center"   sx={{ "color": "white" }}>{row.time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default TimesInfo