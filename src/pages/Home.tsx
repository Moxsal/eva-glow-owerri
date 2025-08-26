import { ArrowRight, Star, Users, Award, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import spaHero from '@/assets/spa-hero.jpg';
import nailService from '@/assets/nail-service.jpg';
import facialService from '@/assets/facial-service.jpg';
import massageService from '@/assets/massage-service.jpg';

const Home = () => {
  const services = [
    {
      name: 'Nail Services',
      description: 'Manicures, pedicures, acrylics & gel polish',
      image: nailService,
      link: '/services#nails'
    },
    {
      name: 'Facial Treatments',
      description: 'Rejuvenating facials for glowing skin',
      image: facialService,
      link: '/services#facials'
    },
    {
      name: 'Body Massage',
      description: 'Relaxing therapeutic massage therapy',
      image: massageService,
      link: '/services#massage'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'Happy Clients' },
    { icon: Star, number: '4.9', label: 'Rating' },
    { icon: Award, number: '3+', label: 'Years Experience' },
    { icon: Sparkles, number: '15+', label: 'Services' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${spaHero})` }}
        >
          <div className="absolute inset-0 bg-spa-neutral/60 backdrop-blur-[2px]"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-6xl lg:text-7xl font-bold text-spa-text mb-6 animate-fade-in-up">
            Luxury Beauty &<br />
            <span className="gradient-gold bg-clip-text text-transparent">Relaxation</span>
            <br />in Owerri
          </h1>
          
          <p className="text-lg md:text-xl text-spa-text-light mb-8 max-w-2xl mx-auto animate-fade-in-up">
            Experience premium spa services and beauty treatments in the heart of Owerri. 
            Where elegance meets expertise for your ultimate relaxation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up">
            <a
              href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spa-gold text-lg px-8 py-4 shadow-elegant"
            >
              Book Appointment
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="tel:8165806431"
              className="btn-spa-outline text-lg px-8 py-4"
            >
              Call Us Now
            </a>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-spa-text-light mb-2">Call us directly</p>
            <a href="tel:8165806431" className="text-2xl font-playfair font-semibold text-spa-accent hover:text-spa-accent-dark transition-colors">
              816 580 6431
            </a>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center">
                    <stat.icon className="h-8 w-8 text-spa-text" />
                  </div>
                </div>
                <div className="font-playfair text-3xl font-bold text-spa-text mb-2">
                  {stat.number}
                </div>
                <div className="text-spa-text-light font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-4">
              Our Signature Services
            </h2>
            <p className="text-lg text-spa-text-light max-w-2xl mx-auto">
              Indulge in our comprehensive range of beauty and wellness treatments, 
              crafted to rejuvenate your body and soul.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-spa p-0 overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-spa-text/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="font-playfair text-xl font-semibold text-spa-text mb-2">
                    {service.name}
                  </h3>
                  <p className="text-spa-text-light mb-4">
                    {service.description}
                  </p>
                  <Link 
                    to={service.link}
                    className="text-spa-accent font-medium hover:text-spa-accent-dark transition-colors inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="btn-spa-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-spa">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-6">
            Ready for Your Spa Experience?
          </h2>
          <p className="text-lg text-spa-text-light mb-8">
            Book your appointment today and discover why Eva Spa & Beauty Place 
            is Owerri's premier destination for luxury beauty treatments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spa-gold text-lg px-8 py-4"
            >
              Book via WhatsApp
            </a>
            <Link to="/contact" className="btn-spa-outline text-lg px-8 py-4">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;