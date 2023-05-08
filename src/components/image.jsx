import React from "react";
import LazyLoad from "react-lazyload";

export const Image = ({ title, largeImage, smallImage }) => {
  return (
    <div className="portfolio-item">
      <div className="hover-bg">
        <a href={largeImage} title={title} data-lightbox-gallery="gallery1">
          <div className="hover-text"></div>
          <LazyLoad>
            <img src={smallImage} className="img-responsive" alt={title} />
          </LazyLoad>
        </a>
      </div>
    </div>
  );
};
