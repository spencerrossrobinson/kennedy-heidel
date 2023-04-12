import { Slide } from "react-awesome-reveal";
import { Container, Row, Col, Button } from "reactstrap";
import headshot from "../imgs/headshots/headshot-front.jpg";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const About = () => {
  const email = "heidelkg@gmail.com";
  const mailtoUrl = `mailto:${email}`;

  //about page for ken
  return (
    <div style={{ marginTop: 140 }}>
      <Container fluid>
        <Row className="m-3">
          {/* header, again using large font, text needs to be edited */}
          <Col>
            <Slide cascade>
              <h1
                style={{ fontSize: 75, fontWeight: 700, color: "#C6460F" }}
                className="header-font"
              >
                It Appears You're In Need Of Some Wordsmithery...
              </h1>
            </Slide>
          </Col>
        </Row>

        <Row
          className="mb-5 mt-5 p-5 blue-background"
          style={{
            borderBottomLeftRadius: 200,
          }}
        >
          <Col className="mb-5 m-5" style={{ color: "white", fontWeight: 500 }}>
            <Fade>
              <p>Ready to sound fantastic? I can help.</p>
              <p>
                My background in traveling the world has taught me how to step
                into a million different shoes and understand what makes people
                tick at each stage of their journey. Maybe it’s also the reason
                I have two closets dedicated to sandals and sneakers.
              </p>
              <p>
                As an award-winning Communications Specialist, Copywriter, and
                Strategist, located in Richmond, Virginia, I have extensive
                experience in getting under the skin of a brand…in a
                non-Silence-of-the-Lambs kinda way.
              </p>
              <p>
                Whether it’s email marketing, digital campaigns, snappy social
                media content, or perfectly placed print ads, I describe my copy
                as a potion of good literacy, a slightly gaga imagination, and
                an acute understanding of human nature and its intense need to
                engage with complex ideas in their simplest form.
              </p>
              <p>
                I’ve written words and crafted ideas for a wide variety of
                industries, storytelling for medical marketing, government
                agencies, food and beverage companies, luxury pet care, and
                more. I’m also a killer at any pun-off and an off-tempo but
                enthusiastic dancer.
              </p>
              <p>So, come on, send me an email.</p>
              <p>I’m ready to create something amazing with you.</p>
            </Fade>
          </Col>
          {/* headshot of ken */}
          <Col className="text-center">
            <img
              src={headshot}
              alt="Headshot of Kennedy Heidel"
              style={{ width: "30rem", borderRadius: 50 }}
              className="m-auto "
            />
          </Col>
        </Row>

        <Row className="text-center m-auto">
          <Col xs={4} classname="m-auto">
            <Link
              to="/gallery"
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button
                className=""
                color="success"
                outline
                size="lg"
                style={{ width: "15rem" }}
              >
                Gallery
              </Button>
            </Link>
          </Col>
          <Col xs={4} classname="m-auto">
            <Link
              to="https://www.kennedyheidel.com/_files/ugd/1b3afa_4220e04dd2f446e58c6a9d4d400ccc50.pdf"
              target="_blank"
              style={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Button
                className=""
                color="success"
                outline
                size="lg"
                style={{ width: "15rem" }}
              >
                Resume
              </Button>
            </Link>
          </Col>
          <Col xs={4} classname="m-auto">
            <Link
              to={mailtoUrl}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <Button
                className=""
                color="success"
                outline
                size="lg"
                style={{ width: "15rem" }}
              >
                Email Me!
              </Button>
            </Link>
          </Col>
        </Row>
        <Row style={{ height: 100 }}></Row>
      </Container>
    </div>
  );
};

export default About;
