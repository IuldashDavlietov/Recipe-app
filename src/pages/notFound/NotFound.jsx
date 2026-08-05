import { Link } from "react-router-dom";
import { NotFoundWrapper } from "./style";

export default function NotFound() {
  return (
    < NotFoundWrapper>
      <span>404 Not Found</span>
      <Link to='/'>Home</Link>
    </ NotFoundWrapper>
  )
}
