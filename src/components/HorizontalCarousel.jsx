import React from "react";
import { images } from "@galleryImages";
import '@styles/horizontalCarousel.css';

const HorizontalCarousel = () => {
  return (
    <div className="external">
      <div className="horizontal_scroll_wrapper">
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={`${image.class_name} image_wrapper`}
            >
              <a href={`/gallery/${image.img}`} target="_blank">
                <img src={`/gallery/${image.img}`} alt={`Image ${image.img}`} />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HorizontalCarousel;
