import React, {useState, useEffect} from 'react'
import axios from 'axios';
import "./Getdata.css";
// import { useHistory } from 'react-router';
// import {
//   Collapse,
//   Navbar,
//   NavbarToggler,
//   NavbarBrand,
//   Nav,
//   NavItem,
//   NavLink,
// } from "reactstrap";




const Update = ({upid}) => {

    // const [d, dset] = useState([])
 
    // const [collapsed, setCollapsed] = useState(true);

    // const toggleNavbar = () => setCollapsed(!collapsed);
    const [fname, setfname]=useState()
    const [lname, setlname]=useState()
    const [emai, setemai]=useState()
    const [pass, setpass]=useState()
    const [Avatar, setAvatar]=useState()
    

 

  

    const Datafromserverid = () => {
        const id=upid
        axios.get(`http://localhost:5000/user/${id}`)
            .then(res => {
                const getdata = res.data
                setfname(getdata.first_name)
                setlname(getdata.last_name)
                setemai(getdata.email)
                setpass(getdata.password)
                setAvatar(getdata.avatar)
               
            })
           
            
    }
    useEffect(() => {
        Datafromserverid()
       

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[upid])

    const Updated = async() =>{
      const id=upid
      let res=await axios.put(`http://localhost:5000/user/${id}`,{
        email: emai,
        first_name: fname,
        last_name: lname,
        avatar: Avatar,
        password: pass
      })
      console.log(res);
      
      setfname(" ")
      setlname(" ")
      setemai(" ")
      setpass(" ")
      setAvatar(" ")
      alert("DATA UPDATED SUCCEFULLY")
    }




    return (
        <div>
            <div className="discard">
                <div className="container " >
                <div className="container ">
                    <center>
                        <h1 style={{backgroundColor:'red' ,width:'400px',border:'3px solid black' ,borderRadius:'5px'}} >UPDATE USER</h1>
                        <div className="col-6">
                            <form className="container">
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        value={fname}
                                        onChange={(e)=>setfname(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        value={lname}
                                        onChange={(e)=>setlname(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Email                                     </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        value={emai}
                                        onChange={(e)=>setemai(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        PassWord
                                    </label>
                                    <input
                                        type="pass"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        value={pass}
                                        onChange={(e)=>setpass(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="exampleInputEmail1" className="form-label">
                                        Avatar
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        aria-describedby="emailHelp"
                                        value={Avatar}
                                        onChange={(e)=>setAvatar(e.target.value)}
                                    />
                                </div>

                                <button
                                    type="button"
                                    onClick={Updated}
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
            
            </div>
        </div>
    )
}

export default Update

