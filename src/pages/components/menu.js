import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import styles from '../../styles/Menu.module.css'

export default function Menu() {
  return (
    <Navbar expand="lg" bg='dark' data-bs-theme="dark" className={`${styles.degradeMenu}`}>
      <Container>
        <Navbar.Brand href="/">Site Magnífico</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Casa</Nav.Link>
            <Nav.Link href="/esportes">EAsports</Nav.Link>
            <NavDropdown title="ReactHook" id="basic-nav-dropdown">
              <NavDropdown.Item href="/usestate">Instant Response</NavDropdown.Item>
              <NavDropdown.Item href="/useeffect">Counter</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Nothing</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Cadastros" id="cadastros">
              <NavDropdown.Item href="/cadastros/cadnoticias">Noticias</NavDropdown.Item>
            </NavDropdown> 
            <NavDropdown title="FunçãoNext" id="funcaoNext">
              <NavDropdown.Item href="/funcaonext/gssp">GetFreeMoney</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/gsspcard">FakeNews</NavDropdown.Item>
              <NavDropdown.Item href="/funcaonext/cardcomponent">FakeNews em colunas</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
