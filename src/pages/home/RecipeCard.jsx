import { useNavigate } from "react-router-dom";
import { RecipeCardContainer, RecipeImage, RecipeTitle, RecipeCalories, RecipeButton } from "./styleHome"

export default function RecipeCard({ recipe }) {

  const {
    label,
    image,
    calories
  } = recipe;

  const navigate = useNavigate();

  const handleDetails = () => {
    const recipeId = recipe.uri.split('_')[1];
    navigate(`/details/${recipeId}`, {
      state: { recipe }
    })
  }

  return (
    <RecipeCardContainer>
      <RecipeImage src={image} alt={label} />
      <RecipeTitle>{label}</RecipeTitle>
      <RecipeCalories>{Math.round(calories)} kcal</RecipeCalories>
      <RecipeButton onClick={handleDetails}> View More</RecipeButton>
    </RecipeCardContainer>
  )
}
