import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { requestUserData } from "../actions";

const Login = (props) => {
    let [user, setUser] = useState('')
    let [pwd, setPwd] = useState('')

    const handleSubmit=(e)=>{
        e.preventDefault();
        props.requestUserData(user, pwd);
    }
        let local = localStorage.getItem('user')
        local = JSON.parse(local)
    return (
        local === null ? <div className="container">
            <h3>Login to see whats inside</h3>
            <div className="card login">
                
          <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">UserName</label>
                    <input type="text" onChange={(e)=> setUser(e.target.value)} value={user} className="form-control" id="exampleInputEmail1"  placeholder="Enter username" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" onChange={(e)=> setPwd(e.target.value)} value={pwd} className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">LOGIN</button>
            </form> 
            </div>
            
        </div> : <Redirect to={"/dashboard/"+ local.name}/>
        
    )
}

const mapStateToProps = state => ({ userData: state.data.userData });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);