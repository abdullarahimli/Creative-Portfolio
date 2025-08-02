// import React, { useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";  // react-scroll'dan Link
// import '../../assets/css/style.css'
// import MainLogo from "../../assets/images/MainLogoWhite.png";

// const Header: React.FC = () => {


//     useEffect(() => {
//         window.scrollTo(0, window.scrollY + 1); // Scroll'u 1px ileri götür
//         window.scrollTo(0, window.scrollY - 1); // Sonra geri al
//     }, []);

//     return (
//         <header className="st-site-header st-style1 st-sticky-header st-sticky-active">
//             <div className="st-main-header">
//                 <div className="container">
//                     <div className="st-main-header-in">
//                         <div className="st-main-header-left">
//                             {/* Logo tıklanınca başa scroll yapar */}
//                             <ScrollLink to="home" smooth={true} duration={1000} className="st-site-branding" style={{ cursor: "pointer" }}>
//                                 <div className="w-20 h-20">
//                                     <img src={MainLogo} alt="Logo" />
//                                 </div>
//                             </ScrollLink>
//                         </div>
//                         <div className="st-main-header-right">
//                             <div className="st-nav">
//                                 <ul className="st-nav-list st-onepage-nav">
//                                     <li>
//                                         <ScrollLink
//                                             to="home"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70} // header yüksekliği kadar offset ekleyebilirsin
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}  // aktif link izleme
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             Home
//                                         </ScrollLink>
//                                     </li>
//                                     <li>
//                                         <ScrollLink
//                                             to="about"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70}
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             About
//                                         </ScrollLink>
//                                     </li>
//                                     <li>
//                                         <ScrollLink
//                                             to="resume"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70}
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             Resume
//                                         </ScrollLink>
//                                     </li>
//                                     <li>
//                                         <ScrollLink
//                                             to="portfolio"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70}
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             Portfolio
//                                         </ScrollLink>
//                                     </li>
//                                     <li>
//                                         <ScrollLink
//                                             to="certificates"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70}
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             Certificates
//                                         </ScrollLink>
//                                     </li>
//                                     <li>
//                                         <ScrollLink
//                                             to="blog"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70}
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             Blog
//                                         </ScrollLink>
//                                     </li>
//                                     <li>
//                                         <ScrollLink
//                                             to="contact"
//                                             smooth={true}
//                                             duration={1000}
//                                             offset={-70}
//                                             className="st-smooth-move text-white"
//                                             activeClass="!text-[#FEC544] font-bold"
//                                             spy={true}
//                                             style={{ cursor: "pointer" }}
//                                         >
//                                             Contact
//                                         </ScrollLink>
//                                     </li>
//                                 </ul>
//                                 <div className="sp-phone">
//                                     <svg viewBox="0 0 513.64 513.64">
//                                         <g>
//                                             <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
//                                         </g>
//                                     </svg>
//                                     <div className="sp-phone-no">
//                                         <a href="tel:+994705728295">+994 70 572 82 95</a>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;



















// import React, { useState, useEffect } from "react";
// import { Link as ScrollLink } from "react-scroll";  // react-scroll'dan Link
// import '../../assets/css/style.css';
// import MainLogo from "../../assets/images/MainLogoWhite.png";
// import MobileLogo from '../../assets/images/section/aboutImage1.png'

// const Header: React.FC = () => {
//     // Menü açık/kapalı durumu
//     const [menuOpen, setMenuOpen] = useState(false);

//     // Dropdownların açık/kapalı durumu, burada id ya da index bazlı tutabiliriz
//     // Örnek olarak item index veya unique key kullanabilirsiniz
//     const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});
//     const [isMobile, setIsMobile] = useState(false);

//     // Scroll efektini aynen bırakıyoruz
//     useEffect(() => {
//         window.scrollTo(0, window.scrollY + 1);
//         window.scrollTo(0, window.scrollY - 1);
//     }, []);

//     useEffect(() => {
//         const checkMobile = () => {
//             setIsMobile(window.innerWidth <= 768); // Mobil sınırı
//         };

