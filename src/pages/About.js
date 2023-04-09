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
                Kenney Heidel, Master Copywriter, Lover of Cats, Juggler of
                Words at Martin Agency
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
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Exercitationem, rerum. Aspernatur fugiat laborum sunt a numquam
                obcaecati, inventore aperiam deleniti quia at ullam eveniet
                beatae assumenda voluptates, laboriosam labore ad. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Non cupiditate
                blanditiis fugit a maxime? Libero voluptatem blanditiis at
                consequatur labore nam voluptas corrupti explicabo! Soluta,
                quidem omnis? Error, consectetur iste!
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
                quae amet, adipisci quasi beatae unde ipsum! Nisi harum, amet
                autem labore reiciendis minus, dolor veniam sequi omnis esse sed
                nostrum?Lorem, ipsum dolor sit amet consectetur adipisicing
                elit. Tempore rerum animi illum illo eaque sapiente maxime
                natus, nemo eligendi ipsam, atque nihil. Aliquam cumque dolores
                dolore praesentium exercitationem neque nisi.
              </p>
            </Fade>
          </Col>
          {/* headshot of ken */}
          <Col className="m-0 p-0 text-center">
            <img
              src={headshot}
              alt="Headshot of Kennedy Heidel"
              style={{ width: "20rem", borderRadius: 50 }}
              className="ms-auto "
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
                RESUME
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
