import React from "react";
import Typical from "react-typical";

const About = () => {
  return (
    <div className="text">
      <Typical
        className="h1"
        steps={[
          "Hi, Visitor",
          800,
          "Welcome 👋",
          2000,
          "Have a Good Day 👍",
          3000,
        ]}
        // steps={['Hello', 1000, 'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
    </div>
  );
};

export default About;
