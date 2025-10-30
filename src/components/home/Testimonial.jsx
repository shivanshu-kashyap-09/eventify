import React, { useState } from 'react';

const testimonialsData = [
  {
      id: 1,
      quote: "Our wedding was absolutely magical! 'Event Pro' handled every single detail, from the venue decor to the catering. We were actually able to relax and enjoy the day. Truly five-star service!",
      name: "Sarah & David Chen",
      avatarSrc: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-1.png",
      stars: 5,
  },
  {
      id: 2,
      quote: "We used their services for our annual corporate retreat (200+ guests). The food was incredible, especially the live stations. Flawless execution and highly professional staff from start to finish.",
      name: "Michael J. Sterling",
      avatarSrc: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
      stars: 5,
  },
  {
      id: 3,
      quote: "Their catering for my daughter's sweet sixteen was a massive hit. The themed dessert bar was the star of the show! Excellent customer service and amazing attention to detail.",
      name: "Lisa Rodriguez",
      avatarSrc: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
      stars: 5,
  },
  {
      id: 4,
      quote: "As a frequent client, I rely on their team for all my fundraising galas. They manage complex logistics with ease and always exceed expectations, making my job significantly easier.",
      name: "Ben Carter",
      avatarSrc: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
      stars: 5,
  },
  {
      id: 5,
      quote: "I was hired to review the food at a recent event they catered—it was exceptional. The quality, presentation, and imaginative menu deserve the highest praise. A truly gourmet experience.",
      name: "David Kim",
      avatarSrc: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-male-2.png",
      stars: 5,
  },
  {
    id: 6,
    quote: "As a frequent client, I rely on their team for all my fundraising galas. They manage complex logistics with ease and always exceed expectations, making my job significantly easier.",
    name: "Ben Carter",
    avatarSrc: "https://cdn.rareblocks.xyz/collection/clarity/images/testimonial/4/avatar-female.png",
    stars: 4,
},
];

const StarIcon = () => (
    <svg className="w-5 h-5 text-[#FDB241]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
);

const TestimonialCard = ({ quote, name, title, avatarSrc, stars }) => {
    
    const renderedStars = Array(stars).fill(0).map((_, i) => <StarIcon key={i} />);

    return (
       
        <div className="flex flex-col  overflow-hidden shadow-xl bg-transparent">
          
            <div className="flex flex-col justify-between flex-1 p-6 bg-white rounded-xl lg:py-8 lg:px-7">
                <div className="flex-1">
                    <div className="flex items-center">
                        {renderedStars}
                    </div>
                    <blockquote className="flex-1 mt-4">
                        <p className="text-md leading-relaxed text-gray-900 font-pj">“{quote}”</p>
                    </blockquote>
                </div>
                <div className="flex items-center mt-5">
                   
                    <img
                        className="flex-shrink-0 object-cover rounded-full w-11 h-11"
                        src={avatarSrc}
                        alt={`Avatar of ${name}`}
                        onError={(e) => {
                            e.target.onerror = null; 
                            e.target.src = `https://placehold.co/44x44/cccccc/444444?text=${name.split(' ').map(n => n[0]).join('')}`;
                        }}
                    />
                    <div className="ml-4">
                        <p className="text-base font-bold text-gray-900 font-pj">{name}</p>
                        <p className="mt-0.5 text-sm font-pj text-gray-600">{title}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};


const Testimonial = () => {
    const [data, setData] = useState(testimonialsData);

    return (
        <section className="py-12 bg-gradient-to-r from-blue-50 via-white to-blue-50 sm:py-16 lg:py-20">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-10">
                <div className="flex flex-col items-center">
                    <div className="text-center">
                        <p className="text-lg font-medium text-gray-600 font-pj">2,157 people have said how good Eventify</p>
                        <h2 className="mt-4 text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl font-pj">Our happy clients say about us</h2>
                    </div>

                    <div className="mt-8 text-center md:mt-16 md:order-3">
                        <a href="#" title="Check all reviews" className="pb-2 text-base font-bold leading-7 text-gray-900 transition-all duration-200 border-b-2 border-gray-900 hover:border-gray-600 font-pj focus:outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2 hover:text-gray-600"> Check all 2,157 reviews </a>
                    </div>

                    <div className="relative mt-10 md:mt-24 md:order-2">
                  
                        <div className="absolute -inset-x-1 inset-y-16 md:-inset-x-2 md:-inset-y-6">
                            <div className="w-full h-full max-w-5xl mx-auto rounded-3xl opacity-30 blur-lg filter" style={{ background: 'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)' }}></div>
                        </div>

                        <div className="relative grid max-w-lg grid-cols-1 gap-6 mx-auto md:max-w-none lg:gap-6 md:grid-cols-3">
                            {data.map((testimonial) => (
                                <TestimonialCard 
                                    key={testimonial.id}
                                    quote={testimonial.quote}
                                    name={testimonial.name}
                                    avatarSrc={testimonial.avatarSrc}
                                    stars={testimonial.stars}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonial;
