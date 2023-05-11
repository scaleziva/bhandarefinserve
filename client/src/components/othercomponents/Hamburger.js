/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import "../CSS/Slider.css";
import { NavLink } from 'react-router-dom';

const Hamburger = () => {
  return (
    <Menu>

      <h4 className='menuLogoText' >Bhandare Finserve</h4>

      <center>
        <div className="iconDiv iconDivHamburger">
          <a href="#5">
            <i className="fa-solid fa-cart-shopping"></i>
          </a>

          <NavLink to="/en/notifications" >
            <i className="fa-solid fa-bell"></i>
          </NavLink>

          <a href="#emicalc">
            <i className="fa-solid fa-calculator"></i>
          </a>
          <NavLink to="/en/settings" >
            <i className="fa-solid fa-gear"></i>
          </NavLink>
        </div>
      </center>

      <a className="menu-item" href="#">
        Loans<i style={{ color: "white", marginLeft: "5px", marginTop: "5px" }} className="fa fa-angle-down" aria-hidden="true"></i>
        <div className="menuItemSub">
          <span><NavLink className="navServices" to="/services/homeloan" >Home Loan</NavLink></span>
          <span><NavLink className="navServices" to="/services/personalloan" >Personal Loan</NavLink></span>
          <span><NavLink className="navServices" to="/services/businessloan" >Business Loan</NavLink></span>
          <span><NavLink className="navServices" to="/services/carloan" >Car Loan</NavLink></span>
          <span><NavLink className="navServices" to="/services/educationloan" >Education Loan</NavLink></span>
        </div>
      </a>

      <a className="menu-item" href="#">
        Insurance<i style={{ color: "white", marginLeft: "5px", marginTop: "5px" }} className="fa fa-angle-down" aria-hidden="true"></i>
        <div className="menuItemSub">
          <span><NavLink className="navServices" to="/services/lifeinsurance" >Life Insurance</NavLink></span>
          <span><NavLink className="navServices" to="/services/healthinsurance" >Health Insurance</NavLink></span>
          <span><NavLink className="navServices" to="/services/vehicleinsurance" >Vehicle Insurance</NavLink></span>
        </div>
      </a>

      <a className="menu-item" href="#">
        Business Registration<i style={{ color: "white", marginLeft: "5px", marginTop: "5px" }} className="fa fa-angle-down" aria-hidden="true"></i>
        <div className="menuItemSub">
          <span><NavLink className="navServices" to="/services/labourlicense">Labour License</NavLink></span>
          <span><NavLink className="navServices" to="/services/tradelicense" >Trade License</NavLink></span>
          <span><NavLink className="navServices" to="/services/gst">GST Registration</NavLink></span>
          <span><NavLink className="navServices" to="/services/foodlicense" >Food License</NavLink></span>
          <span><NavLink className="navServices" to="/services/trademarkreg" >Trademark</NavLink></span>
          <span><NavLink className="navServices" to="/services/msme">MSME</NavLink></span>
        </div>
      </a>

      <a className="menu-item" href="#">
        Filings <i style={{ color: "white", marginLeft: "5px", marginTop: "5px" }} className="fa fa-angle-down" aria-hidden="true"></i>
        <div className="menuItemSub">
          <span><NavLink className="navServices" to="/services/incometax" >Income Tax</NavLink></span>
          <span><NavLink className="navServices" to="/services/accounting" >Accounting</NavLink></span>
          <span><NavLink className="navServices" to="/services/gstfiling" >GST Filing</NavLink></span>
        </div>
      </a>

    </Menu>
  );
};

export default Hamburger;

// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function OffcanvasExample() {
//   return (
//     <>
//       {[false].map((expand) => (
//         <Navbar bg="transparent" variant="dark" style={{float:"left", color:"transparent !important"}} key={expand}  expand={expand} className="mb-3">
//           <Container fluid>
//             {/* <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand> */}
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default OffcanvasExample;