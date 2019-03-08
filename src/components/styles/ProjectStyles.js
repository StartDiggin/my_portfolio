import styled from "styled-components";

const ProjectPage = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);

  div {
    border: 1px solid red;
    display: grid;
    justify-content: center;
  }
`;

export default ProjectPage;
