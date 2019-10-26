import React, { Component } from 'react';
import SignIn from './components/SignIn/SignIn';
import Register from './components/Register/Register'
//import RoutesDropDown from './components/RoutesDropDown/RoutesDropDown';
import './App.css';
/*import PassengerDashboard from "./components/Dashboard/Passenger/PassengerDashboard";
import DriverDashboard from "./components/Dashboard/Driver/DriverDashboard";
import Navbar from "./components/Navbar/Navbar"
import CreateRoute from "./components/CreateRoute/CreateRoute"
import EditRiderAccount from "./components/EditAccount/Passenger/EditRiderAccount"
import EditDriverAccount from "./components/EditAccount/Driver/EditDriverAccount";
import SigninNavbar from "./components/SigninNavbar/SigninNavbar"
import AdminDashboard from "./components/Dashboard/Admin/AdminDashboard";
import AddStop from "./components/AddStop/AddStop";
import AddVan from "./components/AddVan/AddVan";
import ForgotPassword from "./components/ForgotPassword/ForgotPassword";
import ChangePassword from "./components/ChangePassword/ChangePassword";
import DeleteAccount from "./components/DeleteAccount/DeleteAccount"; */



class App extends Component {

  constructor(props){
    super(props);

    const u = JSON.parse(sessionStorage.getItem("user"))

    if(u === null){
      this.state = {
        input: '',
        route: 'signup',
        isSignedIn: false,


        user: {
          id:  '',
          name: '',
          email: '',
          joined: '',
          type:  '',

          balance: '$0.00',
          routename: ''
        }
      }}

    else {
      this.state = {
        input: '',
        route: JSON.parse(sessionStorage.getItem("pageroute")) || 'signin',
        isSignedIn: JSON.parse(sessionStorage.getItem("loggedin")) || false,


        user: {
          id: u.id || '',
          name: u.name || '',
          email: u.email || '',
          joined: '',
          type: u.type || '',
          balance: u.balance || '$0.00',
          routename: u.routename || ''
        }

      }
    }


    console.log("conctructor called: ",this.state)



  }

  reLoadUser = (data) =>{
    if (data != null){
      this.setState({user:  {
          id: data.id,
          name: data.name,
          email: data.email,
          balance: data.balance,
          joined: data.joined,
          type: data.type,
          routename: data.routename,
        }});

      console.log("reload happened")

    }

  }


  render() {
    const {isSignedIn, route} = this.state;
    let component = null;
    switch(route) {

      case 'signin'  :
        component =
            <div>
              <SignIn loadUser={this.loadUser} onRouteChange={this.onRouteChange}/>
            </div>;
        break;

      case 'signup':
        component =
            <div>
              <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange}  />
            </div>
        break;

      default:


    }



    return (
        <div className="App">
          {component}
        </div>
    );
  }
}

export default App;
