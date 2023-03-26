import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
  Container,
  Row,
} from "reactstrap";
import { Bounce } from "react-awesome-reveal";
import slideOne from "../imgs/home/handNcoffe.jpg";
import slideTwo from "../imgs/home/laptopNcoffee.jpg";
import slideThree from "../imgs/home/cactusplant.jpg";

const items = [
  {
    src: slideOne,
    altText: "Slide 1",
    caption: "Spencer Robinson",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, facilis officiis? Mollitia omnis, impedit at distinctio numquam doloribus, doloremque quis inventore aspernatur ad incidunt sit labore ullam deserunt quia accusamus!",
    key: 1,
  },
  {
    src: slideTwo,
    altText: "Slide 2",
    caption: "Spencer Robinson",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, facilis officiis? Mollitia omnis, impedit at distinctio numquam doloribus, doloremque quis inventore aspernatur ad incidunt sit labore ullam deserunt quia accusamus!",
    key: 2,
  },
  {
    src: slideThree,
    altText: "Slide 3",
    caption: "Spencer Robinson",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque, facilis officiis? Mollitia omnis, impedit at distinctio numquam doloribus, doloremque quis inventore aspernatur ad incidunt sit labore ullam deserunt quia accusamus!",
    key: 3,
  },
];

const HomeCar = (args) => {
  //setting up the logic for the reactstrap carousel
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);
  //next arrow click
  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };
  //previous arrow click
  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };
  //go to index at the bottom of the carousel
  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = items.map((item) => {
    //mapping through items to display one of each testimonial on a carousel slide
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.id}
        className="text-center mt-5"
      >
        {/* adding a bounce animation to the text */}
        <Bounce>
          <h1 style={{ fontWeight: 700, fontStyle: "bold" }}>
            {item.description}
          </h1>
          <h2 style={{ fontWeight: 700, fontStyle: "bold" }}>{item.caption}</h2>
        </Bounce>
      </CarouselItem>
    );
  });

  return (
    <Row className="mt-5 p-5 text-center m-auto" style={{ color: "#4F7B58" }}>
      <h1
        className="text-center"
        style={{ fontWeight: 700, fontStyle: "bold" }}
      >
        Testimonials
      </h1>
      {/* carousel set up with indicators, control, and displaying the slides declared above that maps through items object and shows testimonials */}
      <Carousel
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        style={{ maxHeight: 400 }}
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
    </Row>
  );
};

export default HomeCar;
