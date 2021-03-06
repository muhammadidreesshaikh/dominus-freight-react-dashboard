import React, { Component, useState } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import firebase from '../core/firebase/firebase';
import firebaseService from '../core/firebase/firebase-crud-service';

class LoadSetup extends Component {

  constructor(props) {
    super(props);

    this.state = {
      shippers: [],
      drivers: [],
      carriers: [],
      carrier: '',
      shipper: '',
      driver: '',
      pickup_location: '',
      pickup_date_time: '',
      pickup_contact: '',
      delivery_location: '',
      delivery_date_time: '',
      delivery_contact: '',
      notes: 'Please remember to update your progress in the app.',
      status: 'Load Created',
      load_type: 'active',
      confirmation: false
    }
  }

  componentDidMount() {
    this.getShippersNDrivers();
  }

  createLoad = () => {
    const loadRef = firebase.database().ref('loads');
  
    const load = {
      carrier: this.state.carrier,
      driver: this.state.driver,
      shipper: this.state.shipper,
      pickup_location: this.state.pickup_location,
      pickup_date_time: this.state.pickup_date_time,
      pickup_contact: this.state.pickup_contact,
      delivery_location: this.state.delivery_location,
      delivery_date_time: this.state.delivery_date_time,
      delivery_contact: this.state.delivery_contact,
      notes: this.state.notes,
      status: 'Load Created',
      load_type: 'active',
      confirmation: false
    };

    loadRef.push(load, function(error) {
      if (error) {
        alert("Data could not be saved." + error);
      } else {
        alert("Data saved successfully.");
      }
    });

    this.props.history.push('/admin/loads');

    console.log(load);
  };
  
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(this.state);
  }

  getShippersNDrivers = () => {
    let tempCustomers = [];

    const customersRef = firebase.database().ref('customers');

    customersRef.on('value', (snapshot) => {
    const customers = snapshot.val();

    for (let id in customers) {
      tempCustomers.push({ id, ...customers[id] });
    }

    let shippers = tempCustomers.filter(item => item.account_type == 'shipper' );
    let drivers = tempCustomers.filter(item => item.account_type == 'driver' );
    let carriers = tempCustomers.filter(item => item.account_type == 'carrier' );

    this.setState({ shippers: shippers });
    this.setState({ drivers: drivers });
    this.setState({ carriers: carriers });

    // console.log(this.state.shippers);
    });
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12}>
              <Card
                title="Create New Load"
                content={
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Carrier</label>
                                <select name="carrier" className="form-control" value={this.state.carrier} onChange={(event) => this.handleChange(event)}>
                                  <option value="0">Select Carrier</option>
                                  {
                                    this.state.carriers.map((item, index) => {
                                      return (
                                        <option key={index} value={JSON.stringify(item)}>{item.company_name}</option>
                                      )
                                    })
                                  }
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Shipper</label>
                                <select name="shipper" className="form-control" value={this.state.shipper} onChange={(event) => this.handleChange(event)}>
                                  <option value="0">Select Shipper</option>
                                  {
                                    this.state.shippers.map((item, index) => {
                                      return (
                                        <option key={index} value={JSON.stringify(item)}>{item.company_name}</option>
                                      )
                                    })
                                  }
                                </select>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Driver</label>
                                <select name="driver" className="form-control" value={this.state.driver} onChange={(event) => this.handleChange(event)}>
                                  <option value="0">Select Driver</option>
                                  {
                                    this.state.drivers.map((item, index) => {
                                      return (
                                        <option key={index} value={JSON.stringify(item)}>{item.company_name}</option>
                                      )
                                    })
                                  }
                                </select>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Pickup Location</label>
                                <input type="text" name="pickup_location" className="form-control" value={this.state.pickup_location} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Pickup Time</label>
                                <input type="datetime-local" name="pickup_date_time" className="form-control" value={this.state.pickup_date_time} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Pickup Contact</label>
                                <input type="number" name="pickup_contact" className="form-control" value={this.state.pickup_contact} onChange={(event) => this.handleChange(event)}></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label>Delivery Location</label>
                                <input type="text" name="delivery_location" className="form-control" value={this.state.delivery_location} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Delivery Time</label>
                                <input type="datetime-local" name="delivery_date_time" className="form-control" value={this.state.delivery_date_time} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label>Delivery Contact</label>
                                <input type="number" name="delivery_contact" className="form-control" value={this.state.delivery_contact} onChange={(event) => this.handleChange(event)}></input>
                            </div>
                        </div>

                        <div className="form-group col-md-12">
                            <label>Notes</label>
                            <textarea type="text" name="notes" rows="5" className="form-control" value={this.state.notes} onChange={(event) => this.handleChange(event)}></textarea>
                        </div>

                        <a onClick={() => this.createLoad()} className="btn btn-primary btn-fill">Save</a>
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

export default LoadSetup;
