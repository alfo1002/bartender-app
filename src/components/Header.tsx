import { NavLink } from "react-router-dom"

export const Header = () => {
    return (
        <header className="bg-slate-800">
            <div className="mx-auto container px-5 py-16">
                <div className="flex justify-between items-center">
                    <div>
                        <img className="w-32" src="./logo_beer.png" alt="logo" />
                    </div>
                    <nav className="flex gap-4">
                        <NavLink
                            to="/"
                            className={({ isActive }) => isActive ? 'text-orange-300 uppercase font-bold' : 'text-white uppercase font-bold'}
                        >Inicio</NavLink>
                        <NavLink
                            className={({ isActive }) => isActive ? 'text-orange-300 uppercase font-bold' : 'text-white uppercase font-bold'}
                            to="/favorites"
                        >Favoritos</NavLink>
                    </nav>
                </div>
            </div>
        </header>
    )
}
