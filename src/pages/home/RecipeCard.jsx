

export default function RecipeCard({ recipe }) {

  const {
    label,
    image,
    calories
  } = recipe

  return (
    <div>
      <p>{label}</p>
      <img src={image} alt={label} />
      <span>{Math.round(calories)}</span>
    </div>
  )
}
