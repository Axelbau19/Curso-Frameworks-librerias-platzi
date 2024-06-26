import React from "react";
import styled from "styled-components";
const StyledForm = styled.form`
  font-family: courier;
  margin: 0 50px 25px;
  padding: 10px 25px 25px;
  text-align: center;
  transform: scale(1);
  transition: transform 0.3s;
  //& sirve para referirse a uno mismo
  &:hover {
    transform: scale(1.2);
  }
`;
const StyledButton = styled.button`
  cursor: pointer;
  padding: 5px 10px;
  border: 1px solid transparent;
  transition: 0.15s border-color
   &:hover {
    border-color: ${(p) => p.theme.color2};
  }
  &[disabled]{
    background: ${(p) => p.theme.color2};
  }
`;
export default function Form(props) {
  const { movie } = props;
  //Estado inicial
  const [quantity, setquantity] = React.useState(0);
  return (
    <StyledForm onMouseEnter={() => props.updateTheme()}>
      <h3>{movie.name}</h3>
      <StyledButton
        type="button"
        onClick={() => setquantity(quantity - 1)}
        disabled={quantity == 0}
      >
        -
      </StyledButton>
      {quantity}
      <StyledButton
        type="button"
        onClick={() => setquantity(quantity + 1)}
        disabled={quantity == movie.availableTicke}
      >
        +
      </StyledButton>
    </StyledForm>
  );
}
