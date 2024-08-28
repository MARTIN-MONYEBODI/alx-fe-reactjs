import React from 'react';
import { useRecipeStore } from '../recipeStore';
import { Link } from 'react-router-dom';

const RecipeList = () => {
  const filteredRecipes = useRecipeStore(state => state.filteredRecipes);
  const filterRecipes = useRecipeStore(state => state.filterRecipes);

  React.useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  return (
    <div>
      {filteredRecipes.map(recipe => (
        <div key={(link unavailable)}>
          <h3><Link to={`/recipes/${(link unavailable)}`}>{recipe.title}</Link></h3>
          <p>{recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
