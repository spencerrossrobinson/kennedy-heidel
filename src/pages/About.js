import { Slide } from "react-awesome-reveal";
import { Container, Row, Col } from "reactstrap";
import headshot from "../imgs/headshots/headshot-front.jpg";
import { Bounce } from "react-awesome-reveal";

const About = () => {
  //about page for ken
  return (
    <div style={{ marginTop: 100 }}>
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
            <Bounce>
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
            </Bounce>
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
        <Row style={{ height: 50 }}></Row>
      </Container>
    </div>
  );
};

export default About;
