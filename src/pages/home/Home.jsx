import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import RecipeCard from './RecipeCard';
import homeImg from '../../assets/home.svg'

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const [query, setQuery] = useState('');
  const [meal, setMeal] = useState('');

  useEffect(() => {
    const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

    if (!query.trim() && !meal) return;

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setErrorMsg('');

        const params = {
          type: 'public',
          app_id: import.meta.env.VITE_APP_ID,
          app_key: import.meta.env.VITE_APP_KEY,
        };

        if (query.trim()) {
          params.q = query;
        }

        if (meal) {
          params.mealType = meal;
        }

        const res = await axios.get(BASE_URL, { params });
        setRecipes(res.data.hits);
      }

      catch (error) {
        if (error.response?.status === 429) {
          setErrorMsg('Too many requests. Please wait a minute.');
        }
        else if (error.response?.status === 400) {
          setErrorMsg('Please enter a valid search term.');
        }
        else {
          setErrorMsg('Something went wrong. Please try again later.');
        }
      }
      finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, [query, meal]);

  return (
    <main>
      <Header setQuery={setQuery} setMeal={setMeal} loading={loading} />

      {loading && <p>Loading recipes...</p>}

      {errorMsg && <p>{errorMsg}</p>}

      {!loading && !errorMsg && !query && !meal && (
        <div>
          <img src={homeImg} alt="Search recipes" />
          <p>Search for your favorite meals!</p>
        </div>
      )}

      {!loading && !errorMsg && query && recipes.length === 0 && (
        <p>No recipes found for "{query}". Try another term!</p>
      )}

      {!loading && !errorMsg && recipes.map((item) => (
        <RecipeCard key={item.recipe.uri} recipe={item.recipe} />
      ))}
    </main>
  );
}