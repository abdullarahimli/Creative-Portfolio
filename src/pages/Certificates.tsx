import { useEffect } from 'react';
import lightGallery from 'lightgallery';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';
import lgFullscreen from 'lightgallery/plugins/fullscreen';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/css/lg-zoom.css';
import development from '../assets/images/certificates/development.png';
import design from '../assets/images/certificates/design.png';
import skills from '../assets/images/certificates/skills.png';
import react from '../assets/images/certificates/react.png';
import { Link as ScrollLink } from "react-scroll";
import '../assets/css/style.css';

const Certificates = () => {
    useEffect(() => {
        const galleries = document.querySelectorAll('.st-lightgallery');
        for (const gallery of galleries) {
            lightGallery(gallery as HTMLElement, {
                selector: '.st-lightbox-item',
                subHtmlSelectorRelative: false,
                thumbnail: false,
                mousewheel: true,
                controls: true,
                rotate: true,
                plugins: [lgThumbnail, lgZoom, lgFullscreen],
                mobileSettings: {
                    controls: true,
                    showCloseIcon: true,
                    download: true,
                    rotate: true,
                },
            });
        }
    }, []);

    const certificateItems = [
        {
            img: development,
            lg: development,
            frameWidth: 370,
            frameHeight: 300,
            title: "Software Development",
            description: "HTML / CSS / JS / C#",
        },
        {
            img: design,
            lg: design,
            frameWidth: 370,
            frameHeight: 300,
            title: "Graphic / Web Design",
            description: "Photoshop / Illustrator / Figma",
        },
        {
            img: skills,
            lg: skills,
            frameWidth: 370,
            frameHeight: 300,
            title: "Soft Skills",
            description: "Teamwork / Communication",
        },
        {
            img: react,
            lg: react,
            frameWidth: 370,
            frameHeight: 300,
            title: "React Developer",
            description: "React.js / Redux / Hooks",
        },
    ];


    return (
        <div className="mt-0" id="certificates">
            <section id='certificates'>
                <div className="st-height-b100 st-height-lg-b80"></div>
                <div className="container">
                    <div className="st-section-heading st-style1">
                        <h4 className="st-section-heading-title">CERTIFICATES</h4>
                        <h2 className="st-section-heading-subtitle">CERTIFICATES</h2>
                    </div>
                    <div className="st-height-b25 st-height-lg-b25"></div>
                </div>
                <div className="container">
                    <div className="row">
                        {certificateItems.map((item, index) => (
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
                                                    alt={`Certificate ${index + 1}`}
                                                    className="object-contain max-w-full max-h-full"
                                                />
                                            </div>
                                            <div className="st-portfolio-item-hover">
                                                <i className="fas fa-plus-circle"></i>
                                                <h5>{item.title}</h5>
                                                <p>{item.description}</p>
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
        </div>
    );
};

export default Certificates;
