import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RecipeList from './components/RecipeList';
import SearchBar from './components/SearchBar';
import AddRecipeForm from './components/AddRecipeForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RecipeDetails from './components/RecipeDetails';


function App() {

  return (
    <BrowserRouter>
       <div>
        <SearchBar />
        <RecipeList />
      </div>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
