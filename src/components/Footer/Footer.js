import React from "react";
import "./Footer.css";
import {
  TiSocialFacebookCircular,
  TiSocialGithubCircular,
  TiArrowUpThick,
} from "react-icons/ti";
const Footer = () => {
  return (
    <section className="Footer" id="about">
      <div className="footercontainer">
        <div className="socials">
          <a
            href="https://www.facebook.com/Cznxp/"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialFacebookCircular />
          </a>
          <a
            href="https://github.com/CzNX?tab=repositories"
            target="_blank"
            rel="noreferrer"
          >
            <TiSocialGithubCircular />
          </a>
        </div>
        <div className="info">
          <p className="copyright">&copy; 2021. All Rights Reserved</p>
        </div>

        <div className="up">
          <a href="#home">
            <TiArrowUpThick className="footericon" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
