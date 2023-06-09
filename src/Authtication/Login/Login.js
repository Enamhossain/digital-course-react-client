import React, { useContext, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import toast from 'react-hot-toast';
import { GoogleAuthProvider, GithubAuthProvider} from 'firebase/auth';
import {  Link, useLocation, useNavigate } from 'react-router-dom';

 import { AuthContext } from '../../context/AuthProvider';

const Login = () => {
  const {signIn,setLoading,providerLogin} = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation()
  const googleAuth = new GoogleAuthProvider()
  const gitProvider = new GithubAuthProvider();
  const from = location.state?.from?.pathname || '/';

  const handleSubmit = event =>{
       event.preventDefault();
       const form = event.target;
       const email = form.email.value;
       const password = form.password.value;
       signIn(email, password)
       .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          navigate('/')
          
      })
      .catch(error => console.error(error))


      signIn(email, password)
      .then(result => {
          const user = result.user;
          console.log(user);
          form.reset();
          setError('');
          if(user.emailVerified){
              navigate(from, {replace: true});
          }
          else{
              toast.error('Your email is not verified. Please verify your email address.')
          }
      })
      .catch(error => {
          console.error(error)
          setError(error.message);
      })
      .finally(() => {
          setLoading(false);
      })


  }

  const  googleSingIn = () => {
    providerLogin(googleAuth)
    .then(result =>{
       const user = result.user
       console.log(user)
       navigate('/')
    })
     .catch(error => console.log(error))
}

const  githubSingIn = () => {
    providerLogin(gitProvider)
    .then(result =>{
       const user = result.user
       console.log(user)
       navigate('/')
    })
     .catch(error => console.log(error))
}








    return (
      <div className='container'>
      <Container> 
      <form onSubmit={handleSubmit} className='card '>
      <h3>Sign In</h3>
      <div className="mb-3">
        <label>Email address</label>
        <input 
          type="email"
          className="form-control mx-auto"
          placeholder="Enter email"
          name="email"
        />
      </div>
      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          className="form-control mx-auto container"
          placeholder="Enter password"
          name="password"
        />
      </div>
      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>
      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <Link href="#">password?</Link>
      </p>
      <div>
      <Button className='mx-2' onClick={googleSingIn}>Google</Button>
                <Button onClick = {githubSingIn} >Github</Button>
      </div>
       <p>
          {error}
       </p>
    </form>
    </Container> 
    </div>
   
    );
};

export default Login;