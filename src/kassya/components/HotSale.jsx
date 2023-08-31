import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import foto1 from "../../assets/images/casa1.jpg";
import foto2 from "../../assets/images/casa2.jpg";
import foto3 from "../../assets/images/casa3.jpg";
import foto4 from "../../assets/images/casa13.jpg";
import styled from "@emotion/styled";

const HotSale = () => {
  return (
    <Container className="py-5">
      <Row className="p-0">
        <Col xs={12} className="p-0">
          <GalleyContainer className="gallery__container">
            <PhotoContainer1 className="gallery__photo photo1 rounded-4"></PhotoContainer1>
            <PhotoContainer2 className="gallery__photo photo2 rounded-4"></PhotoContainer2>
            <PhotoContainer3 className="gallery__photo photo3 rounded-4"></PhotoContainer3>
            <PhotoContainer4 className="gallery__photo--modificado photo4 rounded-4"></PhotoContainer4>
          </GalleyContainer>
        </Col>
      </Row>
    </Container>
  );
};

export default HotSale;
const GalleyContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-gap: 10px;
  width: 100%;
  height: 50rem;
  margin: 0 auto;
  .gallery__photo {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }
`;
const PhotoContainer1 = styled.div`
  grid-column: 1 / 2;
  grid-row: 1 / 2;
  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }
`;
const PhotoContainer2 = styled.div`
  grid-column: 2 / 3;
  grid-row: 1 / 2;
  @media (max-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }
`;
const PhotoContainer3 = styled.div`
  grid-column: 3 / 4;
  grid-row: 1 / 3;
  @media (max-width: 768px) {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
`;
const PhotoContainer4 = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center -140px;
  @media (max-width: 992px) {
    background-position: center;
  }
  @media (max-width: 768px) {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }
`;
