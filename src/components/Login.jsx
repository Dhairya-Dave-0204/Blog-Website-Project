import React, { useState }  from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { Button, Input, LOGO } from './index'
import authService from '../appwrite/auth'
import { useForm } from 'react-hook-form';

function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const { register, handleSubmit } = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        try {
            const session = await service.login(data)
            if (session) {
                const userData = await service.getCurrentUser()
                if (userData) {
                    dispatch(authLogin(userData))
                }
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="flex justify-center mb-2">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-tight text-center"> Sign in to your account </h2>
        <p className="mt-2 text-base text-center text-black/60">
          Don&apos;t have any account?&nbsp;
          <Link to="/signup"
            className="font-medium transition-all duration-200 text-primary hover:underline" >
            Sign Up
          </Link>
        </p>
        {error && <p className="mt-8 text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(login)} className='mt-8'>
            <div className='space-y-5'>
                <Input label="Email" placeholder="Enter your e-mail" type="email"
                    {...register("email", { 
                        required: true,
                        validate: {
                            matchPattern: (value) => /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/gm.test(value) 
                            || "Email enterd is not a valid email address"
                        }
                    })} />

                <Input label="Password" placeholder="Enter your password" type="password" 
                  {...register("password", {
                    required: true,
                  })} />

                <Button type='submit' className='w-full'>Sign In</Button>
            </div>
        </form>
      </div>
    </div>
  );
}

export default Login