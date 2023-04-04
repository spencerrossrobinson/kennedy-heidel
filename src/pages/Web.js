import { Col, Container, Row } from "reactstrap";
import { Slide } from "react-awesome-reveal";
import brown from "../imgs/web/brown-3.png";
import wythken from "../imgs/web/wythken-3.png";
import { Link } from "react-router-dom";

const Web = () => {
  return (
    <div style={{ marginTop: 150 }}>
      <Container fluid>
        <Row>
          <Col className="text-center">
            <Slide cascade>
              <h1
                style={{ fontSize: 75, fontWeight: 700 }}
                className="header-font"
              >
                World Weird Web
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="p-3" style={{ marginTop: 50 }}>
          <Col
            className="text-center zoom p-5 m-auto blue-background card-shadow d-none d-lg-block"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            md={5}
          >
            <Link
              to="https://brown.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                BROWN DISTRIBUTING
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Total website rewrite that raised the bar on beer distribution.
              Craving a cold one now? I don't blame you.
            </p>
          </Col>
          <Col className="text-center m-auto" xs={12} lg={7}>
            <img
              src={brown}
              alt="plant"
              //   className="img-fluid"
              style={{ borderRadius: 50, width: "50rem" }}
            />
          </Col>
          <Col
            className="text-center zoom p-5 m-auto blue-background card-shadow d-block d-lg-none"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            lg={5}
          >
            <Link
              to="https://brown.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                BROWN DISTRIBUTING
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Total website rewrite that raised the bar on beer distribution.
              Craving a cold one now? I don't blame you.
            </p>
          </Col>
        </Row>
        <Row className="p-3">
          <Col className="text-center m-auto" xs={12} lg={7}>
            <img
              src={wythken}
              alt="plant"
              //   className="img-fluid"
              style={{ borderRadius: 50, width: "50rem" }}
            />
          </Col>
          <Col
            className="text-center zoom p-5 m-auto orange-background card-shadow"
            style={{
              borderBottomRightRadius: 150,
              borderTopLeftRadius: 50,
              borderBottomLeftRadius: 50,
              color: "white",
            }}
            xs={12}
            lg={5}
          >
            <Link
              to="https://wythken.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                WYTHKEN PRINTING
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Build a website from scratch for Richmond's full-service printing
              shop that is budget-friendly, people-friendly, and
              deadline-friendly. Frankly, they give a sheet.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Web;
