import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import foto1 from "../../assets/images/casa1.jpg";
import foto2 from "../../assets/images/casa2.jpg";
import foto3 from "../../assets/images/casa3.jpg";
import foto4 from "../../assets/images/casa13.jpg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const HotSale = () => {
  return (
    <Container className="py-5">
      <Row className="p-0">
        <Col xs={12} className="p-0">
          <h3 className="text-center text-danger">PROMOCIONES IMPERDIBLES</h3>
          <GalleyContainer className="gallery__container">
            <PhotoContainer1 className="gallery__photo photo1 rounded-4">
              <div className="modelo modelo__comarca text-white text-center">
                Casita modelo Comarca
              </div>
              <div className="discount bg-danger rounded-4">-25%</div>
              <StyledLink to="#" className="rounded-4">+ info</StyledLink>
            </PhotoContainer1>
            <PhotoContainer2 className="gallery__photo photo2 rounded-4">
              {" "}
              <div className="modelo modelo__sorento text-white text-center">
                Casita modelo Sorento
              </div>
              <div className="discount  bg-danger rounded-4">-8%</div>
              <StyledLink to="#" className="rounded-4">+ info</StyledLink>
            </PhotoContainer2>
            <PhotoContainer3 className="gallery__photo photo3 rounded-4">
              <div className="modelo modelo__modelo text-white text-center">
                Casita modelo Malibú
              </div>
              <div className="discount  bg-danger rounded-4">-35%</div>
              <StyledLink to="#" className="rounded-4">+ info</StyledLink>
            </PhotoContainer3>
            <PhotoContainer4 className="gallery__photo--modificado photo4 rounded-4">
              <div className="modelo modelo__nebula text-white text-center">
                Casita modelo Nebula
              </div>
              <div className="discount bg-danger rounded-4">-20%</div>
              <StyledLink to="#" className="rounded-4">+ info</StyledLink>
            </PhotoContainer4>
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
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
  }

  .gallery__photo {
    width: 100%;
    height: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  }
  .gallery__photo,
  .gallery__photo--modificado {
    position: relative;

    &::after {
      content: "";
      width: 100%;
      height: 100%;
      top: 0;
      right: 0;
      position: absolute;
      z-index: 50;
      background-color: #00000058;
    }
  }
  .modelo {
    font-weight: bold;
    font-size: 1.7rem;
    position: absolute;
    z-index: 100;
    width: 100%;
    padding-top: 2rem;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .discount {
    font-size: 1.5rem;
    font-weight: 900;
    position: absolute;
    z-index: 100;
    bottom: 0;
    right: 0;
    display: inline-block;
    padding: 1rem;
    color: white;
    @media (min-width: 768px) {
      font-size: 2rem;
    }
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
const StyledLink = styled(Link)`
  font-weight: 900;
  font-size: 1.5rem;
  color: #000000;
  background-color: #ffc107;
  padding: 0.5rem 1.5rem;
  position: absolute;
  z-index: 100;
  top: 65%;
  left: 50%;
  transform: translate(-50%, -50%);
  border: none;
  @media (min-width: 768px) {
    font-size: 2rem;
    padding: 0.5rem 2rem;
    transform: translate(-50%, -25%);
  }
`;
