import axios from 'axios'
import React, { useRef, useState } from 'react'
import { useHistory } from 'react-router-dom'

const Searchbar = () => {
    const id = useRef()
    const [d, setd] = useState(" ")
    // const [user, setuser] =useState("")
    // const [ser, setser] = useState([])

    // const getdata = () => {
    // console.log(d.current.value)
    //  setdataemail(d.current.value)
    // axios.get(`http://localhost:5000/user/:email`)
    // .then((res)=>{console.log(res.data)

    //     // console.log(user)
    // })


    // const getuser = async () => {
    //     let res = await axios.get(`http://localhost:5000/user/${id.current.value}`, {
    //         //   email: email.current.value,
    //     });
    //     const g_et = res.data
    //     const ID = g_et.filter((id) => id)

    //     setser(ID)
    // };
    // getuser()
    // }
    const history = useHistory()
    const getuser = () => {
        // axios.get('http://localhost:5000/user/')
        axios.get(`http://localhost:5000/user/${id.current.value}`)
            .then(res => {
                const getdata = res.data
                // getdata.map(())
                setd(getdata)



                // console.log(bdata)
                // setser(getdata)
            })
    }
    const getback = () => {
        history.push("/")
    }
    return (
        <div>
            <input type="email" ref={id} />
            <input type="submit" onClick={getuser} />
            <div className="container " key={d._id}>
                <div className="row-4 ">
                    <center>
                        <div className="card cardcss col-4" >
                            <img src={d.avatar} style={{ height: "200px" }} className="card-img-top" alt="sorry" />
                            <div class="card-body">
                                <h4 className="card-title">{d.first_name} {d.last_name}</h4>
                                <h6 className="card-text">{d.email}</h6>

                            </div>
                        </div>
                    </center>
                </div>
            </div>        <button onClick={getback} >BACK</button>
        </div>
    )
}

export default Searchbar
