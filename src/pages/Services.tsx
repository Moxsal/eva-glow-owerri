import { Check, Star, Clock } from 'lucide-react';
import nailService from '@/assets/nail-service.jpg';
import facialService from '@/assets/facial-service.jpg';
import massageService from '@/assets/massage-service.jpg';

const Services = () => {
  const serviceCategories = [
    {
      id: 'nails',
      title: 'Nail Services',
      image: nailService,
      description: 'Professional nail care and artistry',
      services: [
        { name: 'Classic Manicure', duration: '45 min', features: ['Nail shaping', 'Cuticle care', 'Polish application'] },
        { name: 'Classic Pedicure', duration: '60 min', features: ['Foot soak', 'Exfoliation', 'Nail care', 'Polish'] },
        { name: 'Acrylic Nails', duration: '90 min', features: ['Custom length', 'Shape design', 'Art options'] },
        { name: 'Gel Polish', duration: '45 min', features: ['Long-lasting', 'Chip-resistant', 'High gloss finish'] },
        { name: 'Nail Art', duration: '60 min', features: ['Custom designs', 'Hand-painted', 'Decorative elements'] }
      ]
    },
    {
      id: 'facials',
      title: 'Facial Treatments',
      image: facialService,
      description: 'Rejuvenating skincare treatments',
      services: [
        { name: 'Deep Cleansing Facial', duration: '75 min', features: ['Pore extraction', 'Exfoliation', 'Hydrating mask'] },
        { name: 'Anti-Aging Facial', duration: '90 min', features: ['Collagen boost', 'Fine line reduction', 'Firming treatment'] },
        { name: 'Hydrating Facial', duration: '60 min', features: ['Moisture restoration', 'Plumping treatment', 'Glow enhancement'] },
        { name: 'Acne Treatment', duration: '75 min', features: ['Deep cleansing', 'Targeted treatment', 'Prevention care'] }
      ]
    },
    {
      id: 'massage',
      title: 'Body Treatments',
      image: massageService,
      description: 'Therapeutic and relaxation treatments',
      services: [
        { name: 'Swedish Massage', duration: '60 min', features: ['Full body relaxation', 'Stress relief', 'Improved circulation'] },
        { name: 'Deep Tissue Massage', duration: '75 min', features: ['Muscle tension relief', 'Pain management', 'Recovery therapy'] },
        { name: 'Hot Stone Massage', duration: '90 min', features: ['Heated stones', 'Deep relaxation', 'Energy balance'] },
        { name: 'Body Waxing', duration: '30-60 min', features: ['Professional technique', 'Various areas', 'Smooth results'] }
      ]
    },
    {
      id: 'bridal',
      title: 'Bridal Packages',
      image: facialService,
      description: 'Complete beauty solutions for your special day',
      services: [
        { name: 'Bridal Makeup', duration: '120 min', features: ['Trial session', 'Long-lasting formula', 'Photography ready'] },
        { name: 'Pre-Wedding Package', duration: '3 hours', features: ['Facial treatment', 'Nail service', 'Makeup application'] },
        { name: 'Bridal Party Package', duration: 'Full day', features: ['Group treatments', 'Coordinated looks', 'Special pricing'] }
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-text mb-6">
            Our Premium Services
          </h1>
          <p className="text-lg text-spa-text-light">
            Discover our comprehensive range of beauty and wellness treatments, 
            each designed to provide you with the ultimate spa experience in Owerri.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={category.id} id={category.id} className="mb-20">
              {/* Category Header */}
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
                <div className={categoryIndex % 2 === 0 ? 'order-1' : 'order-2'}>
                  <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-4">
                    {category.title}
                  </h2>
                  <p className="text-lg text-spa-text-light mb-6">
                    {category.description}
                  </p>
                  <a
                    href="https://wa.me/8165806431?text=Hi, I'd like to book a service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-spa-gold inline-flex items-center"
                  >
                    Book This Service
                  </a>
                </div>
                <div className={categoryIndex % 2 === 0 ? 'order-2' : 'order-1'}>
                  <div className="relative">
                    <img 
                      src={category.image} 
                      alt={category.title}
                      className="w-full h-80 object-cover rounded-3xl shadow-spa"
                    />
                    <div className="absolute inset-0 gradient-spa opacity-20 rounded-3xl"></div>
                  </div>
                </div>
              </div>

              {/* Service List */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.services.map((service, serviceIndex) => (
                  <div key={serviceIndex} className="card-spa p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-playfair text-xl font-semibold text-spa-text">
                        {service.name}
                      </h3>
                      <div className="flex items-center text-spa-accent">
                        <Clock className="h-4 w-4 mr-1" />
                        <span className="text-sm font-medium">{service.duration}</span>
                      </div>
                    </div>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-spa-text-light">
                          <Check className="h-4 w-4 text-spa-accent mr-2 flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href={`https://wa.me/8165806431?text=Hi, I'd like to book ${service.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-spa-outline w-full text-center text-sm py-2"
                    >
                      Book Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 gradient-spa">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-12">
            Why Choose Eva Spa & Beauty Place?
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-spa-text" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                Expert Professionals
              </h3>
              <p className="text-spa-text-light">
                Our skilled technicians are trained in the latest techniques and committed to excellence.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="h-8 w-8 text-spa-text" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                Premium Products
              </h3>
              <p className="text-spa-text-light">
                We use only the finest, professional-grade products for optimal results.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="h-8 w-8 text-spa-text" />
              </div>
              <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                Luxury Experience
              </h3>
              <p className="text-spa-text-light">
                Relax in our elegant, serene environment designed for your comfort.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;