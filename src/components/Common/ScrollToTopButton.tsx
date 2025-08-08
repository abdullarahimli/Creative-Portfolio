import { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        isVisible && (
            <button
                onClick={scrollToTop}
                className="scroll-to-top-btn"
                style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: '50%',
                    // backgroundColor: '#FEC544',
                    backgroundColor: '#FBDD00',
                    color: '#0B0F1E',
                    border: 'none',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                    position: 'fixed',
                    bottom: '30px',
                    right: '30px',
                    zIndex: 1000,
                    outline: 'none'
                }}
                aria-label="Scroll to top"
            >
                <i className="fas fa-arrow-up" style={{ fontSize: '18px' }}></i>
            </button>
        )
    );
};

export default ScrollToTopButton;
