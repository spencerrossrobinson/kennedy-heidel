import { Button, Col, Container, Row } from "reactstrap";
import HomeCar from "../components/HomeCar";
import "../css/home.css";
import { Slide } from "react-awesome-reveal";
import HomeCards from "../components/HomeCards";
import headshot from "../imgs/headshots/headshot-front.jpg";
import mule from "../imgs/collateral/mule.png";
import { Link } from "react-router-dom";
import coffee from "../imgs/home/laptopNcoffee.jpg";
import ken from "../imgs/home/ken-home.png";

const Home = () => {
  return (
    <div style={{ marginTop: 135 }}>
      <Container fluid className="" style={{ background: "white" }}>
        {/* setting up the header for the home page, ken said she loved big letters that made a statement so running with this size for the moment until she can review */}
        <Row
          className=" mt-0 pb-5 blue-background card-shadow"
          style={{ borderBottomRightRadius: 300 }}
        >
          <Col
            className=" orange-background p-5 pb-2 mb-5 mt-0"
            style={{ color: "white", borderBottomRightRadius: 300 }}
          >
            {/* adding in a text animation  */}
            <Slide cascade>
              <h1
                style={{
                  fontSize: 100,
                  fontWeight: 700,
                  fontStyle: "bold",
                }}
                className="header-font"
              >
                Kennedy Heidel
              </h1>
              <h1 style={{ fontWeight: 500, fontSize: 50 }}>Copywriter.</h1>
              <h1 style={{ fontWeight: 500, fontSize: 50 }}>
                Richmond, Virginia
              </h1>
              <h1
                className=" mt-4 mb-5 d-none d-md-block"
                style={{ fontWeight: 500, fontSize: 50 }}
              >
                Juggling Words with Madison & Main
              </h1>
              {/* <h1
                className="mb-5 mt-4"
                style={{ fontWeight: 500, fontSize: 50 }}
              >
                With The Martin Agency
              </h1> */}
            </Slide>
          </Col>
        </Row>
        <Row className="p-3" style={{ marginTop: 100, marginBottom: 50 }}>
          <Col
            className="text-center zoom p-5 m-auto green-background"
            style={{ borderBottomLeftRadius: 200, color: "white" }}
            xs={10}
            lg={7}
          >
            <h2
              className="mt-5 header-font"
              style={{ fontWeight: 700, fontSize: 40 }}
            >
              A Successful Content Strategist Leading The Way
            </h2>
            <p className="mb-5" style={{ fontSize: 20 }}>
              Hello there human! Or robot! Welcome to the portfolio of Kennedy
              Heidel — writer of puns and perfectly placed commas. I am an
              award-winning Copywriter, Communications Specialist, and
              Strategist with six years of agency and in-house experience.
            </p>
          </Col>
          <Col className="text-center mt-4 zoom" xs={12} lg={5}>
            <img
              src={ken}
              alt="kennedys laptop and coffee"
              // className="img-fluid"
              style={{ borderRadius: 30, width: "30rem" }}
            />
          </Col>
        </Row>
        {/* home cards that will link to nested routes, one card for each area of kens expertise, need to add react link */}
        <HomeCards />
        {/* simple row that will hold small synapsis on kens accomplishments */}
        {/* a carousel that will cycle through peer reviews and testimonials */}
        <HomeCar />
        {/* small bio section at the bottom, need to add in social media icons */}

        <Row className="mb-5  p-3">
          <Col className="text-center mb-5" xs={12} md={4}>
            <img
              src={headshot}
              alt="Headshot of Kennedy Heidel"
              className="img-fluid"
              style={{ borderRadius: 50 }}
            />
          </Col>
          <Col
            className="zoom p-5 m-auto"
            style={{
              color: "white",
              fontWeight: 500,
            }}
            xs={12}
            md={8}
          >
            <h1
              className="blue-background p-5 text-center header-font"
              style={{ borderTopRightRadius: 200 }}
            >
              About Kennedy Heidel
            </h1>
            <p className="green-background p-5">
              Short Form Copy:
              <br />
              Writer. Off-tempo but enthusiastic dancer.
              <br />
              <br />
              Long Form Copy:
              <br />
              I'm a communications guru, copywriting extraordinaire, and
              sensational strategist with extensive experience in developing and
              building strong brands. With a keen eye for detail and a passion
              for words, I have honed my skills in content creation, crafting
              snappy slogans, and writing witty words that convert.
            </p>
            <p className="text-center m-auto">
              <Link
                to="https://www.kennedyheidel.com/_files/ugd/1b3afa_4220e04dd2f446e58c6a9d4d400ccc50.pdf"
                target="_blank"
                style={{
                  color: "inherit",
                  textDecoration: "none",
                }}
                className="text-center"
              >
                <Button
                  className=""
                  color="success"
                  outline
                  style={{ width: "30rem" }}
                  size="lg"
                >
                  RESUME
                </Button>
              </Link>
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
