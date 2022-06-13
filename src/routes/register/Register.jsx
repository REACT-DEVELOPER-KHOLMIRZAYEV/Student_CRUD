import React, { useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { FiEye, FiEyeOff } from "react-icons/fi";
import c from "./Register.module.css"
import user_register from '../../api/privite_api';
import { toast } from 'react-toastify';

function Register() {
  const history = useHistory();
  const [eye, setEye] = useState(true);

  const [fullName, setFullname] = useState("")
  const [username, setName] = useState("")
  const [password, setPassword] = useState("")
  const [phone, setPhone] = useState("")

  const HandleUserRegister = async (e) => {
    e.preventDefault();
    if (fullName.replace(/ /g, "").length > 1 && username.replace(/ /g, "").length > 1 && password.replace(/ /g, "").length >= 8) {
      await user_register.post("/auth/register", { fullName, username, password, phone })
        .then(user => {
          console.log(user);
          if (user?.data?.data?.success) {
            history.push("/table")
            toast.success("Succesfully registerd!")
            toast.warning("You have to log in.")
          }
        })
        .catch(err => {
          console.log("err", err);
          toast.warning("This user already has been registered!!!");
        })
    }
    else {
      toast.warning('Please enter all info correctly!')
    }
  }
  return (
    <div className={c.register}>
      <div className={c.register_wrapper}>
        <h1>Register User</h1>
        <form onSubmit={HandleUserRegister} className={c.register_form}>
          <input autoComplete="off" className={c.register_input} required min="2" max="30" type="text" placeholder='Fullname' value={fullName} onChange={(e) => setFullname(e.target.value)} />
          <input autoComplete="off" className={c.register_input} required min="2" max="30" type="text" placeholder='Name' value={username} onChange={(e) => setName(e.target.value)} />
          <div className={c.password_wrapper}>
            <input autoComplete="off" className={c.register_input_password} required min="8" max="1024" type={eye ? "password" : "text"} placeholder="Your password" style={eye ? { userSelect: "none" } : null} value={password} onChange={(e) => setPassword(e.target.value)} />
            {!eye ? (
              <FiEye onClick={() => setEye(true)} />
            ) : (
              <FiEyeOff onClick={() => setEye(false)} />
            )}
          </div>
          {/* <input autoComplete="off" className={c.register_input} required min="8" max="1024" type="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} /> */}
          <input autoComplete="off" className={c.register_input} required min="8" max="1024" type="text" placeholder='Phone number' value={phone} onChange={(e) => setPhone(e.target.value)} />
          <button className={c.register_button} type="submit" >Register</button>
          <Link className={c.login_link} to="/">Do You have account?</Link>
        </form>
      </div>
    </div>
  )
}

export default Register