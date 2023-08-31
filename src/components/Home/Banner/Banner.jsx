import "./Banner.scss";
import BannerImage from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>Sales</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore eum
            repudiandae iusto! Sint eligendi impedit molestiae voluptatem atque
            quidem! Placeat?
          </p>
          <div className="ctas">
            <div className="baner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-image" src={BannerImage} alt="" />
      </div>
    </div>
  );
};

export default Banner;
