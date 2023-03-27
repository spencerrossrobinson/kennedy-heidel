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
import pickle from "../imgs/print/pickleball.png";
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
        className="card-shadow"
        style={{
          background: "#de8e4e",
          borderTopLeftRadius: 300,
          borderBottomLeftRadius: 300,
        }}
      >
        <Fade>
          <h1
            className="text-center m-5"
            style={{ fontSize: 95, color: "white", fontWeight: 700 }}
          >
            Expertise
          </h1>
        </Fade>
        {/* mapping through the cardData to display 5 cards that will eventually be links on the home page */}
        {cardData.map((card) => (
          <Col className="zoom m-5">
            <Link
              to={card.link}
              style={{ color: "inherit", textDecoration: "none" }}
            >
              <h1
                className="text-center"
                style={{ fontSize: 65, color: "white", fontWeight: 700 }}
              >
                {card.title}
              </h1>
              <Card
                inverse
                style={{
                  width: "30rem",
                  height: 500,
                  border: "none",
                }}
                className="m-auto card-shadow"
              >
                <CardImg
                  alt="Card image cap"
                  src={card.imageUrl}
                  className=""
                />
              </Card>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
