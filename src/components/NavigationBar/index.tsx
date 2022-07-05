import { ReactNode, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavigationBarProps {
    children?: ReactNode;
}

export function NavigationBar() {
    const [activeLink, setActiveLink] = useState(`home`);
    const [scrolled, setScrolled] = useState(false);

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

                    <span className="navbar-text">
                        {/* social list */}
                        <div className="social-icon">
                            <a href="#">
                                <img src={""} alt="" />
                                <img src={""} alt="" />
                                <img src={""} alt="" />
                            </a>
                        </div>

                        <button
                            className="vvd"
                            onClick={() => console.log(`Connect`)}
                        >
                            <span>Let's Connect</span>
                        </button>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
