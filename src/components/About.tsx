import './About.css';

const About = () => {
    return (
        <section id="about" className="section">
            <div className="container grid grid-cols-2 gap-lg items-center about-grid">
                <div className="about-image-wrapper">
                    <div className="about-image">
                        {/* Fallback pattern if no image */}
                        <div className="image-placeholder"></div>
                    </div>
                    <div className="experience-badge">
                        <span className="years">30+</span>
                        <span className="text">Years of Excellence</span>
                    </div>
                </div>

                <div className="about-content">
                    <h2 className="title">About <span className="text-accent">Autocomfort</span></h2>
                    <p className="text-secondary mb-md">
                        Founded in 1991, Autocomfort specializes in fully personalized vehicle seats, dashboards, steering wheels, doors and carpets, roofs, convertible soft top roofs, and comprehensive car interior services, glass sun screens.
                    </p>
                    <p className="text-secondary mb-lg">
                        We are pioneers in the restoration of classic automobile interiors, including the original design. We can supply a broad selection of car seat covers and upholsters made of high-quality fabrics that meet the criteria of individual taste and requirements, as well as the most recent models and designs.
                    </p>

                    <ul className="feature-list">
                        <li>Custom Made Leather Seats</li>
                        <li>Starlight Headliner</li>
                        <li>Paint Protection Film (PPF)</li>
                        <li>Premium Ceramic Coating</li>
                    </ul>

                    <div className="stats-row mt-lg">
                        <div className="stat">
                            <h4>Genuine Leather</h4>
                        </div>
                        <div className="stat">
                            <h4>Quality Work</h4>
                        </div>
                        <div className="stat">
                            <h4>Expert Crafted</h4>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
