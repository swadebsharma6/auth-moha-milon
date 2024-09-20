import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Provider/AuthProvider';

const Register = () => {

    const {createUser} = useContext(AuthContext)

      const HandleRegister = e =>{
            e.preventDefault();
            const form = e.target;
            const name = form.name.value
            const email = form.email.value;
            const password = form.password.value;
          // Create User
          createUser(email, password)
          .then(result =>{
            const user = result.user;
            console.log('CreateUser', user);
            form.reset();
          })
          .catch(error =>{
            console.log(error.message)
          })
      }

      return (
            <div>
      <div className="hero bg-gradient-to-r from-cyan-500 to-blue-500 lg:h-[800px]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left text-white">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={HandleRegister} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-secondary">Register</button>
              </div>
            </form>
            <p className="text-center pb-6">Already have account, please <Link className='text-primary' to='/login'>Login</Link></p>
          </div>
        </div>
      </div>
    </div>
      );
};

export default Register;