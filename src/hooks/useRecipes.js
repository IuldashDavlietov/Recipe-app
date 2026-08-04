import axios from "axios";
import { useState } from "react";

  const BASE_URL = 'https://api.edamam.com/api/recipes/v2';

export const useRecipes = () => {

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const fetchRecipes = async (query ='', meal='') => {
        if (!query.trim() && !meal) return;
        
        const params = {
            type: 'public',
            app_id: import.meta.env.VITE_APP_ID,
            app_key: import.meta.env.VITE_APP_KEY,
        };
        try {
            setLoading(true)
            setErrorMsg('')

            if (query.trim()) { params.q = query.trim(); }
            if (meal) { params.mealType = meal;}
            
            const res = await axios.get(BASE_URL, { params })
            setRecipes(res.data.hits)
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
    }
    return { recipes, loading, errorMsg, fetchRecipes }
}

