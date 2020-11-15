import React, { Component } from "react";
import firebase from '../../core/firebase/firebase';
import { NavItem, Nav, NavDropdown, MenuItem } from "react-bootstrap";

class AdminNavbarLinks extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logout: '',
    }

  }

  logout = () => {
    firebase.auth().signOut().then(res => {
      console.log(res);
      localStorage.clear();
      window.location.href = '/admin/login';
    })
    .catch(error => {
      console.log(error);
    });
    
  }

  render() {
    const notification = (
      <div>
        <i className="fa fa-bell" />
        <b className="caret" />
        <span className="notification">5</span>
        <p className="hidden-lg hidden-md">Notification</p>
      </div>
    );

    return (
      <div>
        <Nav pullRight>
          <NavItem eventKey={1} href="#">
            <i className="fa fa-user mr-2" />
            Account
          </NavItem>

          <NavDropdown
            eventKey={2}
            title={notification}
            noCaret
            id="basic-nav-dropdown"
          >
            <MenuItem eventKey={2.1}>Notification 1</MenuItem>
            <MenuItem eventKey={2.2}>Notification 2</MenuItem>
            <MenuItem eventKey={2.3}>Notification 3</MenuItem>
            <MenuItem eventKey={2.4}>Notification 4</MenuItem>
            <MenuItem eventKey={2.5}>Another notifications</MenuItem>
          </NavDropdown>

          <NavItem eventKey={3} onClick={() => this.logout()}>
            <i className="fa fa-sign-out mr-2" />
            Log out
          </NavItem>
        </Nav>
      </div>
    );
  }
}

export default AdminNavbarLinks;
