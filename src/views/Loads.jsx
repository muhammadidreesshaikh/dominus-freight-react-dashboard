import React, { Component } from "react";
import firebase from '../core/firebase/firebase';

import { Grid, Row, Col, Table } from "react-bootstrap";

class Loads extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loads: []
    }
  }

  componentDidMount() {
    this.getLoads();
  }

  getLoads = () => {
    let tempLloads = [];
    const loadRef = firebase.ref('loads');

    loadRef.on('value', (snapshot) => {
      const loads = snapshot.val();

      for (let id in loads) {
        tempLloads.push({ id, ...loads[id] });
      }
      this.setState({ loads: tempLloads });

      // console.log(this.state.loads);
    });

  };

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
                    <button type="button" className="btn btn-success btn-fill">Active Loads</button>
                    <button type="button" className="btn btn-primary mx-4 btn-fill">Upcoming Loads</button>
                    <button type="button" className="btn btn-info btn-fill">Past Loads</button>
                </Col>
              </Row>
            </Col>

            <Col md={12}>
              {
                this.state.loads.length > 0 ?
                <Table striped hover>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Shipper</th>
                      <th>Trucking Company</th>
                      <th>Driver</th>
                      <th>Pickup Location</th>
                      <th>Delivery Location</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.state.loads.map((item, key) => {
                        return (
                          <tr key={key}>
                            <td>{item.id}</td>
                            <td>{item.trucking_company}</td>
                            <td>{item.trucking_company}</td>
                            <td>{item.driver}</td>
                            <td>{item.pickup_location}</td>
                            <td>{item.delivery_location}</td>
                          </tr>
                        )
                    })
                    }
                  </tbody>
                </Table>
                :
                null
              }
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Loads;


// {this.state.loads.map((value, key) => {
//   return <td key={key}>{value.id}</td>;
// })}