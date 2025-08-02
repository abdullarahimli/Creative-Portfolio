import { useNavigate, useParams } from 'react-router-dom';
import blogs from '../data/blogs.json';
import profile from '../assets/images/client/profile.png'
import RenderContent, { type ContentBlock } from '../components/RenderContent';


import React, { useEffect, useState } from 'react';
import { collection, addDoc, serverTimestamp, query, where, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import type { CommentType } from '../types/Types';



const BlogDetails = () => {

    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((b) => b.id === id);

    const [comments, setComments] = useState<CommentType[]>([]);



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

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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

            setAuthor('');
            setEmail('');
            setWebsite('');
            setCommentText('');

            fetchComments();
        } catch (error) {
            console.error("Could not add comment:", error);
        }
    };


    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);


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



    if (!blog) return <p>Blog not found</p>;


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
                                {(blog.content as ContentBlock[]).map((block, index) => (
                                    <RenderContent key={index} block={block as ContentBlock} index={index} />
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
