// import { useEffect, useState } from 'react';
// import bgImage from '../assets/images/hero-bg17.jpg';
// import npm from '../assets/images/blog/blog-1/npm.png'
// import npm1 from '../assets/images/blog/blog-1/npm1.webp'
// import npm2 from '../assets/images/blog/blog-1/npm2.png'
// import heroBg4 from '../assets/images/hero-bg4.jpg';
// import heroBg5 from '../assets/images/hero-bg5.jpg';
// import comment1 from '../assets/images/comment1.jpg';
// import comment2 from '../assets/images/comment2.jpg';
// import Slider from "react-slick";
// import '../App.css'

// import reactWelcomePage from '../assets/images/blog/blog-1/reactWelcomePage.png'
// import reactWelcomePageEdited from '../assets/images/blog/blog-1/reactWelcomePageEdited.png'

// // import { blogs } from '../data/blog';
// import blogs from '../data/blogs.json'
// import { useParams } from 'react-router-dom';

// import nodeVersion from '../assets/images/blog/blog-1/nodeversion.png'
// import createReactApp from '../assets/images/blog/blog-1/createreactapp.png'
// import firstApp from '../assets/images/blog/blog-1/firstapp.png'
// import startProject from '../assets/images/blog/blog-1/stratproject.png'
// import app from '../assets/images/blog/blog-1/app.png'
// import show from '../assets/images/blog/blog-1/show.png'
// import app1 from '../assets/images/blog/blog-1/app1.png'
// import type { Blog } from '../types/Types';


// const BlogDetails = () => {
//     const sliderImages = [reactWelcomePage, reactWelcomePageEdited];
//     const { id } = useParams<{ id: string }>();

//     const blog = blogs.find((b) => b.id === id);

//     if (!blog) return <p>Blog tapılmadı</p>;
//     // const [blog, setBlog] = useState<Blog | null>(null);



//     // useEffect(() => {
//     //     const selectedBlog = blogs.find(item => item.id.toString() === id) ?? null;
//     //     setBlog(selectedBlog);
//     //     window.scrollTo(0, 0)
//     // }, [id])

//     useEffect(() => {

//     }, [id])


//     const settings = {
//         dots: true,
//         arrows: false,
//         infinite: true,
//         speed: 500,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         customPaging: () => (
//             <div
//                 style={{
//                     width: '12px',
//                     height: '12px',
//                     borderRadius: '50%',
//                     backgroundColor: '#000000',
//                     cursor: 'pointer',
//                     display: 'inline-block',
//                 }}
//             />
//         ),
//     };

//     const socialLinks = {
//         'facebook-f': 'https://www.facebook.com',
//         'twitter': 'https://twitter.com',
//         'behance': 'https://www.behance.net',
//         'instagram': 'https://www.instagram.com',
//         'pinterest-p': 'https://www.pinterest.com',
//     };



//     return (


//         <div className="st-content">
//             <div
//                 className="st-page-heading st-dynamic-bg"
//                 style={{
//                     backgroundImage: `url(${blog?.mainImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center'
//                 }}
//             >
//                 <div className="container">
//                     <div className="st-page-heading-in text-center">
//                         <h1 className="st-page-heading-title">
//                             {blog?.mainTitle}
//                         </h1>
//                         <div className="st-post-label">
//                             <span>By: <a href="#">{blog?.author}</a></span>
//                             <span>{blog?.date}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="st-height-b100 st-height-lg-b80"></div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-10 offset-md-1">

// <div className="st-post-details st-style1">

//     <p>React is one of the most popular JavaScript libraries for building user interfaces, especially single-page applications. Created and maintained by Facebook, React helps developers create fast, interactive, and reusable UI components with ease.</p>

//     <p>If you are new to web development or just starting with React, this guide will help you understand what React is, why it’s so popular, and how to start building your first React app using npm.</p>

//     <img className="st-zoom-in" src={npm1} alt="blog1" />

//     <h3>What is React?</h3>

//     <p>React is a JavaScript library (not a full framework) focused on building UI components. Unlike traditional web development where you manipulate the DOM directly, React allows you to create components that manage their own state and efficiently update the UI when the data changes.</p>

//     <h3>Key Features of React</h3>

