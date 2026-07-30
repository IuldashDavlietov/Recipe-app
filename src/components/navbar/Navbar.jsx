import { NavWrapper, MenuWrapper, LogoLink, StyledNavLink } from "./NavbarStyle";

export default function Navbar() {
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
        <StyledNavLink to="/login">Logout</StyledNavLink>
      </MenuWrapper>
    </NavWrapper>
  );
}