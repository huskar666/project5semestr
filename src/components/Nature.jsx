import React, { useState } from "react";

export default function NatureSlider({ images }) {
  const [current, setCurrent] = useState(0);

  if (!images || images.length === 0) return <p className="slider__empty">Картинки не загружены</p>;

  const handleWheel = (e) => {
    if (e.deltaY < 0) {
      setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  };

  const getIndex = (i) => {
    const len = images.length;
    return (i + len) % len;
  };

  return (
    <div className="slider" onWheel={handleWheel}>
      <div className="slider__wrapper">
        {images.map((img, i) => {
          let diff = i - current;
          const len = images.length;
          if (diff > len / 2) diff -= len;
          if (diff < -len / 2) diff += len;

          let scale = 0.7;
          let opacity = 0.5;
          let zIndex = 1;
          let offset = diff * 50;

          if (diff === 0) {
            scale = 1;
            opacity = 1;
            zIndex = 3;
            offset = 0;
          } else if (Math.abs(diff) === 1) {
            scale = 0.85;
            opacity = 0.8;
            zIndex = 2;
          }

          return (
            <img
              key={img.id}
              src={img.url}
              alt="nature"
              className="slider__image"
              style={{
                transform: `translateX(${offset}px) scale(${scale})`,
                zIndex,
                opacity,
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
