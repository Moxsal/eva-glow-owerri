import { Phone, MessageCircle, MapPin, Clock, Mail } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hi, I'm ${formData.name}. I'm interested in ${formData.service}. ${formData.message} You can reach me at ${formData.email} or ${formData.phone}.`;
    const whatsappUrl = `https://wa.me/8165806431?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-text mb-6">
            Contact Eva Spa
          </h1>
          <p className="text-lg text-spa-text-light">
            Ready to book your appointment? We're here to help you relax and rejuvenate. 
            Reach out to us through any of the channels below.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Details */}
            <div>
              <h2 className="font-playfair text-3xl font-bold text-spa-text mb-8">
                Get in Touch
              </h2>
              
              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-spa-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-text mb-1">Phone</h3>
                    <a href="tel:8165806431" className="text-spa-accent hover:text-spa-accent-dark transition-colors text-lg">
                      816 580 6431
                    </a>
                    <p className="text-spa-text-light text-sm">Call us directly for immediate assistance</p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="h-6 w-6 text-spa-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-text mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/8165806431" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-spa-accent hover:text-spa-accent-dark transition-colors text-lg"
                    >
                      816 580 6431
                    </a>
                    <p className="text-spa-text-light text-sm">Quick booking and instant communication</p>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-spa-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-text mb-1">Location</h3>
                    <p className="text-spa-text text-lg">Owerri, Imo State</p>
                    <p className="text-spa-text-light text-sm">Premier spa location in the heart of Owerri</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-spa-text" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-spa-text mb-1">Business Hours</h3>
                    <div className="text-spa-text space-y-1">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 9:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 5:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-spa-gold text-center"
                >
                  Book via WhatsApp
                </a>
                <a
                  href="tel:8165806431"
                  className="btn-spa-outline text-center"
                >
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card-spa p-8">
              <h2 className="font-playfair text-2xl font-bold text-spa-text mb-6">
                Send us a Message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-spa-text mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-spa-primary/30 rounded-lg focus:ring-2 focus:ring-spa-accent focus:border-transparent bg-spa-neutral/50"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-spa-text mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-spa-primary/30 rounded-lg focus:ring-2 focus:ring-spa-accent focus:border-transparent bg-spa-neutral/50"
                      placeholder="Your phone number"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-spa-text mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-spa-primary/30 rounded-lg focus:ring-2 focus:ring-spa-accent focus:border-transparent bg-spa-neutral/50"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-spa-text mb-2">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-spa-primary/30 rounded-lg focus:ring-2 focus:ring-spa-accent focus:border-transparent bg-spa-neutral/50"
                  >
                    <option value="">Select a service</option>
                    <option value="Manicure">Manicure</option>
                    <option value="Pedicure">Pedicure</option>
                    <option value="Acrylic Nails">Acrylic Nails</option>
                    <option value="Gel Polish">Gel Polish</option>
                    <option value="Facial Treatment">Facial Treatment</option>
                    <option value="Body Massage">Body Massage</option>
                    <option value="Waxing">Waxing</option>
                    <option value="Bridal Package">Bridal Package</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-spa-text mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-spa-primary/30 rounded-lg focus:ring-2 focus:ring-spa-accent focus:border-transparent bg-spa-neutral/50 resize-none"
                    placeholder="Tell us about your preferred date, time, or any special requirements..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-spa-gold w-full text-center"
                >
                  Send Message via WhatsApp
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl font-bold text-spa-text mb-6">
            Visit Our Location
          </h2>
          <p className="text-lg text-spa-text-light mb-8">
            Located in the heart of Owerri, Eva Spa & Beauty Place is easily accessible 
            and offers a serene environment for your beauty and wellness needs.
          </p>
          
          {/* Google Maps Embed Placeholder */}
          <div className="w-full h-96 bg-spa-neutral rounded-3xl shadow-spa flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-12 w-12 text-spa-accent mx-auto mb-4" />
              <p className="text-spa-text font-medium">Eva Spa & Beauty Place</p>
              <p className="text-spa-text-light">Owerri, Imo State</p>
              <p className="text-spa-text-light text-sm mt-2">
                Contact us for exact location details
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;