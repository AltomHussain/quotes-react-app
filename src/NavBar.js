import React from 'react'
import { Navbar, Nav } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import FetchData from './FetchData';
import SearchInput from './SearchInput';
import SearchBar from "./SearchBar"
import Home from "./Home"
 const NavBar = () => {
    return (
      <div>
        <Navbar bg="light" expand="lg" className="Navbar">
          <Navbar.Brand href=""> Quote generator</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/random">Random</Nav.Link>
              <Nav.Link href="/quotes">Search</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
       <Router>
          <div>
            <Switch>            
                 <Route exact path="/">
                 < Home/>
               </Route>
                 <Route exact path="/random">
                 < FetchData/>
               </Route>
               <Route path="/quotes">
              <SearchInput />
               </Route>
             </Switch>
             </div>
         </Router>
       </div>
     );
      };
  export default NavBar;