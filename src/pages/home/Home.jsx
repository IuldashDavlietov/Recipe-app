import { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../../components/header/Header';
import RecipeCard from './RecipeCard';

export default function Home() {

  const [recipes, setRecipes] = useState([]);

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

    const fetchRecipes = async () => {
      try {
        setLoading(true);
        const res = await axios.get(BASE_URL,
          {
            params: {
              type: 'public',
              q: 'chicken',
              app_id: import.meta.env.VITE_APP_ID,
              app_key: import.meta.env.VITE_APP_KEY,
            }
          }
        );
        setRecipes(res.data.hits);
      }
      catch (error) {
        console.error('Something wromg:', error)
      }
      finally {
        setLoading(false)
      }
    }
    fetchRecipes();
  }, [])


  return (
    <>
      <Header />

      {loading ? (
        <h2>Loading...</h2>
      ) : (recipes.map((item) => (
        <RecipeCard
          key={item.recipe.uri}
          recipe={item.recipe} />))
      )}
    </>
  )
}