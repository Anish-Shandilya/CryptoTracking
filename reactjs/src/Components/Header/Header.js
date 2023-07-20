import React from "react";
import "./Header.css";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const Header = ()=>{


    return(
        <div className="header-section">
            <div className="header">
                <div className="logo-section">
                    <img src="https://www.finmapp.com/wp-content/uploads/2021/09/abb.png" alt="logo"/>
                    <sup className="logo-theme">Your Financial Matchmaker</sup>
                </div>
                <div className="nav-section">
                    
                    
                    <Navbar>
                            <Container>
                                
                                <Navbar.Collapse>
                                <Nav className="nav">
                                        <Nav.Link href="/user/data">Home</Nav.Link>
                                        <Nav.Link href="/signUp" >SignUp</Nav.Link>
                                        <Nav.Link href="/">Login</Nav.Link>
                                        <Nav.Link href="/user/selecteddata">Watchlist</Nav.Link>
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                    </Navbar>

                </div>
            </div>
        </div>
    )
}

export default Header;