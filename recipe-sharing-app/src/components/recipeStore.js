import create from 'zustand'

const useRecipeStore = create(set => ({
  recipes: [],
  addRecipe: (newRecipe) => set(state => ({ recipes: [...state.recipes, newRecipe] })),
  deleteRecipe: (id) => set(state => ({ recipes: state.recipes.filter(recipe => (link unavailable) !== id) })),
  updateRecipe: (updatedRecipe) => set(state => ({ recipes: state.recipes.map(recipe => (link unavailable) === (link unavailable) ? updatedRecipe : recipe) })),
  setRecipes: (recipes) => set({ recipes })
}));

export default useRecipeStore;