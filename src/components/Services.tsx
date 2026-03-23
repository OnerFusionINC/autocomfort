import './Services.css';

const servicesOptions = [
    {
        title: 'Paint Protection Film (PPF)',
        description: [
            '"Invisible/ Colored Paint Protection" -',
            '• "Self-Healing Film"',
            '"Protect Against Scratches & Rock Chips"',
            '"Keep Your Car Like New"',
            '"5-10 Years Warranty"'
        ],
        icon: '🛡️', /* In a real app we'd use SVG icons */
    },
    {
        title: 'Exterior Ceramic Coating',
        description: 'Ultimate gloss and hydrophobic properties. Keeps your car flawless, making maintenance effortless while providing UV resistance.',
        icon: '✨',
    },
    {
        title: 'Fabric & leather seats Ceramic Coating',
        description: 'Protect your interior with advanced ceramic coating for fabric and leather seats. Repels liquids, prevents stains, and preserves the luxurious look.',
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
                            <div className="text-secondary service-desc">
                                {Array.isArray(service.description) ? (
                                    <ul className="service-features">
                                        {service.description.map((feature, i) => (
                                            <li key={i}>{feature}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p>{service.description}</p>
                                )}
                            </div>
                            <div className="service-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
