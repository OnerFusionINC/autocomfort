import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-wrapper bg-secondary">
                    <div className="contact-info">
                        <h2 className="title">Get In <span className="text-accent">Touch</span></h2>
                        <p className="text-secondary mb-lg">
                            Looking for a new approach in Car Wrapping, PPF, or Ceramic Coating? Contact us today for a personalized quote.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div>
                                    <h4>Location</h4>
                                    <p className="text-secondary">Autocomfort Accessories, Al Quoz Industrial Area 1, Dubai, PO.Box: 1234, UAE</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">📞</span>
                                <div>
                                    <h4>Call Us</h4>
                                    <p className="text-secondary">(+971) 55 653 2991</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">💬</span>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <p className="text-secondary">(+971) 55 836 2115</p>
                                </div>
                            </div>

                            <div className="contact-item">
                                <span className="contact-icon">✉️</span>
                                <div>
                                    <h4>Email</h4>
                                    <p className="text-secondary">autocomfortuae@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="contact-form-container">
                        <form className="contact-form">
                            <h3 className="form-title">Request a Quote</h3>

                            <div className="form-group">
                                <input type="text" placeholder="Your Name" required />
                            </div>

                            <div className="form-group">
                                <input type="tel" placeholder="Phone Number" required />
                            </div>

                            <div className="form-group">
                                <select required defaultValue="">
                                    <option value="" disabled>Select Service</option>
                                    <option value="ppf">Paint Protection Film (PPF)</option>
                                    <option value="ceramic">Ceramic Coating</option>
                                    <option value="wrapping">Car Wrapping</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <textarea placeholder="Vehicle Make, Model & Year" rows={4} required></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary w-full">Submit Request</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
