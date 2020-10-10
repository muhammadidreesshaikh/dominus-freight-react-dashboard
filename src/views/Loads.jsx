import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { thArray, tdArray } from "variables/Variables.jsx";

class Loads extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>

            <Col md={12} className="pb-5">
              <Row>
                <Col md={6} className="pt-1">
                  <input type="search" class="form-control" placeholder="search any thing .." />
                </Col>
                <Col md={6} className="text-right">
                    <button type="button" className="btn btn-success btn-fill">Active Loads</button>
                    <button type="button" className="btn btn-primary mx-4 btn-fill">Upcoming Loads</button>
                    <button type="button" className="btn btn-info btn-fill">Past Loads</button>
                </Col>
              </Row>
            </Col>

            <Col md={12}>
              <Table striped hover>
                <thead>
                  <tr>
                    {thArray.map((prop, key) => {
                      return <th key={key}>{prop}</th>;
                    })}
                  </tr>
                </thead>
                <tbody>
                  {tdArray.map((prop, key) => {
                    return (
                      <tr key={key}>
                        {prop.map((prop, key) => {
                          return <td key={key}>{prop}</td>;
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Loads;
