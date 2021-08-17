import React, { useRef, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./Getdata.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Postuser = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);
 
  const history = useHistory();
  const email = useRef();
  const first_name = useRef();
  const last_name = useRef();
  const Avatar = useRef();
  const password = useRef();
  const add = () => {
    // const data=[
    //   {email:email.current.value,
    //   first_name:first_name.current.value,
    //   last_name:last_name.current.value,
    //   Avatar:Avatar.current.value
    //    }]
    //  axios.post("http://localhost:5000/user/createuser", data)
    //  .then((response) => console.log("succcess"))_
    // const ema=email.current.value
    // const fname=first_name.current.value
    // const lname=last_name.current.value
    // const av=Avatar.current.value
    // const info={ema,fname,lname,av}

    // fetch('http://localhost:5000/user/createuser', {
    //   method :'POST',
    //   headers:{
    //     'Content-Type':'application/json'
    //   },
    //     body:JSON.stringify(info)

    // })
    //  .then((res)=>console.log("success",res))
    const createuser = async () => {
      let res = await axios.post("http://localhost:5000/user/createuser", {
        email: email.current.value,
        first_name: first_name.current.value,
        last_name: last_name.current.value,
        avatar: Avatar.current.value,
        password: password.current.value,
      });
      console.log(res);
      history.push("/login");
    };
    createuser();
  };
  const login = () => {
    history.push("/login");
  };

  return (
    <>
      <div className="discard">
        <div className="discard">
          <Navbar className="cc" light>
            <NavbarBrand href="/" className="mr-auto">
              CRUD_USER
            </NavbarBrand>
            <NavbarToggler onClick={toggleNavbar} className="mr-2" />
            <Collapse isOpen={!collapsed} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="cc" onClick={login}>
                    LOGIN
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
        <div className="container ">
          <center>
            <h1>Register</h1>
            <div className="col-6">
              <form className="container">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    ref={email}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    ref={password}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    first_name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    ref={first_name}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    last_name
                  </label>
                  <input type="text" className="form-control" ref={last_name} />
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Avatar
                  </label>
                  <input type="text" className="form-control" ref={Avatar} />
                </div>
                
                <button
                  type="button"
                  onClick={add}
                  className="btn btn-block btn-primary"
                >
                  Submit
                </button>

                <div>
                  <br />
                  <br />
                  {/* <button onClick={login}> Login</button> */}
                </div>
              </form>
            </div>
          </center>
        </div>
      </div>
    </>
  );
};

export default Postuser;
