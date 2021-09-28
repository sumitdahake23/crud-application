import React, { useState } from 'react'
import axios from 'axios'

const FileUpload = () => {
    const [file, setfile] = useState('');
    const [filename, setfilename] = useState("Upload");
    const [uploadedfile, setuploadedfile]=useState({})

    const onchange = (e) => {
        setfile(e.target.files[0])
        setfilename(e.target.files[0].name)
    }
    const onsubmit= async (e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('file',file);
        try{
            const res=await axios.post('http://localhost:5000/uploadfile',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'

                }})
                const {fileName, filePath}=res.data;
                setuploadedfile({fileName, filePath});
                console.log(uploadedfile)
        }catch(err){
            if(err.response.data === 500)
            {
                console.log("There is the problem with the Server");
            }
            else{
                console.log(err.response.data.msg);
            }
        }

    }

    return (
        <form onSubmit={onsubmit} >
            <div>
                <div className="input-group mb-3">
                    <input type="file" className="form-control" id="inputGroupFile01" onChange={onchange} />
                </div>
                <input type="submit" value="upload" className="btn btn-primary mt4" />

                <div>
                    <img src={uploadedfile.filePath} alt="" />
                </div>
            </div>
        </form>
    )
}

export default FileUpload
