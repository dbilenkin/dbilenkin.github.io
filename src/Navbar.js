// src/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

function Navbar({ backgroundColor, textColor, fontFamily }) {
  // Styled Components
  const Nav = styled.nav`
    width: 100%;
    background-color: ${backgroundColor};
    color: ${textColor};
    font-family: ${fontFamily};
    padding: 10px 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  `;

  const NavContent = styled.div`
    max-width: 1200px;
    margin: 0 auto;
  `

  const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  `;

  const NavItem = styled.li`
    margin-left: 20px;
  `;

  const StyledNavLink = styled(NavLink)`
    color: ${textColor};
    text-decoration: none;
    font-weight: bold;

    &.active {
      border-bottom: 2px solid ${textColor};
    }

    &:hover {
      color: #007bff;
    }
  `;

  return (
    <Nav>
      <NavContent>
        <NavList>
          <NavItem>
            <StyledNavLink exact to="/">
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/projects">Projects</StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/concerts">Concerts</StyledNavLink>
          </NavItem>
        </NavList>
      </NavContent>
    </Nav>
  );
}

export default Navbar;
