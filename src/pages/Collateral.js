import { Col, Container, Row } from "reactstrap";
import { Slide } from "react-awesome-reveal";
import mule from "../imgs/collateral/mule.png";
import toast from "../imgs/collateral/toast.png";
import epic from "../imgs/collateral/epic.png";
import { Link } from "react-router-dom";

const Collateral = () => {
  return (
    <div style={{ marginTop: 150 }}>
      <Container>
        <Row>
          <Col className="text-center">
            <Slide cascade>
              <h1 style={{ fontSize: 75, fontWeight: 700 }}>
                Clap for Collateral
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="p-3 mb-0" style={{ marginTop: 100 }}>
          <Col
            className="text-center zoom p-5 m-auto z-background"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            sm={5}
          >
            <Link
              to="https://asmithbowman.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                A. Smith Bowman Distillery Recipe Book
              </h2>
            </Link>
            <p className="mb-5">
              An award-winning cocktail recipe book is a great addition to any
              marketing mix or mixologists portfolio.
            </p>
          </Col>
          <Col className="text-center m-auto" xs={12} sm={5}>
            <img
              src={mule}
              alt="plant"
              className="img-fluid"
              style={{ borderRadius: 50 }}
            />
          </Col>
        </Row>
        <Row className="p-3 mt-0">
          <Col className="text-center m-auto" xs={12} sm={5}>
            <img
              src={toast}
              alt="plant"
              className="img-fluid"
              style={{ borderRadius: 50 }}
            />
          </Col>
          <Col
            className="text-center zoom p-5 m-auto header-background"
            style={{
              borderBottomRightRadius: 150,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              color: "white",
            }}
            xs={12}
            sm={7}
          >
            <Link
              to="https://wythken.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                WYTHKEN PRINTING HOLIDAY CARD
              </h2>
            </Link>
            <p className="mb-5">
              An on-brand and playful holiday gift is just the thing to keep
              customers coming back in the new year.
            </p>
          </Col>
        </Row>
        <Row className="p-3 mb-0">
          <Col
            className="text-center zoom p-5 m-auto z-background"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            sm={5}
          >
            <Link
              to="https://www.epicrx.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                EPIC RX NEW MEMBER WELCOME KIT
              </h2>
            </Link>
            <p className="mb-5">
              A new member welcome kit with a free, branded water bottle? Now
              that's a refreshing twist.
            </p>
          </Col>
          <Col className="text-center m-auto" xs={12} sm={5}>
            <img
              src={epic}
              alt="plant"
              className="img-fluid"
              style={{ borderRadius: 50 }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Collateral;
