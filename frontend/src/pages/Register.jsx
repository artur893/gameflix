import { Nav } from '../components/Nav'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import axios from "axios";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [message, setMessage] = useState(null);
    const navigete = useNavigate()

    const emailRegexValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const passLowercaseValidation = '(?=.*?[a-z])'
    const passUppercaseValidation = '(?=.*?[A-Z])'
    const passDigitValidation = '(?=.*?[0-9])'
    const passSpecialCharValidation = '(?=.*?[#?!@$%^&*-])'

    const formSchema = Yup.object().shape({
        login: Yup.string()
            .required('Login is required')
            .min(3, 'Login must have minimum 3 characters')
            .max(20, 'Login maximally can have 20 characters'),
        email: Yup.string()
            .required('Email is required')
            .matches(emailRegexValidation, "Please enter a valid email"),
        password: Yup.string()
            .required('Password is required')
            .min(8, 'Password must have minimum 8 characters')
            .matches(passLowercaseValidation, 'Password must have at least 1 lowercase letter')
            .matches(passUppercaseValidation, 'Password must have at least 1 uppercase letter')
            .matches(passDigitValidation, 'Password must have at least 1 digit')
            .matches(passSpecialCharValidation, 'Password must have at least 1 special character'),
        confirm: Yup.string()
            .required('Password confirmation is required')
            .oneOf([Yup.ref('password')], 'Passwords does not match'),
    })

    const formOptions = { resolver: yupResolver(formSchema) }
    const { register, handleSubmit, formState: { errors, dirtyFields, isSubmitted } } = useForm(formOptions)

    async function onSubmit(data) {
        axios.post('http://localhost:5000/api/users/register', {
            login: data.login,
            email: data.email,
            password: data.password
        })
            .then((res) => {
                setMessage(res.data.message)
                setTimeout(() => navigete('/login'), 3000)
            })
            .catch((err) => setMessage(err.response.data.message))
    }

    function setInputStyle(error, dirty) {
        if (error) return 'input-error'
        else if (!error && dirty && isSubmitted) return 'input-success'
        else return 'input-primary'
    }

    return (
        <div className='w-screen h-screen bg-bg'>
            <Nav style='absolute' />
            <div className="hero w-screen h-full text-font bg-[url('https://www.neuropeakpro.com/wp-content/uploads/2018/12/Blog-42.jpg')]">
                <div className='bg-bg/70'>
                    <h1 className='px-16 py-12 text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-16 pb-12'>
                        <input {...register('login')} type="text" placeholder="Login"
                            className={`${setInputStyle(errors.login, dirtyFields.login)} input w-full max-w-xs bg-primary`} />
                        <p className='text-xs font-bold text-error mt-1 mx-1 h-0'>{errors.login?.message}</p>
                        <input {...register('email')} type="email" placeholder="E-mail"
                            className={`${setInputStyle(errors.email, dirtyFields.email)} input w-full max-w-xs mt-6 bg-primary`} />
                        <p className='text-xs font-bold text-error mt-1 mx-1 h-0'>{errors.email?.message}</p>
                        <input {...register('password')} type="password" placeholder="Password"
                            className={`${setInputStyle(errors.password, dirtyFields.password)} input w-full max-w-xs mt-6 bg-primary`} />
                        <p className='text-xs font-bold text-error mt-1 mx-1 h-0'>{errors.password?.message}</p>
                        <input {...register('confirm')} type="password" placeholder="Confirm password"
                            className={`${setInputStyle(errors.confirm, dirtyFields.confirm)} input w-full max-w-xs mt-6 bg-primary`} />
                        <p className='text-xs font-bold text-error mt-1 mx-1 h-0'>{errors.confirm?.message}</p>
                        <button className="btn btn-accent text-font my-8">REGISTER</button>
                        <p className='text-xl text-center font-bold h-0 mb-4'>{message}</p>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Register }