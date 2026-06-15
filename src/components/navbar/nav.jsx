import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import home from "../img/aaa.png";

function NavScrollExample() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container id='exe' fluid>
        <a href="./">
        <img id='navimg' src={home} alt="" />
        </a>
        {/* <Navbar.Brand href="#">Home</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action2" className='nbt'>Link</Nav.Link>
            <NavDropdown title="Drop" id="navbarScrollingDropdown">
              <NavDropdown.Item className='nbt' href="#action3">1</NavDropdown.Item>
              <NavDropdown.Item className='nbt' href="#action4">
                2
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className='nbt' href="#action5">
                3
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link className='nbt' href="#" disabled>
              Link
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button id='sr' variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;