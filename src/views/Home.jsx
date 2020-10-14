import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

import { thArray, tdArray } from "variables/Variables.jsx";

class Home extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>

            <Col md={12} className="pb-5">
              <Row>
                <Col md={6} className="pt-5">
                  <input type="search" className="form-control" placeholder="search any thing .." />
                </Col>
                <Col md={3} className="pt-2">
                  <label> Start Date</label>
                  <input type="date" className="form-control"/>
                </Col>
                <Col md={3} className="pt-2">
                  <label> End Date</label>
                  <input type="date" className="form-control"/>
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

export default Home;
