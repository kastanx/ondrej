import React from "react";

export const Contact = () => {
  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Kontakt</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Adresa
                </span>
                Ostrava
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Telefon
                </span>
                69696969
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>
                email@email.com
              </p>
            </div>
          </div>
          <div className="col-md-12">
            <div className="row">
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
        </div>
      </div>
      <div id="footer">
        <div className="container text-center">
          <p>&copy; ondrej aneurysm 2023</p>
        </div>
      </div>
    </div>
  );
};
