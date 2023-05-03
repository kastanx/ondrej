import React, { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Gallery data={landingPageData.Gallery} />
      <Contact data={landingPageData.Contact} />
      <div id="social">
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
            {/* <li>
                    <a href={props.data ? props.data.facebook : "/"}>
                      <i className="fa fa-spotify"></i>
                    </a>
                  </li> */}
            {/* <li>
                    <a href={props.data ? props.data.twitter : "/"}>
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li> */}
            <li>
              <a href="https://www.youtube.com/@ondrejaneurysm4454">
                <i className="fa fa-youtube"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
