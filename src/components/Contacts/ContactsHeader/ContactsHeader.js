import { Box, CardActions, CardHeader, Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function ContactsHeader({ setModalOpen }) {
  const handelOpenModal = () => setModalOpen(true);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <CardHeader title={"Контакти"}></CardHeader>
      <CardActions>
        <Fab variant="extended" color="primary" onClick={handelOpenModal}>
          <AddIcon />
          Додати контакт
        </Fab>
      </CardActions>
    </Box>
  );
}
