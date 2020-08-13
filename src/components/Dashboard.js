import React, { useEffect, useState } from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { Redirect, Link } from 'react-router-dom';
import UserConnection from './UserConnection';
import { requestDashboardUserData } from "../actions";

const Dashboard = (props) => {
  const [currentUser, setCurrentUser] = useState('');
  const [post, setPost] = useState('');
  const [postData, setPostData] = useState([]);
  const [counter, setCounter] = useState(3);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    props.requestDashboardUserData(props.match.params.username);
    const local = localStorage.getItem('user');
    setCurrentUser(JSON.parse(local));
  }, []);

  const handlePostItems = () => {
    const data = props.userDashBoard && props.userDashBoard.filter((data) => {
      if ((data.title.toLowerCase()).includes((post).toLowerCase()) || (data.name.toLowerCase()).includes((post).toLowerCase())) {
        return data
      }
    })
    setPostData(data)
  }
  const handleScroll = (e) => {
    const { scrollTop, clientHeight, scrollHeight } = e.currentTarget
    if (scrollHeight - scrollTop === clientHeight) {
      if (props.userDashBoard.length > counter) {
        setLoading(true)
        setTimeout(() => {
          setCounter(prev => prev + 1)
          setLoading(false)
        }, 2000)
      }
    }
  }
  const handleLogout = () => {
    localStorage.removeItem('user')
    props.history.push('/login')
  }
  return (currentUser !== null ? <div className="container">
    <div className="alert alert-dark" role="alert">
      Welcome {currentUser.name} !
      <button onClick={handleLogout} className="btn btn-primary" style={{ float: 'right', marginTop: '-8px' }}>LOGOUT</button>
    </div>
    <div className="row">
      <div className="col-2">
        <div className="card" style={{ "width": "10rem" }}>
          <span className={currentUser.status}/>
          <img className="card-img-top" src={currentUser.image} alt={currentUser.name} />
          <div className="card-body">
            <h5 className="card-title">{currentUser.fullName}</h5>
            <p className="card-text">{currentUser.status}</p>
          </div>
        </div>
        <div className="card" style={{ width: "10rem", marginTop: '20px' }}>
          <div className="card-body">
            <h5 className="card-title" style={{ fontSize: 'inherit' }}>Account Setting</h5>
            <button className="card-text"><Link to={"/"+currentUser.name+"/edit"}>Click</Link></button>
          </div>
        </div>
      </div>
      <div className="col-6">

        {
          props.userDashBoard && <div className="card postData" onScroll={handleScroll}>
            <div className="card-header">

              <input type="text" className="form-control postinput" placeholder="Search any word or Phrase" onChange={(e) => setPost(e.target.value)} value={post} />
              <button className="btn btn-primary" onClick={handlePostItems}>GO</button>
            </div>
            {
              postData.length > 0 ? postData.map((data, index) => {
                return <div className="card" key={index}><div className="card-body" >
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                </div> </div>
              }) : props.userDashBoard.slice(0, counter).map((data, index) => {
                return <div className="card" key={index}><div className="card-body" >
                  <h5 className="card-title">{data.title}</h5>
                  <p className="card-text">{data.description}</p>
                </div> </div>
              })
            }

          </div>

        }
        {loading && <h5 style={{textAlign:'center'}}>Loading...</h5>}
      </div>
      <UserConnection />
    </div>
  </div> : <Redirect to="/login" />
  )
}
const mapStateToProps = state => ({ userDashBoard: state.data.userDashbord });

const mapDispatchToProps = dispatch =>
  bindActionCreators({ requestDashboardUserData }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
