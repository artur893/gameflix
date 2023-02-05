import { Nav } from "./factoriesComps/Nav"
import { Map } from "./factoriesComps/Map"
import { Routes, Route } from 'react-router-dom'
import { RequireAuth } from 'react-auth-kit'

function Factories() {

    return (
        <Routes>
            <Route path='/map' element={<RequireAuth loginPath='/login'><Map /></RequireAuth>} />
            <Route path='/army' element={<RequireAuth loginPath='/login'><Map /></RequireAuth>} />
            <Route path='/base' element={<RequireAuth loginPath='/login'><Map /></RequireAuth>} />
            <Route path='/trade' element={<RequireAuth loginPath='/login'><Map /></RequireAuth>} />
        </Routes>
    )
}



export { Factories }