//         checkMobile(); // Sayfa yüklendiğinde kontrol et
//         window.addEventListener("resize", checkMobile); // Resize durumunda tekrar kontrol et

//         return () => window.removeEventListener("resize", checkMobile); // Temizlik
//     }, []);

//     // Menü toggle fonksiyonu
//     const toggleMenu = () => {
//         setMenuOpen((prev) => !prev);
//     };

//     // Dropdown toggle fonksiyonu (index bazlı)
//     const toggleDropdown = (index: number) => {
//         setOpenDropdowns((prev) => ({
//             ...prev,
//             [index]: !prev[index],
//         }));
//     };

//     // Menü öğeleri (örnek), dropdown olanlar için alt menü de ekliyoruz
//     const menuItems = [
//         { label: "Home", to: "home" },
//         { label: "About", to: "about" },
//         { label: "Resume", to: "resume" },
//         {
//             label: "Portfolio",
//             to: "portfolio",
//             children: [
//                 { label: "Web Design", to: "webdesign" },
//                 { label: "Graphic Design", to: "graphicdesign" },
//             ],
//         },
//         { label: "Certificates", to: "certificates" },
//         { label: "Blog", to: "blog" },
//         { label: "Contact", to: "contact" },
//     ];

//     return (
//         <header className={`st-site-header ${isMobile ? "st-style2" : "st-style1"} st-sticky-header st-sticky-active`}>
//             <div className="st-main-header">
//                 <div className="container">
//                     <div className="st-main-header-in">
//                         <div className="st-main-header-left">
//                             {/* Logo tıklanınca başa scroll yapar */}
//                             <ScrollLink
//                                 to="home"
//                                 smooth={true}
//                                 duration={1000}
//                                 className="st-site-branding"
//                                 style={{ cursor: "pointer" }}
//                             >
//                                 <div className="w-20 h-20">
//                                     <img src={MainLogo} alt="Logo" />
//                                 </div>
//                             </ScrollLink>
//                         </div>

//                         <div className="st-main-header-right">
//                             <nav className="st-nav">
//                                 {/* Mobil menü toggle butonu */}
//                                 <span
//                                     className={`st-munu-toggle ${menuOpen ? "st-toggle-active" : ""}`}
//                                     onClick={toggleMenu}
//                                     style={{ cursor: "pointer" }}
//                                     aria-label="Toggle menu"
//                                 >
//                                     <span></span>
//                                 </span>

//                                 {/* Menü listesi, açık/kapalı duruma göre gizle/göster */}
//                                 <ul
//                                     className="st-nav-list st-onepage-nav"
//                                     style={{ display: menuOpen ? "block" : "none" }}
//                                 >
//                                     {menuItems.map((item, index) => {
//                                         const hasChildren = item.children && item.children.length > 0;
//                                         const dropdownOpen = openDropdowns[index] || false;

//                                         return (
//                                             <li
//                                                 key={item.label}
//                                                 className={hasChildren ? "menu-item-has-children" : ""}
//                                             >
//                                                 <ScrollLink
//                                                     to={item.to}
//                                                     smooth={true}
//                                                     duration={1000}
//                                                     offset={-70}
//                                                     className="st-smooth-move text-white"
//                                                     activeClass="!text-[#FEC544] font-bold"
//                                                     spy={true}
//                                                     style={{ cursor: "pointer" }}
//                                                     onClick={() => setMenuOpen(false)} // Menü kapansın linke tıklayınca (isteğe bağlı)
//                                                 >
//                                                     {item.label}
//                                                 </ScrollLink>

//                                                 {/* Dropdown toggle butonu */}
//                                                 {hasChildren && (
//                                                     <span
//                                                         className={`st-munu-dropdown-toggle ${dropdownOpen ? "active" : ""}`}
//                                                         onClick={() => toggleDropdown(index)}
//                                                         style={{ cursor: "pointer" }}
//                                                         aria-label="Toggle submenu"
//                                                     ></span>
//                                                 )}

