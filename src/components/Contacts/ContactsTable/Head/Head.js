import { TableCell, TableHead, TableRow } from "@mui/material";

export default function Head() {
  return (
    <TableHead>
      <TableRow>
        <TableCell>Іʼмя</TableCell>
        <TableCell>Призвіще</TableCell>
        <TableCell>№ телефону</TableCell>
        <TableCell align="right">Дія</TableCell>
      </TableRow>
    </TableHead>
  );
}
