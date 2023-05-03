import {Nav, Navbar, Container, NavDropdown} from 'react-bootstrap';  
import {Button} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../cssFile/Body.css';

export default function NavigatorPreLogin(props){

  function NavEvents(props2){

    return(
      <Nav.Link href={"/landing/"+props2.value}>{props2.value} </Nav.Link>
    )
    
  }

    return(
        <>
        <div className="row g-0 " >
          <Navbar className='nav-bar-format' variant="light" bg="dark" expand="md" sticky="top">  
              <Container>  
              <Navbar.Brand href="/">Navbar Brand</Navbar.Brand>  
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
               
              <Navbar.Collapse id="basic-navbar-nav" align='center'> 
                <Nav className="me-auto">   
                <Nav.Link href="/">Home</Nav.Link>               
                {props.value.map(x=>(
                <NavEvents 
                  key={x.id}
                  value={x.value}
                />
                        ))
                    } 
                   
                  {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">  
                      <NavDropdown.Item href="#action/3.1" >Dropdown Item 1</NavDropdown.Item>  
                      <NavDropdown.Item href="#action/3.2">Dropdown Item 2</NavDropdown.Item>  
                      <NavDropdown.Item href="#action/3.3">Dropdown Item 3</NavDropdown.Item>  
                      <NavDropdown.Divider />  
                      <NavDropdown.Item href="#action/3.4">Another Item</NavDropdown.Item>  
                  </NavDropdown>  */}
                  
                  </Nav>
            <Nav>
              <Nav.Link href="/login"><span className="glyphicon glyphicon-log-in"></span> Login</Nav.Link>
              <Nav.Link href="/register"><span className="glyphicon glyphicon-user"></span> Register</Nav.Link>
            </Nav>
              </Navbar.Collapse>  
              </Container>  
          </Navbar>  
      
        </div>
        
      </> 

    )
}
