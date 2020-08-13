import React, { useEffect, useState } from 'react'
import {requestAllUserData } from "../actions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

const UserConnection = (props) => {
  let [user, setUser] = useState('')
  let [userData, setUserData] = useState([])


  useEffect(() => {
    props.requestAllUserData()
  }, [])

  useEffect(() => {
    let data = props.userList && props.userList.filter((data) => {
      if ((data.name.toLowerCase()).includes((user).toLowerCase())) {
        return data
      }
    })
    setUserData(data)
  }, [user])


  return (
      <div className="col-4">
        <div className="card-header">
         
          <input type="text" className="form-control" placeholder="Search Connection" onChange={(e) => setUser(e.target.value)} value={user} />
        </div>
        
        <span style={{paddingLeft: '30%'}}>My Connections</span>
        {props.userList && <div className="card userCon">
          {
            userData && userData.length > 0 ? userData.map((data) => {
              return <div className="card" style={{ "width": "10rem" }} key={data.id}>
                 <span className={data.status}></span>
                <img className="card-img-top" src={data.image} alt={data.id} />
                <div className="card-body">
                  <h5 className="card-title">{data.fullName}</h5>
                  <p className="card-text">{data.status}</p>
                </div>
              </div>
            }) : props.userList.map((data) => {
              return <div className="card" style={{ "width": "10rem" }} key={data.id}>
                  <span className={data.status}></span>
                <img className="card-img-top" src={data.image} alt={data.id} />
                <div className="card-body">
                  <h5 className="card-title">{data.fullName}</h5>
                  <p className="card-text">{data.status}</p>
                </div>
              </div>
            })
          }
        </div>}
      </div>

  )
}
const mapStateToProps = state => ({ userList: state.data.userList});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestAllUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(UserConnection);
