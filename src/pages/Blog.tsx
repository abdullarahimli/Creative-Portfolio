// import React from 'react'
// import Slider from "react-slick";
// // import { blogs } from '../data/blog';
// import blogs from '../data/blogs.json'
// import { Link } from 'react-router-dom';

// const Blog = () => {

//     const slidesToShow = Math.min(blogs.length, 3);

//     const settings = {
//         arrows: false,
//         dots: false,
//         infinite: blogs.length > slidesToShow,
//         speed: 500,
//         slidesToShow: 3,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000
//     };
//     return (
//         <div className='mt-0'>
//             <section id="blog">
//                 <div className="st-height-b100 st-height-lg-b80"></div>
//                 <div className="container">
//                     <div className="st-section-heading st-style1">
//                         <h4 className="st-section-heading-title">BLOG</h4>
//                         <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
//                     </div>
//                     <div className="st-height-b25 st-height-lg-b25"></div>
//                 </div>

//                 <div className="container">
//                     <div className="st-slider st-style2">
//                         <div
//                             className="slick-container"
//                             data-autoplay="0"
//                             data-loop="1"
//                             data-speed="600"
//                             data-center="0"
//                             data-slides-per-view="responsive"
//                             data-xs-slides="1"
//                             data-sm-slides="2"
//                             data-md-slides="3"
//                             data-lg-slides="3"
//                             data-add-slides="3"
//                         >
//                             <div className="slick-wrapper">
//                                 <Slider className='custom-slider' {...settings}>
//                                     {
//                                         blogs && blogs.map((blog) => (
//                                             <div key={blog.id} className="slick-slide-in">
//                                                 <div className="st-post-single st-style1">
//                                                     <Link className="st-post-thumb st-zoom" to={`/blog/${blog.id}`}>
//                                                         <img
//                                                             src={blog.mainImage}
//                                                             className="st-zoom-in"
//                                                             alt="blog1"
//                                                         />
//                                                     </Link>
//                                                     <div className="st-post-info">
//                                                         <div className="st-post-date">
//                                                             By: <a href="#" className="st-post-author">{blog.author}</a>
//                                                             <span className="st-post-date-divider">|</span>
//                                                             <span className="st-post-publish-date">{blog.date}</span>
//                                                         </div>
//                                                         <h4 className="st-post-title">
//                                                             <Link to={`/blog/${blog.id}`}>
//                                                                 {blog.shortTitle}
//                                                             </Link>
//                                                         </h4>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         ))
//                                     }


//                                     {/* <div className="slick-slide-in">
//                                         <div className="st-post-single st-style1">
//                                             <a className="st-post-thumb st-zoom" href="blog-details.html">
//                                                 <img
//                                                     src={blog2}
//                                                     className="st-zoom-in"
//                                                     alt="blog2"
//                                                 />
//                                             </a>
//                                             <div className="st-post-info">
//                                                 <div className="st-post-date">
//                                                     By:
//                                                     <a href="#" className="st-post-author">Admin</a>
//                                                     <span className="st-post-date-divider">|</span>
//                                                     <span className="st-post-publish-date">27-09-2020</span>
//                                                 </div>
//                                                 <h4 className="st-post-title">
//                                                     <a href="blog-details.html"
//                                                     >What do you think makes someone a good designer?</a>
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="slick-slide-in">
//                                         <div className="st-post-single st-style1">
//                                             <a className="st-post-thumb st-zoom" href="blog-details.html">
//                                                 <img
//                                                     src={blog3}
//                                                     className="st-zoom-in"
//                                                     alt="blog3"
//                                                 />
//                                             </a>
//                                             <div className="st-post-info">
//                                                 <div className="st-post-date">
//                                                     By:
//                                                     <a href="#" className="st-post-author">Admin</a>
//                                                     <span className="st-post-date-divider">|</span>
//                                                     <span className="st-post-publish-date">27-09-2020</span>
//                                                 </div>
//                                                 <h4 className="st-post-title">
//                                                     <a href="blog-details.html"
//                                                     >Were there any mistakes you’ve made as a designer</a>
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="slick-slide-in">
//                                         <div className="st-post-single st-style1">
//                                             <a className="st-post-thumb st-zoom" href="blog-details.html">
//                                                 <img
//                                                     src={blog1}
//                                                     className="st-zoom-in"
//                                                     alt="blog1"
//                                                 />
//                                             </a>
//                                             <div className="st-post-info">
//                                                 <div className="st-post-date">
//                                                     By:
//                                                     <a href="#" className="st-post-author">Admin</a>
//                                                     <span className="st-post-date-divider">|</span>
//                                                     <span className="st-post-publish-date">27-09-2020</span>
//                                                 </div>
//                                                 <h4 className="st-post-title">
//                                                     <a href="blog-details.html"
//                                                     >What are the latest trends in Graphic design according
//                                                         to you?</a>
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="slick-slide-in">
//                                         <div className="st-post-single st-style1">
//                                             <a className="st-post-thumb st-zoom" href="blog-details.html">
//                                                 <img
//                                                     src={blog2}
//                                                     className="st-zoom-in"
//                                                     alt="blog2"
//                                                 />
//                                             </a>
//                                             <div className="st-post-info">
//                                                 <div className="st-post-date">
//                                                     By:
//                                                     <a href="#" className="st-post-author">Admin</a>
//                                                     <span className="st-post-date-divider">|</span>
//                                                     <span className="st-post-publish-date">27-09-2020</span>
//                                                 </div>
//                                                 <h4 className="st-post-title">
//                                                     <a href="blog-details.html"
//                                                     >What do you think makes someone a good designer?</a>
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="slick-slide-in">
//                                         <div className="st-post-single st-style1">
//                                             <a className="st-post-thumb st-zoom" href="blog-details.html">
//                                                 <img
//                                                     src={blog3}
//                                                     className="st-zoom-in"
//                                                     alt="blog3"
//                                                 />
//                                             </a>
//                                             <div className="st-post-info">
//                                                 <div className="st-post-date">
//                                                     By:
//                                                     <a href="#" className="st-post-author">Admin</a>
//                                                     <span className="st-post-date-divider">|</span>
//                                                     <span className="st-post-publish-date">27-09-2020</span>
//                                                 </div>
//                                                 <h4 className="st-post-title">
//                                                     <a href="blog-details.html"
//                                                     >Were there any mistakes you’ve made as a designer</a>
//                                                 </h4>
//                                             </div>
//                                         </div>
//                                     </div> */}
//                                 </Slider>
//                             </div>
//                         </div>
//                         <div className="pagination st-style1 st-flex st-hidden"></div>
//                     </div>
//                 </div>
//                 <div className="st-height-b95 st-height-lg-b75"></div>
//             </section>
//         </div>
//     )
// }

