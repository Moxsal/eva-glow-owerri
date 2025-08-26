import { Calendar, Phone } from 'lucide-react';

const BookingButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col space-y-3">
      {/* WhatsApp Booking */}
      <a
        href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment at Eva Spa & Beauty Place"
        target="_blank"
        rel="noopener noreferrer"
        className="btn-spa-gold shadow-elegant hover:shadow-spa transition-all duration-300 flex items-center space-x-2 animate-float"
      >
        <Calendar className="h-5 w-5" />
        <span className="font-medium">Book Now</span>
      </a>
      
      {/* Call Button */}
      <a
        href="tel:8165806431"
        className="btn-spa-outline shadow-lg hover:shadow-elegant transition-all duration-300 flex items-center space-x-2"
      >
        <Phone className="h-4 w-4" />
        <span className="font-medium">Call Us</span>
      </a>
    </div>
  );
};

export default BookingButton;