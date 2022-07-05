import { ReactNode } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavigationBarProps {
    children?: ReactNode;
}

export function NavigationBar() {
    return (
        <Navbar expand="lg">
            <Container>
                <Navbar.Brand href="#home">
                    <img src="" alt="Logo image" />
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    {/* links list */}
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#skills">Skills</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
