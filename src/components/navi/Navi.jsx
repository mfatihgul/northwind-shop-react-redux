import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import CartSummary from "../cart/CartSummary";

export default class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false,
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  render() {
    return (
      <div>
        <Navbar expand="md">
          <NavbarBrand href="/">Northwind Shop</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink href="http://beacons.ai/mfatihgul">
                  Muhammet Fatih Gul
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/mfatihgul">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/saveproduct">Add Product</Link>
                </NavLink>
              </NavItem>
            </Nav>
            <CartSummary />
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
