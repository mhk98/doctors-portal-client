import React from 'react';
import { useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import Loading from './Shared/Loading';


const SignUp = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const [updateProfile, updating, updateError] = useUpdateProfile(auth);

      let signInError;

      if(gLoading || loading || updating){
          return <Loading></Loading>
      }

      if(error || gError || updateError){
          signInError = <p>{error?.message || gError?.message || updateError?.message}</p>
      }
    if(user || gUser){
        console.log(user || gUser)
        navigate('/login')
    }

    const onSubmit = async data =>{
        console.log(data);
       await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name});
        console.log('update done')
        navigate('/appointment')
    } 
    return (
        <div className='flex h-screen justify-center items-center'>
    <div  className="card w-96 bg-base-100 shadow-xl">
        <div  className="card-body">
            <h2  className="text-center text-2xl font-bold">Sign Up</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">Name</span>

                </label>
                <input type="text" 
                placeholder="Your Name" 
                 className="input input-bordered w-full max-w-xs"
                {...register("name", {
                    required: {
                        value: true,
                        message: 'Name is required'
                    },
                
                    minLength: {
                      value: '',
                      message: 'Provide a valid Name'
                    }
                  })}
                />
                <label  className="label">
            {errors.name?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.name.message}</span>}
            {errors.name?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.name.message}</span>}
                    

                </label>
            </div>
            <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">Email</span>

                </label>
                <input type="email" 
                placeholder="Your Email" 
                 className="input input-bordered w-full max-w-xs"
                {...register("email", {
                    required: {
                        value: true,
                        message: 'Email is required'
                    },
                
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email'
                    }
                  })}
                />
                <label  className="label">
            {errors.email?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
            {errors.email?.type === 'pattern' && <span  className="label-text-alt text-red-500">{errors.email.message}</span>}
                    

                </label>
            </div>

            <div  className="form-control w-full max-w-xs">
                <label  className="label">
                    <span  className="label-text">Password</span>

                </label>
                <input type="text" 
                placeholder="Your Password" 
                 className="input input-bordered w-full max-w-xs"
                {...register("password", {
                    required: {
                        value: true,
                        message: 'Password is required'
                    },
                
                    minLength: {
                      value: 6,
                      message: 'Please enter 6 characters or longer'
                    }
                  })}
                />
                <label  className="label">
            {errors.password?.type === 'required' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
            {errors.password?.type === 'minLength' && <span  className="label-text-alt text-red-500">{errors.password.message}</span>}
                    

                </label>
            </div>
            <p className='text-red-500'>{signInError}</p>
      <input className='w-full max-w-xs btn' type="submit" value='Sign Up' />
    </form>
    <p>Already have an account? <Link className='text-secondary' to='/login'>Login</Link> </p>
            <div  className="divider">OR</div>
            <button onClick={() => signInWithGoogle()}  className="btn btn-outline">Continue With Google</button>
            
        </div>
    </div>
</div>
    );
};

export default SignUp;