import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useHistory } from 'react-router-dom'
import Update from './Update';
import "./Getdata.css";
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Getdata = () => {

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);

    const history = useHistory()
    const logout = () => {
        history.push('/login');

    }
    const Sbar = () => {
        history.push('/Searchbar');

    }

    const [d, dset] = useState([])
    const [upid, setupid] = useState([])
    // const [di, setdi] = useState("")
    useEffect(() => {
        // axios.get('http://localhost:5000/user/')
        //     .then(res => {
        //         const getdata = res.data
        //         // getdata.map(())
        //         console.log(getdata)
        //         const ID = getdata.filter((id) => id);
        //         // ID.map((data1)=>console.log(data1.email))
        //         console.log(ID.map((data1) => data1.email))
        //         console.log(ID.map((data1) => data1.first_name))
        //         console.log(ID.map((data1) => data1.last_name))
        //         console.log(ID.map((data1) => data1.avatar))
        //         console.log(ID.map((data1) => data1.password))

        //         // console.log(bdata)
        //         dset(ID)
        //     })
        Datafromserver()
        Updatedata()

    }, [])

    const Datafromserver = () => {
        axios.get('http://localhost:5000/user/')
            .then(res => {
                const getdata = res.data
                // getdata.map(())
                console.log(getdata)
                const ID = getdata.filter((id) => id);
                // ID.map((data1)=>console.log(data1.email))
                console.log(ID.map((data1) => data1.email))
                console.log(ID.map((data1) => data1.first_name))
                console.log(ID.map((data1) => data1.last_name))
                console.log(ID.map((data1) => data1.avatar))
                console.log(ID.map((data1) => data1.password))

                // console.log(bdata)
                dset(ID)
            })
    }



    const deletedata = (id) => {
        // setdi(id)
        axios.delete(`http://localhost:5000/user/remove/${id}`)
            .then((res) => Datafromserver())
            .catch((err) => console.log(err))
    }
    const Updatedata = (id) =>{
        console.log(id)
        setupid(id)

    }
    const succcess = () => {
        history.push('/postuser')
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
                            <NavItem>
                            <NavLink className="cc" onClick={Sbar}>Search</NavLink>
                            </NavItem>
                            <NavItem>
                                {/* <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink> */}
                                <NavLink className="cc" onClick={logout}>logOut</NavLink>

                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>



            {d.map(obj =>
                <div className="container " key={obj._id}>

                    {/* <img src={obj.avatar} alt="sorry"></img> */}
                    {/* <h1>{obj.first_name} {obj.last_name}</h1>
                    <div >{obj.email}</div> */}
                    {/* <button onClick={() => { deletedata(obj._id) }} >Delete</button> */}
                    <div className="row-4 ">
                        <center>
                            <div className="card cardcss col-4" >
                                <button onClick={() => { deletedata(obj._id) }} type="button" className="btn-close bt" aria-label="Close"></button>
                                <img src={obj.avatar}  style={{height:"200px"}} className="card-img-top" alt="sorry" />
                                <div class="card-body">
                                    <h4 className="card-title">{obj.first_name} {obj.last_name}</h4>
                                    <h6 className="card-text">{obj.email}</h6>

                                </div>
                                <button onClick={() => { Updatedata(obj._id) }} type="button" >UPDATE</button>

                                {/* <button onClick={() => { deletedata(obj._id) }} >Delete</button> */}
                            </div>
                        </center>
                    </div>
                </div>)}
            {/* <button onClick={logout}> Logout</button><br /><br /> */}


                <br/><br /><br />
            {(!upid)?"":<Update upid={upid}/>}






        </div>

    )
}

export default Getdata
