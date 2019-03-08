import styled from "styled-components";

const HomePage = styled.div`
  width: 100%;
  background: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: 1fr 2fr 1fr;
  justify-items: center;

  .title {
    display: grid;
    justify-items: center;
    margin-top: 150px;
  }

  .links {
    position: relative;
    top: 0;
    transition: top ease 0.5s;
    color: grey;
    &:hover {
      color: white;
      top: -10px;
      box-shadow: 0 0 10px 1px yellow;
    }
    @media (max-width: 700px) {
      display: block;
    }
  }

  .nav {
    transform: skew(-20deg);
    margin-top: 150px;
    a {
      text-decoration: none;
      margin: 10px;
      border: solid 1px white;
      padding: 18px;
    }
    @media (max-width: 700px) {
      display: block;
      transform: skew(0deg);
    }
  }
`;

export default HomePage;
