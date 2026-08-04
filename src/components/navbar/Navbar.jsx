import { useNavigate } from "react-router-dom";
import { NavWrapper, MenuWrapper, LogoLink, StyledNavLink } from "./NavbarStyle";

export default function Navbar() {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login')
  }

  return (
    <NavWrapper>
      <LogoLink to="/">
        <i>{'<ED8EN/>'}</i>
        <span>Recipe</span>
      </LogoLink>

      <MenuWrapper>
        <StyledNavLink to="/" end>Home</StyledNavLink>
        <StyledNavLink to="/about">About</StyledNavLink>
        <a
          href="https://github.com/IuldashDavlietov"
          target="_blank"
          rel="noopener noreferrer"
        > Github
        </a>
        <StyledNavLink to='/login' onClick={handleLogout}>Logout</StyledNavLink>
      </MenuWrapper>
    </NavWrapper>
  );
}