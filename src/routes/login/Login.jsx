import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import c from './Login.module.css'
import loginImage from '../../assets/login.svg';
import { Link } from 'react-router-dom';
import { Redirect, useLocation } from 'react-router-dom';
import user_register from '../../api/privite_api';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { user_authentication, user_failauthentication } from '../../redux/actions/auth';
import { Loader } from '../../components/loader/Loader';

const Login = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUserLogin = async (e) => {
    e.preventDefault();
    setLoading(true)
    dispatch(user_authentication({ loading: true, authorized: false, token: '', message: '' }))
    if (username.replace(/ /g, "").length > 5 && password.replace(/ /g, "").length >= 8) {
      await user_register.post("/auth/token", { username, password })
        .then(user => {
          if (user?.data.data.success) {
            console.log("user", user?.data.data.success);
            dispatch(user_authentication({ loading: false, authorized: user?.data.data.success, token: user?.data?.data?.data?.accessToken, message: user?.data.data.success }))
            toast.success("Login successfully");
          }
          else {
            toast.error("You are not registered yet!!!");
            dispatch(user_failauthentication({ message: user?.data.data.success }))
          }
        })
        .catch(err => {
          console.log("err", err);
          toast.error("Something wrong with connection!");
          dispatch(user_failauthentication({ message: err.response.data.message }))
        })
    }
    else {
      toast.warning('Please enter all info correctly!')
    }
  }

  return auth.authorized ? <Redirect
    to={{
      pathname: "/table",
      state: {
        from: location.pathname,
      },
    }}
  /> : (<div className={c.login}>
    <div className={c.login__form}>
      <div className={c.form__panel}>
        <form onSubmit={handleUserLogin}>
          <h1>Welcome</h1>
          <input required min="5" max="30" className={c.login__input} type="text" placeholder="Username" value={username} onChange={e => {
            setUsername(e.target.value)
            setLoading(false)
          }} />
          <input required min="8" max="1024" className={c.login__input} type="password" placeholder="Password" value={password} onChange={e => {
            setPassword(e.target.value)
            setLoading(false)
          }} />
          {loading
            ? <button type='submit' style={auth?.loading ? { opacity: 0.7 } : { opacity: 1 }} disabled={auth?.loading} className={c.login_button}>  {auth?.loading ? <Loader /> : "Log in"}</button>
            : <button type='submit' className={c.login_button}> Log in</button>
          }
        </form>

        <Link className={c.register_link} to="/register">  Create Account</Link>
      </div>
    </div>
    <div className={c.login__preview}>
      <img src={loginImage} alt="" />
    </div>
  </div>)
}

export default Login
