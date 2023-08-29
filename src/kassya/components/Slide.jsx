import styled from "@emotion/styled";
import foto1 from "../../assets/slidesimages/foto1.jpg";
import foto2 from "../../assets/slidesimages/foto2.jpg";
import foto3 from "../../assets/slidesimages/foto3.jpg";
import foto4 from "../../assets/slidesimages/foto4.jpg";

const Slide = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col p-0">
          <div
            className="carousel slide"
            id="carousel-home"
            data-bs-ride="carousel"
          >
            <div className="carousel-inner">
              <ImgContainer className="carousel-item active ">
                <div className="carousel-caption">
                  <H2>Lorem, ipsum.</H2>
                  <p>Lorem ipsum dolor sit.</p>
                </div>
                <IMG src={foto1} alt="AUDIFONOS 1" className="img-fluid" />
              </ImgContainer>
              <ImgContainer className="carousel-item">
                <IMG src={foto2} alt="AUDIFONOS 2" className="img-fluid" />
              </ImgContainer>
              <ImgContainer className="carousel-item">
                <IMG src={foto3} alt="AUDIFONOS 3" className="img-fluid" />
              </ImgContainer>
              <ImgContainer className="carousel-item">
                <IMG src={foto4} alt="AUDIFONOS 4" className="img-fluid" />
              </ImgContainer>
            </div>
            {/* CONTROLS */}
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carousel-home"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden"> Anterior</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carousel-home"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden"> Siguiente</span>
            </button>
            {/* INDICATORS */}
            <div className="carousel-indicators">
              <button
              type="button"
              className=""
              data-bs-target="#carousel-home" data-bs-slide-to="0"
              aria-label="Slide1"></button>
               <button
              type="button"
              className=""
              data-bs-target="#carousel-home" data-bs-slide-to="1"
              aria-label="Slide 2"></button>
               <button
              type="button"
              className=""
              data-bs-target="#carousel-home" data-bs-slide-to="2"
              aria-label="Slide 3"></button>
               <button
              type="button"
              className=""
              data-bs-target="#carousel-home" data-bs-slide-to="3"
              aria-label="Slide 4"></button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slide;

const ImgContainer = styled.div`
height: 50vh;
`
const IMG = styled.img`
object-fit: cover;
position: center;
width: 100%;
height: 100%;
`
const H2 = styled.h2`
color: pink`