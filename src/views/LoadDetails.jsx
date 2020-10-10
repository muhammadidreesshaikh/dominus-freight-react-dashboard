import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { thArray, tdArray } from "variables/Variables.jsx";

class LoadDetails extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
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
                        <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"></input>
                        <label className="form-check-label" for="defaultCheck1">
                          Notify Me
                        </label>
                      </div>
                    </Col>
                  </Row>

                    <Row>
                      <Col md={12}>
                        <div class="list-group">
                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Shipper ID</h5>
                              <small>1</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Trucking Company</h5>
                              <small class="text-muted">DHL Co</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Driver</h5>
                              <small class="text-muted">Allex</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Pickup Location</h5>
                              <small class="text-muted">Tempa</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Pickup Time</h5>
                              <small class="text-muted">10:00 AM</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Pickup Contact</h5>
                              <small class="text-muted">+92 333 7148980</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Dropoff Location</h5>
                              <small class="text-muted">Florida</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Dropoff Time</h5>
                              <small class="text-muted">05:00 PM</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Dropoff Contact</h5>
                              <small class="text-muted">+92 333 7148980</small>
                            </div>
                          </a>

                          <a href="#" class="list-group-item list-group-item-action">
                            <div class="d-flex w-100 justify-content-between">
                              <h5 class="mb-1">Notes</h5>
                              <small class="text-muted">loremipsm loremipsm</small>
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
        </Grid>
      </div>
    );
  }
}

export default LoadDetails;