// export default Blog


// import React from 'react';
// import Slider from 'react-slick';
// import blogs from '../data/blogs.json';
// import { Link } from 'react-router-dom';

// const Blog = () => {
//     const slidesToShow = Math.min(blogs.length, 3);

//     const settings = {
//         arrows: false,
//         dots: false,
//         infinite: blogs.length > slidesToShow,
//         speed: 500,
//         slidesToShow,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     };

//     return (
//         <div className="mt-0">
//             <section id="blog">
//                 <div className="st-height-b100 st-height-lg-b80"></div>
//                 <div className="container">
//                     <div className="st-section-heading st-style1">
//                         <h4 className="st-section-heading-title">BLOG</h4>
//                         <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
//                     </div>
//                     <div className="st-height-b25 st-height-lg-b25"></div>
//                 </div>

//                 <div className="container">
//                     <div className="st-slider st-style2">
//                         <div className="slick-container" data-autoplay="0" data-loop="1" data-speed="600" data-center="0" data-slides-per-view="responsive" data-xs-slides="1" data-sm-slides="2" data-md-slides="3" data-lg-slides="3" data-add-slides="3">
//                             <div className="slick-wrapper">
//                                 <Slider className="custom-slider" {...settings}>
//                                     {blogs.map((blog) => (
//                                         <div key={blog.id} className="slick-slide-in">
//                                             <div className="st-post-single st-style1">
//                                                 <Link className="st-post-thumb st-zoom" to={`/blog/${blog.id}`}>
//                                                     <img src={blog.mainImage} className="st-zoom-in" alt="blog1" />
//                                                 </Link>
//                                                 <div className="st-post-info">
//                                                     <div className="st-post-date">
//                                                         By: <a href="#" className="st-post-author">{blog.author}</a>
//                                                         <span className="st-post-date-divider">|</span>
//                                                         <span className="st-post-publish-date">{blog.date}</span>
//                                                     </div>
//                                                     <h4 className="st-post-title">
//                                                         <Link to={`/blog/${blog.id}`}>{blog.shortTitle}</Link>
//                                                     </h4>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </Slider>
//                             </div>
//                         </div>
//                         <div className="pagination st-style1 st-flex st-hidden"></div>
//                     </div>
//                 </div>
//                 <div className="st-height-b95 st-height-lg-b75"></div>
//             </section>
//         </div>
//     );
// };

// export default Blog;


import React from 'react'
import Slider from "react-slick";
import blogs from '../data/blogs.json'
import { Link } from 'react-router-dom';

const Blog = () => {

    const slidesToShow = Math.min(blogs.length, 3);

    const settings = {
        arrows: false,
        dots: false,
        infinite: blogs.length > slidesToShow,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
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
                    dots: true, // ✅ Sadece mobilde dots aktif
                }
            }
        ]
    };

    return (
        <div className='mt-0'>
            <section id="blog">
                <div className="st-height-b100 st-height-lg-b80"></div>
                <div className="container">
                    <div className="st-section-heading st-style1">
                        <h4 className="st-section-heading-title">BLOG</h4>
                        <h2 className="st-section-heading-subtitle">LATEST NEWS</h2>
                    </div>
                    <div className="st-height-b25 st-height-lg-b25"></div>
                </div>

                <div className="container">
                    <div className="st-slider st-style2">
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
                            <div className="slick-wrapper">
                                <Slider className='custom-slider' {...settings}>
                                    {
                                        blogs && blogs.map((blog) => (
                                            <div key={blog.id} className="slick-slide-in">
                                                <div className="st-post-single st-style1">
                                                    <Link className="st-post-thumb st-zoom" to={`/blog/${blog.id}`}>
                                                        <img
                                                            src={blog.mainImage}
                                                            className="st-zoom-in"
                                                            alt="blog"
                                                        />
                                                    </Link>
                                                    <div className="st-post-info">
                                                        <div className="st-post-date">
                                                            By: <a href="#" className="st-post-author">{blog.author}</a>
                                                            <span className="st-post-date-divider">|</span>
                                                            <span className="st-post-publish-date">{blog.date}</span>
                                                        </div>
                                                        <h4 className="st-post-title">
                                                            <Link to={`/blog/${blog.id}`}>
                                                                {blog.shortTitle}
                                                            </Link>
                                                        </h4>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Slider>
                            </div>
                        </div>
                        <div className="pagination st-style1 st-flex st-hidden"></div>
                    </div>
                </div>
                <div className="st-height-b95 st-height-lg-b75"></div>
            </section>
        </div>
    )
}

export default Blog
