import { useState } from 'react';
import { X } from 'lucide-react';
import nailService from '@/assets/nail-service.jpg';
import facialService from '@/assets/facial-service.jpg';
import massageService from '@/assets/massage-service.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Gallery images - in a real app, these would come from a CMS or API
  const galleryItems = [
    { id: 1, src: nailService, alt: 'Professional nail art and manicure', category: 'nails' },
    { id: 2, src: facialService, alt: 'Relaxing facial treatment', category: 'facials' },
    { id: 3, src: massageService, alt: 'Therapeutic massage therapy', category: 'massage' },
    { id: 4, src: nailService, alt: 'Acrylic nail extensions', category: 'nails' },
    { id: 5, src: facialService, alt: 'Anti-aging facial treatment', category: 'facials' },
    { id: 6, src: massageService, alt: 'Hot stone massage', category: 'massage' },
    { id: 7, src: nailService, alt: 'Gel polish application', category: 'nails' },
    { id: 8, src: facialService, alt: 'Deep cleansing facial', category: 'facials' },
    { id: 9, src: massageService, alt: 'Relaxation massage', category: 'massage' }
  ];

  const categories = [
    { id: 'all', name: 'All Work' },
    { id: 'nails', name: 'Nail Art' },
    { id: 'facials', name: 'Facials' },
    { id: 'massage', name: 'Massage' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages = activeCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-text mb-6">
            Our Gallery
          </h1>
          <p className="text-lg text-spa-text-light">
            Explore our beautiful work and see the transformations we create for our clients. 
            Each treatment is a work of art, crafted with precision and care.
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'btn-spa-gold'
                    : 'btn-spa-outline'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((item) => (
              <div 
                key={item.id}
                className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-spa hover:shadow-elegant transition-all duration-500"
                onClick={() => setSelectedImage(item.src)}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-spa-text/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4">
                    <p className="text-white font-medium">{item.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-spa-accent transition-colors"
            >
              <X className="h-8 w-8" />
            </button>
            <img
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[80vh] object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Before & After Section */}
      <section className="py-20 gradient-spa">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-6">
            See the Transformation
          </h2>
          <p className="text-lg text-spa-text-light mb-8">
            Our skilled professionals deliver exceptional results that speak for themselves. 
            Every client leaves feeling beautiful, confident, and rejuvenated.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair font-bold text-xl text-spa-text">500+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                Happy Clients
              </h3>
              <p className="text-spa-text-light">
                Satisfied customers who trust us with their beauty needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair font-bold text-xl text-spa-text">1000+</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                Treatments Done
              </h3>
              <p className="text-spa-text-light">
                Professional services completed with excellence
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="font-playfair font-bold text-xl text-spa-text">4.9</span>
              </div>
              <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                Average Rating
              </h3>
              <p className="text-spa-text-light">
                Consistently excellent reviews from our clients
              </p>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spa-gold text-lg px-8 py-4"
            >
              Book Your Transformation
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;