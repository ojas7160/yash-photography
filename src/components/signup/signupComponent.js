import React, { useState } from "react";
import "./signupComponent.css";
import * as userService from '../../services/users/userService';

const Signup = (props) => {
  const [profile, changeProfile] = useState({name: '', role: '', gender: '', contact: '', address: '', password: '', confirmPassword: '', pincode: '', email: ''})

  const save = (e) => {
    console.log(profile)
    userService.default.signup(profile)
    .then(res => {
      console.log(res)
    })
    e.preventDefault();
  }

  return (
    <div className="page-wrapper bg-gra-01 p-t-180 p-b-100 font-poppins">
      <div className="wrapper wrapper--w780">
        <div className="card card-3 ">
          <div className="card-heading"></div>
          <div className="card-body">
            <h2 className="title">Registration Info</h2>
            <form method="POST">
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="text"
                  placeholder="Name"
                  value={profile.name}
                  onChange={($event) => changeProfile({...profile, name: $event.target.value})}
                  name="name"
                />
              </div>
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search" style={{width: '100%'}}>
                  <select className="form-control" name="role" onChange={($event) => changeProfile({...profile, role: $event.target.value})}>
                    <option disabled="disabled" value="">
                      Role
                    </option>
                    <option value="admin">Admin</option>
                    <option value="customer">Customer</option>
                    {/* <option>Other</option> */}
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="input-group">
                <textarea
                  className="input--style-3 js-datepicker"
                  row="3"
                  placeholder="Enter Address"
                  name="address"
                  value={profile.address}
                  onChange={($event) => changeProfile({...profile, address: $event.target.value})}
                ></textarea>
                <i className="zmdi zmdi-calendar-note input-icon js-btn-calendar"></i>
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="number"
                  placeholder="Pincode"
                  name="pincode"
                  value={profile.pincode}
                  onChange={($event) => changeProfile({...profile, pincode: $event.target.value})}
                />
              </div>
              <div className="input-group">
                <div className="rs-select2 js-select-simple select--no-search" style={{width: '100%'}}>
                  <select className="form-control" name="gender" onChange={($event) => changeProfile({...profile, gender: $event.target.value})}>
                    <option disabled="disabled" value="">
                      Gender
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Other</option>
                  </select>
                  <div className="select-dropdown"></div>
                </div>
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="email"
                  placeholder="Email"
                  name="email"
                  value={profile.email}
                  onChange={($event) => changeProfile({...profile, email: $event.target.value})}
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="text"
                  placeholder="Phone"
                  name="phone"
                  value={profile.contact}
                  onChange={($event) => changeProfile({...profile, contact: $event.target.value})}
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={profile.password}
                  onChange={($event) => changeProfile({...profile, password: $event.target.value})}
                />
              </div>
              <div className="input-group">
                <input
                  className="input--style-3"
                  type="password"
                  placeholder="Confirm Password"
                  name="confirm_password"
                  value={profile.confirmPassword}
                  onChange={($event) => changeProfile({...profile, confirmPassword: $event.target.value})}
                />
              </div>
              <div className="p-t-10">
                <button className="btn btn--pill btn--green" type="submit" onClick={($event) => save($event)}>
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;


  /* <!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags-->
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="Colorlib Templates">
    <meta name="author" content="Colorlib">
    <meta name="keywords" content="Colorlib Templates">

    <!-- Title Page-->
    <title>Au Register Forms by Colorlib</title>

    <!-- Icons font CSS-->
    <link href="vendor/mdi-font/css/material-design-iconic-font.min.css" rel="stylesheet" media="all">
    <link href="vendor/font-awesome-4.7/css/font-awesome.min.css" rel="stylesheet" media="all">
    <!-- Font special for pages-->
    <link href="https://fonts.googleapis.com/css?family=Poppins:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i" rel="stylesheet">

    <!-- Vendor CSS-->
    <link href="vendor/select2/select2.min.css" rel="stylesheet" media="all">
    <link href="vendor/datepicker/daterangepicker.css" rel="stylesheet" media="all">

    <!-- Main CSS-->
    <link href="css/main.css" rel="stylesheet" media="all">
</head>

<body>
    

    <!-- Jquery JS-->
    <script src="vendor/jquery/jquery.min.js"></script>
    <!-- Vendor JS-->
    <script src="vendor/select2/select2.min.js"></script>
    <script src="vendor/datepicker/moment.min.js"></script>
    <script src="vendor/datepicker/daterangepicker.js"></script>

    <!-- Main JS-->
    <script src="js/global.js"></script>

</body><!-- This templates was made by Colorlib (https://colorlib.com) -->

</html>
<!-- end document--></div> */

