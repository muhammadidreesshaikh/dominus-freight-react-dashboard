import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebase from '../core/firebase/firebase';

import { Grid, Row, Col, Table } from "react-bootstrap";

class Customers extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loads: [],
      itemsToUse: []
    }

    this.searchChange = this.searchChange.bind(this);
  }

  componentDidMount() {
    this.getLoads();
  }

  getLoads = () => {
    let tempLcustomers = [];
    const customersRef = firebase.database().ref('customers');

    customersRef.on('value', (snapshot) => {
      const customers = snapshot.val();

      for (let id in customers) {
        tempLcustomers.push({ id, ...customers[id] });
      }
      this.setState({ customers: tempLcustomers });
      this.setState({ itemsToUse: tempLcustomers });

      // console.log(this.state.customers);
    });

  };

  searchChange = (event) => {
    // console.log(event.target.value);

    if (!event.target.value || event.target.value === " " || event.target.value === "") {
      this.setState({ itemsToUse: [...this.state.customers] });
    }
    else {
      let filtered = this.state.customers.filter(
        item => 
          item["company_name"].toLowerCase().includes(event.target.value.toLowerCase()) ||
          item["company_email"].toLowerCase().includes(event.target.value.toLowerCase()) ||
          item["company_phone"].toLowerCase().includes(event.target.value.toLowerCase()) ||
          item["account_type"].toLowerCase().includes(event.target.value.toLowerCase())
      )
      this.setState({ itemsToUse: filtered });
      // console.log(filtered);
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>

            <Col md={12} className="pb-5">
              <Row>
                <Col md={6} className="pt-1">
                  <input type="search" name="search" className="form-control" placeholder="search any thing .." onChange={(e) => {this.searchChange(e)} }/>
                </Col>
                <Col md={6} className="text-right">
                    
                </Col>
              </Row>
            </Col>

            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Contact</th>
                      <th>Email</th>
                      <th>Phone</th>
                      <th>Account Type</th>
                      <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                  {
                    this.state.itemsToUse.map((item, key) => {
                      return (
                        <tr key={key}>
                          <td>{item.id}</td>
                          <td>{item.company_name}</td>
                          <td>{item.company_contact}</td>
                          <td>{item.company_email}</td>
                          <td>{item.company_phone}</td>
                          <td>{item.account_type}</td>
                          <td>
                            <Link to={{ pathname: "/admin/customer-setup", data: item }}>
                              Edit
                            </Link>
                          </td>
                        </tr>
                      )
                    })
                  }
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Customers;
