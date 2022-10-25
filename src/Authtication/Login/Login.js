import React from 'react';

const Login = () => {
    return (
      
           <div className="row d-flex justify-content-center ">
          <div className="col-md-4 card p-5">
            <form id="loginform" >
              <div className="form-group ">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="EmailInput"
                  name="EmailInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                 
                />
                <small id="emailHelp" className="text-danger form-text">
                 
                </small>
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                 
                />
                <small id="passworderror" className="text-danger form-text">
                 
                </small>
              </div>
              <div className="form-group form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="exampleCheck1"
                />
                <label className="form-check-label">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </form>
          </div>
         </div>
    );
};

export default Login;