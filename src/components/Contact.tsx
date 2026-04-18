import Image from 'next/image';
import whatsappIcon from '../../public/whatsapp-icon.png';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section">
            <div className="container">
                <div className="contact-wrapper bg-secondary">
                    <div className="contact-info">
                        <h2 className="title">Get In <span className="text-accent">Touch</span></h2>
                        <p className="text-secondary mb-lg">
                            Looking for a new approach in Fabric & leather seats Ceramic Coating, Paint Protection Film (PPF), or Exterior Ceramic Coating? Contact us today for a personalized quote.
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <span className="contact-icon">📍</span>
                                <div className="w-full">
                                    <h4>Location</h4>
                                    <p className="text-secondary mb-sm">Autocomfort Accessories, Al Quoz Industrial Area 1, Dubai, PO.Box: 1234, UAE</p>
                                    <iframe 
                                        src="https://maps.google.com/maps?q=Auto-comfort+Accessories,+Dubai&output=embed" 
                                        width="100%" 
                                        height="150" 
                                        style={{ border: 0, borderRadius: '8px', marginTop: '8px' }} 
                                        allowFullScreen 
                                        loading="lazy" 
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title="Autocomfort Accessories Location">
                                    </iframe>
                                </div>
                            </div>

                            <div className="contact-item">
                                <a href="tel:+971556532991" className="contact-icon flex items-center justify-center p-0 overflow-hidden bg-transparent" aria-label="Call Us">
                                    <span style={{ fontSize: '1.2rem' }}>📞</span>
                                </a>
                                <div>
                                    <h4>Call Us</h4>
                                    <a href="tel:+971556532991" className="text-secondary hover:text-accent transition-colors">(+971) 55 653 2991</a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <a href="https://wa.me/971558362115" target="_blank" rel="noopener noreferrer" className="contact-icon flex items-center justify-center p-0 overflow-hidden bg-transparent">
                                    <Image src={whatsappIcon} alt="WhatsApp" width={40} height={40} />
                                </a>
                                <div>
                                    <h4>WhatsApp</h4>
                                    <a href="https://wa.me/971558362115" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-accent transition-colors">
                                        (+971) 55 836 2115
                                    </a>
                                </div>
                            </div>

                            <div className="contact-item">
                                <a href="mailto:autocomfortuae@gmail.com" className="contact-icon flex items-center justify-center p-0 overflow-hidden bg-transparent" aria-label="Email">
                                    <span style={{ fontSize: '1.2rem' }}>✉️</span>
                                </a>
                                <div>
                                    <h4>Email</h4>
                                    <a href="mailto:autocomfortuae@gmail.com" className="text-secondary hover:text-accent transition-colors">autocomfortuae@gmail.com</a>
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
                                    <option value="ppf">Paint Protection Film (PPF) - Invisible/ Colored</option>
                                    <option value="ceramic">Exterior Ceramic Coating</option>
                                    <option value="interior_ceramic">Fabric & leather seats Ceramic Coating</option>
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
