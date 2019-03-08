import React, { Component } from "react";
import Header from "./Header";
import ContactPage from "./styles/ConactStyles";

class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <ContactPage>
          <div className="contact">
            <div className="right">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestias porro tempora, provident a eius iusto cumque sapiente,
                ab magnam impedit error? Aperiam amet magnam enim rem velit
                repellendus illum ea sed eum, soluta pariatur vitae.
              </h1>
            </div>
            <div className="left">
              <h1>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                eveniet ea nobis corrupti veniam perferendis tenetur modi,
                doloremque consectetur, laborum dolore nisi a dolores illo nemo
                amet laudantium iste perspiciatis magni temporibus.
                Exercitationem, accusamus eaque?
              </h1>
            </div>
          </div>
        </ContactPage>
      </>
    );
  }
}

export default Contact;
