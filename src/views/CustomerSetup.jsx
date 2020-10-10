import React, { Component } from "react";
import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";

class LoadSetup extends Component {
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
                                <label for="inputCity">Company Name</label>
                                <input type="text" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputCity">Company Email</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">Company Phone</label>
                                <input type="text" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-6">
                              <label for="exampleFormControlSelect1">Account Type</label>
                              <select class="form-control">
                                <option>Driver</option>
                                <option>Trucking Company</option>
                                <option>Shipper</option>
                                <option>Dominus</option>
                              </select>
                            </div>
                        </div>

                        <div className="form-row px-4">
                          <button type="submit" className="btn btn-primary btn-fill mr-3">Save</button>
                          <button type="submit" className="btn btn-success btn-fill">Update</button>
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

export default LoadSetup;
