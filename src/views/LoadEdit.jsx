import React, { Component, useState } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";
import firebase from '../core/firebase/firebase';
import firebaseService from '../core/firebase/firebase-crud-service';

class LoadEdit extends Component {

  constructor(props) {
    super(props);

    this.state = {
        data: this.props.location.data,
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

    if (this.state.data && this.state.shippers && this.state.drivers && this.state.carriers ) {
        this.setState({
            carrier: this.state.data.carrier,
            driver: this.state.data.driver,
            shipper: this.state.data.shipper,
            pickup_location: this.state.data.pickup_location,
            pickup_date_time: this.state.data.pickup_date_time,
            pickup_contact: this.state.data.pickup_contact,
            delivery_location: this.state.data.delivery_location,
            delivery_date_time: this.state.data.delivery_date_time,
            delivery_contact: this.state.data.delivery_contact,
            notes: this.state.data.notes,
            status: this.state.data.status,
            load_type: this.state.data.load_type,
            confirmation: this.state.data.confirmation
        })
    }
  }

  updateLoad = () => {
    firebase.database().ref('loads/' + this.state.data.id).set({
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
        status: this.state.status,
        load_type: this.state.load_type,
        confirmation: this.state.confirmation
      }, function(error) {
        if (error) {
            alert("Load Updation Failed.");
        } else {
          alert("Load Updated Successfully.");
        }
      });
  
      this.props.history.push('/admin/loads');
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
                title="Edit Load"
                content={
                    <form>
                        {
                            this.state.data ?
                            <div>
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

                                <div className="form-row">
                                    <div className="form-group col-md-4">
                                        <label>Status</label>
                                        <select className="form-control" name="status" value={this.state.status} onChange={(event) => this.handleChange(event)}>
                                            <option value="Load Created">Load Created</option>
                                            <option value="assigned-to-shipper">Assigned to Shipper</option>
                                            <option value="assigned-to-driver">Assigned to Driver</option>
                                            <option value="pickup">Picked</option>
                                            <option value="delivered">Delivered</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label>Load Type</label>
                                        <select className="form-control" name="load_type" value={this.state.load_type} onChange={(event) => this.handleChange(event)}>
                                            <option value="active">Active</option>
                                            <option value="upcoming">Upcoming</option>
                                            <option value="past">Past</option>
                                        </select>
                                    </div>

                                    <div className="form-group col-md-4">
                                        <label>Confirmation From Driver</label>
                                        <select className="form-control" name="confirmation" value={this.state.confirmation} onChange={(event) => this.handleChange(event)}>
                                            <option value="true">True</option>
                                            <option value="false">False</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="form-group col-md-12">
                                    <label>Notes</label>
                                    <textarea type="text" name="notes" rows="5" className="form-control" value={this.state.notes} onChange={(event) => this.handleChange(event)}></textarea>
                                </div>
                                
                                {
                                    this.state.status == 'delivered' ?
                                    <span className="alert alert-danger">Load is Delivered, You can't update the delivered load details.</span>
                                    :
                                    <a onClick={() => this.updateLoad()} className="btn btn-primary btn-fill">Update</a>
                                }
                                
                            </div>
                            :
                            null
                        }
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

export default LoadEdit;
