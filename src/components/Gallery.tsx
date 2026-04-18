import Image from 'next/image';
import './Gallery.css';
import galleryImg1 from '../../public/gallery-1.jpg';
import galleryImg4 from '../../public/gallery-4.png';
import galleryImgBlack from '../../public/black.jpeg';
import galleryImgBlue from '../../public/blue.jpeg';
import galleryImgRed from '../../public/red.jpeg';
import galleryImgWhite from '../../public/white.jpg';

const galleryImages = [
    galleryImg1,
    galleryImgBlack,
    galleryImgBlue,
    galleryImg4,
    galleryImgRed,
    galleryImgWhite,
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
                            <Image src={src} alt={`Autocomfort Accessories Work ${index + 1}`} width={800} height={800} className="gallery-img" />
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