//     <div className='ml-4'>
//         <ul style={{ listStyle: 'disc' }}>
//             <li><strong className='!font-semibold text-white'>Component-Based: </strong>Your UI is made of components, which can be reused and nested.</li>
//             <li><strong className='!font-semibold text-white'>Declarative: </strong>You describe what the UI should look like, and React takes care of updating it efficiently.</li>
//             <li><strong className='!font-semibold text-white'>Virtual DOM: </strong>React uses a virtual DOM to minimize costly updates, making apps faster.</li>
//             <li><strong className='!font-semibold text-white'>One-way Data Binding: </strong>Data flows in one direction, making your app predictable and easier to debug.</li>
//         </ul>
//     </div>

//     <h3>Setting Up Your First React Project Using npm</h3>


//     <p>To start working with React, you need to have Node.js and npm installed on your computer. You can check if they are installed by running:</p>

//     <img className='st-zoom-in' src={nodeVersion} alt="" />

//     <p>If you don’t have them installed, download and install Node.js from <a className='!underline text-white' href="https://nodejs.org/en" target='_blank'> nodejs.org.</a></p>

//     {/* <h3>Blog video post can also be added.</h3>

//     <div className="video-wrapper">
//         <iframe
//             width="100%"
//             height="459"
//             src="https://www.youtube.com/embed/vGOL7ZvuGMc"
//             title="YouTube Video"
//             frameBorder="0"
//             allowFullScreen
//         ></iframe>
//     </div> */}


//     <h3>Step 1: Create a React App Using Create React App</h3>

//     <p>React has an official tool called Create React App that sets up everything you need to start a project.</p>
//     <p>Open your terminal and run:</p>

//     {/* <blockquote>
//         Integer accumsan arcu ligula, eget dictum augue egestas sed.
//         <small>by: <span>Mark Parker</span></small>
//     </blockquote> */}

//     <img className='st-zoom-in' src={createReactApp} alt="" />

//     <p>This command will create a folder called <strong className='bg-[#424242]'>my-first-react-app</strong> and set up a React project inside it.</p>

//     <h3>Step 2: Navigate Into Your Project Folder</h3>

//     <img className='st-zoom-in' src={firstApp} alt="" />

//     <h3>Step 3: Start the Development Server</h3>

//     <img className='st-zoom-in' src={startProject} alt="" />

//     <p>This will start the React development server, and your new React app will open in your browser at <a className='!text-[#FEC544] !underline' href="http://localhost:3000.">http://localhost:3000.</a></p>
//     <p>You should see the default React welcome screen!</p>



//     <div className="st-slider st-style1 mb-5">
//         <Slider {...settings} className="slick-wrapper">
//             {sliderImages.map((img, i) => (
//                 <div key={i} className="slick-slide-in">
//                     <img className="st-zoom-in" src={img} alt={`slide-${i}`} />
//                 </div>
//             ))}
//         </Slider>
//     </div>

//     <h2>Understanding the Project Structure</h2>

//     <p>Inside your React project, you will find these important files:</p>

//     <div className='ml-4'>
//         <ul style={{ listStyle: 'disc' }}>
//             <li><strong className='!font-semibold text-white'>public/index.html – </strong>The single HTML page that contains your React app.</li>
//             <li><strong className='!font-semibold text-white'>src/index.js – </strong>The JavaScript entry point that renders your React app into the page.</li>
//             <li><strong className='!font-semibold text-white'>src/App.js – </strong>The main React component.</li>
//         </ul>
//     </div>

//     <h2>Writing Your First React Component</h2>
//     <p>React components are JavaScript functions or classes that return UI elements. The simplest way is to create a function component.</p>
//     <p>Open <strong className='bg-[#424242]'>src/App.js</strong> and replace the content with:</p>

//     <img className='st-zoom-in' src={app} alt="" />

//     <p>Save the file, and the browser will automatically update to show:</p>

//     <img className='st-zoom-in' src={show} alt="" />

//     <h2>Adding Interactivity with State</h2>
//     <p>One of React's strengths is its ability to update the UI when data changes. Let's add a button that changes a message when clicked.</p>

//     <p>Modify <strong className='bg-[#424242]'>src/App.js</strong> like this:</p>

//     <img className='st-zoom-in' src={app1} alt="" />

//     <p>Here’s what happens:</p>

