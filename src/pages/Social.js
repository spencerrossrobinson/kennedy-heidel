import { Col, Container, Row } from "reactstrap";
import { Slide } from "react-awesome-reveal";
import coffee from "../imgs/social/playbook.png";
import allPosts from "../imgs/social/all-posts.png";
import { Link } from "react-router-dom";

const Social = () => {
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
                A Social Butterfly
              </h1>
            </Slide>
          </Col>
        </Row>
        <Row className="p-3 mb-0" style={{ marginTop: 100 }}>
          <Col
            className="text-center zoom p-5 m-auto blue-background card-shadow d-none d-lg-block"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            md={6}
          >
            <Link
              to="https://asmithbowman.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                A. SMITH BOWMAN DISTILLERY
              </h2>
            </Link>
            <p className="mb-5">
              To create an effective organic social media strategy for A. Smith
              Bowman Distillery, it was essential to understand the brand's core
              values and target audience. Given that A. Smith Bowman is
              Virginia's oldest and most award-winning distillery, I highlighted
              the brand's rich history, craftsmanship, and spirit's unique
              flavor profiles.
            </p>
          </Col>
          <Col className="text-center m-auto" xs={12} lg={6}>
            <img
              src={coffee}
              alt="plant"
              className="super-zoom"
              style={{ borderRadius: 50, width: "40rem" }}
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
              to="https://asmithbowman.com/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                A. SMITH BOWMAN DISTILLERY
              </h2>
            </Link>
            <p className="mb-5">
              To create an effective organic social media strategy for A. Smith
              Bowman Distillery, it was essential to understand the brand's core
              values and target audience. Given that A. Smith Bowman is
              Virginia's oldest and most award-winning distillery, I highlighted
              the brand's rich history, craftsmanship, and spirit's unique
              flavor profiles.
            </p>
          </Col>
        </Row>
        <Row className="p-3 mt-0">
          <Col className="text-center m-auto" xs={12} lg={6}>
            <img
              src={allPosts}
              alt="plant"
              className="super-zoom"
              style={{ borderRadius: 50, width: "40rem" }}
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
            lg={6}
          >
            <Link
              to="https://www.instagram.com/madisonmain/"
              style={{ color: "inherit", textDecoration: "none" }}
              target="_blank"
            >
              <h2
                className="mt-5 zoom"
                style={{ fontWeight: 700, textDecoration: "underline" }}
              >
                MADISON+MAIN ORGANIC SOCIAL MEDIA
              </h2>
            </Link>
            <p className="mb-5">
              Total social media rebrand! Strategic updates and overhaul from
              exclusive work highlights and birthday posts to include trending
              content and more engaging posts.
              <br />
              Based on this strategy, Madison+Main saw a 143% increase in
              website traffic (comparing June-September of the previous year).
            </p>
          </Col>
        </Row>
        <Row className="p-3 mb-0">
          <Col
            className="text-center zoom p-5 m-auto green-background card-shadow d-none d-lg-block"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            sm={5}
          >
            <h2
              className="mt-5 zoom"
              style={{ fontWeight: 700, textDecoration: "underline" }}
            >
              EXAMPLE SOCIAL MEDIA PLAYBOOK
            </h2>
            <p className="mb-5">
              Spearheaded the creation of Social Media Playbooks at my current
              agency.
              <br />
              Created a bargaining tool for RFPs and an additional line item in
              Marketing Plans and Proposals. It has changed the perception of
              social media strategy and creation at our agency for the better.
            </p>
          </Col>
          <Col className="text-center m-auto" xs={12} lg={5}>
            <img
              src={coffee}
              alt="plant"
              className="img-fluid zoom"
              style={{ borderRadius: 50 }}
            />
          </Col>
          <Col
            className="text-center zoom p-5 m-auto green-background card-shadow d-block d-lg-none"
            style={{
              borderBottomLeftRadius: 150,
              borderTopRightRadius: 50,
              borderBottomRightRadius: 50,
              color: "white",
            }}
            xs={12}
            lg={5}
          >
            <h2
              className="mt-5 zoom"
              style={{ fontWeight: 700, textDecoration: "underline" }}
            >
              EXAMPLE SOCIAL MEDIA PLAYBOOK
            </h2>
            <p className="mb-5">
              Spearheaded the creation of Social Media Playbooks at my current
              agency.
              <br />
              Created a bargaining tool for RFPs and an additional line item in
              Marketing Plans and Proposals. It has changed the perception of
              social media strategy and creation at our agency for the better.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Social;
