import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import firebase from '../core/firebase/firebase';
import { Card } from "components/Card/Card.jsx";

class CustomerSetup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      company_name: '',
      company_email: '',
      company_phone: '',
      account_type: '',
    }
  }

  createCustomer = () => {
    const customerRef = firebase.database().ref('customers');
  
    const customer = {
      company_name: this.state.company_name,
      company_email: this.state.company_email,
      company_phone: this.state.company_phone,
      account_type: this.state.account_type,
    };
    
    customerRef.push(customer, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      }
    });
    
    this.props.history.push('/admin/customers');

    // console.log(customer);
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // console.log(this.state);
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create New Customer"
                content={
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Company Name</label>
                                <input type="text" name="company_name" className="form-control" value={this.state.company_name} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-6">
                                <label>Company Email</label>
                                <input type="text" name="company_email" className="form-control" value={this.state.company_email} onChange={(event) => this.handleChange(event)}></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Company Phone</label>
                                <input type="text" name="company_phone" className="form-control" value={this.state.company_phone} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-6">
                              <label>Account Type</label>
                              <select class="form-control" name="account_type" value={this.state.account_type} onChange={(event) => this.handleChange(event)}>
                                <option value="driver">Driver</option>
                                <option value="trucking_company">Trucking Company</option>
                                <option value="shipper">Shipper</option>
                                <option value="dominus">Dominus</option>
                              </select>
                            </div>
                        </div>

                        <div className="form-row px-4">
                          <a onClick={() => this.createCustomer()} className="btn btn-primary btn-fill mr-3">Save</a>
                          <a className="btn btn-success btn-fill">Update</a>
                        </div>
                  </form>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default CustomerSetup;
