import React, { useState } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import ImageUpModal from "../modals/ImageUpModal";

const Header = () => {
  const [imgeUpModalOn, setImageUpModalOn] = useState(false);
  return (
    <>
      <ImageUpModal
        show={imgeUpModalOn}
        onHide={() => setImageUpModalOn(false)}
      />

      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand>이미지 업로드 모달</Navbar.Brand>

            <Nav className="ml-auto">
              <Nav.Link>
                <Button
                  variant="primary"
                  onClick={() => setImageUpModalOn(true)}
                >
                  Image Upload
                </Button>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>
      </header>
    </>
  );
};

export default Header;
