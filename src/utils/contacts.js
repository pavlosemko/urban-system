import axios from "axios";

export const createContact = (id, firstName, lastName, phone) => {
  return { id, firstName, lastName, phone };
};
async function getContactsFromApi() {
  let data = [];
  try {
    const response = await axios.get(process.env.REACT_APP_API_URL);
    if (response.status === 200) {
      data = response.data;
    }
  } catch (error) {
    console.error(error);
  }
  return data;
}
export async function createContactsList() {
  const contacts = await getContactsFromApi();
  if (contacts.length !== 0) {
    return contacts.map((contact) => {
      const full_name = contact.name.split(" ");
      return createContact(
        contact.id,
        full_name[0],
        full_name[1],
        contact.phone,
      );
    });
  }
  return contacts;
}
