import React from "react";
import { Row, Col } from "react-bootstrap";
import ContactCard from "./ContactCard";

const Contacts = ({ contacts, onDeleteContact, onEditContact }) => {
  return (
    <div>
      <Row>
        {contacts.map((contact) => (
          <Col key={contact.id} md={6} className="mb-3">
            <ContactCard
              contact={contact}
              onDeleteContact={onDeleteContact}
              onEditContact={() => onEditContact(contact.id)}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Contacts;
