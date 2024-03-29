import React from "react";
import "@styles/horizontalCarousel.css";

const HorizontalCarousel = () => {
  const images = [
    { img: "01.jpg", class_name: "slower" },
    { img: "02.jpg", class_name: "faster" },
    { img: "03.jpg", class_name: "slower vertical" },
    { img: "04.jpg", class_name: "slower slower-down" },
    { img: "05.jpg", class_name: "faster1" },
    { img: "06.jpg", class_name: "slower slower2" },
    { img: "01.jpg", class_name: "slower" },
    { img: "02.jpg", class_name: "faster" },
    { img: "03.jpg", class_name: "slower vertical" },
    { img: "04.jpg", class_name: "slower slower-down" },
    { img: "05.jpg", class_name: "fastest faster1" },
    { img: "06.jpg", class_name: "slower slower2" },
    { img: "07.jpg", class_name: "slower last" },
  ];

  return (
    <div className="external">
      <div className="horizontal_scroll_wrapper">
        {images.map((image, index) => {
          return (
            <div key={index} className={`${image.class_name} ${styles.image_wrapper}`}>
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