//     <div className='ml-4'>
//         <ul style={{ listStyle: 'disc' }}>
//             <li>
//                 <strong className='bg-[#424242]'>useState</strong> creates a state variable
//                 <strong className='bg-[#424242]'>message</strong> and a function
//                 <strong className='bg-[#424242]'>setMessage</strong> to update it.
//             </li>
//             <li>
//                 When the button is clicked,
//                 <strong className='bg-[#424242]'>handleClick</strong> changes the message.
//             </li>
//             <li>React updates the UI automatically to show the new message.</li>
//         </ul>
//     </div>

//     <h3>What Next ?</h3>

//     <div className='ml-4'>
//         <ul style={{ listStyle: 'disc' }}>
//             <li>Learn about props to pass data between components.</li>
//             <li>Explore component lifecycle and hooks like <strong className='bg-[#424242]'>useEffect</strong></li>
//             <li>Start building small projects, like a to-do list or a weather app.</li>
//             <li>Read the official React documentation at <a className='!underline !text-[#FEC544]' href="https://react.dev/">reactjs.org.</a></li>
//         </ul>
//     </div>



//     <h3>Summary</h3>

//     <div className='ml-4'>
//         <ul style={{ listStyle: 'disc' }}>
//             <li>React is a JavaScript library for building user interfaces using components.</li>
//             <li>Use npm with <strong className='bg-[#424242]'>create react-app</strong> to quickly start a new React project.</li>
//             <li>React apps are fast, efficient, and easy to maintain thanks to the virtual DOM and declarative code.</li>
//             <li>With React, you can build interactive UIs by managing state and responding to user actions.</li>
//         </ul>
//     </div>


//     <p>If you want, I can also help you build simple React projects step-by-step. Just ask!</p>








//     <div className="st-post-meta">
//         <div className="st-post-tages">
//             <h4 className="st-post-tage-title">Tags:</h4>
//             <ul className="st-post-tage-list st-mp0">
//                 {['App', 'php', 'web', 'business', 'agency', 'development'].map(tag => (
//                     <li key={tag}><a href="#">{tag}</a></li>
//                 ))}
//             </ul>
//         </div>
//         <div className="st-post-share">
//             <h4 className="st-post-share-title">Share:</h4>
//             <div className="st-post-share-btn-list">
//                 {Object.entries(socialLinks).map(([icon, url]) => (
//                     <a key={icon} href={url} target="_blank" rel="noopener noreferrer">
//                         <i className={`fab fa-${icon}`}></i>
//                     </a>
//                 ))}
//             </div>
//         </div>
//     </div>
//     <div className="st-height-b60 st-height-lg-b60"></div>

//     <div className="st-post-btn-gropu">
//         <button className="st-btn st-style2 st-color1 st-size-medium">Previous Post</button>
//         <button className="st-btn st-style2 st-color1 st-size-medium">Next Post</button>
//     </div>
//     <div className="st-height-b60 st-height-lg-b60"></div>

// </div>

//                         <div className='st-post-details st-style1'>
//                             {blog.content.map((block, index) => RenderContent(block, index))}
//                         </div>

//                         <div className="comments-area">
//                             <div className="comment-list-outer">
//                                 <h3 className="comments-title">Comments (3)</h3>
//                                 <ol className="comment-list">
//                                     <li className="comment">
//                                         <div className="comment-body">
//                                             <div className="comment-meta">
//                                                 <div className="comment-author">
//                                                     <img src={comment1} alt="comment1" className="avatar" />
//                                                     <a href="#" className="nm">Smith Jhon</a>
//                                                 </div>
//                                                 <div className="comment-metadata">
//                                                     <span>15 Jan, 2020</span>
//                                                 </div>
//                                             </div>
//                                             <div className="comment-content">
//                                                 <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</p>
//                                             </div>
//                                             <div className="reply"><a href="#" className="comment-reply-link">Reply</a></div>
//                                         </div>

//                                         <ol className="children">
//                                             <li className="comment">
//                                                 <div className="comment-body">
//                                                     <div className="comment-meta">
//                                                         <div className="comment-author">
//                                                             <img src={comment2} alt="comment2" className="avatar" />
//                                                             <a href="#" className="nm">Robat Newman</a>
//                                                         </div>
//                                                         <div className="comment-metadata">
//                                                             <span>15 Jan, 2020</span>
//                                                         </div>
//                                                     </div>
//                                                     <div className="comment-content">
//                                                         <p>Consectetuer adipiscing elit. Lorem ipsum dolor sit amet.</p>
//                                                     </div>
//                                                     <div className="reply"><a href="#" className="comment-reply-link">Reply</a></div>
//                                                 </div>
//                                             </li>
//                                         </ol>
//                                     </li>

