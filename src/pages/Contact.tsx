import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef<HTMLFormElement>(null);


    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.current) {
            emailjs.sendForm(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            ).then((result) => {
                console.log(result.text);
                alert('Message sent successfully!');
                form.current?.reset();
            }, (error) => {
                console.log(error.text);
                alert('Message not sent. Please try again.');
            });
        }
    };


    return (
        <div className='mt-0'>
            <section id="contact" className="st-dark-bg">
                <div className="st-height-b100 st-height-lg-b80"></div>
                <div className="container">
                    <div className="st-section-heading st-style1">
                        <h4 className="st-section-heading-title">CONTACT ME</h4>
                        <h2 className="st-section-heading-subtitle">CONTACT ME</h2>
                    </div>
                    <div className="st-height-b25 st-height-lg-b25"></div>
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <h3 className="st-contact-title">Send a Message</h3>
                            <form ref={form} onSubmit={sendEmail} className="st-contact-form">
                                <div className="st-form-field">
                                    <input type="text" name="name" placeholder="Your Name" required />
                                </div>
                                <div className="st-form-field">
                                    <input type="email" name="email" placeholder="Your Email" required />
                                </div>
                                <div className="st-form-field">
                                    <input type="text" name="subject" placeholder="Your Subject" required />
                                </div>
                                <div className="st-form-field">
                                    <textarea cols={30} rows={10} name="message" placeholder="Your Message" required></textarea>
                                </div>
                                <button className="st-btn st-style1 st-color1" type="submit">
                                    Send message
                                </button>
                            </form>
                        </div>

                        <div className="st-height-b0 st-height-lg-b30"></div>

                        <div className="col-lg-6">
                            <div className="st-height-b0 st-height-lg-b40"></div>
                            <h3 className="st-contact-title">Contact Info</h3>
                            <div className="st-contact-text">
                                “I’m here to help! Reach out anytime for inquiries or support.”
                                “Feel free to contact — your questions and feedback are always welcome.”
                            </div>
                            <div className="st-contact-info-wrap">
                                <div className="st-single-contact-info">
                                    <i className="fas fa-envelope"></i>
                                    <div className="st-single-info-details">
                                        <h4>Email</h4>
                                        <a href="mailto:abdullavr@code.edu.az">abdullavr@code.edu.az</a>
                                        <a href="mailto:abdullarahemlee@gmail.com">abdullarahemlee@gmail.com</a>

                                    </div>
                                </div>
                                <div className="st-single-contact-info">
                                    <i className="fas fa-phone-alt"></i>
                                    <div className="st-single-info-details">
                                        <h4>Phone</h4>
                                        <span><a href="tel:+994705728295">+994 70 572 82 95</a></span>
                                        <span><a href="tel:+994507951149">+994 50 795 11 49</a></span>
                                    </div>
                                </div>
                                <div className="st-single-contact-info">
                                    <i className="fas fa-map-marker-alt"></i>
                                    <div className="st-single-info-details">
                                        <h4>Address</h4>
                                        <span>Surakhani, Hovsan, <br /> Baku, Azerbaijan</span>
                                    </div>
                                </div>
                                <div className="st-social-info">
                                    <div className="st-social-text">
                                        Visite my social profile and get connected
                                    </div>
                                    <div className="st-social-link">
                                        <a href="https://www.linkedin.com/in/abdulla-rahimli-3a2a4b253/" target='blank' className="st-social-btn">
                                            <span className="st-social-icon"><i className="fab fa-linkedin"></i></span>
                                            <span className="st-icon-name">LinkedIn</span>
                                        </a>
                                        <a href="https://wa.me/+994507951149" target="_blank" rel="noopener noreferrer" className="st-social-btn">
                                            <span className="st-social-icon"><i className="fab fa-whatsapp"></i></span>
                                            <span className="st-icon-name">WhatsApp</span>
                                        </a>
                                        <a href="https://www.instagram.com/abdullarahimli/" target='blank' className="st-social-btn">
                                            <span className="st-social-icon"><i className="fab fa-instagram"></i></span>
                                            <span className="st-icon-name">Instagram</span>
                                        </a>
                                        <a href="https://www.behance.net/abdullarahimli" target='blank' className="st-social-btn">
                                            <span className="st-social-icon"><i className="fab fa-behance"></i></span>
                                            <span className="st-icon-name">Behance</span>
                                        </a>
                                        <a href="https://x.com/abdullarahimli" target='blank' className="st-social-btn">
                                            <span className="st-social-icon"><i className="fab fa-twitter"></i></span>
                                            <span className="st-icon-name">Twitter</span>
                                        </a>
                                        <a href="https://dribbble.com/abdullarahimli/about?utm_source=Clipboard_%22clipboard_about%22&utm_campaign=%22abdullarahimli%22&utm_content=%22About%20abdullarahimli%22&utm_medium=Social_Share" target='blank' className="st-social-btn">
                                            <span className="st-social-icon"><i className="fab fa-dribbble"></i></span>
                                            <span className="st-icon-name">Dribbble</span>
                                        </a>





                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="st-height-b100 st-height-lg-b80"></div>
            </section>
        </div>
    );
};

export default Contact;
