import { Link } from 'react-router-dom'

function Nav() {
    return (
        <header className="flex justify-between w-full absolute">
            <Link to='/'><h1 className="text-accent font-bold text-5xl p-8">GAMEFLIX</h1></Link>
            <Link to='/login'><button className="btn btn-accent m-8 text-font">LOGIN</button></Link>
        </header>
    )
}

export { Nav }