//                                     <li className="comment">
//                                         <div className="comment-body">
//                                             <div className="comment-meta">
//                                                 <div className="comment-author">
//                                                     <img src={comment1} alt="comment1" className="avatar" />
//                                                     <a href="#" className="nm">Hannibal Lecter</a>
//                                                 </div>
//                                                 <div className="comment-metadata">
//                                                     <span>26 Jan, 2016</span>
//                                                 </div>
//                                             </div>
//                                             <div className="comment-content">
//                                                 <p>Lorem ipsum dolor sit amet. Lorem ipsum adipiscing elit.</p>
//                                             </div>
//                                             <div className="reply"><a href="#" className="comment-reply-link">Reply</a></div>
//                                         </div>
//                                     </li>
//                                 </ol>
//                             </div>

//                             <div className="comment-respond">
//                                 <h3 className="comment-reply-title">Add your comment</h3>
//                                 <form method="post" className="comment-form">
//                                     <p className="comment-form-author">
//                                         <input name="author" type="text" placeholder="Name*" required />
//                                     </p>
//                                     <p className="comment-form-email">
//                                         <input name="email" type="email" placeholder="E-mail*" required />
//                                     </p>
//                                     <p className="comment-form-url">
//                                         <input id="url" name="url" type="url" placeholder="Website" />
//                                     </p>
//                                     <p className="comment-form-comment">
//                                         <textarea name="comment" cols={40} rows={5} placeholder="Write here...*" required></textarea>
//                                     </p>
//                                     <p className="form-submit">
//                                         <button type="submit" className="st-btn st-style1 st-color1 st-size-medium">Post Comment</button>
//                                     </p>
//                                 </form>
//                             </div>
//                         </div>

//                         <div className="st-height-b100 st-height-lg-b80"></div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetails;



// import { useParams } from 'react-router-dom';
// import blogs from '../data/blogs.json';
// import RenderContent from '../components/RenderContent';

// const BlogDetails = () => {
//     const { id } = useParams<{ id: string }>();
//     const blog = blogs.find((b) => b.id === id);

//     if (!blog) return <p>Blog tapılmadı</p>;

//     return (
//         <div className="st-content">
//             <div
//                 className="st-page-heading st-dynamic-bg"
//                 style={{
//                     backgroundImage: `url(${blog.mainImage})`,
//                     backgroundSize: 'cover',
//                     backgroundPosition: 'center',
//                 }}
//             >
//                 <div className="container">
//                     <div className="st-page-heading-in text-center">
//                         <h1 className="st-page-heading-title">{blog.mainTitle}</h1>
//                         <div className="st-post-label">
//                             <span>
//                                 By: <a href="#">{blog.author}</a>
//                             </span>
//                             <span>{blog.date}</span>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <div className="st-height-b100 st-height-lg-b80"></div>

//             <div className="container">
//                 <div className="row">
//                     <div className="col-lg-10 offset-md-1">
//                         <div className="st-post-details st-style1">
//                             {blog.content.map((block, index) => (
//                                 <RenderContent key={index} block={block} index={index} />
//                             ))}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default BlogDetails;

import { useNavigate, useParams } from 'react-router-dom';
import Slider from 'react-slick';
import blogs from '../data/blogs.json';
import comment1 from '../assets/images/comment1.jpg';
import comment2 from '../assets/images/comment2.jpg';
import profile from '../assets/images/client/profile.png'
import RenderContent from '../components/RenderContent';


