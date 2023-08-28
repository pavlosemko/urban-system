import { TableBody } from "@mui/material";
import Loader from "../Loader";
import ContactsItem from "@/components/Contacts/ContactsItem";

export default function Body({ contacts, onRemoveContact }) {
  return (
    <TableBody>
      {contacts ? (
        contacts.map((contact, index) => {
          return (
            <ContactsItem
              contact={contact}
              key={`${index}:${contact.id}`}
              onRemoveContact={onRemoveContact}
            />
          );
        })
      ) : (
        <Loader counter={contacts?.length || 20} />
      )}
    </TableBody>
  );
}
