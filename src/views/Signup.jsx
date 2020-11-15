import React, { Component } from "react";
import firebase from '../core/firebase/firebase';

import {
  Grid,
  Row,
  Col,
} from "react-bootstrap";

import { Card } from "components/Card/Card.jsx";

class Signup extends Component {

    constructor(props) {
        super(props);
    
        this.state = {
          email: '',
          password: '',
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }

    signup = async() => {
        console.log(this.state);

        await firebase.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(res => {
            console.log(res);
            if (res.additionalUserInfo.isNewUser == true) alert('Signup Suucessfull.');
            else alert('Signup Failed!');
        })
        .catch(error => {
            console.log(error);
        })
    }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col md={4}></Col>
            <Col md={4}>
              <Card
                title="Signup"
                content={
                    <form>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label>Email</label>
                                <input type="email" name="email"  className="form-control" value={this.state.email} onChange={(event) => this.handleChange(event)}></input>
                            </div>

                            <div className="form-group col-md-12">
                                <label>Password</label>
                                <input type="password" name="password"  className="form-control" value={this.state.password} onChange={(event) => this.handleChange(event)}></input>
                            </div>
                        </div>

                        <div className="form-row px-4">
                          {/* <a className="btn btn-success btn-fill mr-3" onClick={ () => {this.signup()} }>Signup</a> */}
                          <a className="btn btn-success btn-fill mr-3">Signup</a>
                        </div>
                  </form>
                }
              />
            </Col>
            <Col md={4}></Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Signup;
