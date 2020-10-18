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
      data: this.props.location.data,
      company_name: '',
      company_contact: '',
      company_email: '',
      company_phone: '',
      account_type: '',
    }
  }

  componentDidMount() {
    if (this.state.data) {
      this.setState({
        company_name: this.state.data.company_name,
        company_contact: this.state.data.company_contact,
        company_email: this.state.data.company_email,
        company_phone: this.state.data.company_phone,
        account_type: this.state.data.account_type,
      });
    }
  }

  createCustomer = () => {
    const customerRef = firebase.database().ref('customers');
  
    const customer = {
      company_name: this.state.company_name,
      company_contact: this.state.company_contact,
      company_email: this.state.company_email,
      company_phone: this.state.company_phone,
      account_type: this.state.account_type,
    };
    
    // storing customer as a new record
    customerRef.push(customer, function(error) {
      if (error) {
        alert("Customer could not be created." + error);
      } else {
        alert("Customer Created successfully.");
      }
    });
    
    this.signupForCustomer(this.state.company_email);
    this.props.history.push('/admin/customers');
  };

  // creating default account for customer
  signupForCustomer = (email) => {
    firebase.auth().createUserWithEmailAndPassword(email, '12345678')
    .then(res => {
        console.log(res);
        if (res.additionalUserInfo.isNewUser == true) alert('Signup Suucessfull.');
        else alert('Signup Failed!');
    })
    .catch(error => {
        console.log(error);
    })
  }

  updateCustomer = () => {
    firebase.database().ref('customers/' + this.state.data.id).set({
      company_name: this.state.company_name,
      company_contact: this.state.company_contact,
      company_email: this.state.company_email,
      company_phone: this.state.company_phone,
      account_type: this.state.account_type,
    }, function(error) {
      if (error) {
        // The write failed...
      } else {
        // The write Success...
      }
    });

    this.props.history.push('/admin/customers');
  }

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
                            <div className="form-group col-md-4">
                                <label>Name</label>
                                <input type="text" name="company_name" className="form-control" value={this.state.company_name} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Company Contact</label>
                                <input type="text" name="company_contact" className="form-control" value={this.state.company_contact} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Email</label>
                                <input type="text" name="company_email" className="form-control" value={this.state.company_email} onChange={(event) => this.handleChange(event)}></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label>Phone</label>
                                <input type="text" name="company_phone" className="form-control" value={this.state.company_phone} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-6">
                              <label>Account Type</label>
                              <select className="form-control" name="account_type" value={this.state.account_type} onChange={(event) => this.handleChange(event)}>
                                <option value="driver">Driver</option>
                                <option value="carrier">Carrier</option>
                                <option value="shipper">Shipper</option>
                                <option value="dominus">Dominus</option>
                              </select>
                            </div>
                        </div>

                        <div className="form-row px-4">
                          {
                            this.state.data ?
                              <a className="btn btn-success btn-fill" onClick={ () => {this.updateCustomer()} }>Update</a>
                            :
                            <a onClick={() => this.createCustomer()} className="btn btn-primary btn-fill mr-3">Save</a>
                          }
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
