import React, { useState, useEffect } from 'react'
import "./allad.css"
import axios from 'axios'


const Adminconsole = () => {
    // const [datafser, setdatafser] = useState()
    const [bts, setbt] = useState(0)
    const [btnprop, setbtnprop] = useState(false)
    const [btnprop1, setbtnprop1] = useState(false)

    const [sname, setsname] = useState()
    const [semploid, setsemploid] = useState()
    const [sdesig, setsdesig] = useState()
    const [saddress, setsaddress] = useState()
    const [smobile, setsmobile] = useState()
    const [sfilen, setsfilen] = useState()
    const [len, setlen] = useState()

    const getuser = async () => {
        const res = await axios.get('http://localhost:5000/user/')
        // setdatafser(res.data)
        // setdatafser(res.data[bts])
        setsname(res.data[bts].name)
        setsemploid(res.data[bts].emploid)
        setsaddress(res.data[bts].address)
        setsmobile(res.data[bts].mobile)
        setsdesig(res.data[bts].desig)
        setsfilen(res.data[bts].filename)



        console.log(res.data[bts])
        setlen(res.data.length)

    }

    useEffect(() => {
        getuser()
    }, [bts])

    const changedata = (e) => {

        e.preventDefault()
        if (bts !== len - 1) {
            getuser()
            setbt(bts + 1)
        }
        else {
            setbtnprop(true)
            setbtnprop1(false)

        }
    }
    const changedata1 = (e) => {
        e.preventDefault()
        if (bts !== 0) {
            getuser()
            setbt(bts - 1)
        }
        else {
            setbtnprop1(true)
            setbtnprop(false)
        }
    }
    console.log(len)
    console.log(bts)
    return (
        <div className="admin">
            <div className="row">
                <div className="col-2">
                    <button className="maall ma1" onClick={changedata1} disabled={btnprop1} > {"<=="}</button>
                </div>
                <div className="col-8">
                    <h6 className="head1">ADMIN CONSOLE</h6>

                    <div className="container colo"><br />
                        <h3 className="head2">EMPLOYEE DETAILS</h3>
                        <div className="set">

                            <div className="row">
                                <div className="col-4 ">
                                    <div className="imgdata">
                                        <img src={`./uploads/${sfilen}`} alt="" width="100%" height="250px" />
                                    </div>
                                </div>

                                <div className="col-8 ">

                                    <div className="row setdata">
                                        <div className="col-4"><h4>Name</h4></div>
                                        <div className="col-8">
                                            <div className="input-group mb-3">
                                                <input value={sname} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                            </div>
                                        </div>

                                    </div><br />
                                    <div className="row setdata">
                                        <div className="col-4"><h4>EmployeeID</h4></div>
                                        <div className="col-8">
                                            <div className="input-group mb-3">
                                                <input value={semploid} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="row setdata">
                                        <div className="col-4"><h4>Designation</h4></div>
                                        <div className="col-8">
                                            <div className="input-group mb-3">
                                                <div className="input-group mb-3">
                                                    <input value={sdesig} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                                </div>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="row setdata">
                                        <div className="col-4"><h4>Address</h4></div>
                                        <div className="col-8">
                                            <div className="input-group mb-3">
                                                <textarea value={saddress} class="form-control" aria-label="With textarea"></textarea>
                                            </div>
                                        </div>
                                    </div><br />
                                    <div className="row setdata">
                                        <div className="col-4"><h4>Mobile</h4></div>
                                        <div className="col-8">
                                            <div className="input-group mb-3">
                                                <input value={smobile} type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="col-2">
                    <button onClick={changedata} disabled={btnprop} className="ma maall"> {"==>"}</button>

                </div>
            </div>

        </div>
    )
}

export default Adminconsole
