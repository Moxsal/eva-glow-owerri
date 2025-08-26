import { Heart, Award, Users, Target } from 'lucide-react';
import facialService from '@/assets/facial-service.jpg';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: 'Passion for Beauty',
      description: 'We are passionate about enhancing natural beauty and helping our clients feel confident and radiant.'
    },
    {
      icon: Award,
      title: 'Excellence in Service',
      description: 'We maintain the highest standards of quality and professionalism in every treatment we provide.'
    },
    {
      icon: Users,
      title: 'Client-Centered Approach',
      description: 'Every client is unique, and we tailor our services to meet individual needs and preferences.'
    },
    {
      icon: Target,
      title: 'Continuous Innovation',
      description: 'We stay updated with the latest trends and techniques to offer cutting-edge beauty solutions.'
    }
  ];

  const teamMembers = [
    {
      name: 'Eva Chioma',
      role: 'Founder & Master Beautician',
      specialties: ['Nail Art', 'Bridal Makeup', 'Facial Treatments'],
      description: 'With over 5 years of experience in the beauty industry, Eva founded the spa with a vision to bring luxury beauty services to Owerri.'
    },
    {
      name: 'Blessing Nkem',
      role: 'Senior Nail Technician',
      specialties: ['Acrylic Nails', 'Gel Polish', 'Nail Design'],
      description: 'Blessing specializes in intricate nail art and has trained with top professionals to perfect her craft.'
    },
    {
      name: 'Grace Ugo',
      role: 'Massage Therapist',
      specialties: ['Swedish Massage', 'Deep Tissue', 'Hot Stone'],
      description: 'Grace brings healing touch and therapeutic expertise to help clients relax and rejuvenate.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-text mb-6">
            About Eva Spa
          </h1>
          <p className="text-lg text-spa-text-light">
            Discover the story behind Owerri's premier destination for luxury beauty and wellness treatments. 
            Learn about our mission, values, and the passionate team dedicated to your beauty journey.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-spa-text-light">
                <p>
                  Eva Spa & Beauty Place was born from a passion for beauty and a desire to bring 
                  world-class spa services to the heart of Owerri. Founded by Eva Chioma, a 
                  certified beauty professional with years of experience, our spa represents 
                  the perfect blend of luxury, expertise, and personalized care.
                </p>
                <p>
                  What started as a dream to create a sanctuary where women could escape the 
                  stresses of daily life and indulge in premium beauty treatments has grown 
                  into Owerri's most trusted spa destination. We believe that every woman 
                  deserves to feel beautiful, confident, and pampered.
                </p>
                <p>
                  Our commitment to excellence, attention to detail, and use of premium products 
                  has earned us the trust of hundreds of satisfied clients who return to us 
                  for all their beauty and wellness needs.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src={facialService} 
                alt="Eva Spa interior"
                className="w-full h-96 object-cover rounded-3xl shadow-spa"
              />
              <div className="absolute inset-0 gradient-spa opacity-20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 gradient-spa">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-10 w-10 text-spa-text" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-spa-text mb-4">
                Our Mission
              </h3>
              <p className="text-spa-text-light">
                To provide exceptional beauty and wellness services that enhance our clients' 
                natural beauty while creating a luxurious, relaxing environment where they 
                can escape, rejuvenate, and feel their absolute best.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-spa-text" />
              </div>
              <h3 className="font-playfair text-2xl font-bold text-spa-text mb-4">
                Our Vision
              </h3>
              <p className="text-spa-text-light">
                To become the leading luxury spa and beauty destination in Southeast Nigeria, 
                known for our exceptional service, innovative treatments, and commitment to 
                making every client feel beautiful and confident.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-4">
              Our Values
            </h2>
            <p className="text-lg text-spa-text-light max-w-2xl mx-auto">
              These core values guide everything we do and ensure that every client 
              receives the exceptional experience they deserve.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card-spa p-6 text-center h-full">
                <div className="w-16 h-16 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-spa-text" />
                </div>
                <h3 className="font-playfair text-xl font-semibold text-spa-text mb-3">
                  {value.title}
                </h3>
                <p className="text-spa-text-light text-sm">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-lg text-spa-text-light max-w-2xl mx-auto">
              Our talented professionals are dedicated to providing you with exceptional 
              service and helping you achieve your beauty goals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card-spa p-6 text-center">
                <div className="w-24 h-24 gradient-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-playfair font-bold text-spa-text">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                
                <h3 className="font-playfair text-xl font-semibold text-spa-text mb-1">
                  {member.name}
                </h3>
                <p className="text-spa-accent font-medium mb-3">
                  {member.role}
                </p>
                
                <div className="mb-4">
                  <p className="text-sm text-spa-text-light mb-2">Specialties:</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.specialties.map((specialty, idx) => (
                      <span 
                        key={idx}
                        className="px-3 py-1 bg-spa-primary/30 text-spa-text text-xs rounded-full"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <p className="text-spa-text-light text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-8">
            Why Choose Eva Spa & Beauty Place?
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spa-text text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text mb-1">Professional Expertise</h4>
                  <p className="text-spa-text-light text-sm">Certified professionals with years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spa-text text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text mb-1">Premium Products</h4>
                  <p className="text-spa-text-light text-sm">High-quality, professional-grade beauty products</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spa-text text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text mb-1">Hygiene Standards</h4>
                  <p className="text-spa-text-light text-sm">Strict cleanliness and safety protocols</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spa-text text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text mb-1">Personalized Service</h4>
                  <p className="text-spa-text-light text-sm">Tailored treatments for individual needs</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spa-text text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text mb-1">Relaxing Environment</h4>
                  <p className="text-spa-text-light text-sm">Luxurious atmosphere designed for your comfort</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 gradient-gold rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-spa-text text-xs">✓</span>
                </div>
                <div>
                  <h4 className="font-semibold text-spa-text mb-1">Affordable Luxury</h4>
                  <p className="text-spa-text-light text-sm">Premium services at competitive prices</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <a
              href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spa-gold text-lg px-8 py-4"
            >
              Experience Eva Spa Today
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;