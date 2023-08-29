import foto1 from '../../assets/slidesimages/foto1.jpg'
import foto2 from '../../assets/slidesimages/foto2.jpg'
import foto3 from '../../assets/slidesimages/foto3.jpg'
import foto4 from '../../assets/slidesimages/foto4.jpg'

const HotSale = () => {
  return (
    <div className="container">
        <div className="row">
            <div className="col">
                <div className="item"><img src={foto1} alt="" /></div>
                <div className="item"><img src={foto2} alt="" /></div>
                <div className="item"><img src={foto3} alt="" /></div>
            </div>
            <div className="col"></div>
        </div>
    </div>
  )
}

export default HotSale