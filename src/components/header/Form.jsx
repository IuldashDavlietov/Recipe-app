import { useState } from "react";

export default function Form({ setQuery, setMeal, loading }) {

  const [queryType, setQueryType] = useState('');
  const [mealType, setMealType] = useState('Breakfast');

  const mealTypes = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Snack',
    'Teatime',
  ]

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(queryType);
    setMeal(mealType);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={queryType}
        onChange={(e) => setQueryType(e.target.value)} />

      <button type='submit'
        disabled={loading}>{loading ? 'Searching...' : 'Search'}</button>

      <select
        value={mealType}
        onChange={(e) => setMealType(e.target.value)}>
        {mealTypes.map((meal) => (
          <option key={meal} value={meal}>{meal}</option>
        ))}
      </select>
    </form>
  )
}
