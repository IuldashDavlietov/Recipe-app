import Form from "./Form";

export default function Header({ setQuery, setMeal, loading }) {
  return (
    <header>
      <h1>Food App</h1>
      <Form setQuery={setQuery} setMeal={setMeal} loading={loading}/>
    </header>
  )
}
