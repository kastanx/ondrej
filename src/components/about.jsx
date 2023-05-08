import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <img src="img/ondra.jpeg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>O mně</h2>
              <p>
                Jsem hudebník z Ostravy, který ve 14 letech se začal jako samouk
                hrát na kytaru a skládat své vlastní písně. Největší impuls k
                tomu bylo, když jsem poznal Nirvanu a vůbec kult Kurta Cobaina.
                Do dneška je to v mé muzice zřejmě slyšet a asi i vždycky bude.
                Písně skládám o svém životě a nebo životech, které jsem viděl a
                poznal. Chci, aby ti, kteří se cítí podobně a zažívají stejné
                věci věděli, že nejsou sami. Peace, Love & Empathy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
