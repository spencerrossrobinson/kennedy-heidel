import { Fade, Zoom } from "react-awesome-reveal";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  CardSubtitle,
  Row,
  Col,
  CardImg,
  CardImgOverlay,
} from "reactstrap";
import "../css/home.css";
import plant from "../imgs/home/right-plant.jpg";
import show from "../imgs/digital/catch-show.png";
import pickle from "../imgs/print/pickle-resize-2.png";
import social from "../imgs/social/coffee-phone.png";
import web from "../imgs/web/green-pink-screen.png";
import collateral from "../imgs/collateral/mule.png";
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
      title: "PRINT",
      link: "print",
      imageUrl: pickle,
      background: "#b7cf99",
    },
    {
      id: 3,
      title: "COLLATERAL",
      link: "collateral",
      imageUrl: collateral,
      background: "#f7892e",
    },
    {
      id: 4,
      title: "SOCIAL",
      link: "social",
      imageUrl: social,
      background: "#4faaa7",
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
    <div className="mt-5 " style={{ marginBottom: 150 }}>
      <Row
        className="card-shadow blue-background py-4 "
        style={{
          borderTopLeftRadius: 100,
          borderBottomLeftRadius: 100,
          borderTopRightRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <Row
          className="card-shadow orange-background m-0"
          style={{
            borderTopLeftRadius: 300,
            borderBottomLeftRadius: 300,
            borderTopRightRadius: 300,
            borderBottomRightRadius: 300,
          }}
        >
          <Fade>
            <h1
              className="text-center m-5 header-font"
              style={{ fontSize: 75, color: "white", fontWeight: 700 }}
            >
              Expertise
            </h1>
          </Fade>
        </Row>
      </Row>
      {/* mapping through the cardData to display 5 cards that will eventually be links on the home page */}
      <Row style={{ marginTop: 100 }}>
        {cardData.map((card) => (
          <Col className="zoom m-auto text-center" xs={12} sm={12} md={5}>
            <Link
              to={card.link}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <img
                src={card.imageUrl}
                alt="plant"
                className=""
                style={{ borderRadius: 50, background: "none", width: "25rem" }}
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
