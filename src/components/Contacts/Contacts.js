import { Card, Paper } from "@mui/material";
import ContactsHeader from "./ContactsHeader";
import ContactsTable from "./ContactsTable";
import { useEffect, useState } from "react";
import ContactsModal from "./ContactsModal";
import { createContact, createContactsList } from "@/utils/contacts";

export default function Contacts() {
  const [contacts, setContacts] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    createContactsList().then((data) => {
      setContacts(data);
    });
  }, []);

  const addContact = ({ firstName, lastName, phone }) => {
    setContacts((prev) => {
      return [
        createContact(prev.length + 1, firstName, lastName, phone),
        ...prev,
      ];
    });
  };

  const removeContact = (contactId) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== contactId);
    });
  };

  return (
    <Card variant="outlined" component={Paper}>
      <ContactsHeader setModalOpen={setModalOpen} />
      <ContactsTable contacts={contacts} onRemoveContact={removeContact} />
      {modalOpen && (
        <ContactsModal
          modalOpen={modalOpen}
          setModalOpen={setModalOpen}
          addContact={addContact}
        />
      )}
    </Card>
  );
}
