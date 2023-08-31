import styled from "@emotion/styled";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import { Link } from "react-router-dom";
import { colores } from "../helpers/variablesEstilos";

const Info = () => {
  return (
    <GrandContainer>
      <Container>
        <Row className="p-5 my-4">
          <Col xs={12}>
            <StyledLink to="#" className="rounded-4">
              COMPRA AHORA
            </StyledLink>
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-start align-center ps-5 py-4 text-bold"
          >
            <div className="icon d-flex justify-center align-center text-white">
              200
            </div>{" "}
            Casas entregadas
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-start align-center  ps-5 py-4 text-bold"
          >
            <div className="icon d-flex justify-center align-center text-white">
              50
            </div>{" "}
            Mansiones
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-start align-center  ps-5 py-4 text-bold"
          >
            <div className="icon icon-restroom d-flex justify-center align-center text-white">
              <svg
                fill="#dc3545"
                height="800px"
                width="800px"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 512 512"
                xmlSpace="preserve"
              >
                <g>
                  <g>
                    <path
                      d="M123.219,261.064v15.572h-0.001c0,48.304,39.862,87.954,88.166,87.954h89.233c48.305,0,87.041-39.649,87.041-87.954
			v-15.572H123.219z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M298.823,376.346c-0.023-0.287-0.021-0.504-0.021-0.504h-85.603c0,0,0,0.217-0.021,0.504L202.843,512h106.315
			L298.823,376.346z"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M385.407,205.925h-19.915l7.54-157.744c1.957-17.946-12.098-33.552-30.151-33.552H289.57C288.41,6.752,281.39,0,272.879,0
			h-34.884c-8.51,0-15.532,6.752-16.691,14.629h-52.186c-18.052,0-32.107,15.606-30.149,33.552l8.419,157.744h-20.795
			c-9.322,0-16.879,7.557-16.879,16.879c0,7.338,4.691,13.564,11.23,15.89c1.769,0.629,3.664,0.989,5.649,0.989h258.813
			c1.984,0,3.88-0.36,5.649-0.989c6.54-2.326,11.23-8.552,11.23-15.89C402.286,213.483,394.728,205.925,385.407,205.925z"
                    />
                  </g>
                </g>
              </svg>
            </div>{" "}
            Baño
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-start align-center ps-5 py-4 text-bold"
          >
            {" "}
            <div className="icon icon-drop d-flex justify-center align-center text-white">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                enableBackground="new 0 0 32 32"
                version="1.1"
                xmlSpace="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Energy20" />

                <g id="Energy19" />

                <g id="Energy18" />

                <g id="Energy17" />

                <g id="Energy16" />

                <g id="Energy15" />

                <g id="Energy14" />

                <g id="Energy13" />

                <g id="Energy12" />

                <g id="Energy11">
                  <g>
                    <path
                      d="M28,19c0,6.62-5.38,12-12,12S4,25.62,4,19C4,12.58,14.83,1.75,15.3,1.29c0.39-0.39,1.01-0.39,1.4,0    C17.17,1.75,28,12.58,28,19z"
                      fill="#dc3545"
                    />
                  </g>

                  <g>
                    <path
                      d="M14,26c-3.3086,0-6-2.6914-6-6c0-0.5527,0.4478-1,1-1s1,0.4473,1,1c0,2.2061,1.7944,4,4,4    c0.5522,0,1,0.4473,1,1S14.5522,26,14,26z"
                      fill="#FFFFFF"
                    />
                  </g>
                </g>

                <g id="Energy10" />

                <g id="Energy09" />

                <g id="Energy08" />

                <g id="Energy07" />

                <g id="Energy06" />

                <g id="Energy05" />

                <g id="Energy04" />

                <g id="Energy03" />

                <g id="Energy02" />

                <g id="Energy01" />
              </svg>
            </div>
            Impermeable
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-start align-center ps-5 py-4 text-bold"
          >
            <div className="icon icon-wood d-flex justify-center align-center text-white">
              100%
            </div>
            Madera Inmunizada
          </Col>
          <Col
            xs={12}
            sm={6}
            md={4}
            className="d-flex justify-start align-center ps-5 py-4 text-bold"
          >
            <div className="icon icon-panel d-flex justify-center align-center text-white">
              <svg
                width="800px"
                height="800px"
                viewBox="0 0 32 32"
                enable-background="new 0 0 32 32"
                version="1.1"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g id="Energy20" />

                <g id="Energy19" />

                <g id="Energy18" />

                <g id="Energy17" />

                <g id="Energy16" />

                <g id="Energy15" />

                <g id="Energy14" />

                <g id="Energy13" />

                <g id="Energy12" />

                <g id="Energy11" />

                <g id="Energy10" />

                <g id="Energy09" />

                <g id="Energy08" />

                <g id="Energy07">
                  <g>
                    <path
                      d="M20,20v10c0,0.55-0.45,1-1,1h-6c-0.55,0-1-0.45-1-1V20c0-0.55,0.45-1,1-1h6C19.55,19,20,19.45,20,20z"
                      fill="#dc3545"
                    />
                  </g>

                  <path
                    d="M31.01,20c0,0.55-0.45,1-1,1C30,21,30,21,29.99,21h-28c-0.3,0-0.59-0.14-0.78-0.37   c-0.19-0.24-0.26-0.55-0.2-0.85l4-18C5.12,1.33,5.52,1,5.99,1h20c0.47,0,0.87,0.33,0.98,0.78l3.95,17.81   C30.98,19.72,31.01,19.86,31.01,20z"
                    fill="#881919"
                  />

                  <path
                    d="M30.9341,19.5942l-3.958-17.811C26.8745,1.3257,26.4688,1,26,1H6C5.5313,1,5.1255,1.3257,5.0239,1.7832   l-4,18c-0.0659,0.2959,0.0063,0.606,0.1958,0.8423C1.4097,20.8623,1.6968,21,2,21h28c0.0068,0,0.0137-0.0005,0.02,0   c0.5522,0,1-0.4478,1-1C31.02,19.8555,30.9893,19.7183,30.9341,19.5942z M11.1804,13l0.6667-4h8.3058l0.6667,4H11.1804z    M21.1529,15l0.6667,4H10.1804l0.6667-4H21.1529z M5.4689,9h4.3507l-0.6667,4H4.58L5.4689,9z M12.1804,7l0.6667-4h6.3058l0.6667,4   H12.1804z M22.1804,9h4.3507l0.8889,4h-4.5729L22.1804,9z M26.0867,7h-4.2396l-0.6667-4h4.0173L26.0867,7z M6.8022,3h4.0173   l-0.6667,4H5.9133L6.8022,3z M4.1355,15h4.6841l-0.6667,4H3.2466L4.1355,15z M23.8471,19l-0.6667-4h4.6841l0.8889,4H23.8471z"
                    fill="#ee6565"
                  />

                  <g>
                    <path
                      d="M25,31H7c-0.5522,0-1-0.4478-1-1s0.4478-1,1-1h18c0.5522,0,1,0.4478,1,1S25.5522,31,25,31z"
                      fill="#881919"
                    />
                  </g>
                </g>

                <g id="Energy06" />

                <g id="Energy05" />

                <g id="Energy04" />

                <g id="Energy03" />

                <g id="Energy02" />

                <g id="Energy01" />
              </svg>
            </div>
            Energia Solar
          </Col>
        </Row>
      </Container>
    </GrandContainer>
  );
};

export default Info;
const GrandContainer = styled.div`
  .container {
    .row {
      position: relative;
      background-color: white;
      .icon {
        font-size: 1.5rem;
        font-weight: 900;
        width: 5rem;
        height: 5rem;
        border-radius: 50%;
        padding: 0.5rem;
        margin-right: 1rem;
        background-color: ${colores.rojo};
        @media (min-width: 768px) {
          font-size: 2.1rem;
          padding: 1rem;
          width: 7rem;
          height: 7rem;
        }
        svg {
          color: #dc3545;
        }
      }
      .icon-restroom,
      .icon-drop,
      .icon-panel {
        background-color: transparent;
      }
    }
  }
`;
const StyledLink = styled(Link)`
  font-size: 1.5rem;
  font-weight: 900;
  text-align: center;
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colores.amarillo};
  padding: 1rem;
  width: 70%;
  @media (min-width: 768px) {
    font-size: 2rem;
    width: 25rem;
  }
`;
