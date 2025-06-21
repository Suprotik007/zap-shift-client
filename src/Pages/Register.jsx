import React from 'react';
import { useForm } from 'react-hook-form';
// import useAuth from '../../../hooks/useAuth';
import { Link } from 'react-router';
import SocialLogin from '../Pages/SocialLogin';
import useAuth from '../Contexts/useAuth';

const Register = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const { createUser } = useAuth();

    const onSubmit = data => {
        console.log(data);
        createUser(data.email, data.password)
            .then(result => {
                console.log(result.user)
            })
            .catch(error => {
                console.error(error);
            })
    }

    return (

        <div className="card  w-full max-w-sm shrink-0 ">
            <h1 className="text-5xl font-bold">Create An Account</h1>
            <div className="card-body">
                
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset className="fieldset">
                        {/* email field */}
                        <label className="label">Email</label>
                        <input type="email"
                            {...register('email', { required: true })}
                            className="input" placeholder="Email" />
                        {
                            errors.email?.type === 'required' && <p className='text-red-500'>Email is required</p>
                        }

                        <label className="label">Password</label>
                        <input type="password" {...register('password', { required: true, minLength: 6 })} className="input" placeholder="Password" />
                        {
                            errors.password?.type === 'required' && <p className='text-red-500'>Password is required</p>
                        }
                        {
                            errors.password?.type === 'minLength' && <p className='text-red-500'>Password must be 6 characters or longer</p>
                        }

                        <div><a className="link link-hover">Forgot password?</a></div>
                        <button className="btn bg-[#CAEB66]  text-black mt-4">Register</button>
                    </fieldset>
                    <p><small>Already have an account? <Link className="btn btn-link text-[#CAEB66] " to="/login">Login</Link></small></p>
                </form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Register;