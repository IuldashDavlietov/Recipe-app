import { NotFoundWrapper, NotFoundSpan } from "./style";
import { BackLink } from "./style";

export default function NotFound() {
  return (
    < NotFoundWrapper>
      <NotFoundSpan>404 Not Found</NotFoundSpan>
      <BackLink to='/'>Home</BackLink>
    </ NotFoundWrapper>
  )
}
