import './Gallery.css';

const galleryImages = [
    'https://images.unsplash.com/photo-1605810711744-bfafb1c57ea1?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1620866034033-debc50fc7ab8?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=800&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1610647752706-3bb12232b3ab?q=80&w=800&auto=format&fit=crop',
];

const Gallery = () => {
    return (
        <section id="gallery" className="section bg-secondary">
            <div className="container">
                <h2 className="title text-center">Few Examples of <span className="text-accent">Our Work</span></h2>
                <p className="text-secondary text-center mb-xl max-w-2xl mx-auto">
                    Explore our portfolio highlighting precision paint protection film installations, flawless ceramic coatings, and custom interior transformations.
                </p>

                <div className="gallery-grid">
                    {galleryImages.map((src, index) => (
                        <div key={index} className="gallery-item group">
                            <img src={src} alt={`Autocomfort Work ${index + 1}`} loading="lazy" />
                            <div className="gallery-overlay">
                                <span className="gallery-icon">+</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-xl">
                    <a href="https://www.instagram.com/autocomfortaccessories/" target="_blank" rel="noreferrer" className="btn btn-primary">View More on Instagram</a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
