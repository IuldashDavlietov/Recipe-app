import Header from '../../components/header/Header';
import RecipeCard from './RecipeCard';
import homeImg from '../../assets/home.svg';
import { useRecipes } from '../../hooks/useRecipes';
import {
  MainContainer,
  ImgContainer,
  ErrorMessage,
  StatusText,
  CardsContainer
} from './styleHome';


export default function Home() {
  const {
    recipes,
    loading,
    errorMsg,
    fetchRecipes
  } = useRecipes();

  return (
    <MainContainer>
      <Header fetchRecipes={fetchRecipes} loading={loading} />

      {loading && <StatusText>Loading recipes...</StatusText>}
      {errorMsg && <ErrorMessage>{errorMsg}</ErrorMessage>}

      {!loading && !errorMsg && recipes.length === 0 && (
        <ImgContainer>
          <img src={homeImg} alt="Search recipes" />
          <p>Search for your favorite meals!</p>
        </ImgContainer>
      )}

      {!loading && !errorMsg && (
        <CardsContainer>
          {recipes.map((item) => (
            <RecipeCard key={item.recipe.uri} recipe={item.recipe} />))}
        </CardsContainer>
      )}
    </MainContainer>
  );
}