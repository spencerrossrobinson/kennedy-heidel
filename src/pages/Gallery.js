import { Col, Container, Row } from "reactstrap";
import { GALLERY } from "../data/GALLERY";

const Gallery = () => {
  return (
    //gallery page for a collage of all kens work
    <div style={{ marginTop: 100 }}>
      <Container fluid>
        <Row>
          <Col>
            <h1>GALLERY OF WORK</h1>
          </Col>
        </Row>
        <Row>
          {GALLERY.map((pic) => (
            <Col>
              <img
                src={pic.img}
                alt=""
                style={{ height: 500, width: "auto" }}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Gallery;
