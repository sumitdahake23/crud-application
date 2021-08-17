import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'
import "./Getdata.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'


const Loginpage = ({ setLoginUser }) => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    const succcess = () => {
        history.push('/postuser')
    }
    // const [d,setd]=useState([])
    const history = useHistory()
    const [user, setUser] = useState({
        email: "",
        password: ""

    })
    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })

    }
    const login = () => {
        axios.post("http://localhost:5000/user/login", user)

            .then(res => {
                alert(res.data.message)
                setLoginUser(res.data.user)
                history.push("/")
                // setd(res.data.user)
                // if(res.data.message==="Succefull"){
                //     history.push('/success');
                // }
                // console.log(res.data.message)
                // history.push('/pagedata');
            })
    }
    return (
        <div className="discard">
            <div className="discard">
                <Navbar className="cc" light>
                    <NavbarBrand href="/" className="mr-auto">CRUD_USER</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="cc" onClick={succcess}>SignUp</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
            <div className="container ">
                <center>
                    <div className="col-4">
                        {console.log(user)}
                        <h1>Login</h1>
                        <div className="row">
                            <input type="text" className="form-control" name="email" value={user.email} placeholder="Enter Your Email" onChange={handleChange} />
                        </div><br />
                        <div className="row">
                            <input type="password" className="form-control" name="password" value={user.password} placeholder="Enter Your Password" onChange={handleChange} />
                        </div><br />
                        <div className="row">
                            <input type="submit" placeholder="LOGIN" className="form-control" onClick={login} />
                        </div>

                        <br /><br />
                        {/* <button onClick={() => history.push("/postuser")}>Register</button> */}
                        <br />

                    </div>
                  
                </center>
            </div>
        </div>
    )
}

export default Loginpage
