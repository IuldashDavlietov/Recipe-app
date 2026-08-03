import { useParams, useLocation, useNavigate } from "react-router-dom"

export default function Details() {

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate()
  const recipe = location.state?.recipe;

  if (!recipe) {
    return (<div>
      <h2> Recipe #{id} not found...</h2>
      <button onClick={() => navigate('/')}> To Home</button>
    </div>
    )
  }

  return (
    <div>
      <h2>{recipe.label}</h2>

      <ul>
        {recipe.ingredientLines.map(
          (item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
    </div>
  )
}
