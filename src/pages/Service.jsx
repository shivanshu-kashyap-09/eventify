import React from 'react';
import ServiceCard from '../components/card/ServiceCard';

// --- Data Structure with all 14 Services and Image URLs ---
const services = [
  {
    id: 1,
    title: "Decoration",
    tagline: "Theme-based event decoration with flowers, lights, drapes, balloons, and complete mandap setups.",
    vendor: {
      name: "The Grand Decorators",
      description: "Bespoke floral design, mandap setup, and ambient lighting for luxury weddings across Delhi NCR.",
      rating: 4.5,
      price: "₹ 1,50,000 - ₹ 3,00,000",
      rawPrice: 150000, // Added raw price for calculation
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 2,
    title: "Photography & Videography",
    tagline: "Professional photographers and videographers to capture all event highlights through cinematic films and candid photos.",
    vendor: {
      name: "Candid Frames Studio",
      description: "Award-winning team specializing in cinematic wedding films and candid photography packages.",
      rating: 4.9,
      price: "₹ 1,20,000 - ₹ 2,50,000",
      rawPrice: 120000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 3,
    title: "Catering",
    tagline: "Multi-cuisine catering services including Indian, Continental, Chinese, and specialized dessert counters with full staff.",
    vendor: {
      name: "Royal Spice Catering",
      description: "Gourmet multi-cuisine buffets, live counters, and specialized thali services. Full staff provided.",
      rating: 4.7,
      price: "₹ 1,200 - ₹ 2,500 per plate",
      rawPrice: 1200 * 100, // Assuming 100 guests for calculation
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 4,
    title: "Venue Booking",
    tagline: "Assistance in booking banquet halls, hotels, farmhouses, or outdoor venues suitable for all kinds of events.",
    vendor: {
      name: "Prime Location Finders",
      description: "Dedicated assistance in securing top-tier banquet halls, resorts, and farmhouses in your city.",
      rating: 4.4,
      price: "Negotiable Commission",
      rawPrice: 0, // Cannot easily calculate
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 5,
    title: "Invitation & E-cards",
    tagline: "Design and printing of traditional invitations or digital e-invites with customized artwork and luxury paper options.",
    vendor: {
      name: "Shaadi Cards Deluxe",
      description: "Custom design and letterpress printing for luxury physical invitations and personalized digital e-vites.",
      rating: 4.6,
      price: "₹ 80 - ₹ 350 per card",
      rawPrice: 80 * 100, // Assuming 100 invitations for calculation
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 6,
    title: "Makeup & Styling",
    tagline: "Bridal makeup, hairstyling, mehndi artists, and grooming services for all family members using premium cosmetics.",
    vendor: {
      name: "Glamour Bridal Studio",
      description: "Certified MUA offering bridal, reception, and pre-wedding makeup with premium international products.",
      rating: 5.0,
      price: "₹ 30,000 - ₹ 75,000",
      rawPrice: 30000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 7,
    title: "Music & DJ",
    tagline: "DJ, live bands, traditional music (dhol, shehnai), and professional sound setup for all celebration functions.",
    vendor: {
      name: "DJ Pulse Events",
      description: "Professional DJ and sound engineering services for sangeet, reception, and cocktail parties.",
      rating: 4.7,
      price: "₹ 25,000 - ₹ 55,000",
      rawPrice: 25000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 8,
    title: "Return Gifts & Hampers",
    tagline: "Personalized gifts, luxury hampers, and unique souvenirs for guests to show appreciation and lasting memory.",
    vendor: {
      name: "The Gifting Tree",
      description: "Customized wedding favors, luxury sweets, dry fruit hampers, and personalized souvenirs.",
      rating: 4.5,
      price: "₹ 350 - ₹ 1,500 per unit",
      rawPrice: 350 * 100, // Assuming 100 gifts for calculation
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 9,
    title: "Priest & Ritual Arrangements",
    tagline: "Pandits, maulvis, granthis, and other religious officiants with complete pooja samagri and ritual management.",
    vendor: {
      name: "Purohit Services India",
      description: "Experienced, multilingual pandits/officiants for traditional wedding ceremonies and complete pooja samagri.",
      rating: 4.8,
      price: "₹ 11,000 - ₹ 31,000",
      rawPrice: 11000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 10,
    title: "Security & Bouncers",
    tagline: "Professional security personnel, trained bouncers, and comprehensive crowd management services for peace of mind.",
    vendor: {
      name: "Secure Guard Solutions",
      description: "Licensed and professional bouncers and security personnel for discreet crowd and vehicle management.",
      rating: 4.3,
      price: "₹ 800 - ₹ 1,500 per guard/hour",
      rawPrice: 800 * 10 * 5, // 10 guards for 5 hours
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 11,
    title: "Entertainment",
    tagline: "Dance performances, comedians, celebrity appearances, professional anchors, and engaging magicians for a vibrant event.",
    vendor: {
      name: "Event Talent Agency",
      description: "Booking and management of celebrity appearances, live folk dancers, and professional anchors (MCs).",
      rating: 4.6,
      price: "₹ 50,000+",
      rawPrice: 50000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 12,
    title: "Cake & Bakery",
    tagline: "Custom-designed cakes, cupcakes, and dessert bars for birthdays, weddings, and all other special occasions.",
    vendor: {
      name: "The Cake Studio",
      description: "Custom-designed tiered wedding cakes, flavor testing, and dessert bars using premium ingredients.",
      rating: 4.9,
      price: "₹ 1,800 - ₹ 3,500 per kg",
      rawPrice: 1800 * 5, // Assuming 5 kg cake
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 13,
    title: "Travel",
    tagline: "Customized honeymoon trips, personalized travel planning, and guest logistics management post-events.",
    vendor: {
      name: "Voyage Planners",
      description: "Personalized travel planning, guest logistics management, and luxury honeymoon packages.",
      rating: 4.8,
      price: "₹ 80,000 - ₹ 3,00,000",
      rawPrice: 80000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
  {
    id: 14,
    title: "Cleaning & Housekeeping",
    tagline: "Pre and post-event venue deep cleaning, waste management, and on-site housekeeping staff and sanitization.",
    vendor: {
      name: "Spotless Events Crew",
      description: "Pre-event deep cleaning, on-site housekeeping staff, and post-event waste disposal services.",
      rating: 4.2,
      price: "₹ 15,000 - ₹ 40,000",
      rawPrice: 15000,
      imageUrl: "https://img.freepik.com/free-photo/catering-buffet_74190-3789.jpg?uid=…",
    },
  },
];


const Service = () => {
    const totalAmount = services.reduce((sum, service) => sum + (service.vendor.rawPrice || 0), 0);
    const formattedTotal = totalAmount.toLocaleString('en-IN', {
        style: 'currency',
        currency: 'INR',
        maximumFractionDigits: 0
    });

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 via-white to-blue-100 py-12 pb-0 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl mb-24"> 
        
        <header className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-blue-800 tracking-tight sm:text-5xl uppercase">
            YOUR BUDGET WEDDING PLAN
          </h1>
          <p className="mt-3 text-xl text-gray-600  italic">
            Curated Vendors matching your budget
          </p>
        </header>
        <main className="space-y-16">
          {services.map((service) => (
            <ServiceCard 
              key={service.id} 
              service={service} 
            />
          ))}
        </main>
      </div>

      <div className="p-4 bg-white border-t-4 border-indigo-600  left-0 right-0 shadow-2xl flex justify-around items-center ">
        <h1 className="text-2xl font-bold text-gray-800">
          TOTAL ESTIMATE: <span className="text-indigo-600 ml-2">{formattedTotal}</span>
        </h1>
        <button
          className="bg-green-600 text-white font-semibold py-3 px-8 rounded-full hover:bg-green-700 transition-colors duration-300 shadow-xl"
          onClick={() => alert(`Proceeding to payment for ${formattedTotal}`)}
        >
          PROCEED TO PAYMENT
        </button>
      </div>
    </div>
  );
};

export default Service;