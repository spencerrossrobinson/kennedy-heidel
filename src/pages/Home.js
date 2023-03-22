import { Col, Container, Row } from "reactstrap";
import HomeCar from "../components/HomeCar";
import HomeHeader from "../components/HomeHeader";
import "../css/home.css";
import { Fade } from "react-awesome-reveal";
import plant from "../imgs/home/right-plant.jpg";
import HomeCards from "../components/HomeCards";
import headshot from "../imgs/headshots/headshot-front.jpg";

const Home = () => {
  return (
    <div>
      <Container fluid className="" style={{ background: "white" }}>
        <Row
          className=" mt-0 pb-5 z-background card-shadow"
          style={{ borderBottomRightRadius: 500 }}
        >
          <Col
            className=" header-background p-5 pb-2 mb-5 mt-5"
            style={{ color: "white", borderBottomRightRadius: 500 }}
          >
            <Fade cascade>
              <h1
                style={{
                  fontSize: 120,
                  fontWeight: 700,
                  fontStyle: "bold",
                }}
              >
                Kennedy Heidel
              </h1>
              <h1 style={{ fontWeight: 700, fontSize: 110 }}>Copywriter</h1>
              <h1 style={{ fontWeight: 700, fontSize: 110 }}>
                Richmond, Virginia
              </h1>
              <h1 className=" mt-3" style={{ fontWeight: 700, fontSize: 110 }}>
                Juggling Words,
              </h1>
              <h1
                className="mb-5 mt-4"
                style={{ fontWeight: 700, fontSize: 95 }}
              >
                With The Martin Agency
              </h1>
            </Fade>
          </Col>
          {/* <Col
            className="card-shadow"
            lg={2}
            style={{ background: "#cc3a3d", borderBottomLeftRadius: 300 }}
          ></Col> */}
        </Row>
        <Row style={{ height: 150 }}></Row>
        <Row
          className="mt-5 mb-5 px-5 py-3 pe-0 "
          style={{
            background: "#cc3a3d",
            borderTopLeftRadius: 500,
            borderBottomLeftRadius: 500,
          }}
        >
          <HomeCards />
        </Row>
        <Row className="p-3 mt-5">
          <Col
            className="text-center zoom p-5 m-auto header-background"
            style={{ borderBottomLeftRadius: 200, color: "white" }}
          >
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
          <Col className="text-center m-auto">
            <img
              src={plant}
              alt="plant"
              className="w-75 m-auto"
              style={{ borderRadius: 50 }}
            />
          </Col>
        </Row>
        <Row className="mb-5 mt-5 p-3">
          <Col className="text-center mb-5" xs={12} sm={4}>
            <img
              src={headshot}
              alt="Headshot of Kennedy Heidel"
              className="w-75 m-auto"
              style={{ borderRadius: 50 }}
            />
          </Col>
          <Col
            className="text-center zoom p-5 m-auto"
            style={{
              color: "white",
              fontWeight: 500,
              background: "#de8e4e",
              borderBottomRightRadius: 300,
            }}
            xs={10}
            sm={8}
          >
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem, rerum. Aspernatur fugiat laborum sunt a numquam
              obcaecati, inventore aperiam deleniti quia at ullam eveniet beatae
              assumenda voluptates, laboriosam
              <br />
              labore ad. Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Non cupiditate blanditiis fugit a maxime? Libero voluptatem
              blanditiis at consequatur labore nam voluptas corrupti explicabo!
              Soluta, quidem omnis? Error, consectetur iste!
            </p>
          </Col>
        </Row>
        {/* <Row className="">
          <HomeHeader />
        </Row>
        <Row className=" p-5 m-5">
          <HomeCar />
        </Row> */}
      </Container>
    </div>
  );
};

export default Home;
