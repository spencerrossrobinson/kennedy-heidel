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
  const cardData = [
    {
      id: 1,
      title: "DIGITAL",
      imageUrl: plant,
    },
    {
      id: 2,
      title: "COPYWRITE",
      imageUrl: plant,
    },
    {
      id: 3,
      title: "VIDEO",
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
              <CardImg alt="Card image cap" src={card.imageUrl} />
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
