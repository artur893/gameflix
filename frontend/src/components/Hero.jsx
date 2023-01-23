import { Link } from 'react-router-dom'

function Hero() {
    return (
        <div className="hero w-screen h-full text-font bg-[url('https://www.neuropeakpro.com/wp-content/uploads/2018/12/Blog-42.jpg')]">
            <div className="hero-content text-center">
                <div className="max-w-36">
                    <h1 className="text-6xl font-bold">Unlimited games</h1>
                    <p className="text-3xl py-6">Play anywhere. Get fun anytime.</p>
                    <p className="pb-6">Ready to play? Click the button and register an account.</p>
                    <Link to='/register'><button className="btn btn-accent btn-wide text-font">Get Started</button></Link>
                </div>
            </div>
        </div>
    )
}

export { Hero }