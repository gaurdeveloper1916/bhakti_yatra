'use client'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
const Banner = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        waitForAnimate: false
    };
    return (
        <div className="slider-container overflow-hidden">
            <Slider className="h-[calc(100vh-60px)]" {...settings}>
                <div>
                    <img className="w-full h-full " src="https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGluZHUlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D" />
                </div>
                <div>
                    <img src="https://images.unsplash.com/photo-1524443169398-9aa1ceab67d5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGluZHUlMjB0ZW1wbGV8ZW58MHx8MHx8fDA%3D" />
                </div>
                {/* <div>
                    <img src={baseUrl + "/abstract02.jpg"} />
                </div>
                <div>
                    <img src={baseUrl + "/abstract03.jpg"} />
                </div>
                <div>
                    <img src={baseUrl + "/abstract04.jpg"} />
                </div> */}
            </Slider>
        </div>
    )
}
export default Banner;
