import React, { useState } from "react";
import { Form, Button, Col, Row } from "react-bootstrap";

const ContactsForm = ({ onAddContact }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddContact(formData);
    setFormData({ name: "", phone: "", location: "" });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formName">
          <Form.Label>Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter name"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formPhone">
          <Form.Label>Phone:</Form.Label>
          <Form.Control
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter phone number"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formLocation">
          <Form.Label>Location:</Form.Label>
          <Form.Control
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="Enter location"
          />
        </Form.Group>
      </Row>
      <Button variant="primary" type="submit">
        Add Contact
      </Button>
    </Form>
  );
};

export default ContactsForm;
