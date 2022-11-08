import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password  = form.password.value;

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error));
    }
    return (
        
        <div className="hero py-10 w-50 m-auto mt-5 shadow">
            <div className="hero-content flex-col lg:flex-row">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl p-4">                    
                <h1 className="text-5xl font-bold text-center">Sign Up</h1>
                <form onSubmit={handleSignUp} className="card-body">
                    <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Name:-</span>
                    </label>
                    <input type="text" name='name' placeholder="Name" className="input input-bordered w-100 p-2 mt-2 rounded mb-2" required/>
                    </div>
                    <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Email:-</span>
                    </label>
                    <input type="text" name='email' placeholder="email" className="input input-bordered  w-100 p-2 mt-2 rounded mb-2" required/>
                    </div>
                    <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text">Password:-</span>
                    </label>
                    <input type="text" name='password' placeholder="password" className="input input-bordered w-100 p-2 mt-2 rounded mb-2" required />
                    </div>
                    <div className="mt-6">
                        <button  className="btn btn-primary"  type="submit">Sign Up</button>
                    </div>
                </form>
                <p className='text-center'>Already Have a account <Link to='/login' className="text-danger">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;