import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import RecipeCard from './RecipeCard';

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');

  const [query, setQuery] = useState('chicken');
  const [meal, setMeal] = useState('Breakfast');

  useEffect(() => {
    const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

    if (!query.trim()) return;

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        setErrorMsg('');

        const res = await axios.get(BASE_URL, {
          params: {
            type: 'public',
            q: query,
            mealType: meal,
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
          },
        });
        setRecipes(res.data.hits);
      }

      catch (error) {
        if (error.response?.status === 429) {
          setErrorMsg('Too many requests. Please wait a minute.');
        } else if (error.response?.status === 400) {
          setErrorMsg('Please enter a valid search term.');
        } else {
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
      <Header setQuery={setQuery} setMeal={setMeal} />

      {loading && <p>Loading...</p>}
      {errorMsg && <p>{errorMsg}</p>}
      {!loading && !errorMsg && recipes.map((item) => (
        <RecipeCard key={item.recipe.uri} recipe={item.recipe} />
      ))}
    </main>
  );
}