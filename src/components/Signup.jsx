import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import authService from '../appwrite/auth'
import { login } from '../store/authSlice'
import { useDispatch } from 'react-redux'
import { useForm } from 'react-hook-form'
import {Button, Input, LOGO} from "./index"


function Signup() {

    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { register, handleSubmit } = useForm()
    
    const create = async (data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) {
                    dispatch(login(userData))
                }
                navigate('/')
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="flex justify-center mb-2">
          <span className="inline-block w-full max-w-[100px]">
            <LOGO width="100%" />
          </span>
        </div>

        <h2 className="text-2xl font-bold leading-tight text-center">
          Sign up to create account
        </h2>
        <p className="mt-2 text-base text-center text-black/60">
          {" "}
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium transition-all duration-200 text-primary hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="mt-8 text-center text-red-600">{error}</p>}

        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input label="Full name" placeholder="Enter your Full Name" {...register("name", {
                required: true,
              })} />

            <Input label="Email" placeholder="Enter your e-mail" type="email" {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) 
                || "Email address must be a valid address",
                },
              })} />

            <Input label="Password" type="password" placeholder="Enter your password" {...register("password", {
                required: true,
            })} />

            <Button type='submit' className='w-full'>Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup