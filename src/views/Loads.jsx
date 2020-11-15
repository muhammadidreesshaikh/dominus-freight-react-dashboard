import React, { Component } from "react";
import firebase from '../core/firebase/firebase';
import { Link } from "react-router-dom";
import { Grid, Row, Col, Table } from "react-bootstrap";
import FilterResults from 'react-filter-search';

class Loads extends Component {

  constructor(props) {
    super(props);

    this.state = {
      loads: [],
      itemsToUse: [],
      search: '',
      typeFilter: ''
    }
  }

  componentDidMount() {
    this.getLoads();
  }

  getLoads = () => {
    let tempLloads = [];
    const loadRef = firebase.database().ref('loads');

    loadRef.on('value', (snapshot) => {
      const loads = snapshot.val();

      for (let id in loads) {
        tempLloads.push({ id, ...loads[id] });
      }
      this.setState({ loads: tempLloads });
      this.setState({ itemsToUse: tempLloads });

      console.log(this.state.loads);
    });
  };

  searchChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.name]: event.target.value });
  }

  filterByType = (value) => {
    let filtered = [];

    this.setState({ typeFilter: value });
    console.log(this.state.typeFilter);

    if (value == '' || value == 'all') {
      this.setState({ itemsToUse: this.state.loads });
    }
    if (value == 'past') {
      filtered = this.state.itemsToUse.filter(item => item.load_type == 'past');
      this.setState({ itemsToUse: filtered });
    }
    if (value == 'active') {
      filtered = this.state.itemsToUse.filter(item => item.load_type == 'active');
      this.setState({ itemsToUse: filtered });
    }
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={12} className="pb-5">
              <Row>
                <Col md={3} className="pt-1">
                  <label>Search</label>
                  <input type="search" name="search" className="form-control" placeholder="search any thing .." onChange={(e) => {this.searchChange(e)} } />
                </Col>
                <Col md={2} className="pt-2">
                  <label> Start Date</label>
                  <input type="date" className="form-control"/>
                </Col>
                <Col md={2} className="pt-2">
                  <label> End Date</label>
                  <input type="date" className="form-control"/>
                </Col>
                <Col md={5} className="text-right">
                    <p>Filter By Type</p>
                    <a onClick={() => { this.filterByType('all') }} className="btn btn-primary btn-fill mr-4">All Loads</a>
                    <a onClick={() => { this.filterByType('active') }} className="btn btn-success btn-fill">Active Loads</a>
                    <a onClick={() => { this.filterByType('upcoming') }} className="btn btn-warning mx-4 btn-fill">Upcoming Loads</a>
                    <a onClick={() => { this.filterByType('past') }} className="btn btn-info btn-fill">Past Loads</a>
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
                      <th>Carrier</th>
                      <th>Driver</th>
                      <th>Pickup Location</th>
                      <th>Delivery Location</th>
                      <th>Status</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    <FilterResults
                      value={this.state.search}
                      data={this.state.itemsToUse}
                      renderResults={results => (
                        results.map((item, key) => (
                          <tr key={key} >
                            <td>{item.id}</td>
                            <td className="text-capitalize">{JSON.parse(item.shipper).company_name}</td>
                            <td className="text-capitalize">{JSON.parse(item.carrier).company_name}</td>
                            <td className="text-capitalize">{JSON.parse(item.driver).company_name}</td>
                            <td className="text-capitalize">{item.pickup_location}</td>
                            <td className="text-capitalize">{item.delivery_location}</td>
                            <td className="text-capitalize">{item.status}</td>
                            <td>
                              <Link className="mr-3 btn btn-primary btn-fill px-3 py-2" to={{ pathname: "/admin/load-details", data: item }}>
                                View
                              </Link>
                              <Link className="btn btn-success btn-fill px-3 py-2" to={{ pathname: "/admin/load-edit", data: item }}>
                                Edit
                              </Link>
                            </td>
                          </tr>
                        ))
                      )}
                    />
                  </tbody>
                </Table>
                :
                <Grid fluid>
                  <Row>
                    <Col md={12}>
                      <p>Loading ...</p>
                    </Col>
                  </Row>
                </Grid>
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