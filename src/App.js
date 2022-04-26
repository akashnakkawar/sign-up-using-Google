import './App.css';
import GoogleLogin from 'react-google-login';
import React, { useState } from 'react';
import ReactHtmlParser from 'react-html-parser';

function App() {

  
  const [msg,setMsg] = useState(null);
  const [text,setText] = useState(null);

  const changeEdit = (e) =>{
    setText(e.target.value)
  }

  const responseGoogle = (response) => {
  
    
    setMsg(`<div class="alert alert-success" role="alert">
    Hello ${response.it.Se}, <br/> You have successfully signed up
  </div>`)
   setTimeout(()=>{
    setMsg('')
   },4000)
  }

  const onFailure = (response)=>{
    console.log(response)
  }
  
  return (
    <div>
      <div class="container">
  <div class="row">
    <div class="col-sm">
    
    </div>
    
    <div class="col-sm">
    <form>
  <div className="form-group row">
    
    <h2>Sign up</h2>
    
    <label for="inputEmail3" className="col-sm-2 col-form-label">Email</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="inputEmail3" placeholder="Email"/>
    </div>
  </div>
  <div className="form-group row">
    <label for="inputPassword3" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="inputPassword3" placeholder="Password"/>
    </div>
  </div>
  <fieldset className="form-group">
    <div className="row">
      <legend className="col-form-label col-sm-2 pt-0">Gender</legend>
      <div className="col-sm-10">
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked/>
          <label className="form-check-label" for="gridRadios1">
            Male
          </label>
        </div>
        <div className="form-check">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2"/>
          <label className="form-check-label" for="gridRadios2">
            Female
          </label>
        </div>
        <div className="form-check disabled">
          <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" />
          <label className="form-check-label" for="gridRadios3">
            Others
          </label>
        </div>
      </div>
    </div>
  </fieldset>
 
  <div className="form-group row">
    <div className="col-sm-10">
      <button type="submit" className="btn btn-primary">Sign in</button>
     
    </div>
  </div>
  <br/>
  <div className="form-group row">
    <div className="col-sm-10">
    <GoogleLogin
    clientId="244331291267-uhm1mamcfnajpa6p8ir266epc3buke3t.apps.googleusercontent.com"
    buttonText="Sign up with Google"
    onSuccess={responseGoogle}
    onFailure={onFailure}
    cookiePolicy={'single_host_origin'}
  />
    </div>
  </div>
</form> 
<br/>
{ReactHtmlParser(msg)}
    </div>
    <div class="col-sm">
      
    </div>
  </div>
</div>
     <input type="text" onChange={changeEdit} />
     <br/>
     <h1> {text} </h1>
     
    </div>
  );
}

export default App;
