import { Col, Container, Row } from "reactstrap";
import { Slide } from "react-awesome-reveal";
import health from "../imgs/digital/catch-show.png";
import milk from "../imgs/digital/maola-milk.png";
import { Link } from "react-router-dom";

const Digital = () => {
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
                Let's Get Digital... Digital
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="p-3 mb-5" style={{ marginTop: 100 }}>
          <Col
            className="text-center zoom p-5 m-auto blue-background card-shadow"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            sm={5}
          >
            <Link
              to="https://maolamilk.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                Maola Milk
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              With Maola, you know it's fresh from farm to fridge. It's so
              fresh, it's almost like you have a new pet.
            </p>
            <p>Print, Digital, Organic & OOH</p>
          </Col>
          <Col className="text-center m-auto" xs={12} sm={5}>
            <img
              src={health}
              alt="plant"
              //   className="img-fluid"
              style={{ borderRadius: 50, width: "30rem" }}
            />
          </Col>
        </Row>
        <Row className="p-3 mb-5">
          <Col className="text-center m-auto" xs={12} sm={5}>
            <img
              src={milk}
              alt="plant"
              //   className="img-fluid"
              style={{ borderRadius: 50, width: "25rem" }}
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
            sm={7}
          >
            <Link
              to="https://www.vdh.virginia.gov/covidwise/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                VIRGINIA DEPARTMENT OF HEALTH — COVIDWISE
              </h2>
            </Link>
            <p className="mb-4 mt-4">
              Digital ads targeted to Virginians aged 18-80 to download
              Virginia's free COVIDWISE Exposure Notifications app to help
              protect their community — while protecting privacy
            </p>
            <p>Print, Digital, Organic, Social, OOH</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Digital;
