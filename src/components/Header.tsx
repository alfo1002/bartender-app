import { useMemo } from "react"
import { NavLink, useLocation } from "react-router-dom"

export const Header = () => {

    const { pathname } = useLocation()

    const isHome = useMemo(() => pathname === '/', [pathname])

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
                {isHome && (
                    <form className="md:w-1/2 2xl:w-1/3 bg-orange-400 my-32 p-10 rounded-lg shadow space-y-6">
                        <div className="space-y-4">
                            <label
                                htmlFor="ingredient"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Nombre o Ingredientes
                            </label>
                            <input
                                id="ingredient"
                                type="text"
                                name="ingredient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                                placeholder="Nombre o ingrediente"
                            />
                        </div>
                        <div className="space-y-4">
                            <label
                                htmlFor="category"
                                className="block text-white uppercase font-extrabold text-lg"
                            >Categoria
                            </label>
                            <select
                                id="category"
                                name="ingrcategoryedient"
                                className="p-3 w-full rounded-lg focus:outline-none"
                            >
                                <option>Seleccione:</option>
                            </select>
                        </div>
                        <input
                            type="submit"
                            value='Buscar Receta'
                            className="cursor-pointer bg-white text-orange-400 uppercase font-bold p-3 rounded-lg w-full
                            hover:bg-orange-300 hover:text-white"
                        />

                    </form>
                )
                }
            </div>
        </header>
    )
}
