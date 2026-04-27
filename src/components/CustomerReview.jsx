import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

const reviews = [
  { id: 1, name: "Laraib", role: "Interior Designer", text: "The quality of the products exceeded my expectations. Highly recommended!", rating: 5, img: "https://randomuser.me/api/portraits/women/1.jpg" },
  { id: 2, name: "Ahmed Ali", role: "Software Engineer", text: "Smooth delivery and excellent customer support. Will buy again!", rating: 4, img: "https://randomuser.me/api/portraits/men/2.jpg" },
  { id: 3, name: "Ayesha", role: "Fashion Blogger", text: "Obsessed with the design! It fits perfectly in my studio.", rating: 5, img: "https://randomuser.me/api/portraits/women/3.jpg" },
  { id: 4, name: "Zainab", role: "Home Maker", text: "The colors are just as shown in the pictures. Very happy with the purchase.", rating: 5, img: "https://randomuser.me/api/portraits/women/4.jpg" },
  { id: 5, name: "Hamza", role: "Entrepreneur", text: "Fast shipping and premium packaging. 10/10 experience.", rating: 5, img: "https://randomuser.me/api/portraits/men/5.jpg" },
  { id: 6, name: "Dua", role: "Student", text: "Affordable yet very stylish. My room looks so much better now!", rating: 4, img: "https://randomuser.me/api/portraits/women/6.jpg" },
];

function CustomerReview() {
  return (
    <section className="py-20 bg-white">
      <h1 className="text-4xl text-center sm:text-5xl lg:text-4xl font-extrabold text-gray-950 leading-tight  mb-10">
        Our Customer's <span className="text-teal2">Reviews</span>
      </h1>

      <div className=" px-4 overflow-hidden">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
         slidesPerView={1} // Mobile par 1 dikhega
  breakpoints={{
    640: { slidesPerView: 2 }, // Tablets par 2
    1024: { slidesPerView: 3 }, // Desktop par exact 3 dikhain ge
  }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 0,
           slideShadows: false,
           
            stretch: 80, // Slides ko ek dusre ke upar thora 'overlap' karne ke liye (negative value bhi try kar sakti hain)
    depth: 200,
            modifier: 2,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="max-w-6xl py-12"
        >
          {reviews.map((rev) => (
            <SwiperSlide 
              key={rev.id} 
              className="w-[300px] sm:w-[350px] bg-white rounded-3xl p-8 flex flex-col items-center border border-teal2/20 shadow-sm"
            >
              {/* User Image */}
              <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-white shadow-md mb-4">
                <img src={rev.img} alt={rev.name} className="w-full h-full object-cover" />
              </div>

              {/* Stars */}
              <div className="flex text-amber-500 mb-4">
                {"★".repeat(rev.rating)}{"☆".repeat(5 - rev.rating)}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 text-center italic mb-6 leading-relaxed">
                "{rev.text}"
              </p>

              {/* User Info */}
              <div className="mt-auto text-center">
                <h3 className="font-bold text-gray-900">{rev.name}</h3>
                <p className="text-xs text-teal-600 font-semibold uppercase tracking-wider">{rev.role}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      {/* Custom Styles for Pagination Dots */}
      <style jsx="true">{`
        .swiper-pagination-bullet-active {
          background: #008080 !important; /* Aapka teal2 color code */
        }
      `}</style>
    </section>
  );
}

export default CustomerReview;




