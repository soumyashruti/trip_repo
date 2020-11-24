import React from 'react';
import { Link } from 'react-router-dom';

export default function Login(){
    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                <label htmlFor="exampleInputEmail1">Email address/user Name</label>
                <input type="email" 
                       className="form-control" 
                       id="email" 
                       aria-describedby="emailHelp" 
                       placeholder="Enter email" required
                />
               
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password" required
                    />
                </div>
               
                <button 
                    type="submit" 
                    className="btn btn-primary"
                >
                    Login
                </button>
                <Link to="/register">Please Register here First..</Link>
            </form>
        </div>
    )
}

