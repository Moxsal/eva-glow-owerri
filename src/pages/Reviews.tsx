import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Chioma Okafor',
      rating: 5,
      date: '2 weeks ago',
      service: 'Acrylic Nails',
      review: 'Eva Spa is absolutely amazing! The nail art is top-notch and the atmosphere is so relaxing. I always leave feeling pampered and beautiful. The staff is professional and friendly. Highly recommend!',
      initials: 'CO'
    },
    {
      id: 2,
      name: 'Blessing Eke',
      rating: 5,
      date: '1 month ago',
      service: 'Facial Treatment',
      review: 'Best facial I\'ve ever had in Owerri! My skin feels so smooth and glowing. The products they use are high quality and the environment is very clean and professional. Will definitely be back!',
      initials: 'BE'
    },
    {
      id: 3,
      name: 'Grace Nwosu',
      rating: 5,
      date: '3 weeks ago',
      service: 'Bridal Package',
      review: 'Eva Spa made my wedding day perfect! From the trial to the actual day, everything was flawless. The makeup was stunning and lasted all day. The team is so talented and professional.',
      initials: 'GN'
    },
    {
      id: 4,
      name: 'Adaeze Okwu',
      rating: 5,
      date: '1 week ago',
      service: 'Pedicure & Manicure',
      review: 'I love coming here for my regular mani-pedi. The attention to detail is incredible and the results always exceed my expectations. Clean, professional, and affordable. Five stars!',
      initials: 'AO'
    },
    {
      id: 5,
      name: 'Ifeoma Nnaji',
      rating: 5,
      date: '2 months ago',
      service: 'Body Massage',
      review: 'The massage therapy here is therapeutic and rejuvenating. I came in with back pain and left feeling completely refreshed. The therapist was skilled and professional. Highly recommended!',
      initials: 'IN'
    },
    {
      id: 6,
      name: 'Ngozi Uche',
      rating: 5,
      date: '1 month ago',
      service: 'Gel Polish',
      review: 'My gel polish has lasted 3 weeks and still looks perfect! The quality of work here is outstanding. The staff is welcoming and the prices are very reasonable. My go-to spa in Owerri!',
      initials: 'NU'
    }
  ];

  const testimonialHighlights = [
    {
      title: 'Professional Excellence',
      description: 'Consistently rated 5 stars for professional service and expertise',
      percentage: '98%'
    },
    {
      title: 'Client Satisfaction',
      description: 'Clients who return for regular treatments and recommend us',
      percentage: '95%'
    },
    {
      title: 'Quality Results',
      description: 'Treatments that exceed expectations and last longer',
      percentage: '100%'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? 'text-spa-accent fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="pt-16">
      {/* Header */}
      <section className="py-20 gradient-elegant">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="font-playfair text-4xl md:text-5xl font-bold text-spa-text mb-6">
            Client Reviews
          </h1>
          <p className="text-lg text-spa-text-light mb-8">
            Don't just take our word for it – hear what our amazing clients have to say 
            about their experiences at Eva Spa & Beauty Place.
          </p>
          
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="flex">{renderStars(5)}</div>
            <span className="text-2xl font-bold text-spa-accent">4.9</span>
            <span className="text-spa-text-light">out of 5 stars</span>
          </div>
          <p className="text-spa-text-light">Based on 100+ reviews</p>
        </div>
      </section>

      {/* Testimonial Highlights */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {testimonialHighlights.map((highlight, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-playfair font-bold text-spa-accent mb-2">
                  {highlight.percentage}
                </div>
                <h3 className="font-semibold text-spa-text mb-2">
                  {highlight.title}
                </h3>
                <p className="text-spa-text-light text-sm">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="card-spa p-6 h-full">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="w-12 h-12 gradient-gold rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-semibold text-spa-text">
                      {review.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-spa-text">
                      {review.name}
                    </h3>
                    <div className="flex items-center space-x-2 mt-1">
                      <div className="flex">{renderStars(review.rating)}</div>
                      <span className="text-sm text-spa-text-light">
                        {review.date}
                      </span>
                    </div>
                    <p className="text-sm text-spa-accent font-medium mt-1">
                      {review.service}
                    </p>
                  </div>
                </div>
                
                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 h-6 w-6 text-spa-primary/30" />
                  <p className="text-spa-text-light text-sm leading-relaxed pl-4">
                    {review.review}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google Reviews CTA */}
      <section className="py-20 gradient-spa">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-spa-text mb-6">
            Experience the Eva Spa Difference
          </h2>
          <p className="text-lg text-spa-text-light mb-8">
            Join hundreds of satisfied clients who have discovered the luxury and 
            professionalism of Eva Spa & Beauty Place. Book your appointment today 
            and see why we're Owerri's favorite spa destination.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="https://wa.me/8165806431?text=Hi, I'd like to book an appointment"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-spa-gold text-lg px-8 py-4"
            >
              Book Your Treatment
            </a>
            <a
              href="tel:8165806431"
              className="btn-spa-outline text-lg px-8 py-4"
            >
              Call for Consultation
            </a>
          </div>
          
          <div className="mt-12 p-6 bg-spa-neutral/50 rounded-2xl">
            <p className="text-spa-text font-medium mb-2">
              Love our service? Leave us a review!
            </p>
            <p className="text-spa-text-light text-sm">
              Your feedback helps us improve and helps other clients discover our services.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;