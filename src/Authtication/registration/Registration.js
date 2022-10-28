import { GoogleAuthProvider, TwitterAuthProvider} from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import  { AuthContext } from '../../context/AuthProvider';

const Registration = () => {
   const {providerLogin,createUser,updateUserProfile } = useContext(AuthContext);
const [error, setError] = useState(null);
   const googleAuth = new GoogleAuthProvider()
   const twiterProvider = new TwitterAuthProvider();
  
const  googleSingIn = () => {
     providerLogin(googleAuth)
     .then(result =>{
        const user = result.user
        console.log(user)
     })
      .catch(error => console.log(error))
}

const  twitterSingIn = () => {
     providerLogin(twiterProvider)
     .then(result =>{
        const user = result.user
        console.log(user)
     })
      .catch(error => console.log(error))
}



const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const url = form.photo.value;
    const password = form.password.value;
    const confirm = form.confirm.value;

    if (password.length < 6) {
        setError('Password should be 6 characters or more.');
        return;
    }

    if (password !== confirm) {
        setError('Your Password did not match');
        return;
    }

    createUser(email, password,name,url)
        .then(result => {
            const user = result.user;
            console.log(user);
            form.reset();
            handleUpdateUserProfile(name, url);
            toast.success('Please verify your email address.')
        })
        .catch(error => console.error(error));
        
        const handleUpdateUserProfile = (name, url) => {
          const profile = {
              displayName: name,
              url: url
          }
          updateUserProfile(profile)
          .then(() => { })
          .catch(error => console.error(error));
  }
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
                  name="name"
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
                  name="photo"
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
                  name="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                 required
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
                  name='password'
                  placeholder="Password"
                  required
                 
                />
                <small id="passworderror" className="text-danger form-text">
                 
                </small>
              </div>
              <div className="form-group">
                <label>Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  name='confirm'
                  id="exampleInputConfirmPassword2"
                  placeholder="Confirm Password"
                  required
                 
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
            <p>Already Have an Account <Link to='/login'>Login</Link></p>
            <p className='text-danger'>{error}</p>
            <div className='d-flex justify-content-center'>
                
                <Button className='mx-2' onClick={googleSingIn}>Google</Button>
                <Button onClick = {twitterSingIn} >Twitter</Button>
             </div>
          </div>
         </div>
    );
};

export default Registration;