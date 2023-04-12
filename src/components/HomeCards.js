import { Slide } from "react-awesome-reveal";
import { Row, Col } from "reactstrap";
import "../css/home.css";
import show from "../imgs/home/show.png";
import pickle from "../imgs/home/goodbye-pickle.png";
import social from "../imgs/social/coffee.png";
import web from "../imgs/web/brown-3.png";
import collateral from "../imgs/home/recipe-book.png";
import { Link } from "react-router-dom";

const HomeCards = () => {
  //eventually will move this card data to its own folder with more info, basic scaffold to get them displaying on the home page
  const cardData = [
    {
      id: 1,
      title: "DIGITAL",
      link: "digital",
      imageUrl: show,
      background: "#c6460f",
    },
    {
      id: 2,
      title: "SOCIAL",
      link: "social",
      imageUrl: social,
      background: "#4faaa7",
    },
    {
      id: 3,
      title: "PRINT",
      link: "print",
      imageUrl: pickle,
      background: "#b7cf99",
    },
    {
      id: 4,
      title: "COLLATERAL",
      link: "collateral",
      imageUrl: collateral,
      background: "#f7892e",
    },
    {
      id: 5,
      title: "WEB",
      link: "web",
      imageUrl: web,
      background: "#eac761",
    },
  ];

  return (
    <div className="mt-5 " id="home-card" style={{ marginBottom: 150 }}>
      <Row className="text-center m-auto">
        <Col className="py-4 ">
          <Slide>
            <h1
              className="text-center m-5 header-font zoom"
              style={{
                fontSize: 95,
                fontWeight: 700,
                // textDecoration: "underline",
                // textDecorationColor: "#4faaa7",
              }}
              md={4}
            >
              Expertise
            </h1>
          </Slide>
        </Col>
      </Row>
      {/* mapping through the cardData to display 5 cards that will eventually be links on the home page */}
      <Row>
        {cardData.map((card) => (
          <Col
            className="zoom m-auto text-center"
            xs={12}
            sm={12}
            md={6}
            lg={4}
          >
            <Link
              to={card.link}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <img
                src={card.imageUrl}
                alt="plant"
                className="m-5"
                style={{ borderRadius: 50, background: "none", width: "20rem" }}
              />
              <h1
                className="text-center header-font card-shadow p-2"
                style={{
                  fontSize: 45,
                  color: "white",
                  fontWeight: 700,
                  borderRadius: 50,
                  background: card.background,
                }}
              >
                {card.title}
              </h1>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
