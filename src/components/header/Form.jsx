import { useState } from "react";
import { FormContainer, SearchInput, SelectCategory, SearchButton } from "./styleHeader";

export default function Form({ fetchRecipes, loading }) {

  const [queryType, setQueryType] = useState('');
  const [mealType, setMealType] = useState('');
  const isFormEmpty = !queryType.trim() && !mealType

  const mealTypes = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack',
    'Teatime',
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(queryType, mealType);
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <SearchInput type="text"
        value={queryType}
        onChange={(e) => setQueryType(e.target.value)} />

      <SearchButton type='submit'
        disabled={loading || isFormEmpty}>{loading ? 'Searching...' : 'Search'}</SearchButton>

      <SelectCategory
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}>
        <option value=""> Select Category</option>
        {mealTypes.map((meal) => (
          <option key={meal} value={meal}>{meal}</option>
        ))}
      </SelectCategory>
    </FormContainer>
  )
}
