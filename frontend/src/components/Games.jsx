import { Link } from "react-router-dom"

function Games() {
    return (
        <div className="bg-bg h-screen">
            <a href="http://playcardmagic.eu">Cardmagic</a>
            <Link to='/factories/base'><button className="btn btn-accent btn-wide text-font">Factories</button></Link>

        </div>
    )
}

export { Games }