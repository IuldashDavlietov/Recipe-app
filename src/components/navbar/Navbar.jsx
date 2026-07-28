import { Link, NavLink } from "react-router-dom";
import { NavWrapper } from "./style";
import { MenuWrapper } from "./style";


export default function Navbar() {
  const linkClass = ({ isActive }) => (isActive ? 'active' : '');
  return (
    <NavWrapper>
      <Link to="/" className="logoLink"><i>{'<ED8EN/>'}</i>
        <span> Recipe</span>
      </Link>

      <MenuWrapper>
        <NavLink to='/' end className={linkClass}>Home</NavLink>
        <NavLink to='/about' className={linkClass}>About</NavLink>
        <a
          href="https://github.com/IuldashDavlietov"
          target="_blank"
          rel="noopener noreferrer">Github</a>
        <NavLink to='/login' className={linkClass}>Logout</NavLink>
      </MenuWrapper>
      
    </NavWrapper>
  )
}
