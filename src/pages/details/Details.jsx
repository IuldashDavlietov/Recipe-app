import { useLocation, useNavigate } from 'react-router-dom';
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

  const recipe = location.state?.recipe;

  if (!recipe) {
    return (
      <DetailsContainer>
        <RecipeTitle>Рецепт не найден</RecipeTitle>
        <BackButton onClick={() => navigate('/')}>Home</BackButton>
      </DetailsContainer>
    );
  }

  return (
    <DetailsContainer>
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
    </DetailsContainer>
  );
};

export default Details;