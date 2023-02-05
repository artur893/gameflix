import { Link } from "react-router-dom"

function Nav() {
    return (
        <header>
            <nav className="flex gap-8 justify-center p-4">
                <Link to='/factories/map'><button className="btn btn-outline w-48 text-lg">Map</button></Link>
                <Link to='/factories/army'><button className="btn btn-outline w-48 text-lg">Army</button></Link>
                <Link to='/factories/base'><button className="btn btn-outline w-48 text-lg">Base</button></Link>
                <Link to='/factories/trade'><button className="btn btn-outline w-48 text-lg">Trade</button></Link>
                <Link to='/factories/home'><button className="btn btn-outline w-48 text-lg">Gameflix</button></Link>
            </nav>
        </header>)
}

export { Nav }