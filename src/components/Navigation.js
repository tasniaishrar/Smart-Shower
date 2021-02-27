import { Navbar, Nav, Container } from 'react-bootstrap';

const Navigation = () => {
    return (
        
        <Navbar collapseOnSelect fixed='top' expand='sm' bd='dark' variant='dark'>
            <Container>
                <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav>
                        <Nav.Link href='./components/Daily'>Daily</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
        );
}
export default Navigation;

