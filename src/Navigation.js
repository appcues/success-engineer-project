import React from "react";
import { Link } from "react-router-dom";


const Navigation = () => (
  <div>
    <Link to="/">Home</Link>
    {" - "}
    <Link to="/about">About</Link>
    {" - "}
    <Link to="/contact">Contact Us</Link>
    {" - "}
    <Link to="/account">Account</Link>
    {" - "}
    <Link to="/account/acct123">Account 123</Link>
    {" - "}
    <Link to="/account/acct123/accountsettings">Account 123 Settings</Link>
  </div>
);





export default Navigation;
