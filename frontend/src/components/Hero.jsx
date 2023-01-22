function Hero() {
    return (
        <div className="hero w-screen h-full text-font bg-[url('https://www.neuropeakpro.com/wp-content/uploads/2018/12/Blog-42.jpg')]">
            <div className="hero-content text-center">
                <div className="max-w-md">
                    <h1 className="text-5xl font-bold">Unlimited games</h1>
                    <p className="text-3xl py-6">Play anywhere. Get fun anytime</p>
                    <p className="pb-6">Ready to play? Click the button and register an account.</p>
                    <button className="btn btn-accent btn-wide text-font">Get Started</button>
                </div>
            </div>
        </div>
    )
}

export { Hero }