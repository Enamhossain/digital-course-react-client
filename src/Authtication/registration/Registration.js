import { GoogleAuthProvider} from 'firebase/auth';
import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
   const {loginProvider,createuser } = useContext(AuthContext);

   const googleAuth = new GoogleAuthProvider()
  
const  googleSingIn = () => {
     loginProvider(googleAuth)
     .then(result =>{
        const user = result.user
        console.log(user)
     })
      .catch(error => console.log(error))
}
const handleSubmit = (event) => {
    event.preventDefault()
    const form = event.target
    const name = form.nameInput.value
    const URL = form.photoURlInput.value
    const email = form.EmailInput.value
    const password = form.passwordInput.value
    const confirmPassword = form.confirmpsInput.value
    console.log(name,URL,email,password,confirmPassword)
    createuser(email,password)
    .then(result => {
        const user = result.user
        console.log(user)
        form.reset()
    })
    .catch(error => console.log(error))
}



    return (
        <div className="row d-flex justify-content-center ">
          <div className="col-md-4 card p-5">
            <form onSubmit={handleSubmit} id="loginform" >
              <div className="form-group ">
                <label>Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="nameInput"
                  aria-describedby="emailHelp"
                  placeholder="Enter Your name"

                 
                />
                <small id="emailHelp" className="text-danger form-text">
                 
                </small>
              </div>
              <div className="form-group ">
                <label>Photo URL</label>
                <input
                  type="text"
                  className="form-control"
                  id="photoURlInput"
                  name="photoURlInput"
                  aria-describedby="emailHelp"
                  placeholder="URL"

                 
                />
                <small id="emailHelp" className="text-danger form-text">
                 
                </small>
              </div>
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
                  name='passwordInput'
                  placeholder="Password"
                 
                />
                <small id="passworderror" className="text-danger form-text">
                 
                </small>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name='confirmpsInput'
                  id="exampleInputConfirmPassword2"
                  placeholder="Confirm Password"
                 
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
                 Registration
              </button>
              <br/>
              <label className='fs-3'>Register With </label>
             
            </form>
            <div className='d-flex justify-content-center '>
                
                <button className='mx-2' onClick={googleSingIn}>Google</button>
                <button >Twitter</button>
             </div>
          </div>
         </div>
    );
};

export default Registration;