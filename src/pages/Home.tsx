import { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'jquery.ripples';
import heroBg from '../assets/images/hero-bg-1.jpg';
import myPhoto from '../assets/images/section/aboutImage1.png';

const Home = () => {

    const rippleRef = useRef(null);

    useEffect(() => {
        const isMobile = window.innerWidth < 768;

        if (rippleRef.current && !isMobile) {
            try {
                $(rippleRef.current).ripples({
                    resolution: 512,
                    dropRadius: 20,
                    perturbance: 0.04,
                });
            } catch (err) {
                console.warn('Ripples could not be initialized:', err);
            }
        }

        return () => {
            if (rippleRef.current && !isMobile) {
                try {
                    $(rippleRef.current).ripples('destroy');
                } catch (err) {
                    console.warn('Ripples destroy error:', err);
                }
            }
        };
    }, []);


    return (
        <div className='mt-0'>
            <section
                id='home'
                ref={rippleRef}
                className="st-hero st-style2 st-ripple-version bg-cover bg-center relative"
                style={{ backgroundImage: `url(${heroBg})` }}
            >
                <div className="container mx-auto py-20 text-center">
                    <div className="st-hero-text">
                        <div className="st-author mx-auto w-32 h-32 rounded-full overflow-hidden"> {/* w-full h-full object-cover hidden sm:block   -   lazım olsa mobil görünüşdə şəkli bağlamaq olar */}
                            <img src={myPhoto} alt="Author" className="w-full h-full object-cover" />
                        </div>
                        <h1 className="text-4xl font-bold mt-6">
                            Hi, I am <span>Abdulla Rahimli</span>
                        </h1>
                        <p className="mt-4 text-lg text-gray-400">
                            I am a frontend web developer. I can provide clean code and pixel perfect design. <br />
                            I also make website more & more interactive
                            with web animations.
                        </p>
                        <div className="st-hero-social-links flex justify-center gap-0 mt-6">
                            <a href="https://www.facebook.com/abdulla.rehimli.54" target='_blank' rel="noreferrer" className="st-social-btn text-xl">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="https://x.com/abdullarahimli" target='_blank' rel="noreferrer" className="st-social-btn text-xl">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="https://github.com/abdullarahimli" target='_blank' rel="noreferrer" className="st-social-btn text-black text-xl">
                                <i className="fab fa-github"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
