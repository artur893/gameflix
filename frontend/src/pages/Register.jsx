import { Nav } from '../components/Nav'
import { useForm } from 'react-hook-form'

function Register(props) {
    const { register, handleSubmit, formState: { errors } } = useForm()

    function onSubmit(data) {
        console.log(data)
    }

    console.log(errors)

    return (
        <div className='w-screen h-screen bg-bg'>
            <Nav />
            <div className="hero w-screen h-full text-font bg-[url('https://www.neuropeakpro.com/wp-content/uploads/2018/12/Blog-42.jpg')]">
                <div className='bg-bg/70'>
                    <h1 className='px-16 py-12 text-3xl font-bold'>Sign Up</h1>
                    <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col px-16 pb-12'>
                        <input {...register('login', { required: 'Field must be fulfilled' })} type="text" placeholder="Login" className="input input-primary w-full max-w-xs bg-primary" />
                        <p className='text-xs text-accent mt-1'>{errors.login?.message}</p>
                        <input {...register('email', { required: 'Field must be fulfilled' })} type="text" placeholder="E-mail" className="input input-primary w-full max-w-xs mt-6 bg-primary" />
                        <p className='text-xs text-accent mt-1'>{errors.email?.message}</p>
                        <input {...register('password', { required: 'Field must be fulfilled', minLength: { value: 8, message: 'Password must have at least 8 characters' } })} type="text" placeholder="Password" className="input input-primary w-full max-w-xs mt-6 bg-primary" />
                        <p className='text-xs text-accent mt-1'>{errors.password?.message}</p>
                        <input {...register('confirm', { required: 'Field must be fulfilled' })} type="text" placeholder="Confirm password" className="input input-primary w-full max-w-xs mt-6 bg-primary" />
                        <p className='text-xs text-accent mt-1'>{errors.confirm?.message}</p>
                        <button className="btn btn-accent text-font my-8">REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Register }