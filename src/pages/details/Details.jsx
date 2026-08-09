import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  DetailsContainer,
  HeaderArea,
  BackButton,
  RecipeTitle,
  DetailsCard,
  InfoColumn,
  CalorieBadge,
  TagGroup,
  Tag,
  ImageColumn,
  IngredientsColumn,
  SourceButton
} from './styleDetails';

const Details = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();

  const [recipe, setRecipe] = useState(location.state?.recipe || null);
  const [loading, setLoading] = useState(!location.state?.recipe);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    const fetchRecipebyId = async () => {
      try {
        const res = await axios.get(
          `https://api.edamam.com/api/recipes/v2/${id}`,
          {
            params: {
              type: 'public',
              app_id: import.meta.env.VITE_APP_ID,
              app_key: import.meta.env.VITE_APP_KEY,
            }
          }
        );
        setRecipe(res.data.recipe);
      } catch (error) {
        console.error(error);
        if (error.response?.status === 429) {
          setErrorMsg('Too many requests. Please try again in 1-2 minutes');
        } else {
          setErrorMsg('Recipe not found');
        }
      } finally {
        setLoading(false);
      }
    };

    if (!recipe && id) {
      fetchRecipebyId();
    }
  }, [id, recipe]);

  return (
    <DetailsContainer>
      {loading && (
        <RecipeTitle>Loading recipe...</RecipeTitle>
      )}

      {!loading && errorMsg && (
        <>
          <RecipeTitle>{errorMsg}</RecipeTitle>
          <BackButton onClick={() => navigate('/')}>← Home</BackButton>
        </>
      )}

      {!loading && !errorMsg && recipe && (
        <>
          <HeaderArea>
            <BackButton onClick={() => navigate(-1)}>← Back</BackButton>
            <RecipeTitle>{recipe.label}</RecipeTitle>
          </HeaderArea>

          <DetailsCard>
            <InfoColumn>
              <h3>Nutrients</h3>
              <CalorieBadge>🔥 {Math.round(recipe.calories)} kcal</CalorieBadge>

              {recipe.totalNutrients?.FAT && (
                <p><strong>Fat:</strong> {Math.round(recipe.totalNutrients.FAT.quantity)}g</p>
              )}

              {recipe.totalNutrients?.CHOCDF && (
                <p><strong>Carbs:</strong> {Math.round(recipe.totalNutrients.CHOCDF.quantity)}g</p>
              )}

              {recipe.totalNutrients?.PROCNT && (
                <p><strong>Protein:</strong> {Math.round(recipe.totalNutrients.PROCNT.quantity)}g</p>
              )}

              <TagGroup>
                {recipe.healthLabels?.slice(0, 6).map((label, index) => (
                  <Tag key={index}>{label}</Tag>
                ))}
              </TagGroup>
            </InfoColumn>

            <ImageColumn>
              <img src={recipe.image} alt={recipe.label} />
            </ImageColumn>

            <IngredientsColumn>
              <h3>Ingredients</h3>
              <ol>
                {recipe.ingredientLines?.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
              {recipe.url && (
                <SourceButton href={recipe.url} target="_blank" rel="noreferrer">
                  View Full Recipe ↗
                </SourceButton>
              )}
            </IngredientsColumn>
          </DetailsCard>
        </>
      )}
    </DetailsContainer>
  );
};

export default Details;