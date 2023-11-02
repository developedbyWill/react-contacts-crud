import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";

const EditContactsForm = ({ contact, onEditContact, onCancelEdit }) => {
  const [formData, setFormData] = useState({
    name: contact.name,
    phone: contact.phone,
    location: contact.location,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onEditContact({ id: contact.id, ...formData });
    onCancelEdit();
  };

  return (
    <Modal show={true} onHide={onCancelEdit}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter name"
            />
          </Form.Group>
          <Form.Group controlId="formPhone">
            <Form.Label>Phone:</Form.Label>
            <Form.Control
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter phone number"
            />
          </Form.Group>
          <Form.Group controlId="formLocation">
            <Form.Label>Location:</Form.Label>
            <Form.Control
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              placeholder="Enter location"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Save Changes
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditContactsForm;
