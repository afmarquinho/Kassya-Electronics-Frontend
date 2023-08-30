import Row from "react-bootstrap/esm/Row";
import foto1 from "../../assets/images/casa1.jpg";
import foto2 from "../../assets/images/casa2.jpg";
import foto3 from "../../assets/images/casa3.jpg";
import foto4 from "../../assets/images/casa4.jpg";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

const HotSale = () => {
  return (
    <Container className="p-0">
      <Row className="row">
        <Col lg={8}>
          <Col xs={12} md={6} className="bg-primario">
            <div className="item">
              <img src={foto1} alt="" />
            </div>
          </Col>
          <Col  xs={12} md={6} className="bg-primary">
            <div className="item">
              <img src={foto2} alt="" />
            </div>
          </Col>
          <Col>
          <Col>
            <div className="item">
              <img src={foto3} alt="" />
            </div>
          </Col></Col>
        </Col>
        <Col lg={4}>
          <div className="item">
            <img src={foto4} alt="" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default HotSale;
