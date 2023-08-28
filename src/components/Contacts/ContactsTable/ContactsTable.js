import { CardContent, Table, TableContainer } from "@mui/material";
import Head from "./Head";
import Body from "./Body";

export default function ContactsTable(props) {
  return (
    <CardContent>
      <TableContainer>
        <Table aria-label="Contacts list">
          <Head />
          <Body {...props} />
        </Table>
      </TableContainer>
    </CardContent>
  );
}
