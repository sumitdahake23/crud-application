import React, { useRef, useState, useEffect } from 'react'
import "./all.css"
import axios from 'axios'

const Userconsole = () => {
    const name = useRef()
    const emploId = useRef()
    const [desig, setdesig] = useState()
    const address = useRef()
    const mobile = useRef()
    const [filen, setfilen] = useState()

    const filechange = (e) => {
        console.log(e.target.files[0])
        setfilen(e.target.files[0])
    }
    const filesubmit = async () => {
        if (filen.type !== "image/jpeg") {
            alert("please add valid file")
        }
        else {
            const formData = new FormData();
            formData.append('file', filen);
            console.log(filen)
            try {
                const res = await axios.post('http://localhost:5000/uploadfile', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'

                    }
                })
                const { fileName, filePath } = res.data;
                console.log({ fileName, filePath });
            } catch (err) {
                if (err.response.data === 500) {
                    console.log("There is the problem with the Server");
                }
                else {
                    console.log(err.response.data.msg);
                }
            }
        }
    }
    const Submitdata = () => {
        // e.preventDefault()
        console.log(name.current.value)
        console.log(emploId.current.value)
        console.log(address.current.value)
        console.log(mobile.current.value)
        console.log(desig)
        const createuser = async () => {
            const res = await axios.post("http://localhost:5000/user/cre", {
                name: name.current.value,
                emploid: emploId.current.value,
                desig: desig,
                address: address.current.value,
                mobile: mobile.current.value,
                filename: filen.name
            });
            console.log(res)
            alert("Data Submited")

        }
        if (name.current.value === "" || emploId.current.value === "" || desig === "" || address.current.value === "" || mobile.current.value === "") {
            alert("Please Fill all the fields")
        }
        else {
            createuser()
            filesubmit()

        }

    }

    useEffect(() => {

    }, [])











    return (
        <div className="user">
            <div className="container">
                <h5 className="head1">USER CONSOLE</h5>
                <h1 className="head2">EMPLOYEE DETAILS</h1>
                <div className="set">
                    <div className="row">
                        <div className="col-4 ">
                            <div className="imgdata">
                                <img src="https://th.bing.com/th/id/OIP.bbXsNwMXrGKMvEjwoz6j2QHaHa?w=187&h=187&c=7&r=0&o=5&pid=1.7" alt="" width="100%" height="250px" />
                                <center><h5>Employee Photo</h5></center>
                                <input type="file" onChange={filechange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required={true} />


                            </div>
                        </div>

                        <div className="col-8 ">

                            <div className="row setdata">
                                <div className="col-3"><h4>Name</h4></div>
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <input ref={name} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required={true} />
                                    </div>
                                </div>

                            </div><br />
                            <div className="row setdata">
                                <div className="col-3"><h4>EmployeeID</h4></div>
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <input ref={emploId} type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required={true} />
                                    </div>
                                </div>
                            </div><br />
                            <div className="row setdata">
                                <div className="col-3"><h4>Designation</h4></div>
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <select onChange={(e) => setdesig(e.target.value)} className="form-select" aria-label="Default select example" required={true}>
                                            <option selected>Designation</option>
                                            <option value="HR">HR</option>
                                            <option value="Manager">Manager</option>
                                            <option value="Accountant">Accountant</option>
                                        </select>
                                    </div>
                                </div>
                            </div><br />
                            <div className="row setdata">
                                <div className="col-3"><h4>Address</h4></div>
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <textarea ref={address} className="form-control" aria-label="With textarea" required={true}></textarea>
                                    </div>
                                </div>
                            </div><br />
                            <div className="row setdata">
                                <div className="col-3"><h4>Mobile</h4></div>
                                <div className="col-8">
                                    <div className="input-group mb-3">
                                        <input ref={mobile} type="number" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" required={true} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <center>
                    <button onClick={Submitdata} className="btn btn-outline-secondary bt" type="button" id="inputGroupFileAddon04">Button</button>
                </center><br /><br />
            </div>
        </div>
    )
}

export default Userconsole
