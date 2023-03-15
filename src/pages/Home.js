import { Col, Container, Row } from "reactstrap";
import HomeCar from "../components/HomeCar";
import "../css/home.css";
import { Fade } from "react-awesome-reveal";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ height: 300 }} className="header-background">
          <Col className="mt-5 ms-5" style={{ color: "black" }}>
            <Fade cascade>
              <h1 style={{ fontSize: 75, fontWeight: 700, fontStyle: "bold" }}>
                Kennedy Heidel
              </h1>
              <h1 style={{ fontWeight: 700 }}>Copywriter</h1>
              <h1 style={{ fontWeight: 700 }}>Richmond, Virginia</h1>
              <h4
                className=" mt-3 mb-5"
                style={{ fontStyle: "italic", fontWeight: 700 }}
              >
                Juggling Words, Well placed Pun, Eye for Design
              </h4>
            </Fade>
          </Col>
        </Row>
        <Row className="bottom-header-background">
          <Col className="text-center zoom p-5 ms-5 me-3">
            <h2 className="mt-5" style={{ fontWeight: 700 }}>
              A successful copywriter leading the way
            </h2>
            <p className="mb-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              officiis in optio explicabo quas nemo, libero repellat ducimus!
              Error in autem vero sunt commodi. Ipsa illo possimus atque
              doloribus suscipit? Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Ex iusto neque eum velit accusantium blanditiis
              praesentium sit eius, porro libero ea, quaerat, ducimus dolore.
              Autem placeat doloremque voluptatibus maiores fugiat!
            </p>
          </Col>
        </Row>
        <Row className="header-background" style={{ height: 150 }}></Row>
        <Row className="">
          <HomeCar />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
