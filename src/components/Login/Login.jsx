import React, { useContext, useState } from 'react';
import { FacebookAuthProvider, getAuth, signInWithPopup, updateProfile } from "firebase/auth";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import axios from 'axios';
// import { AuthContext } from '../providers/AuthProvider';
// import useAuth from '../../hooks/useAuth';
import { Button, TextField } from '@mui/material';
import { AuthContext } from '../../Providers/AuthProvider';


const Login = () => {
  const [usr, setUsr] = useState(null);
//   const { googleSignIn } = useAuth();
  const { signInUser, signInWithGoogle, signInWithGithub, signInWithFacebook } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // signIn(email, password)
    signInUser(email, password)
      .then(result => {
        const loggedUsr = result.user;
        const user = { email };
        e.target.reset();
        setUsr(loggedUsr);
        Swal.fire({
          title: 'Success!',
          text: 'Logged In Successfully',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        navigate(location?.state ? location.state : '/');
      })
      .catch(error => {
        console.error(error);
        toast.error('invalid email or password');
      });
  };

  const handleGoogleSignIn = () => {
    // googleSignIn()
    signInWithGoogle()
      .then(result => {
        const loggedUsr = result.user;
        e.target.reset();
        setUsr(loggedUsr);
        navigate(location?.state ? location.state : '/');
        toast.success('Successfully Logged in');
      })
      .catch(error => {
        console.error(error);
      });
  };


  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('path/to/your/background-image.jpg')" }}>
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
          <h1 className="text-3xl md:text-5xl font-bold text-blue-600 mb-6 text-center animate__animated animate__fadeInDown">
            Login now!
          </h1>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <TextField
                label="Email"
                type="email"
                name="email"
                placeholder="email"
                required
                fullWidth
              />
            </div>
            <div className="mb-6">
              <TextField
                label="Password"
                type="password"
                name="password"
                required
                placeholder="password"
                fullWidth
              />
              <div className="text-right">
                <Link to="#" className="text-blue-500 text-sm">
                  Forgot password?
                </Link>
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              className="h-11 mb-4"
            >
              Login
            </Button>
          </form>

          <p className="text-center text-lg mb-4">
            New to this site? Please{' '}
            <Link to="/register" className="text-blue-600">
              Register
            </Link>
          </p>

          <div className="text-center mb-4">
            <span className="text-lg font-semibold">or</span>
          </div>

          <div>
            <Button
              onClick={handleGoogleSignIn}
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<FcGoogle />}
              className="mb-4"
            >
              Continue with Google
            </Button>
            {/* <Button
              onClick={handleGithubSignIn}
              variant="outlined"
              color="primary"
              fullWidth
              startIcon={<FaGithub />}
              className="mb-4"
            >
              Continue with GitHub
            </Button> */}
          </div>

          <p className="text-center text-lg">
            Go back to{' '}
            <Link to="/" className="text-blue-600">
              Home
            </Link>
          </p>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;