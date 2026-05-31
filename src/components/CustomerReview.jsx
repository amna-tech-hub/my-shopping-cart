import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const reviews = [
  { id: 1, name: "Laraib", role: "Interior Designer", text: "The quality of the products exceeded my expectations. Highly recommended!", rating: 5 },
  { id: 2, name: "Ahmed Ali", role: "Software Engineer", text: "Smooth delivery and excellent customer support. Will buy again!", rating: 4 },
  { id: 3, name: "Ayesha Khan", role: "Fashion Blogger", text: "Obsessed with the design! It fits perfectly in my studio. The craftsmanship is outstanding.", rating: 5 },
  { id: 4, name: "Zainab Malik", role: "Home Maker", text: "The colors are just as shown in the pictures. Very happy with the purchase.", rating: 5 },
  { id: 5, name: "Hamza Riaz", role: "Entrepreneur", text: "Fast shipping and premium packaging. 10/10 experience.", rating: 5 },
  { id: 6, name: "Dua Fatima", role: "Student", text: "Affordable yet very stylish. My room looks so much better now!", rating: 4 },
];

function CustomerReview() {
  return (
    <section className="bg-teal-950 py-20 px-6 relative overflow-hidden">
      {/* Animated Background Elements - Matching BestSeller colors */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-1/2 w-80 h-80 bg-teal-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Section Header - Matching BestSeller style */}
      <div className="relative z-10 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold text-amber-50 mb-3 uppercase tracking-tighter">
          Our Customer's <span className="text-teal-400">Reviews</span>
        </h2>
        <div className="w-24 h-1 bg-teal-500 mx-auto mb-4"></div>
        <p className="text-teal-300/80 text-lg italic">Real stories from real customers</p>
      </div>

      {/* Swiper Carousel */}
      <div className="relative z-10 px-4 overflow-hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={800}
          coverflowEffect={{
            rotate: 0,
            stretch: 80,
            depth: 200,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ 
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="max-w-7xl mx-auto py-12"
        >
          {reviews.map((rev, index) => (
            <SwiperSlide key={rev.id}>
              <div className="group relative bg-white rounded-2xl p-8 shadow-2xl transition-all duration-500 hover:shadow-3xl hover:transform hover:-translate-y-2 border border-teal-800">
                {/* Gradient border effect on hover - Matching BestSeller teal colors */}
                <div className="absolute inset-0 bg-gradient-to-r from-teal-400 to-teal-600 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                <div className="absolute inset-[2px] bg-white rounded-2xl -z-5"></div>
                
                {/* Quote icon */}
                <div className="absolute top-6 left-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
                
                <div className="absolute bottom-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity transform rotate-180">
                  <svg className="w-8 h-8 text-teal-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Rating Stars - Changed to teal colors */}
                <div className="flex justify-center gap-1 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <svg 
                      key={i} 
                      className={`w-5 h-5 ${i < rev.rating ? 'text-teal-500' : 'text-gray-300'} transition-all duration-300 group-hover:scale-110`} 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-center italic leading-relaxed  min-h-[100px]">
                  "{rev.text}"
                </p>

                {/* User Info */}
                <div className="text-center border-t border-gray-100 pt-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-1 group-hover:text-teal-600 transition-colors">
                    {rev.name}
                  </h3>
                  <div className="flex items-center justify-center gap-2">
                    <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                    <p className="text-sm text-gray-500 font-medium">{rev.role}</p>
                    <span className="w-1 h-1 bg-teal-400 rounded-full"></span>
                  </div>
                  
                  {/* Verified badge */}
                  <div className="flex items-center justify-center gap-1 mt-3">
                    <svg className="w-3 h-3 text-teal-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs text-teal-600 font-medium">Verified Purchase</span>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom Pagination Styles - Updated to match BestSeller */}
      <style jsx="true">{`
        .swiper-pagination {
          position: relative;
          margin-top: 20px;
        }
        
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #14B8A6;
          width: 24px;
          border-radius: 10px;
          opacity: 1;
        }
        
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        .animate-blob {
          animation: blob 7s infinite;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .shadow-3xl {
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </section>
  );
}

export default CustomerReview;