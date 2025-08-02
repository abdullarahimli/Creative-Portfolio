import { useEffect } from 'react';
import Slider from "react-slick";
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import quote from '../assets/images/icon/quote.png'
import hermes_lg from '../assets/images/portfolio/hermes_lg.png';
import gemza_lg from '../assets/images/portfolio/gemza_lg.png';
import bacola_lg from '../assets/images/portfolio/bacola_lg.png'
import foodmarket_lg from '../assets/images/portfolio/foodmarket_lg.png'
import duralux_lg from '../assets/images/portfolio/duralux_lg.png'
import cooper_lg from '../assets/images/portfolio/cooper_lg.png'
import { Link as ScrollLink } from "react-scroll";
import reviews from '../data/reviews.json'




const Portfolio = () => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    dots: false,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    dots: true,
                }
            }
        ]
    };

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    const portfolioItems = [
        {
            img: hermes_lg,
            lg: hermes_lg,
            frameWidth: 370,
            frameHeight: 200,
            category: "Web Development",
            subCategory: "Agency / Business",
        },
        {
            img: gemza_lg,
            lg: gemza_lg,
            frameWidth: 370,
            frameHeight: 200,
            category: "Web Development",
            subCategory: "Agency / Business",
        },
        {
            img: bacola_lg,
            lg: bacola_lg,
            frameWidth: 370,
            frameHeight: 200,
            category: "Web Development",
            subCategory: "E-Commerce / Sales",
        },
        {
            img: foodmarket_lg,
            lg: foodmarket_lg,
            frameWidth: 370,
            frameHeight: 200,
            category: "Web Development",
            subCategory: "E-Commerce / Sales",
        },
        {
            img: duralux_lg,
            lg: duralux_lg,
            frameWidth: 370,
            frameHeight: 200,
            category: "Web Development",
            subCategory: "Admin / Dashboard",
        },
        {
            img: cooper_lg,
            lg: cooper_lg,
            frameWidth: 370,
            frameHeight: 200,
            category: "Web Development",
            subCategory: "Landing / Startup",
        },
    ];


    return (
        <div className='mt-0' id='portfolio'>
            <section id="portfolio">
                <div className="st-height-b100 st-height-lg-b80"></div>
                <div className="container">
                    <div className="st-section-heading st-style1">
                        <h4 className="st-section-heading-title">PORTFOLIO</h4>
                        <h2 className="st-section-heading-subtitle">PORTFOLIO</h2>
                    </div>
                    <div className="st-height-b25 st-height-lg-b25"></div>
                </div>
                <div className="container">
                    <div className="row">
                        {portfolioItems.map((item, index) => (
                            <div className="col-lg-4 col-md-6" key={index}>
                                <div className="st-portfolio-single st-style1 st-lightgallery">
                                    <div className="st-portfolio-item">
                                        <a
                                            href={item.lg}
                                            className="st-portfolio st-zoom st-lightbox-item"
                                        >
                                            <div
                                                className="st-portfolio-img st-zoom-in bg-[#F3EFE8] flex justify-center items-center overflow-hidden w-[370px] h-[300px] mx-auto sm:w-full"
                                                style={{
                                                    width: `${item.frameWidth}px`,
                                                    height: `${item.frameHeight}px`,
                                                }}
                                            >
                                                <img
                                                    src={item.img}
                                                    alt={`Portfolio ${index + 1}`}
                                                    className="object-contain max-w-full max-h-full"
                                                />
                                            </div>
                                            <div className="st-portfolio-item-hover">
                                                <i className="fas fa-plus-circle"></i>
                                                <h5>{item.category}</h5>
                                                <p>{item.subCategory}</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className="col-lg-12 text-center">
                            <div className="st-portfolio-btn">
                                <ScrollLink
                                    to="contact"
                                    smooth={true}
                                    duration={1000}
                                    className="st-btn st-style1 st-color1"
                                    style={{ cursor: "pointer" }}
                                >Load More</ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="st-height-b100 st-height-lg-b80"></div>
            </section>

            <section className="st-dark-bg">
                <div className="st-height-b100 st-height-lg-b80"></div>
                <div className="container">
                    <div className="st-section-heading st-style1">
                        <h4 className="st-section-heading-title">REVIEWS</h4>
                        <h2 className="st-section-heading-subtitle">REVIEWS</h2>
                    </div>
                    <div className="st-height-b25 st-height-lg-b25"></div>
                </div>


                <div className="container">
                    <div className="st-slider st-style1 st-reviews-wrap">
                        <div
                            className="slick-container"
                            data-autoplay="0"
                            data-loop="1"
                            data-speed="600"
                            data-center="0"
                            data-slides-per-view="responsive"
                            data-xs-slides="1"
                            data-sm-slides="2"
                            data-md-slides="3"
                            data-lg-slides="3"
                            data-add-slides="3"
                        >
                            <div className="slick-wrapper" data-aos='fade-right' data-aos-duration="2000" data-aos-delay="200">
                                <Slider {...settings}>
                                    {
                                        reviews && reviews.map((review, id) => (
                                            <div key={id} className="slick-slide-in">
                                                <div
                                                    className="st-testimonial st-style1 wow fadeInLeft"
                                                    data-wow-duration="0.8s"
                                                    data-wow-delay="0.2s"
                                                >
                                                    <div className="st-testimonial-text">
                                                        <p>
                                                            {review.text}
                                                        </p>
                                                        <div className="st-quote">
                                                            <img src={quote} alt="quote" />
                                                        </div>
                                                    </div>
                                                    <div className="st-testimonial-info">
                                                        <div className="st-testimonial-img">
                                                            <img src={review.img} alt="client1" />
                                                        </div>
                                                        <div className="st-testimonial-meta">
                                                            <h4 className="st-testimonial-name">{review.name}</h4>
                                                            <div className="st-testimonial-designation">{review.role}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="pagination st-style1 st-flex st-hidden"></div>
                        <div className="swipe-arrow st-style1 st-hidden">
                            <div className="slick-arrow-left">
                                <i className="fa fa-chevron-left"></i>
                            </div>
                            <div className="slick-arrow-right">
                                <i className="fa fa-chevron-right"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="st-height-b100 st-height-lg-b80"></div>
            </section>
        </div>
    )
}

export default Portfolio
