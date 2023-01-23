import { Nav } from '../components/Nav'

function Register(props) {
    return (
        <div className='w-screen h-screen bg-bg'>
            <Nav />
            <div className="hero w-screen h-full text-font bg-[url('https://www.neuropeakpro.com/wp-content/uploads/2018/12/Blog-42.jpg')]">
                <div className='bg-bg/70'>
                    <h1 className='px-16 py-12 text-3xl font-bold'>Register</h1>
                    <form action="" className='flex flex-col gap-4 px-16 pb-12'>
                        <input type="text" placeholder="Login" className="input input-primary w-full max-w-xs bg-primary" />
                        <input type="text" placeholder="E-mail" className="input input-primary w-full max-w-xs bg-primary" />
                        <input type="text" placeholder="Password" className="input input-primary w-full max-w-xs bg-primary" />
                        <input type="text" placeholder="Confirm password" className="input input-primary w-full max-w-xs bg-primary" />
                        <button className="btn btn-accent text-font my-8" onClick={(e) => e.preventDefault()}>REGISTER</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export { Register }