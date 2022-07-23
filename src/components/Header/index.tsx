import React from "react";

import { Container } from "../../assets/styles/generalStyles";

import { HeaderComponent } from "./styles";

import logo from "../../assets/images/logo.svg";
const Header: React.FC = () => {
  return (
    <HeaderComponent>
      <Container>
        {/* <Logo /> */}
        <img src={logo} alt="" />
      </Container>
    </HeaderComponent>
  );
};

export default Header;
