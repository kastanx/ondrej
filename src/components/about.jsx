import React from "react";
import LazyLoad from "react-lazyload";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <LazyLoad>
              <img src="img/ondra.webp" className="img-responsive" alt="" />
            </LazyLoad>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              {/* <h2>O mně</h2> */}
              <p>
                Jsem hudebník z Ostravy a již od svých 14 let se věnuji hře na
                kytaru a skládání vlastní hudby. Zásadní inspirací mi byla
                kapela Nirvana a zejména kultovní postava Kurta Cobaina, což se
                projevuje i v mé muzice. Moje písně jsou o mých zkušenostech,
                zážitcích, které jsem viděl či sám zažil. Jsou i o mých
                myšlenkách, nejistotách a snaze v tomto světě si najít své
                místo. Chci sdílet své pocity a myšlenky s těmi, kteří
                procházejí něčím podobným, aby věděli, že nejsou sami, protože
                sami nejsou. Peace, Love & Empathy
              </p>
              <p>
                I am a musician from Ostrava, Czechia. Since I was 14 years old
                I have been playing guitar and composing my own music. My main
                inspiration was the band Nirvana and especially the cult figure
                of Kurt Cobain, which is also reflected in my music. My songs
                are about my experiences that I have seen or experienced myself.
                They are also about my thoughts, insecurities and trying to find
                my place in this world. I want to share my feelings and thoughts
                with those who are going through something similar, to let them
                know that they are not alone because they are really not. Peace,
                Love & Empathy
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
