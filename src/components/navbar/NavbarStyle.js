import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const NavWrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2.5rem;
  background-color: #f1f5f9;
  border-bottom: 1px solid #e2e8f0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`;

export const MenuWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  a {
    text-decoration: none;
    color: #475569;
    font-weight: 500;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #f97316;
    }
  }
`;

export const LogoLink = styled(Link)`
  text-decoration: none;
  color: #0f172a;
  font-size: 1.5rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const StyledNavLink = styled(NavLink)`
  text-decoration: none;
  color: #475569;
  font-weight: 500;
  transition: color 0.2s ease-in-out;

  &:hover {
    color: #f97316;
  }

  &.active {
    color: #f97316;
    font-weight: 700;
  }
`;