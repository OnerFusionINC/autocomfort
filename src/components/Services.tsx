import './Services.css';

const servicesOptions = [
    {
        title: 'Paint Protection Film (PPF)',
        description: 'Shields against chips, scratches, stains & debris. Invisible protection that repairs itself and preserves your vehicle value for years.',
        icon: '🛡️', /* In a real app we'd use SVG icons */
    },
    {
        title: 'Ceramic Coating',
        description: 'Ultimate gloss and hydrophobic properties. Keeps your car flawless, making maintenance effortless while providing UV resistance.',
        icon: '✨',
    },
    {
        title: 'Custom Auto Upholstery',
        description: 'Specializing in personalized vehicle seats, dashboards, steering wheels, doors, and comprehensive car interior restoration since 1991.',
        icon: '💺',
    }
];

const Services = () => {
    return (
        <section id="services" className="section bg-secondary">
            <div className="container">
                <h2 className="title text-center">Our Signature <span className="text-accent">Services</span></h2>
                <p className="text-secondary text-center mb-xl max-w-2xl mx-auto">
                    We use state-of-the-art technology and premium materials to ensure the highest quality results for your automotive needs.
                </p>

                <div className="grid grid-cols-3 gap-lg mt-xl">
                    {servicesOptions.map((service, index) => (
                        <div key={index} className="card service-card relative group">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="text-secondary service-desc">{service.description}</p>
                            <div className="service-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
