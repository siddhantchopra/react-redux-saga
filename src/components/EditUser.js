import React from 'react'
import { Link } from 'react-router-dom'

export const EditUser = (props) => {
    let local = localStorage.getItem('user')
    local = JSON.parse(local)
    return (
        <><Link to={"/dashboard/"+local.name}>Back</Link>
            <form>
                <label htmlFor="exampleInputEmail1">Profile Image</label>
                    <div className="card" style={{ "width": "10rem" }} >
                    <span className={local.status}></span>
                    <img className="card-img-top" src={local.image} alt={local.status} />
                    </div>
                   
              
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Full Name</label>
                    <input type="text" value={local.fullName} class="form-control" id="exampleInputEmail1" placeholder="Enter Fullname" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input type="text" value={local.name} class="form-control" id="exampleInputEmail1" placeholder="Enter Username" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputEmail1">Status</label>
                    <input type="text" value={local.status} class="form-control" id="exampleInputEmail1" placeholder="Enter Status" />
                </div>
                <div class="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" value={local.password} class="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>

                <button type="submit" class="btn btn-primary">SAVE DATA</button>
            </form>
        </>
    )
}
