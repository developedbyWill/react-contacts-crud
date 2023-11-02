import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Contacts from "./components/Contacts";
import ContactsForm from "./components/ContactsForm";
import EditContactsForm from "./components/EditContactsForm";
import { v4 as uuidv4 } from "uuid";

const App = () => {
  const [contacts, setContacts] = useState([
    {
      id: uuidv4(),
      name: "Kwame Mensah",
      phone: "123-456-7890",
      location: "Accra",
    },
    {
      id: uuidv4(),
      name: "Ama Boateng",
      phone: "987-654-3210",
      location: "Kumasi",
    },
    {
      id: uuidv4(),
      name: "Nana Ofori",
      phone: "987-654-3210",
      location: "Takoradi",
    },
    {
      id: uuidv4(),
      name: "Akua Ansah",
      phone: "987-654-3210",
      location: "Tema",
    },
    {
      id: uuidv4(),
      name: "Kwaku Asante",
      phone: "987-654-3210",
      location: "Cape Coast",
    },
    {
      id: uuidv4(),
      name: "Abena Darko",
      phone: "987-654-3210",
      location: "Tamale",
    },
    {
      id: uuidv4(),
      name: "Kofi Manu",
      phone: "987-654-3210",
      location: "Koforidua",
    },
    {
      id: uuidv4(),
      name: "Efia Tamaklo",
      phone: "987-654-3210",
      location: "Sunyani",
    },
  ]);

  const [editingContact, setEditingContact] = useState(null);

  const handleAddContact = (newContact) => {
    setContacts([...contacts, newContact]);
  };

  const handleDeleteContact = (contactId) => {
    const updatedContacts = contacts.filter(
      (contact) => contact.id !== contactId
    );
    const updatedContactsWithIds = updatedContacts.map((contact, index) => ({
      ...contact,
      id: index + 1,
    }));
    setContacts(updatedContactsWithIds);
  };
  const handleEditContact = (editedContact) => {
    const updatedContacts = contacts.map((contact) =>
      contact.id === editedContact.id
        ? { ...contact, ...editedContact }
        : contact
    );
    setContacts(updatedContacts);
    setEditingContact(null);
  };

  const handleEditClick = (contactId) => {
    const contactToEdit = contacts.find((contact) => contact.id === contactId);
    setEditingContact(contactToEdit);
  };

  const handleCancelEdit = () => {
    setEditingContact(null);
  };

  return (
    <Container>
      <Row>
        <Col md={6}>
          <h1>Contacts Form</h1>
          <ContactsForm onAddContact={handleAddContact} />
        </Col>
        <Col md={6}>
          <h1>Contact List</h1>
          <Contacts
            contacts={contacts}
            onDeleteContact={handleDeleteContact}
            onEditContact={handleEditClick}
          />
        </Col>
      </Row>
      {editingContact && (
        <EditContactsForm
          contact={editingContact}
          onEditContact={handleEditContact}
          onCancelEdit={handleCancelEdit}
        />
      )}
    </Container>
  );
};

export default App;
