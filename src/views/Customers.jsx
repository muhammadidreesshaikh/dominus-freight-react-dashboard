import React, { Component } from "react";
import { Grid, Row, Col, Table } from "react-bootstrap";

const thArray = ["ID", "Company Name", "Company Email", "Company Phone", "Account Type"];

const tdArray = [
  ["1", "DHL Co", "dhl.co@email.com", "+923325654785", "Shipper"],
  ["1", "DHL Co", "dhl.co@email.com", "+923325654785", "Shipper"],
  ["1", "DHL Co", "dhl.co@email.com", "+923325654785", "Shipper"],
  ["1", "DHL Co", "dhl.co@email.com", "+923325654785", "Shipper"],
  ["1", "DHL Co", "dhl.co@email.com", "+923325654785", "Shipper"],
  ["1", "DHL Co", "dhl.co@email.com", "+923325654785", "Shipper"],
];

class Loads extends Component {
  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>

            <Col md={12} className="pb-5">
              <Row>
                <Col md={6} className="pt-1">
                  <input type="search" className="form-control" placeholder="search any thing .." />
                </Col>
                <Col md={6} className="text-right">
                    
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
