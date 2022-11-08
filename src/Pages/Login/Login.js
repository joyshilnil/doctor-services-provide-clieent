import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
const Login = () => {
    const {login} = useContext(AuthContext);

    
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .then(error => console.error(error));
    }
    return (
        <div className="hero py-10 w-50 m-auto mt-5 shadow">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">                    
                <h1 className="text-5xl font-bold text-center">Login</h1>
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control  mb-4">
                    <label className="label">
                        <span className="label-text">Email:-</span>
                    </label>
                    <input type="text" name='email' placeholder="Email" className="input input-bordered w-100 p-2 mt-2 rounded mb-2" required/>
                    </div>
                    <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Password:-</span>
                    </label>
                    <input type="password" name='password' placeholder="Password" className="input input-bordered w-100 p-2 mt-2 rounded mb-2" required />
                    </div>
                    <div className="mt-6">
                        <input className="btn btn-primary" type="submit" value="Login" />
                    </div>
                </form>
                <p className='text-center'>New to my website please<Link to='/register' className="text-danger"> Sign Up</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;