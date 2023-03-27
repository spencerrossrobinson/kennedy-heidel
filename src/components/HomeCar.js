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
    person: "Dave Saunders",
    job: "Chief Idea Officer at Madison+Main",
    description:
      "Kennedy is an excellent intern and a fine example of the creative minds you are turning out in beautiful downtown Harrisonburg, Virginia. Although we mainly hire VCU Rams, I have changed my mind completely about JMU and will be sending my children there. I have only you to thank! Godspeed, and do not go gentle into that good night. ",
    key: 1,
  },
  {
    src: slideTwo,
    altText: "Slide 2",
    person: "Dr. Mitchell",
    job: "Professor and Research Mentor",
    description:
      "Kennedy not only excels academically but also show excitement for the material we study and great attention to detail. Her continued pursuit of knowledge makes her an active participant and great leader in class. Kennedy’s outgoing personality and enjoyment of the course make her a pleasure to teach and work with, and her projects and writing speak to the level of care and commitment she strives for. ",
    key: 2,
  },
  {
    src: slideThree,
    altText: "Slide 3",
    person: "Kent Jennings Brockwell",
    job: "Communications Manager at Madison+Main",
    description:
      "A skilled writer and captivating storyteller, her immense level of raw talent will serve her well over the development of her career, and I can't wait to see how high she'll fly. Her bubbly enthusiasm for both life and work is sickeningly genuine and pure. She single-handedly set the bar so high for our internship program, I'm actually annoyed. Ugh. Way to go, Kennedy. You ruined it for everyone else.",
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
        className="text-center mt-5 carousel-item"
      >
        {/* adding a bounce animation to the text */}
        <Bounce>
          <h1 style={{ fontWeight: 700, fontStyle: "bold" }}>
            {item.description}
          </h1>
          <h2 className="p-2" style={{ fontWeight: 700, fontStyle: "bold" }}>
            {item.person}
          </h2>
          <h2 style={{ fontWeight: 700, fontStyle: "italic" }}>{item.job}</h2>
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
