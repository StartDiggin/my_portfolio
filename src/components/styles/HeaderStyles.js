import styled from "styled-components";

const HeaderStyles = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  .links {
    padding: 25px;
    border: solid 1px rgba(255, 255, 255, 0.8);
  }
`;

export default HeaderStyles;
