import React from 'react'


const Edit = () => {
    const onchange = (e) =>{
        e.preventDefault()
        console.log(e.target.files[0].name)
    }

    return (
        <div>
            <form onSubmit={onsubmit} >
                <div>
                    <div className="input-group mb-3">
                        <input type="file" className="form-control" id="inputGroupFile01" onChange={onchange} />
                    </div>
                    <input type="submit" value="upload" className="btn btn-primary mt4" />

                    <div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Edit
