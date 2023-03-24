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

const HomeCards = () => {
  //eventually will move this card data to its own folder with more info, basic scaffold to get them displaying on the home page
  const cardData = [
    {
      id: 1,
      title: "DIGITAL",
      imageUrl: plant,
    },
    {
      id: 2,
      title: "PRINT",
      imageUrl: plant,
    },
    {
      id: 3,
      title: "COLLATERAL",
      imageUrl: plant,
    },
    {
      id: 4,
      title: "SOCIAL",
      imageUrl: plant,
    },
    {
      id: 5,
      title: "WEB",
      imageUrl: plant,
    },
  ];

  return (
    <div
      className="mt-5 mb-5"
      style={{
        background: "#red",
        borderTopLeftRadius: 500,
        borderBottomLeftRadius: 500,
      }}
    >
      <Row
        className="card-shadow"
        style={{
          background: "#de8e4e",
          borderTopLeftRadius: 500,
          borderBottomLeftRadius: 500,
        }}
      >
        <Fade>
          <h1
            className="text-center"
            style={{ fontSize: 95, color: "white", fontWeight: 700 }}
          >
            Expertise
          </h1>
        </Fade>
        {/* mapping through the cardData to display 5 cards that will eventually be links on the home page */}
        {cardData.map((card) => (
          <Col className="zoom m-3">
            <Card
              inverse
              style={{
                width: "30rem",
                border: "none",
              }}
              className="m-auto card-shadow"
            >
              <CardImg alt="Card image cap" src={card.imageUrl} className="" />
              <CardImgOverlay>
                <CardTitle tag="h5">Card Title</CardTitle>
                <CardText>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </CardText>
                <CardText>
                  <small className="text-muted">Last updated 3 mins ago</small>
                </CardText>
              </CardImgOverlay>
            </Card>
            <h1 className="text-center">{card.title}</h1>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HomeCards;
