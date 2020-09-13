import { Navbar, Nav } from "react-bootstrap";



export default function Navigation() {

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">

                <img
                    alt=""
                    src="/logo/brij-builder-logo-bridge-only.png"
                    width="40"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}


            </Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="https://github.com/dominick-designs/" target="_blank">Github</Nav.Link>
                    <Nav.Link href="https://www.linkedin.com/company/dominick-designs-websites/" target="_blank">Linkedin</Nav.Link>
                    <Nav.Link href="/about" >About</Nav.Link>
                    <Nav.Link href="https://dominickdesigns.space/writings/" target="_blank">Writings</Nav.Link>

                </Nav>
            </Navbar.Collapse>
        </Navbar>

    )
}