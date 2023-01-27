import { Nav } from '../components/Nav'
import { Hero } from '../components/Hero'

function Home() {
    return (
        <div className='w-screen h-screen bg-bg'>
            <Nav />
            <Hero />
        </div>
    )
}

export { Home }