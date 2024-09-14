import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  
  // Adds a new recipe to the recipes array
  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  
  // Replaces the entire recipes array with a new array
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),

  // Updates a recipe in the recipes array based on its id
  updateRecipe: (updatedRecipe) => set(state => ({
    recipes: state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    )
  })),

  // Deletes a recipe from the recipes array based on its id
  deleteRecipe: (recipeId) => set(state => ({
    recipes: state.recipes.filter(recipe => recipe.id !== recipeId)
  })),

  // Adds a recipe ID to the favorites array
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  
  // Removes a recipe ID from the favorites array
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  recommendations: [],
  
  // Generates recommendations based on favorite recipes
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;