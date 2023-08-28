import { Button, TableCell, TableRow } from "@mui/material";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function ContactsItem({ contact, onRemoveContact }) {
  return (
    <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
      <TableCell component="th" scope="row">
        {contact.firstName}
      </TableCell>
      <TableCell>{contact.lastName}</TableCell>
      <TableCell>{contact.phone}</TableCell>
      <TableCell align="right">
        <Button color="error" onClick={() => onRemoveContact(contact.id)}>
          <DeleteForeverIcon />
        </Button>
      </TableCell>
    </TableRow>
  );
}
