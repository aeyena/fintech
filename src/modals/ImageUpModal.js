import React from "react";
import { Modal, Button, Form, Container } from "react-bootstrap";

const ImageUpModal = ({ show, onHide }) => {
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Container>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            대표이미지
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicImage">
              <Form.Label>Image file</Form.Label>
              <Form.Control type="file" placeholder="Upload Image" />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button block variant="info" type="button">
            대표 이미지 변경 완료
          </Button>
        </Modal.Footer>
      </Container>
    </Modal>
  );
};

export default ImageUpModal;
