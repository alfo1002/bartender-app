import { StateCreator } from "zustand"
import { Recipe } from "../types"
import { createRecipeSlice, RecipesSliceType } from "./recipeSlice"

export type FavoritesSliceType = {
    favorites: Recipe[]
    handleClickFavorite: (recipe: Recipe) => void
    favoriteExists: (id: Recipe['idDrink']) => boolean
    loadFromLocalStorage: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & RecipesSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
    favorites: [],
    handleClickFavorite: (recipe) => {
        if (get().favorites.some(favorite => favorite.idDrink === recipe.idDrink)) {
            set(state => ({
                favorites: state.favorites.filter(favorite => favorite.idDrink !== recipe.idDrink)
            }))
        } else {
            set(state => ({
                favorites: [...state.favorites, recipe]
            }))
        }
        createRecipeSlice(set, get, api).closeModal()
        localStorage.setItem('favorites', JSON.stringify(get().favorites))
    },
    favoriteExists: (id) => {
        return get().favorites.some(favorite => favorite.idDrink === id)
    },
    loadFromLocalStorage: () => {
        const storeFavorites = localStorage.getItem('favorites')
        if (storeFavorites) {
            set({
                favorites: JSON.parse(storeFavorites)
            })
        }
    }
})