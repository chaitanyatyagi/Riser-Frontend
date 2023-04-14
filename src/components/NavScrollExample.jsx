import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Cookies from "universal-cookie"
import { ToastContainer, toast } from "react-toastify"
import { Link } from "react-router-dom"

function NavScrollExample(props) {

    const cookies = new Cookies()
    function logout() {
        cookies.remove('jwt', { path: '/' })
        toast("Ypu are successfully logged out.")
        window.open("/", "_self")
    }
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/product" style={{ fontWeight: "700", color: "green" }} as={Link} to={"/"}>E-Commerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" style={{ fontWeight: "700", color: "black" }} as={Link} to={"/"}>Home</Nav.Link>
                        {
                            props.login ? <Nav.Link onClick={logout} style={{ fontWeight: "700", color: "black" }}>Logout</Nav.Link> : <Nav.Link href="#action2" style={{ fontWeight: "700", color: "black" }} as={Link} to={"/register"}>SignUP</Nav.Link>
                        }
                        <NavDropdown title="Categories" id="navbarScrollingDropdown" style={{ fontWeight: "700", color: "green" }}>
                            <NavDropdown.Item style={{ fontWeight: "700", color: "black" }} as={Link} to={"/products/men"}>Men's Category</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ fontWeight: "700", color: "black" }} as={Link} to={"/products/women"}>
                                Women's Category
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item style={{ fontWeight: "700", color: "black" }} as={Link} to={"/products/other"}>
                                Other
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
            <ToastContainer />
        </Navbar>
    );
}

export default NavScrollExample