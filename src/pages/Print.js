import { Col, Container, Row } from "reactstrap";
import { Slide } from "react-awesome-reveal";
import { Link } from "react-router-dom";
import bowman from "../imgs/print/drink-and-dine.png";
import chef from "../imgs/print/chef.jpg";
import chess from "../imgs/print/chess.jpg";
import meds from "../imgs/print/meds.jpg";
import paintbrush from "../imgs/print/paintbrush.jpg";
import pickle from "../imgs/print/pickle.jpg";
import relief from "../imgs/print/relief.jpg";
import trombone from "../imgs/print/trombone.jpg";
import yoga from "../imgs/print/yoga.jpg";

const Print = () => {
  const landingImg = [
    {
      id: 0,
      img: chef,
    },
    {
      id: 1,
      img: chess,
    },
    {
      id: 2,
      img: meds,
    },
    {
      id: 3,
      img: paintbrush,
    },
    {
      id: 4,
      img: pickle,
    },
    {
      id: 5,
      img: relief,
    },
    {
      id: 6,
      img: trombone,
    },
    {
      id: 7,
      img: yoga,
    },
  ];

  return (
    <div style={{ marginTop: 150 }}>
      <Container fluid>
        <Row>
          <Col className="text-center m-auto" xs={10}>
            <Slide cascade>
              <h1
                style={{ fontSize: 75, fontWeight: 700 }}
                className="header-font"
              >
                Print Me Like One Of Your French Girls
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="p-3 mb-5" style={{ marginTop: 100 }}>
          <Col
            className="text-center zoom p-5 m-auto blue-background card-shadow d-none d-lg-block"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            md={7}
          >
            <Link
              to="https://asmithbowman.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                A. SMITH BOWMAN DISTILLERY
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Featured in Bon Appetit Magazine, this print ad elevated
              Virginia's oldest and most award-winning Distillery to brand
              awareness level 100.
            </p>
          </Col>
          <Col className="text-center m-auto" xs={12} lg={5}>
            <img
              src={bowman}
              alt="plant"
              className="super-zoom card-shadow"
              style={{ borderRadius: 50, width: "20rem" }}
            />
          </Col>
          <Col
            className="text-center zoom p-5 m-auto blue-background card-shadow d-block d-lg-none"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            lg={5}
          >
            <Link
              to="https://asmithbowman.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                A. SMITH BOWMAN DISTILLERY
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Featured in Bon Appetit Magazine, this print ad elevated
              Virginia's oldest and most award-winning Distillery to brand
              awareness level 100.
            </p>
          </Col>
        </Row>
        <Row className="p-3 ">
          {/* <Col className="text-center m-auto" xs={12} lg={5}>
            <img
              src={health}
              alt="plant"
              //   className="img-fluid"
              style={{ borderRadius: 50, width: "35rem" }}
            />
          </Col> */}
          <Col
            className="text-center zoom p-5 m-auto mb-5 orange-background card-shadow"
            style={{
              borderBottomRightRadius: 150,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              color: "white",
            }}
            xs={10}
          >
            <Link
              to="https://www.williamsburglanding.org/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                zoom
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                WILLIAMSBURG LANDING
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Pushing the envelope and branching out from the typical look and
              feel of senior living ads, this minimalistic multimedia campaign
              strategically steered away from showcasing imagery of smiling
              seniors and instead shined a spotlight on replacing tedious tasks
              with more adventurous, enjoyable options. With an eye-catching
              design and bold font size, folks won’t need their eyeglasses to
              see how good life would truly be at Williamsburg Landing senior
              living.
            </p>
          </Col>
          {landingImg.map((landing) => (
            <Col xs={10} md={6} lg={4} className="m-auto text-center">
              <img
                src={landing.img}
                alt="plant"
                className="m-3 card-shadow super-zoom"
                style={{ borderRadius: 50, width: "25rem" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Print;
