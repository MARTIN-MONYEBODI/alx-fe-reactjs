import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  favorites: [],
  addRecipe: (recipe) => set(state => ({ recipes: [...state.recipes, recipe] })),
  setRecipes: (newRecipes) => set({ recipes: newRecipes }),
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  recommendations: [],
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export default useRecipeStore;