import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'
import { Info } from '../components/InfoSection'
import { Link } from 'react-router-dom'

function Heropage() {
    return (
        <>
            <Nav />
            <Hero />
            <Info title='Enjoy on your PC.' description='Play browser games, whenever you want.' />
            <Info title='Singleplayer games.' description='Pick a game and get started your journey.' />
            <Info title='Multiplayer games.' description='Compete with players around the world.' />
            <Info title='Track your progress.' description='Create an account and save state of your games.' />
            <Info title='Earn GameCoins.' description='Earn coins by playing and unlock additional features.' />
            <div className="bg-bg border-t-8 border-zinc-800 h-56 flex flex-col items-center justify-center">
                <p className="pb-6 font-bold">Ready to play? Click the button and register an account.</p>
                <Link to='/register'><button className="btn btn-accent btn-wide text-font">Get Started</button></Link>
            </div>
        </>
    )
}

export { Heropage }