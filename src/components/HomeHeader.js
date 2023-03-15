import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardTitle,
  Container,
  Row,
  Col,
  CardBody,
  CardFooter,
  CardSubtitle,
  Button,
  img,
} from "reactstrap";
import background from "../imgs/home/white-brick.jpg";
const HomeHeader = () => {
  return (
    <div className="p-0 m-0">
      <Card inverse className="" style={{ border: "none" }}>
        <CardImg
          alt="Card image cap"
          src={background}
          style={{ height: 200, opacity: 0.3 }}
          width="100%"
        />
        <CardImgOverlay>
          <Row>
            <Col className="text-center mt-5">
              <CardTitle
                tag="h1"
                className="me-auto"
                style={{ color: "black", fontWeight: 700 }}
              >
                Services
              </CardTitle>
            </Col>
          </Row>
        </CardImgOverlay>
      </Card>
    </div>
  );
};

export default HomeHeader;
