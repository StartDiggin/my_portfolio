import React, { Component } from "react";
import Header from "./Header";
import AboutPage from "./styles/AboutStyles";

class About extends Component {
  render() {
    return (
      <>
        <Header />
        <AboutPage>
          <div className="about">
            <h1>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
              illum architecto quia eaque corrupti ducimus. Nemo voluptas
              quaerat quo enim saepe eveniet vel quasi labore, eaque alias
              aperiam, modi omnis, quam tempore dolorem soluta harum mollitia
              repudiandae hic reprehenderit dolorum. Molestias ut laborum minus
              odio enim quas animi pariatur quia. Architecto saepe corporis
              tempore et sequi quis recusandae nisi assumenda? Nam neque error
              in autem sed obcaecati tempore at doloribus, adipisci voluptates
              odit, dicta voluptatibus debitis illo aliquam quia expedita eius
              itaque labore quisquam necessitatibus distinctio omnis nisi
              deleniti. Harum nobis eveniet atque esse! Id harum optio iusto
              cupiditate! Repellat.{" "}
            </h1>
          </div>
        </AboutPage>
      </>
    );
  }
}

export default About;
