import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-bootstrap";

class LoadDetails extends Component {

  constructor(props) {
    super(props);

    this.state = {
      data: this.props.location.data
    }
  }

  componentDidMount() {
    console.log(this.state.data);
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          {
            this.state.data ? 
            <Row>
              <Col md={12} className="pb-5">
                <Row>
                  <Col md={5} className="details">
                    <Row className="pb-5">
                      <Col md={6} className="heading">
                        <h4 className="p-0 m-0">All Updates</h4>
                      </Col>
                      <Col md={6} className="checkbox">
                        <div className="form-check">
                          <input className="form-check-input" type="checkbox" value=""></input>
                          <label className="form-check-label">
                            Notify Me
                          </label>
                        </div>
                      </Col>
                    </Row>

                      <Row>
                        <Col md={12}>
                          <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Shipper</h5>
                                <small>{this.state.data.id}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Carrier</h5>
                                <small className="text-muted">{this.state.data.trucking_company}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Driver</h5>
                                <small className="text-muted">{this.state.data.driver}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Pickup Location</h5>
                                <small className="text-muted">{this.state.data.pickup_location}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Pickup Time</h5>
                                <small className="text-muted">{new Date(this.state.data.pickup_date_time).toLocaleString()}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Pickup Contact</h5>
                                <small className="text-muted">{this.state.data.pickup_contact}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Delivery Location</h5>
                                <small className="text-muted">{this.state.data.delivery_location}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Delivery Time</h5>
                                <small className="text-muted">{new Date(this.state.data.delivery_date_time).toLocaleString()}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Delivery Contact</h5>
                                <small className="text-muted">{this.state.data.delivery_contact}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Notes</h5>
                                <small className="text-muted">{this.state.data.notes}</small>
                              </div>
                            </a>

                            <a href="#" className="list-group-item list-group-item-action">
                              <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">Status</h5>
                                <small className="text-muted">{this.state.data.status}</small>
                              </div>
                            </a>
                          </div>
                        </Col>
                      </Row>
                  </Col>

                  <Col md={7} className="google-map">
                    <img src="https://i.stack.imgur.com/ddX9U.png"/>
                  </Col>
                </Row>
              </Col>
            </Row>
            :
            <Row>
              <Col md={12}>
                <h4 className="p-0 m-0">Select Load to Show Details</h4>
                <Link className="btn btn-primary mt-4 btn-fill" to={{ pathname: "/admin/loads" }}>
                  View All Loads
                </Link>
              </Col>
            </Row>
          }
        </Grid>
      </div>
    );
  }
}

export default LoadDetails;
