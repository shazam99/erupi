import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

function Signup() {

    const navigate = useNavigate()

    const[form,setForm] = useState({
        username:"",
        email:"",
        password:""
    })

    const submit = async(e) => {
        e.preventDefault()
        console.log(form)

        await axios.post("http://localhost:8000/signup",{
            form
        }).then(response =>{
            console.log("sent")
        }).catch(err =>{
            console.log(err)
        })
    }

    const handleInputChange = (e) => {
        setForm({
          ...form,
          [e.target.name]: e.target.value
        });
      };

    return (
        <div className="main">
            <div className="section">
                <h3 className='mb-3'>Register</h3>
                <form action='/login' method='POST' onSubmit={submit}>
                    {/* name */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="name">User name</label>
                        <input type="text" name='username' onChange={handleInputChange} id="name" className="form-control" />
                    </div>

                    {/* email */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input type="email" name='email' onChange={handleInputChange} id="form2Example1" className="form-control" />
                    </div>

                    {/* password */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password" name='password' onChange={handleInputChange} id="form2Example2" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign up</button>

                    <div className="text-center">
                        <p>Already a member? <Link to="/login">Login</Link></p>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup

