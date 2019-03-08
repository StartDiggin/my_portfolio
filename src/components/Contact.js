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
            <div className="left">
              <h2>Johnny Gonzales</h2>
              <h2>J.G.Dean97@gmail.com</h2>
              <h2>(971) 570-1978</h2>
            </div>
            <div className="right">
              <form action="contact">
                <label htmlFor="name">Name:</label>
                <input type="text" placeholder="Name" />
                <hr />
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter email" />
                <hr />
                <label htmlFor="msg">Enter Message:</label>
                <br />
                <textarea
                  className="msg"
                  name="msg"
                  id="msg"
                  cols="50"
                  rows="20"
                >
                  Enter Message
                </textarea>
              </form>
            </div>
          </div>
        </ContactPage>
      </>
    );
  }
}

export default Contact;
