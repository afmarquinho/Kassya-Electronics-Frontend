import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import casa from "../../assets/images/casa11.jpg";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <Container fluid className="m-0 p-0 ovf-hidden">
      <Row>
        <Col>
          <ImgContainer className="img-container">
            <div className="text_container">
              <p className="img_text">
                <span className="forentia banner-text">Forentia</span> <br />
                "Elevamos el diseño a otro nivel con una casa en el árbol que
                combina <span className="highlighted_text">lujo</span> y{" "}
                <span className="highlighted_text">naturaleza</span> en un solo
                lugar. ¡Ven y experimenta la tranquilidad elevada a nuevas
                alturas.
                <br />
              </p>
              <StyledLink to="#">SABER MÁS</StyledLink>
            </div>
            <img src={casa} className="img w-100 h-100" alt="Banner" />
          </ImgContainer>
        </Col>
      </Row>
    </Container>
  );
};
// TODO: VERFIICAR PORQIE NO TOMA EL HOVER EL LINK

export default Banner;
const ImgContainer = styled.div`
  height: 100vh;
  @media (min-width: 768px) {
    height: calc(60rem);
  }
  overflow: hidden;
  position: relative;
  z-index: -1;
  &::after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;
    background-image: linear-gradient(
      to top,
      transparent,
      #000000ce,
      transparent
    );
    @media (min-width: 768px) {
      background-image: linear-gradient(to right, #000000a7, transparent);
    }
  }
  img {
    object-fit: cover;
    object-position: center;
    @media (min-width: 768px) {
      object-position: center -350px;
    }
    @media (min-width: 992px) {
      object-position: center -630px;
    }
  }
  .text_container {
    height: 100%;
    width: 90%;
    position: absolute;
    z-index: 20;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (min-width: 768px) {
      width: 60%;
      padding: 10rem;
      align-items: start;
    }
  }
  .img_text {
    color: white;
    font-size: 1.5rem;
    @media (min-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .forentia {
    font-weight: 900;
    font-size: 3rem;
    color: #ff9900;
    @media (min-width: 768px) {
      font-size: 6rem;
    }
  }
  .highlighted_text {
    font-weight: bold;
    text-decoration: underline;
    color: #aceeac;
  }
`;
const StyledLink = styled(Link)`
  color: #000000;
  background-color: #f1a604;
  padding: 0.5rem 2rem;
  font-weight: 900;
  display: inline-block;
  transition: all 0.3s ease;
  margin-top: 1rem;
  font-size: 1.2rem;
  @media (min-width: 768px) {
    font-size: 1.6rem;
    padding: 1rem 2.3rem;
  }
  :hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
