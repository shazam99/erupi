import React from 'react'
import {  Link } from "react-router-dom"    


function Login() {
    return (

        <div className="main">
            <div className="section">
                <h3 className='mb-3'>Login</h3>
                <form >
                    {/* email */}
                    <div className="form-outline mb-4">
                        <label className="form-label" for="form2Example1">Email address</label>
                        <input type="email" id="form2Example1" className="form-control" />
                    </div>

                    {/* password */}
                    <div class="form-outline mb-4">
                        <label className="form-label" for="form2Example2">Password</label>
                        <input type="password" id="form2Example2" className="form-control" />
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4">Sign in</button>

                    <div className="text-center">
                        <p>Not a member? <Link to="/signup">Register</Link></p>
                        
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
