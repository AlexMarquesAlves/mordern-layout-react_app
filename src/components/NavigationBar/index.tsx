import { ReactNode, SetStateAction, useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

interface NavigationBarProps {
    children?: ReactNode;
}

export function NavigationBar() {
    const [activeLink, setActiveLink] = useState(`home`);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener(`scroll`, onScroll);

        return () => window.removeEventListener(`scroll`, onScroll);
    }, []);

    const onUpdateActiveLink = (value: SetStateAction<string>) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
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
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === "home"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={
                                activeLink === "skills"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("skills")}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === "projects"
                                    ? "active navbar-link"
                                    : "navbar-link"
                            }
                            onClick={() => onUpdateActiveLink("projects")}
                        >
                            Projects
                        </Nav.Link>
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
