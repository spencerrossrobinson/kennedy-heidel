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
    },
    {
      id: 2,
      title: "PRINT",
      link: "print",
      imageUrl: pickle,
    },
    {
      id: 3,
      title: "COLLATERAL",
      link: "collateral",
      imageUrl: collateral,
    },
    {
      id: 4,
      title: "SOCIAL",
      link: "social",
      imageUrl: social,
    },
    {
      id: 5,
      title: "WEB",
      link: "web",
      imageUrl: web,
    },
  ];

  return (
    <div className="mt-5 mb-5">
      <Row
        className="card-shadow orange-background"
        style={{
          borderTopLeftRadius: 300,
          borderBottomLeftRadius: 300,
        }}
      >
        <Fade>
          <h1
            className="text-center m-5 header-font"
            style={{ fontSize: 95, color: "white", fontWeight: 700 }}
          >
            Expertise
          </h1>
        </Fade>
        {/* mapping through the cardData to display 5 cards that will eventually be links on the home page */}
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
                style={{ borderRadius: 50, background: "none", width: "30rem" }}
              />
              <h1
                className="text-center header-font card-shadow green-background p-2"
                style={{
                  fontSize: 65,
                  color: "white",
                  fontWeight: 700,
                  borderRadius: 50,
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
