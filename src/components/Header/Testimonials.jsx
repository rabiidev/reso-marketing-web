// import { Splide, SplideSlide } from '@splidejs/react-splide';
// import '@splidejs/splide/dist/css/splide.min.css';
// import { reviews } from './reviewsData';
// import Quote from '../../assets/blockquote.svg';

// const Testimonials = () => {
//   return (
//     <section className="testimonial container mt-20">
//       <div className="title ">
//         <h2 className='text-gray-200 font-bold text-center '>Testimonial</h2>
//         <p className='text-gray-200 font-bold text-center ' >What members are saying.</p>
//       </div>

//       <div className="slider items-center justify-center ">
//         <blockquote>
//           <img className="top-quote quote " src={Quote} alt="quote" />
//           <img className="bottom-quote quote" src={Quote} alt="quote" />
//         </blockquote>

//         <Splide
//           options={{
//             perPage: 1,
//             autoplay: true,
//             speed: 1000,
//             rewind: true,
//             rewindByDrag: true,
//           }}
//           as="div" className=" w-15 h-15"
//         >
//           {reviews.map((review) => (
//             <SplideSlide key={review.id} as="div" className=" w-15 h-15">
//               <img className="review-img w-20 h-20 ms-[37rem] rounded-xl object-cover text-center justify-center items-center" src={review.image} alt="" />
//               <div className="content">
//                 <p className="text-white text-xl mx-28">{review.text}</p>
//                 <div className=" text-white text-center mt-5">
//                   <div className="rating text-white items-center">
//                     <span className="star text-yellow-600">&#9733;</span>
//                     <span className="star text-yellow-600">&#9733;</span>
//                     <span className="star text-yellow-600">&#9733;</span>
//                     <span className="star text-yellow-600">&#9733;</span>
//                     <span className="star text-yellow-600">&#9734;</span>
//                   </div>
//                   <p className="user text-xl font-semibold mt-5">{review.name}</p>
//                 </div>
//               </div>
//             </SplideSlide>
//           ))}
//         </Splide>
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';
import { reviews } from './reviewsData';
import Quote from '../../assets/blockquote.svg';

const Testimonials = () => {
  return (
<>


    <section className="testimonial container mx-auto mt-20 py-10 px-6 bg-gray-900 rounded-lg shadow-lg">
      <div className="title mb-8">
        <h2 className="text-md text-[#119d60] font-bold text-center">Testimonials</h2>
        <p className="text-3xl text-gray-400 text-center mt-2">What our members are saying</p>
      </div>

      <div className="slider relative">
        <blockquote className="absolute top-0 left-8 w-10 h-10">
          <img className=" opacity-30 " src={Quote} alt="quote" />
        </blockquote>
        <blockquote className="absolute bottom-0 right-8 w-10 h-10">
          <img className="opacity-30" src={Quote} alt="quote" />
        </blockquote>

        <Splide
          options={{
            perPage: 1,
            autoplay: true,
            speed: 1000,
            rewind: true,
            rewindByDrag: true,
          }}
          className="w-full"
        >
          {reviews.map((review) => (
            <SplideSlide key={review.id} className="text-center">
              <img
                className="mx-auto w-20 h-20 rounded-full border-4 border-gray-600 object-cover"
                src={review.image}
                alt=""
              />
              <div className="content mt-6">
                <p className="text-lg text-gray-200 italic mx-4">{review.text}</p>
                <div className="rating mt-4 flex justify-center">
                  <span className="star text-yellow-500 text-xl">&#9733;</span>
                  <span className="star text-yellow-500 text-xl">&#9733;</span>
                  <span className="star text-yellow-500 text-xl">&#9733;</span>
                  <span className="star text-yellow-500 text-xl">&#9733;</span>
                  <span className="star text-yellow-500 text-xl">&#9734;</span>
                </div>
                <p className="user text-lg text-white font-semibold mt-4">{review.name}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
