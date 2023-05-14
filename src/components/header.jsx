import React from "react";

export const Header = (props) => {
  const openYt = () => {
    window.open("https://youtube.com/watch?v=4vPwnsPyLW4");
  };

  return (
    <header id="header">
      <div className="intro">
        <div className="background-image"></div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 intro-text">
                <h1>freedom is now live</h1>
                <button onClick={openYt} type="button" className="ytButton">
                  <i className="fa fa-youtube"></i> WATCH HERE
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