//                                                 {/* Alt menü */}
//                                                 {hasChildren && (
//                                                     <ul
//                                                         className="sub-menu"
//                                                         style={{ display: dropdownOpen ? "block" : "none" }}
//                                                     >
//                                                         {item.children!.map((child) => (
//                                                             <li key={child.label}>
//                                                                 <ScrollLink
//                                                                     to={child.to}
//                                                                     smooth={true}
//                                                                     duration={1000}
//                                                                     offset={-70}
//                                                                     className="st-smooth-move text-white"
//                                                                     activeClass="!text-[#FEC544] font-bold"
//                                                                     spy={true}
//                                                                     style={{ cursor: "pointer" }}
//                                                                     onClick={() => setMenuOpen(false)}
//                                                                 >
//                                                                     {child.label}
//                                                                 </ScrollLink>
//                                                             </li>
//                                                         ))}
//                                                     </ul>
//                                                 )}
//                                             </li>
//                                         );
//                                     })}
//                                 </ul>

//                                 <div className="sp-phone">
//                                     <svg viewBox="0 0 513.64 513.64">
//                                         <g>
//                                             <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
//                                         </g>
//                                     </svg>
//                                     <div className="sp-phone-no">
//                                         <a href="tel:+994705728295">+994 70 572 82 95</a>
//                                     </div>
//                                 </div>
//                             </nav>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// };

// export default Header;





import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import '../../assets/css/style.css';
import MainLogo from "../../assets/images/MainLogoWhite.png";

const HEADER_OFFSET = 70;
const CONTACT_OFFSET = 150;

const menuItems = [
    { label: "Home", to: "home" },
    { label: "About", to: "about" },
    { label: "Resume", to: "resume" },
    {
        label: "Portfolio",
        to: "portfolio",
        children: [
            { label: "Web Design", to: "webdesign" },
            { label: "Graphic Design", to: "graphicdesign" },
        ],
    },
    { label: "Certificates", to: "certificates" },
    { label: "Blog", to: "blog" },
    { label: "Contact", to: "contact" },
];

