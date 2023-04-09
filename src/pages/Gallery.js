import { Col, Container, Row } from "reactstrap";
import { GALLERY } from "../data/GALLERY";
import { Slide } from "react-awesome-reveal";

const Gallery = () => {
  return (
    //gallery page for a collage of all kens work
    <div style={{ marginTop: 150 }}>
      <Container fluid>
        <Row style={{ marginBottom: 100 }}>
          <Col className="text-center">
            <Slide cascade>
              <h1
                style={{ fontSize: 75, fontWeight: 700 }}
                className="header-font"
              >
                Gallery of Work
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="m-auto text-center">
          {GALLERY.map((pic) => (
            <Col xs={12} sm={6} lg={4} className="m-auto">
              <img
                src={pic.img}
                alt=""
                style={{ width: "20rem", borderRadius: 25 }}
                className="mega-zoom m-3"
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
