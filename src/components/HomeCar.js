import React, { useState } from "react";
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  Row,
} from "reactstrap";
import { Fade } from "react-awesome-reveal";

const items = [
  {
    altText: "Slide 1",
    description: `“Kennedy is a strategy guru extraordinaire.”`,
    key: 1,
  },
  {
    altText: "Slide 2",
    description: `"Kennedy is so positive and reliable, I'm pretty sure she could sell ice to a polar bear in the middle of winter. Her strategic approach, creative flair, and attention to detail are like a triple threat."`,
    key: 2,
  },
  {
    altText: "Slide 3",
    description: `"She’s a horse whisperer for websites and SEO copy."`,
    key: 3,
  },
  {
    altText: "Slide 4",
    description: `"Kennedy is a joy to work with. She is creative enough to write puns that make you snort-laugh and detail-oriented enough to catch even the tiniest typo."`,
    key: 4,
  },
  {
    altText: "Slide 5",
    description: `“She is so easy to work with, gets along with everyone, and is truly a joy to be around.” – Boyfriend (under duress) `,
    key: 5,
  },
  {
    altText: "Slide 6",
    description: `"Kennedy waves her magic mouse and turns blank pages into persuasive masterpieces in no time. Her strategic thinking, creative spark, and obsessive attention to detail are the secret sauce to success. Set your watch to her deadlines — you won’t be disappointed."`,
    key: 6,
  },
  {
    altText: "Slide 7",
    description: `“She’s truly dependable and always on time.” – Local Bartender `,
    key: 7,
  },
  {
    altText: "Slide 8",
    description: `"Kennedy has an uncanny ability to take the ideas you have in your head and create beautifully written collateral."`,
    key: 8,
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
        className="text-center mt-5 carousel-item"
      >
        {/* adding a bounce animation to the text */}
        <Fade>
          <h1 style={{ fontWeight: 700, fontStyle: "bold", fontSize: 30 }}>
            {item.description}
          </h1>
          {/* <h2
            className="p-2"
            style={{ fontWeight: 700, fontStyle: "bold", fontSize: 40 }}
          >
            {item.person}
          </h2>
          <h2 style={{ fontWeight: 700, fontStyle: "italic" }}>{item.job}</h2> */}
        </Fade>
      </CarouselItem>
    );
  });

  return (
    <Row
      className="mt-5 p-5 text-center m-auto"
      style={{ color: "#4faaa7" }}
      id="home-car"
    >
      <h1
        className="text-center header-font"
        style={{ fontWeight: 700, fontStyle: "bold", fontSize: 65 }}
      >
        Testimonials
      </h1>
      {/* carousel set up with indicators, control, and displaying the slides declared above that maps through items object and shows testimonials */}
      <Carousel
        interval={4000}
        activeIndex={activeIndex}
        next={next}
        previous={previous}
        {...args}
        // className="carousel-dark"
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
          style={{ backgroundColor: "blue" }}
        />
      </Carousel>
    </Row>
  );
};

export default HomeCar;