const Header: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdowns, setOpenDropdowns] = useState<{ [key: number]: boolean }>({});
    const [isMobile, setIsMobile] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth <= 768);
        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    useEffect(() => {
        if (location.pathname.startsWith("/blog/")) {
            // Blog detay sayfasındayken blog menüsü aktif olsun
            setActiveSection("blog");
            return;
        }

        if (location.pathname !== "/") {
            setActiveSection(""); // Ana sayfa dışındaysa seçili yok
            return;
        }

        const onScroll = () => {
            const scrollPos = window.pageYOffset + HEADER_OFFSET + 1;
            let current = "home";

            for (const sec of menuItems) {
                const el = document.getElementById(sec.to);
                if (!el) continue;

                const offset = sec.to === "contact" ? CONTACT_OFFSET : HEADER_OFFSET;
                if (scrollPos >= el.offsetTop - offset) {
                    current = sec.to;
                }
            }
            setActiveSection(current);
        };

        window.addEventListener("scroll", onScroll);
        onScroll();

        return () => window.removeEventListener("scroll", onScroll);
    }, [location.pathname]);

    const toggleMenu = () => setMenuOpen(prev => !prev);
    const toggleDropdown = (index: number) => {
        setOpenDropdowns(prev => ({ ...prev, [index]: !prev[index] }));
    };

    const scrollToSection = (to: string) => {
        const offset = to === "contact" ? CONTACT_OFFSET : HEADER_OFFSET;
        const el = document.getElementById(to);
        if (!el) return;
        window.scrollTo({
            top: el.offsetTop - offset,
            behavior: "smooth",
        });
    };

    const handleMenuClick = (to: string) => {
        setMenuOpen(false);
        if (location.pathname !== "/") {
            navigate("/", { replace: false });
            setTimeout(() => scrollToSection(to), 150);
        } else {
            scrollToSection(to);
        }
    };

    return (
        <header className={`st-site-header ${isMobile ? "st-style2" : "st-style1"} st-sticky-header st-sticky-active`}>
            <div className="st-main-header">
                <div className="container">
                    <div className="st-main-header-in">
                        <div className="st-main-header-left">
                            <div
                                className="st-site-branding"
                                style={{ cursor: "pointer" }}
                                onClick={() => {
                                    setMenuOpen(false);
                                    if (location.pathname !== "/") {
                                        navigate("/");
                                    } else {
                                        window.scrollTo({ top: 0, behavior: "smooth" });
                                    }
                                }}
                            >
                                <div className="w-20 h-20">
                                    <img src={MainLogo} alt="Logo" />
                                </div>
                            </div>
                        </div>

                        <div className="st-main-header-right">
                            <nav className="st-nav">
                                <span
                                    className={`st-munu-toggle ${menuOpen ? "st-toggle-active" : ""}`}
                                    onClick={toggleMenu}
                                    style={{ cursor: "pointer" }}
                                    aria-label="Toggle menu"
                                >
                                    <span></span>
                                </span>

                                <ul
                                    className="st-nav-list st-onepage-nav"
                                    style={{ display: menuOpen ? "block" : "none" }}
                                >
                                    {menuItems.map((item, index) => {
                                        const hasChildren = item.children && item.children.length > 0;
                                        const dropdownOpen = openDropdowns[index] || false;
                                        const isActive = activeSection === item.to;

                                        return (
                                            <li
                                                key={item.label}
                                                className={`${hasChildren ? "menu-item-has-children" : ""}`}
                                            >
                                                <a
                                                    href={`#${item.to}`}
                                                    onClick={e => {
                                                        e.preventDefault();
                                                        handleMenuClick(item.to);
                                                    }}
                                                    className={`st-smooth-move text-white ${isActive ? "!text-[#FEC544] font-bold" : ""}`}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    {item.label}
                                                </a>

                                                {hasChildren && (
                                                    <>
                                                        <span
                                                            className={`st-munu-dropdown-toggle ${dropdownOpen ? "active" : ""}`}
                                                            onClick={() => toggleDropdown(index)}
                                                            style={{ cursor: "pointer" }}
                                                            aria-label="Toggle submenu"
                                                        ></span>

                                                        <ul
                                                            className="sub-menu"
                                                            style={{ display: dropdownOpen ? "block" : "none" }}
                                                        >
                                                            {item.children!.map(child => {
                                                                const childActive = activeSection === child.to;
                                                                return (
                                                                    <li key={child.label}>
                                                                        <a
                                                                            href={`#${child.to}`}
                                                                            onClick={e => {
                                                                                e.preventDefault();
                                                                                handleMenuClick(child.to);
                                                                            }}
                                                                            className={`st-smooth-move text-white ${childActive ? "!text-[#FEC544] font-bold" : ""}`}
                                                                            style={{ cursor: "pointer" }}
                                                                        >
                                                                            {child.label}
                                                                        </a>
                                                                    </li>
                                                                );
                                                            })}
                                                        </ul>
                                                    </>
                                                )}
                                            </li>
                                        );
                                    })}
                                </ul>

                                <div className="sp-phone">
                                    <svg viewBox="0 0 513.64 513.64">
                                        <g>
                                            <path d="M499.66,376.96l-71.68-71.68c-25.6-25.6-69.12-15.359-79.36,17.92c-7.68,23.041-33.28,35.841-56.32,30.72c-51.2-12.8-120.32-79.36-133.12-133.12c-7.68-23.041,7.68-48.641,30.72-56.32c33.28-10.24,43.52-53.76,17.92-79.36l-71.68-71.68c-20.48-17.92-51.2-17.92-69.12,0l-48.64,48.64c-48.64,51.2,5.12,186.88,125.44,307.2c120.32,120.32,256,176.641,307.2,125.44l48.64-48.64C517.581,425.6,517.581,394.88,499.66,376.96z" />
                                        </g>
                                    </svg>
                                    <div className="sp-phone-no">
                                        <a href="tel:+994705728295">+994 70 572 82 95</a>
                                    </div>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;

