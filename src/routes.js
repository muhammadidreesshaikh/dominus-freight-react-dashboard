
import Dashboard from "views/Dashboard.jsx";
import Home from "views/Home.jsx";
import Loads from "views/Loads.jsx";
import LoadDetails from "views/LoadDetails";
import LoadSetup from "views/LoadSetup";
import CustomerSetup from "views/CustomerSetup";
import Customers from "views/Customers";
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
    layout: "/admin"
  },
  {
    path: "/loads",
    name: "Loads",
    icon: "pe-7s-server",
    component: Loads,
    layout: "/admin"
  },
  {
    path: "/load-details",
    name: "Load Details",
    icon: "pe-7s-note2",
    component: LoadDetails,
    layout: "/admin"
  },
  {
    path: "/load-setup",
    name: "Load Setup",
    icon: "pe-7s-box2",
    component: LoadSetup,
    layout: "/admin"
  },
  {
    path: "/customers",
    name: "Customers",
    icon: "pe-7s-server",
    component: Customers,
    layout: "/admin"
  },
  {
    path: "/customer-setup",
    name: "Customer Setup",
    icon: "pe-7s-user",
    component: CustomerSetup,
    layout: "/admin"
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
