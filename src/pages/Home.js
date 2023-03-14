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
              <h1 style={{ fontSize: 65, fontWeight: 700, fontStyle: "bold" }}>
                Kennedy Heidel
              </h1>
              <h2 className="ms-2">Copywriter in Richmond, Virginia</h2>
              <h4 className="ms-2" style={{ fontStyle: "italic" }}>
                An eye for design{" "}
              </h4>
            </Fade>
          </Col>
        </Row>
        <Row>
          <Col className="text-center reverse-header-background">
            <h2 className="mt-5">A successful copywriter leading the way</h2>
            <p>
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
        <Row className="">
          <HomeCar />
        </Row>
      </Container>
    </div>
  );
};

export default Home;
