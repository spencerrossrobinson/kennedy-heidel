import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
} from "reactstrap";
import slideOne from "../imgs/home/handNcoffe.jpg";
import slideTwo from "../imgs/home/laptopNcoffee.jpg";
import slideThree from "../imgs/home/plantNlaptop.jpg";

const items = [
  {
    src: slideOne,
    altText: "Slide 1",
    caption: "COPYWRITE",
    key: 1,
  },
  {
    src: slideTwo,
    altText: "Slide 2",
    caption: "DIGITAL",
    key: 2,
  },
  {
    src: slideThree,
    altText: "Slide 3",
    caption: "SOCIAL",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, facilis officiis? Mollitia omnis, impedit at distinctio numquam doloribus, doloremque quis inventore aspernatur ad incidunt sit labore ullam deserunt quia accusamus!",
    key: 3,
  },
];

const HomeCar = (args) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="carousel-item"
      >
        <img
          src={item.src}
          alt={item.altText}
          //   className="img-fluid"
        />
        <h1 className="main-text">{item.caption}</h1>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      {...args}
      className="carousel text-center m-0 p-0"
      style={{ margin: 0 }}
    >
      <CarouselIndicators
        items={items}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {slides}
      <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previous}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={next}
      />
    </Carousel>
  );
};

export default HomeCar;
