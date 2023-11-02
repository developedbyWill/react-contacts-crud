import React from "react";
import { Card, Button } from "react-bootstrap";

const ContactCard = ({ contact, onDeleteContact, onEditContact }) => {
  const { id, name, location, phone } = contact;

  return (
    <Card>
      <Card.Body>
        <Card.Text>
          <strong>Name: </strong>
          {name}
        </Card.Text>
        <Card.Text>
          <strong>Location: </strong>
          {location}
        </Card.Text>
        <Card.Text>
          <strong>Phone: </strong>
          {phone}
        </Card.Text>
        <Button variant="danger" onClick={() => onDeleteContact(id)}>
          Delete
        </Button>
        <Button variant="primary" onClick={onEditContact}>
          Edit
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ContactCard;
