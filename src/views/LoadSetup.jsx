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
                title="Create New Load"
                content={
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputCity">Trucking Company</label>
                                <input type="text" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-6">
                                <label for="inputCity">Driver</label>
                                <input type="text" className="form-control"></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputCity">Pickup Location</label>
                                <input type="text" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="inputCity">Pickup Time</label>
                                <input type="date" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="inputCity">Pickup Contact</label>
                                <input type="number" className="form-control"></input>
                            </div>
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputCity">Delivery Location</label>
                                <input type="text" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="inputCity">Delivery Time</label>
                                <input type="date" className="form-control"></input>
                            </div>

                            <div className="form-group col-md-4">
                                <label for="inputCity">Delivery Contact</label>
                                <input type="number" className="form-control"></input>
                            </div>
                        </div>

                        <div className="form-group col-md-12">
                            <label for="inputNotes">Notes</label>
                            <textarea type="text" rows="5" class="form-control"></textarea>
                        </div>

                        <button type="submit" className="btn btn-primary btn-fill">Save</button>
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
