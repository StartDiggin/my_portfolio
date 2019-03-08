import styled from "styled-components";

const ContactPage = styled.div`
  display: grid;
  grid-template-columns: 3fr;
  width: 75%;
  margin: 50px auto;
  border: 1px solid red;

  .contact {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .left {
    padding: 2rem;
  }
  .right {
    display: grid;
    justify-content: center;
    border: 1px solid green;
    padding: 2rem;
    label {
      color: white;
      margin-right: 5px;
    }
    .msg {
      margin-top: 10px;
    }
  }
`;

export default ContactPage;
