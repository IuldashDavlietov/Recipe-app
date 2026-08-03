import Form from "./Form";
import { HeaderContainer, HeaderTitle } from "./styleHeader";

export default function Header({ fetchRecipes, loading }) {
  return (
   <HeaderContainer>
      <HeaderTitle>Food App</HeaderTitle>
      <Form fetchRecipes={fetchRecipes} loading={loading}/>
    </HeaderContainer>
  )
}
