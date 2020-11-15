import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import NotificationSystem from "react-notification-system";

import AdminNavbar from "components/Navbars/AdminNavbar";
import Footer from "components/Footer/Footer";
import Sidebar from "components/Sidebar/Sidebar";
import FixedPlugin from "components/FixedPlugin/FixedPlugin.jsx";

import { style } from "variables/Variables.jsx";

import routes from "routes.js";

import image from "assets/img/sidebar-3.jpg";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginStatus: false,
      _notificationSystem: null,
      image: image,
      color: "black",
      hasImage: true,
      fixedClasses: "dropdown"
    };
    // this.checkLogin();
  }
  
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/admin") {
        return (
          <Route
            path={prop.layout + prop.path}
            render={props => (
              <prop.component
                {...props}
                handleClick={this.handleNotificationClick}
              />
            )}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };

  getBrandText = path => {
    for (let i = 0; i < routes.length; i++) {
      if (
        this.props.location.pathname.indexOf(
          routes[i].layout + routes[i].path
        ) !== -1
      ) {
        return routes[i].name;
      }
    }
    return "Brand";
  };
  
  handleImageClick = image => {
    this.setState({ image: image });
  };

  handleColorClick = color => {
    this.setState({ color: color });
  };

  handleHasImage = hasImage => {
    this.setState({ hasImage: hasImage });
  };

  handleFixedClick = () => {
    if (this.state.fixedClasses === "dropdown") {
      this.setState({ fixedClasses: "dropdown show-dropdown open" });
    } else {
      this.setState({ fixedClasses: "dropdown" });
    }
  };

  componentDidMount() {
    this.checkLogin();
  }

  checkLogin = () => {
    const status = localStorage.getItem('user');

    if (status) {
      this.setState({ loginStatus: true });
    }
    else {
      this.setState({ loginStatus: false });
    }

    console.log("loginStatus >>> ", this.state.loginStatus);
  }

  render() {
    return (
      <div className="wrapper">
        
        {
          this.state.loginStatus ?
          <div>
            <Sidebar {...this.props} routes={routes} image={this.state.image}
              color={this.state.color}
              hasImage={this.state.hasImage}
            />

            <div id="main-panel" className="main-panel" ref="mainPanel">
              <AdminNavbar
                {...this.props}
                brandText={this.getBrandText(this.props.location.pathname)}
              />

              <Switch>{this.getRoutes(routes)}</Switch>

              <Footer />

              <FixedPlugin
                handleImageClick={this.handleImageClick}
                handleColorClick={this.handleColorClick}
                handleHasImage={this.handleHasImage}
                bgColor={this.state["color"]}
                bgImage={this.state["image"]}
                mini={this.state["mini"]}
                handleFixedClick={this.handleFixedClick}
                fixedClasses={this.state.fixedClasses}
              />
            </div>
          </div>
          :
          <Switch>{this.getRoutes(routes)}</Switch>
        }
        
      </div>
    );
  }
}

export default Admin;
