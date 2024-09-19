import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';

const RecipeDetail = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe based on the ID from the URL
    const recipeData = data.find(item => item.id === parseInt(id));
    setRecipe(recipeData);
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col items-center shadow-lg p-6 bg-white rounded-lg">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-lg shadow-md mb-4"
        />
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <p className="text-lg mb-6">{recipe.summary}</p>

        <div className="w-full md:w-2/3 lg:w-1/2">
          <h2 className="text-2xl font-bold mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 shadow-sm p-4 bg-gray-50 rounded-lg">
            {recipe.ingredients && recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">{ingredient}</li>
            ))}
          </ul>

          <h2 className="text-2xl font-bold mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 shadow-sm p-4 bg-gray-50 rounded-lg">
            {recipe.instructions && recipe.instructions.map((step, index) => (
              <li key={index} className="text-gray-700">{step}</li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;