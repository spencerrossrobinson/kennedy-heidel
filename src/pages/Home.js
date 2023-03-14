import { Col, Container, Row } from "reactstrap";
import HomeCar from "../components/HomeCar";
import "../css/home.css";

const Home = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ height: 300 }} className="header-background">
          <Col className="mt-5 ms-5" style={{ color: "black" }}>
            <h1>Kennedy Heidel</h1>
            <h1>Copywriter in Richmond, Virginia</h1>
            <h1>An eye for design </h1>
          </Col>
        </Row>
        <Row className="">
          <HomeCar />
        </Row>
        <Row>
          <Col className="text-center">
            <h2>A successful copywriter leading the way</h2>
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
      </Container>
    </div>
  );
};

export default Home;
