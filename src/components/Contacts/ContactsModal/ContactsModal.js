import { Backdrop, Box, Fade, Modal, Typography } from "@mui/material";
import ContactForm from "../ContactForm";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};
export default function ContactsModal({ modalOpen, setModalOpen, addContact }) {
  const handleClose = () => setModalOpen(false);
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={modalOpen}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={modalOpen}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            Створити контакт
          </Typography>
          <ContactForm addContact={addContact} handleClose={handleClose} />
        </Box>
      </Fade>
    </Modal>
  );
}
