import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Age from './pages/age';
import Loader from './components/loader';

const Home = lazy(() => import('./pages/home'));
const Recipes = lazy(() => import('./pages/recipes'));
const RecipeDetails = lazy(() => import('./pages/recipeDetails'));

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <BrowserRouter>
        <Routes>
          <Route
            path='/'
            element={<Age />}
          />

          <Route
            path='/home'
            element={<Home />}
          />

          <Route
            path='/recipes'
            element={<Recipes />}
          />

          <Route
            path='/recipes/:recipeName'
            element={<RecipeDetails />}
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
