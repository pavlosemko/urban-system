import { Skeleton, TableCell, TableRow } from "@mui/material";

export default function Loader({ counter = 5 }) {
  // sx={{ border: 0 }}
  const loaderList = [];
  for (let i = 0; i < counter; i++) {
    loaderList.push(
      <TableRow
        key={i}
        sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
      >
        <TableCell component="th" scope="row">
          <Skeleton />
        </TableCell>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell>
          <Skeleton />
        </TableCell>
        <TableCell align="right">
          <Skeleton />
        </TableCell>
      </TableRow>,
    );
  }
  return <>{loaderList}</>;
}
