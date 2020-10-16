
import Home from "views/Home.jsx";
import Loads from "views/Loads.jsx";
import LoadDetails from "views/LoadDetails";
import LoadSetup from "views/LoadSetup";
import CustomerSetup from "views/CustomerSetup";
import Customers from "views/Customers";
import Login from "views/Login";
import Signup from "views/Signup";

import Dashboard from "views/Dashboard.jsx";
import UserProfile from "views/UserProfile.jsx";
import TableList from "views/TableList.jsx";
import Typography from "views/Typography.jsx";
import Icons from "views/Icons.jsx";
import Maps from "views/Maps.jsx";
import Notifications from "views/Notifications.jsx";
import Upgrade from "views/Upgrade.jsx";

const dashboardRoutes = [
  // {
  //   path: "/dashboard",
  //   name: "Dashboard",
  //   icon: "pe-7s-graph",
  //   component: Dashboard,
  //   layout: "/admin"
  // },
  {
    path: "/home",
    name: "Home",
    icon: "pe-7s-home",
    component: Home,
    layout: "/admin",
    display: true
  },
  {
    path: "/loads",
    name: "Loads",
    icon: "pe-7s-server",
    component: Loads,
    layout: "/admin",
    display: true
  },
  {
    path: "/load-details",
    name: "Load Details",
    icon: "pe-7s-note2",
    component: LoadDetails,
    layout: "/admin",
    display: false
  },
  {
    path: "/load-setup",
    name: "Load Setup",
    icon: "pe-7s-box2",
    component: LoadSetup,
    layout: "/admin",
    display: true
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "pe-7s-server",
    component: Customers,
    layout: "/admin",
    display: true
  },
  {
    path: "/customer-setup",
    name: "Customer Setup",
    icon: "pe-7s-user",
    component: CustomerSetup,
    layout: "/admin",
    display: true
  },
  {
    path: "/login",
    name: "Login",
    icon: "pe-7s-user",
    component: Login,
    layout: "/admin",
    display: false
  },
  {
    path: "/signup",
    name: "Signup",
    icon: "pe-7s-user",
    component: Signup,
    layout: "/admin",
    display: false
  },
  // {
  //   path: "/user",
  //   name: "User Profile",
  //   icon: "pe-7s-user",
  //   component: UserProfile,
  //   layout: "/admin"
  // },
  // {
  //   path: "/table",
  //   name: "Table List",
  //   icon: "pe-7s-note2",
  //   component: TableList,
  //   layout: "/admin"
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
