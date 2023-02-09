import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png"

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Perspiciatis laboriosam inventore vero facere dicta rem id, corrupti facilis cupiditate cumque dolore
                        nam molestiae deserunt repellendus delectus. Voluptatum et quibusdam iusto repudiandae, officia architecto rerum.</p>
                    <div className="ctas">
                        {/* ctas = call to action */}
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" />
            </div>
        </div>
    );
};

export default Banner;

