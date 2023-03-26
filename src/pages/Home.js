import { Col, Container, Row } from "reactstrap";
import HomeCar from "../components/HomeCar";
import HomeHeader from "../components/HomeHeader";
import "../css/home.css";
import { Slide } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";
import plant from "../imgs/home/right-plant.jpg";
import HomeCards from "../components/HomeCards";
import headshot from "../imgs/headshots/headshot-front.jpg";

const Home = () => {
  return (
    <div>
      <Container fluid className="" style={{ background: "white" }}>
        {/* setting up the header for the home page, ken said she loved big letters that made a statement so running with this size for the moment until she can review */}
        <Row
          className=" mt-0 pb-5 z-background card-shadow"
          style={{ borderBottomRightRadius: 500 }}
        >
          <Col
            className=" header-background p-5 pb-2 mb-5 mt-3"
            style={{ color: "white", borderBottomRightRadius: 500 }}
          >
            {/* adding in a text animation  */}
            <Slide cascade>
              <h1
                style={{
                  fontSize: 130,
                  fontWeight: 700,
                  fontStyle: "bold",
                }}
              >
                Kennedy Heidel
              </h1>
              <h1 style={{ fontWeight: 700, fontSize: 80 }}>Copywriter</h1>
              <h1 style={{ fontWeight: 700, fontSize: 80 }}>
                Richmond, Virginia
              </h1>
              <h1 className=" mt-3" style={{ fontWeight: 700, fontSize: 80 }}>
                Juggling Words,
              </h1>
              <h1
                className="mb-5 mt-4"
                style={{ fontWeight: 700, fontSize: 80 }}
              >
                With The Martin Agency
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="p-3" style={{ marginTop: 150, marginBottom: 150 }}>
          <Col
            className="text-center zoom p-5 m-auto bottom-header-background"
            style={{ borderBottomLeftRadius: 200, color: "white" }}
            xs={10}
            sm={8}
          >
            <h2 className="mt-5" style={{ fontWeight: 700 }}>
              A successful copywriter leading the way
              <i className="bi bi-instagram"></i>
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
          <Col className="text-center m-auto" xs={12} sm={4}>
            <img
              src={plant}
              alt="plant"
              className="img-fluid"
              style={{ borderRadius: 50 }}
            />
          </Col>
        </Row>
        {/* home cards that will link to nested routes, one card for each area of kens expertise, need to add react link */}
        <Row
          className="mt-5 mb-5 px-5 py-3 pe-0 header-background"
          style={{
            borderTopLeftRadius: 500,
            borderBottomLeftRadius: 500,
          }}
        >
          <HomeCards />
        </Row>
        {/* simple row that will hold small synapsis on kens accomplishments */}
        {/* a carousel that will cycle through peer reviews and testimonials */}
        <HomeCar />
        {/* small bio section at the bottom, need to add in social media icons */}
        <Row className="mb-5 mt-5 p-3">
          <Col className="text-center mb-5" xs={12} sm={4}>
            <img
              src={headshot}
              alt="Headshot of Kennedy Heidel"
              className="img-fluid"
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
      </Container>
    </div>
  );
};

export default Home;
