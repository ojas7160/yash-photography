import React, { useState } from 'react';
import './profileComponent.css';
import profileImg from '../../img/bg-img/tm-easy-profile.jpg';
import bgImg from '../../img/bg-img/tm-bg-slide-1.jpg'
import * as userService from '../../services/users/userService';
import { connect } from 'react-redux';

const Profile = (props) => {
  const [user, setUser] = useState({name: '', role: '', address: '', email: '', phone: '', file: {}})

  const openFileUpload = () => {
    document.getElementById('imgupload').click();
  }

  const uploadPicture = (event) => {
    console.log(event.target.files)
    setUser({...user, file: event.target.files[0]})
  }

  const save = ($event) => {
    console.log(user)
    // $event.stopPropagation();
    let formData = new FormData();
    for(let i in user) {
      formData.append(i, user[i])       
    }
    console.log(userService)
    userService.default.updateUser(formData, props.user._id)
    .then(res => {
      console.log(res)

    }, err => console.log(err))
    $event.preventDefault();
  }

  return (
    <div style={{backgroundImage: `url(${bgImg})`}}>
      <header>
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-sm-12">
              <div>
                <input type="file" id="imgupload" onChange={uploadPicture} style={{display: 'none'}}/> 
                <img src={profileImg} style={{width: '25%'}} className="img-responsive img-circle tm-border" alt="Profile Pic"/>
                <i className="fa fa-pencil photo-edit" onClick={openFileUpload} aria-hidden="true"></i>
              </div>
              <hr/>
              <input className="form-control custom-input mb-1" placeholder="Enter Name" onChange={e => setUser({...user, name: e.target.value})} value={user.name}/>
              <input className="form-control custom-input" placeholder="Enter Designation" onChange={e => setUser({...user, role: e.target.value})} value={user.role}/>
            </div>
          </div>
        </div>
      </header>

      <section className="container">
        <div className="row">
          {/* <div className="col-md-6 col-sm-12">
            <div className="about">
              <h3 className="accent">Easy Profile</h3>
              <h2>Bootstrap v3.3.5</h2>
              <p>This easy HTML profile is brought to you by templatemo website. There are 4 color themes, <a href="index-green.html">Green</a>, <a href="index.html">Blue</a>, <a href="index-gray.html">Gray</a>, and <a href="index-orange.html">Orange</a>. Sed vitae dui in neque elementum tempor eu id risus. Phasellus sed facilisis lacus, et venenatis augue.</p>
            </div>
          </div> */}
          <div className="col-md-6 col-sm-12">
            <div className="skills">
              <h2 className="white">Skills</h2>
              <strong>PHP MySQL</strong>
              <span className="pull-right">70%</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-primary" role="progressbar" 
                              aria-valuenow="70" aria-valuemin="0" aria-valuemax="100" style={{width: '70%'}}></div>
                </div>
              <strong>UI/UX Design</strong>
              <span className="pull-right">85%</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-primary" role="progressbar" 
                              aria-valuenow="85" aria-valuemin="0" aria-valuemax="100" style={{width: '85%'}}></div>
                </div>
              <strong>Bootstrap</strong>
              <span className="pull-right">95%</span>
                <div className="progress">
                  <div className="progress-bar progress-bar-primary" role="progressbar" 
                              aria-valuenow="95" aria-valuemin="0" aria-valuemax="100" style={{width: '95%'}}></div>
                </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-8 col-sm-12">
            <div className="education">
              <h2 className="white">Education</h2>
                <div className="education-content">
                  <h4 className="education-title accent">New Web Design</h4>
                    <div className="education-school">
                      <h5>School of Media</h5><span></span>
                      <h5>2030 January - 2034 December</h5>
                    </div>
                  <p className="education-description">In lacinia leo sed quam feugiat, ac efficitur dui tristique. Ut venenatis, odio quis cursus egestas, nulla sem volutpat diam, ac dapibus nisl ipsum ut ipsum. Nunc tincidunt libero non magna placerat elementum.</p>
                </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-12">
            <div className="languages">
              <h2>Languages</h2>
                <ul>
                  
                  <li>English / Hindi / Punjabi</li>
                  
                </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="container">
        <div className="row">
          <div className="col-md-4 col-sm-12">
            <div className="contact">
              <h2>Contact</h2>
                <div className="d-flex"><i className="fa fa-map-marker m-auto"></i> <input className="form-control contact-custom-input mb-1" placeholder="Enter Address" onChange={e => setUser({...user, address: e.target.value})} value={user.address}/></div>
                <div className="d-flex"><i className="fa fa-phone m-auto"></i> <input className="form-control contact-custom-input mb-1" placeholder="Enter Phone" onChange={e => setUser({...user, phone: e.target.value})} value={user.phone}/></div>
                <div className="d-flex"><i className="fa fa-envelope m-auto"></i> <input className="form-control contact-custom-input mb-1" placeholder="Enter Email" onChange={e => setUser({...user, email: e.target.value})} value={user.email}/></div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className="experience">
              <h2 className="white">Experiences</h2>
                <div className="experience-content">
                  <h4 className="experience-title accent">Website Development</h4>
                  <h5>New Media Company</h5><span></span>
                  <h5>2035 January - 2036 April</h5>
                  <p className="education-description">Cras porta tincidunt sem, in sollicitudin lorem efficitur ut. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet.</p>
                </div>
            </div>
          </div>
        </div>
      </section>
      <footer className="footer">
        <button className="btn btn-primary" style={{padding: '5px 25px'}} onClick={($e) => save($e)}>Save</button>
      </footer>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.loginReducer.user
  }
}


export default connect(mapStateToProps)(Profile);