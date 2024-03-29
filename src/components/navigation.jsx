import React from "react";
import Logo from "../../src/logo.svg";
import { ReactSVG } from "react-svg";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#header" style={{ padding: "0px" }}>
            {/* <img className="logo-svg" src={Logo} alt="logo" height="63" /> */}
            <ReactSVG src={Logo} className="logo-svg" />
            {/* <Logo /> */}
            {/* <img src="img/logo.jpg" alt="..." height="63" /> */}
            {/* <svg></svg> */}
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#header" className="page-scroll">
                Domů
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Kontakt
              </a>
            </li>
            <li>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/people/ondrej_aneurysm/100069920680883/">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/ondrej_aneurysm/">
                      <i className="fa fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/@ondrejaneurysm4454">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://open.spotify.com/artist/0ukbn3JHPURPlL4y28ACJZ?si=KAOEyuKuQ6W78L5zPn7yDw">
                      <i className="fa fa-spotify"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
