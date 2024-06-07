// 

import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { wrap } from "@popmotion/popcorn"

import "./slider1.css"

import { IMAGES } from "../Assets/SliderImages/bassi.jpg"

const sliderVariants = {
  incoming: direction => ({
    x: direction > 0 ? "100%" : "-100%",
    scale: 1.2,
    opacity: 0
  }),
  active: { x: 0, scale: 1, opacity: 1 },
  exit: direction => ({
    x: direction > 0 ? "-100%" : "100%",
    scale: 1,
    opacity: 0.2
  })
}

const sliderTransition = {
  duration: 1,
  ease: [0.56, 0.03, 0.12, 1.04]
}

const ImageSlider = () => {
  const [[imageCount, direction], setImageCount] = useState([0, 0])

  const activeImageIndex = wrap(0, IMAGES.length, imageCount)

  const swipeToImage = swipeDirection => {
    setImageCount([imageCount + swipeDirection, swipeDirection])
  }




  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 3000;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      if(IMAGES.length - 1 < index && IMAGES.length - 1 >= 0){
        swipeToImage(-1)
      }else{
        swipeToImage(1)
      }
      setIndex((prevIndex) =>
        prevIndex === IMAGES.length - 1 ? 0 : prevIndex + 1
      );
    }, delay);

    return () => {
      resetTimeout();
    };
  }, [index]);



  const dragEndHandler = dragInfo => {
    const draggedDistance = dragInfo.offset.x
    const swipeThreshold = 50
    if (draggedDistance > swipeThreshold) {
      swipeToImage(-1)
    } else if (draggedDistance < -swipeThreshold) {
      swipeToImage(1)
    }
  }

  const skipToImage = imageId => {
    let changeDirection
    if (imageId > activeImageIndex) {
      changeDirection = 1
    } else if (imageId < activeImageIndex) {
      changeDirection = -1
    }
    setImageCount([imageId, changeDirection])
  }

  return (
    <main>
      <div className="slider-container z-10 container">
        <div className="slider">
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={imageCount}
              style={{
                backgroundImage: `url(${IMAGES[activeImageIndex].imageSrc})`
              }}
              custom={direction}
              variants={sliderVariants}
              initial="incoming"
              animate="active"
              exit="exit"
              transition={sliderTransition}
              // drag="x"
              // dragConstraints={{ left: 0, right: 0 }}
              // dragElastic={1}
              // onDragEnd={(_, dragInfo) => dragEndHandler(dragInfo)}
              className="image"
            />
          </AnimatePresence>
        </div>

        {/* <div className="buttons">
          <button onClick={() => swipeToImage(-1)}>PREV</button>
          <button onClick={() => swipeToImage(1)}>NEXT</button>
        </div> */}
      </div>

      {/* <div className="thumbnails container">
        {IMAGES.map(image => (
          <div
            key={image.id}
            // onClick={() => skipToImage(image.id)}
            className="thumbnail-container"
          >
            <img src={image.imageSrc} alt="Artist" />
            <div
              className={`active-indicator ${image.id === activeImageIndex ? "active" : null
                }`}
            />
          </div>
        ))}
      </div> */}
    </main>
  )
}

export default ImageSlider