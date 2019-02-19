// ./src/components/Header/index.js
import React from "react";
import Link from "gatsby-link";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Container } from "../styledComponents/layout";

const Header = ({ background, title }) => (
  <HeaderContainer background={background}>
    <Container>
      <Heading1>
        <StyledLink to="/">{title}</StyledLink>
      </Heading1>
    </Container>
  </HeaderContainer>
);

const BACKGROUND = "background-color: #20232a";

Header.defaultProps = {
  background: BACKGROUND,
  title: "Polling App2"
};

Header.propTypes = {
  background: PropTypes.string,
  title: PropTypes.string
};

export default Header;

const HeaderContainer = styled.header`
  ${props => props.background};
  margin-bottom: 1.45rem;
`;

const Heading1 = styled.h1`
  margin: 0;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;
