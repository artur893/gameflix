import { useSignOut } from 'react-auth-kit'
import { Link } from 'react-router-dom'
import { useIsAuthenticated } from 'react-auth-kit'

function Nav() {
    const signOut = useSignOut()
    const isAuthenticated = useIsAuthenticated()

    function displayLoginLogoutBtn() {
        if (isAuthenticated()) {
            return <button className="btn btn-accent m-8 text-font" onClick={signOut}>LOGOUT</button>
        } else {
            return <Link to='/login'><button className="btn btn-accent m-8 text-font">LOGIN</button></Link>
        }
    }

    return (
        <header className="flex justify-between w-full absolute">
            <Link to='/'><h1 className="text-accent font-bold text-5xl m-8">GAMEFLIX</h1></Link>
            {displayLoginLogoutBtn()}
        </header>
    )
}

export { Nav }