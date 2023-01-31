import { Nav } from '../components/Nav'
import { useForm } from 'react-hook-form'
import axios from "axios";
import { useIsAuthenticated, useSignIn } from 'react-auth-kit';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const { register, handleSubmit } = useForm()
    const signIn = useSignIn()
    const navigate = useNavigate()
    const isAuthenticated = useIsAuthenticated()

    const [message, setMessage] = useState(null)

    useEffect(() => {
        if (isAuthenticated()) {
            setTimeout(() => navigate('/home'), 3000)
        }
    })

    async function onSubmit(data) {
        axios.post('http://localhost:5000/api/users/login', {
            login: data.login,
            password: data.password
        })
            .then((res) => {
                console.log(res)
                setMessage(res.data.message)
                signIn({
                    token: res.data.token,
                    expiresIn: 3600,
                    tokenType: 'Bearer',
                    authState: { login: res.data.login }
                })
            })
            .catch((err) => {
                console.log(err)
                setMessage(err.response.data.message)
            })
    }

    return (
        <div className='w-screen h-screen bg-bg'>
            <Nav style='absolute' />
            <div className="hero w-screen h-full text-font bg-[url('https://www.neuropeakpro.com/wp-content/uploads/2018/12/Blog-42.jpg')]">
                <div className='bg-bg/70'>
                    <h1 className='px-16 py-12 text-3xl font-bold'>Sign In</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6 px-16 pb-12'>
                        <input {...register('login')} type="text" placeholder="Login" className="input input-primary w-full max-w-xs bg-primary" />
                        <input {...register('password')} type="password" placeholder="Password" className="input input-primary w-full max-w-xs bg-primary" />
                        <button className="btn btn-accent text-font my-8">LOGIN</button>
                        <p className='text-xl text-center font-bold h-0 mb-4'>{message}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Login }