// [EKLENDİ] React state ve Firebase fonksiyonları importları:
import React, { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';  // firebase.js dosyandan doğru path ile
import { deleteComment } from '../services/deleteComment';



const BlogDetails = () => {

    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === id);

    const [comments, setComments] = useState([]);


    const [author, setAuthor] = useState('');
    const [email, setEmail] = useState('');
    const [website, setWebsite] = useState('');
    const [commentText, setCommentText] = useState('');
    const [loadingComments, setLoadingComments] = useState(true);

    const navigate = useNavigate();

    const currentIndex = blogs.findIndex((b) => b.id === id);

    const previousIndex = (currentIndex - 1 + blogs.length) % blogs.length;
    const nextIndex = (currentIndex + 1) % blogs.length;

    const previousBlog = blogs[previousIndex];
    const nextBlog = blogs[nextIndex];

    const fetchComments = async () => {
        setLoadingComments(true);
        try {
            const q = query(
                collection(db, 'comments'),
                where('blogId', '==', id),
                orderBy('createdAt', 'asc')
            );
            const querySnapshot = await getDocs(q);
            const loadedComments = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setComments(loadedComments);
        } catch (error) {
            console.error("Comments could not be retrieved:", error);
        }
        setLoadingComments(false);
    };

    useEffect(() => {
        fetchComments();
        window.scrollTo(0, 0);
    }, [id]);

    // Yorum gönderme
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!author || !email || !commentText) {
            alert('Please fill in the required fields.');
            return;
        }

        try {
            await addDoc(collection(db, 'comments'), {
                blogId: id,
                author,
                email,
                website,
                comment: commentText,
                createdAt: serverTimestamp()
            });

            // Formu temizle
            setAuthor('');
            setEmail('');
            setWebsite('');
            setCommentText('');

            // Yorumları tekrar yükle
            fetchComments();
        } catch (error) {
            console.error("Could not add comment:", error);
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    const sliderSettings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        customPaging: () => (
            <div style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: '#000000',
                cursor: 'pointer',
                display: 'inline-block',
            }} />
        ),
    };

    // const socialLinks = {
    //     'facebook-f': 'https://www.facebook.com',
    //     'twitter': 'https://twitter.com',
    //     'behance': 'https://www.behance.net',
    //     'instagram': 'https://www.instagram.com',
    //     'pinterest-p': 'https://www.pinterest.com',
    // };


    const getSocialShareUrl = (platform: string) => {
        const currentUrl = encodeURIComponent(window.location.href);
        const title = encodeURIComponent(blog?.mainTitle || '');

        switch (platform) {
            case 'facebook':
                return `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
            case 'twitter':
                return `https://twitter.com/intent/tweet?url=${currentUrl}&text=${title}`;
            case 'linkedin':
                return `https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}`;
            case 'pinterest':
                return `https://pinterest.com/pin/create/button/?url=${currentUrl}&description=${title}`;
            default:
                return '#';
        }
    };



    if (!blog) return <p>Blog tapılmadı</p>;


    return (
        <section id='blogdetails' className='st-dark-bg'>
            <div className="st-content">
                <div
                    className="st-page-heading st-dynamic-bg"
                    style={{
                        backgroundImage: `url(${blog.mainImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="container">
                        <div className="st-page-heading-in text-center">
                            <h1 className="st-page-heading-title">{blog.mainTitle}</h1>
                            <div className="st-post-label">
                                <span>By: <a href="#">{blog.author}</a></span>
                                <span>{blog.date}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="st-height-b100 st-height-lg-b80"></div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-md-1">
                            <div className="st-post-details st-style1">
                                {blog.content.map((block, index) => (
                                    <RenderContent key={index} block={block} index={index} />
                                ))}

                                <div className="st-post-meta d-flex flex-wrap flex-md-row justify-content-between align-items-start border-t border-b py-4 mt-5 gap-4">
                                    <div className="st-post-tages">
                                        <h4 className="st-post-tage-title">Tags:</h4>
                                        <ul className="st-post-tage-list st-mp0">
                                            {blog.tags?.map((tag) => (
                                                <li key={tag}><a href="#">{tag}</a></li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="st-post-share">
                                        <h4 className="st-post-share-title">Share:</h4>
                                        <div className="st-post-share-btn-list">
                                            <a href={getSocialShareUrl('facebook')} target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-facebook-f"></i>
                                            </a>
                                            <a href={getSocialShareUrl('twitter')} target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-twitter"></i>
                                            </a>
                                            <a href={getSocialShareUrl('linkedin')} target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-linkedin"></i>
                                            </a>
                                            <a href={getSocialShareUrl('pinterest')} target="_blank" rel="noopener noreferrer">
                                                <i className="fab fa-pinterest-p"></i>
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                <div className="st-height-b60 st-height-lg-b60"></div>

                                <div className="st-post-btn-gropu d-flex justify-content-between">
                                    <button
                                        className="st-btn st-style2 st-color1 st-size-medium"
                                        onClick={(e) => {
                                            navigate(`/blog/${previousBlog.id}`);
                                            e.currentTarget.blur();
                                        }}
                                    >
                                        Previous Post
                                    </button>

                                    <button
                                        className="st-btn st-style2 st-color1 st-size-medium"
                                        onClick={(e) => {
                                            navigate(`/blog/${nextBlog.id}`);
                                            e.currentTarget.blur();
                                        }}
                                    >
                                        Next Post
                                    </button>

                                </div>

                                <div className="st-height-b60 st-height-lg-b60"></div>
                            </div>

                            {/* Comments */}
                            {/* Comments */}
                            <div className="comments-area">
                                <div className="comment-list-outer">
                                    <h3 className="comments-title">Comments ({comments.length})</h3>
                                    {loadingComments ? (
                                        <p>Loading comments...</p>
                                    ) : (
                                        <ol className="comment-list" style={{ paddingLeft: 0 }}>
                                            {comments.length === 0 && <p>No comments yet.</p>}
                                            {comments.map((c) => (
                                                <li key={c.id} className="comment" style={{ padding: '16px 0', listStyle: 'none' }}>
                                                    <div className="comment-body ml-0" style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                                                        <img
                                                            src={profile}
                                                            alt="avatar"
                                                            className="avatar"
                                                            style={{
                                                                width: '48px',
                                                                height: '48px',
                                                                borderRadius: '50%',
                                                                objectFit: 'cover',
                                                                flexShrink: 0,
                                                            }}
                                                        />
                                                        <div style={{ flex: 1 }}>
                                                            <div
                                                                className="comment-meta"
                                                                style={{
                                                                    display: 'flex',
                                                                    justifyContent: 'space-between',
                                                                    alignItems: 'center',
                                                                    marginBottom: '8px',
                                                                    flexWrap: 'wrap',
                                                                }}
                                                            >
                                                                <a
                                                                    href="#"
                                                                    className="nm"
                                                                    style={{
                                                                        fontWeight: '600',
                                                                        fontSize: '1rem',
                                                                        color: '#fec544',
                                                                        textDecoration: 'none',
                                                                        marginRight: '10px',
                                                                    }}
                                                                >
                                                                    {c.author}
                                                                </a>
                                                                <span
                                                                    className="comment-date"
                                                                    style={{ fontSize: '0.8rem', color: '#fdfeff', whiteSpace: 'nowrap' }}
                                                                >
                                                                    {c.createdAt?.toDate ? c.createdAt.toDate().toLocaleDateString() : 'No date'}
                                                                </span>
                                                                {/* <button
                                                                    onClick={() => {
                                                                        deleteComment(c.id);
                                                                        fetchComments();
                                                                    }}
                                                                    style={{ marginLeft: '10px', cursor: 'pointer' }}
                                                                >
                                                                    Sil
                                                                </button> */}
                                                            </div>
                                                            <div className="comment-content" style={{ fontSize: '0.95rem', lineHeight: '1.4', color: '#a9adb8' }}>
                                                                <p style={{ margin: 0 }}>{c.comment}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </li>
                                            ))}
                                        </ol>
                                    )}
                                </div>


                                {/* Comment Form */}
                                <div className="comment-respond">
                                    <h3 className="comment-reply-title">Add your comment</h3>
                                    <form onSubmit={handleSubmit} className="comment-form">
                                        <p className="comment-form-author">
                                            <input
                                                name="author"
                                                type="text"
                                                placeholder="Name*"
                                                value={author}
                                                onChange={(e) => setAuthor(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <p className="comment-form-email">
                                            <input
                                                name="email"
                                                type="email"
                                                placeholder="E-mail*"
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                required
                                            />
                                        </p>
                                        <p className="comment-form-url">
                                            <input
                                                id="url"
                                                name="url"
                                                type="url"
                                                placeholder="https://example.com"
                                                value={website}
                                                onChange={(e) => setWebsite(e.target.value)}
                                            />
                                        </p>
                                        <p className="comment-form-comment">
                                            <textarea
                                                name="comment"
                                                cols={40}
                                                rows={5}
                                                placeholder="Write here...*"
                                                value={commentText}
                                                onChange={(e) => setCommentText(e.target.value)}
                                                required
                                            ></textarea>
                                        </p>
                                        <p className="form-submit">
                                            <button type="submit" className="st-btn st-style1 st-color1 st-size-medium">
                                                Post Comment
                                            </button>
                                        </p>
                                    </form>
                                </div>
                            </div>


                            <div className="st-height-b100 st-height-lg-b80"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogDetails;
