/**
 * Movie Explorer — BookMyShow-Inspired Discovery & Ticketing Platform
 * Pure JavaScript Architecture
 * Technologies: HTML5, CSS3, DOM Manipulation, Event Listeners
 */

// ==========================================================================
// 1. EXACTLY 15 PREDEFINED CURATED MOVIE OBJECTS
// ==========================================================================
const MOVIES_DATA = [
  {
    id: 1,
    title: "HanuMan",
    genre: "Action",
    language: "Telugu",
    year: 2024,
    rating: 9.6,
    director: "Prasanth Varma",
    price: 250,
    poster: "images/hanuman-ansh.png",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    description: "An ordinary young man in the rustic village of Anjanadri gains the celestial superpowers of Lord Hanuman to protect his land against ruthless modern mercenaries.",
    hasIntegratedBadge: true
  },
  {
    id: 2,
    title: "The Paradise",
    genre: "Action",
    language: "Telugu",
    year: 2025,
    rating: 9.2,
    director: "Srikanth Odela",
    price: 260,
    poster: "images/the-paradise.png",
    backdrop: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=1200&auto=format&fit=crop&q=80",
    description: "Natural Star Nani joins forces with Srikanth Odela in a visceral, adrenaline-fueled spectacle depicting power, brotherhood, and survival.",
    hasIntegratedBadge: true
  },
  {
    id: 3,
    title: "Kalki 2898 AD",
    genre: "Science Fiction",
    language: "Telugu",
    year: 2024,
    rating: 8.6,
    director: "Nag Ashwin",
    price: 260,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    description: "In a futuristic dystopia, a modern avatar of Vishnu descends to Earth to protect humanity against dark, tyrannical forces."
  },
  {
    id: 4,
    title: "Inception",
    genre: "Science Fiction",
    language: "English",
    year: 2010,
    rating: 8.8,
    director: "Christopher Nolan",
    price: 240,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&auto=format&fit=crop&q=80",
    description: "A thief who steals corporate secrets through dream-sharing technology is tasked with the inverse job of planting an idea into a CEO's subconscious."
  },
  {
    id: 5,
    title: "Jawan",
    genre: "Action",
    language: "Hindi",
    year: 2023,
    rating: 8.2,
    director: "Atlee",
    price: 220,
    poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1536440136628-849c177e76a1?w=1200&auto=format&fit=crop&q=80",
    description: "A driven man undertakes a mission to correct society's injustices while fulfilling an oath made years ago to his family."
  },
  {
    id: 6,
    title: "Leo",
    genre: "Action",
    language: "Tamil",
    year: 2023,
    rating: 8.4,
    director: "Lokesh Kanagaraj",
    price: 230,
    poster: "https://images.unsplash.com/photo-1607604276583-eef5d076aa5f?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?w=1200&auto=format&fit=crop&q=80",
    description: "A calm cafe owner in Himachal Pradesh becomes an accidental local hero, attracting the ruthless gaze of a gang who claim to know his violent past."
  },
  {
    id: 7,
    title: "RRR",
    genre: "Action",
    language: "Telugu",
    year: 2022,
    rating: 8.8,
    director: "S.S. Rajamouli",
    price: 250,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1200&auto=format&fit=crop&q=80",
    description: "A fictitious tale of two legendary revolutionaries and their perilous journey away from home before they began fighting for their country in the 1920s."
  },
  {
    id: 8,
    title: "The Dark Knight",
    genre: "Action",
    language: "English",
    year: 2008,
    rating: 9.0,
    director: "Christopher Nolan",
    price: 250,
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1200&auto=format&fit=crop&q=80",
    description: "Batman confronts his greatest nemesis yet, the Joker, who unleashes psychological chaos and anarchy across Gotham City."
  },
  {
    id: 9,
    title: "Dangal",
    genre: "Drama",
    language: "Hindi",
    year: 2016,
    rating: 8.4,
    director: "Nitesh Tiwari",
    price: 200,
    poster: "https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    description: "Former wrestler Mahavir Singh Phogat trains his daughters Geeta and Babita to triumph against societal odds and win Commonwealth wrestling gold."
  },
  {
    id: 10,
    title: "Interstellar",
    genre: "Science Fiction",
    language: "English",
    year: 2014,
    rating: 8.7,
    director: "Christopher Nolan",
    price: 240,
    poster: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=1200&auto=format&fit=crop&q=80",
    description: "A team of brave explorers embarks on a dangerous wormhole mission beyond the galaxy to secure humanity's future as Earth faces collapse."
  },
  {
    id: 11,
    title: "Spirited Away",
    genre: "Animation",
    language: "Unspecified",
    year: 2001,
    rating: 8.6,
    director: "Hayao Miyazaki",
    price: 190,
    poster: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1514306191717-452ec28c7814?w=1200&auto=format&fit=crop&q=80",
    description: "A ten-year-old girl wanders into an enchanting mystical world of spirits and witches, striving to rescue her parents and return home."
  },
  {
    id: 12,
    title: "La La Land",
    genre: "Romance",
    language: "English",
    year: 2016,
    rating: 8.0,
    director: "Damien Chazelle",
    price: 210,
    poster: "https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=1200&auto=format&fit=crop&q=80",
    description: "An aspiring actress and a passionate jazz pianist fall in love while pursuing their artistic dreams under the dazzling lights of Los Angeles."
  },
  {
    id: 13,
    title: "Parasite",
    genre: "Thriller",
    language: "Unspecified",
    year: 2019,
    rating: 8.5,
    director: "Bong Joon Ho",
    price: 220,
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=1200&auto=format&fit=crop&q=80",
    description: "Class inequality sparks a dark, symbiotic clash between the affluent Park family and the cunning, opportunistic Kim household."
  },
  {
    id: 14,
    title: "Spider-Man: Into the Spider-Verse",
    genre: "Animation",
    language: "English",
    year: 2018,
    rating: 8.4,
    director: "Bob Persichetti",
    price: 210,
    poster: "https://images.unsplash.com/photo-1635805737707-575885ab0820?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1534447677768-be436bb09401?w=1200&auto=format&fit=crop&q=80",
    description: "Teen Miles Morales discovers superhuman abilities and allies with Spider-Heroes from alternate dimensions to prevent a catastrophic collapse."
  },
  {
    id: 15,
    title: "3 Idiots",
    genre: "Comedy",
    language: "Hindi",
    year: 2009,
    rating: 8.4,
    director: "Rajkumar Hirani",
    price: 190,
    poster: "https://images.unsplash.com/photo-1485846234645-a62644f84728?w=600&auto=format&fit=crop&q=80",
    backdrop: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1200&auto=format&fit=crop&q=80",
    description: "Two college friends embark on a nostalgic road trip to locate their brilliant, vanished companion while reflecting on their unconventional university days."
  }
];

// Coming Soon Dataset
const COMING_SOON_DATA = [
  {
    id: 101,
    title: "The Paradise",
    genre: "Action",
    language: "Telugu",
    year: 2025,
    releaseDate: "Coming Soon • 506K+ Likes",
    director: "Srikanth Odela",
    poster: "images/the-paradise.png",
    hasIntegratedBadge: true,
    description: "Natural Star Nani joins forces with Dasara director Srikanth Odela for an explosive, raw mass-action drama set in a ruthless battleground."
  },
  {
    id: 102,
    title: "Avatar: Fire and Ash",
    genre: "Science Fiction",
    language: "English",
    year: 2025,
    releaseDate: "19 Dec 2025",
    director: "James Cameron",
    poster: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=600&auto=format&fit=crop&q=80",
    description: "Jake Sully and Neytiri encounter a aggressive, volcanic clan of Na'vi known as the Ash People on Pandora."
  },
  {
    id: 103,
    title: "Pushpa 2: The Rule",
    genre: "Action",
    language: "Telugu",
    year: 2024,
    releaseDate: "06 Dec 2024",
    director: "Sukumar",
    poster: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600&auto=format&fit=crop&q=80",
    description: "Pushpa Raj expands his red sandalwood empire while clashing with the uncompromising SP Bhanwar Singh Shekhawat."
  },
  {
    id: 104,
    title: "War 2",
    genre: "Action",
    language: "Hindi",
    year: 2025,
    releaseDate: "14 Aug 2025",
    director: "Ayan Mukerji",
    poster: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=600&auto=format&fit=crop&q=80",
    description: "Major Kabir Dhaliwal confronts a lethal global operative in a pulse-pounding, high-stakes espionage showdown."
  },
  {
    id: 105,
    title: "Avengers: Secret Wars",
    genre: "Action",
    language: "English",
    year: 2027,
    releaseDate: "Release date to be announced",
    director: "Anthony & Joe Russo",
    poster: "https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=600&auto=format&fit=crop&q=80",
    description: "Earth's mightiest champions unite across timelines to prevent the irreversible collapse of the multiverse."
  }
];

// ==========================================================================
// 1B. 10 MAJOR CITIES & 10 REALISTIC CINEMA LOCATIONS PER CITY
// ==========================================================================
const CINEMAS_BY_CITY = {
  "Visakhapatnam": [
    { id: "viz1", name: "Cinepolis: Jagadamba Center", location: "Jagadamba Junction, Visakhapatnam" },
    { id: "viz2", name: "PVR INOX: Varun Beach", location: "RK Beach Road, Visakhapatnam" },
    { id: "viz3", name: "V Max Cinemas: Dwaraka Nagar", location: "Near Diamond Park, Visakhapatnam" },
    { id: "viz4", name: "Sarat City Cinemas: Gajuwaka", location: "High School Road, Gajuwaka, Visakhapatnam" },
    { id: "viz5", name: "INOX: CMR Central Mall", location: "Maddilapalem, Visakhapatnam" },
    { id: "viz6", name: "Sangam Sarat Theatres", location: "Railway New Colony, Visakhapatnam" },
    { id: "viz7", name: "Kameshwari & Kinnera Complex", location: "Daba Gardens, Visakhapatnam" },
    { id: "viz8", name: "Sri Leela Mahal Multiplex", location: "Jagadamba Commercial Area, Visakhapatnam" },
    { id: "viz9", name: "PVR: South India Shopping Mall", location: "VIP Road, Siripuram, Visakhapatnam" },
    { id: "viz10", name: "STBL Cine World Multiplex", location: "Sheela Nagar, BHPV Post, Visakhapatnam" }
  ],
  "Hyderabad": [
    { id: "hyd1", name: "Prasads Multiplex & IMAX", location: "Necklace Road, Hyderabad" },
    { id: "hyd2", name: "AMB Cinemas", location: "Gachibowli - Miyapur Road, Hyderabad" },
    { id: "hyd3", name: "PVR: Next Galleria Mall", location: "Panjagutta, Hyderabad" },
    { id: "hyd4", name: "INOX: GVK One Mall", location: "Banjara Hills, Hyderabad" },
    { id: "hyd5", name: "Cinepolis: DSL Virtue Mall", location: "Uppal, Hyderabad" },
    { id: "hyd6", name: "Miraj Cinemas: Shalini Shivani", location: "Kothapet, Hyderabad" },
    { id: "hyd7", name: "Sudarshan 35mm", location: "RTC X Roads, Hyderabad" },
    { id: "hyd8", name: "Sandhya 70mm", location: "RTC X Roads, Hyderabad" },
    { id: "hyd9", name: "PVR: Forum Sujana Mall", location: "Kukatpally, Hyderabad" },
    { id: "hyd10", name: "Asian Shiva Ganga", location: "Dilsukhnagar, Hyderabad" }
  ],
  "Bengaluru": [
    { id: "blr1", name: "PVR: Forum Mall", location: "Koramangala, Bengaluru" },
    { id: "blr2", name: "INOX: Garuda Mall", location: "Magrath Road, Bengaluru" },
    { id: "blr3", name: "Cinepolis: Royal Meenakshi Mall", location: "Bannerghatta Road, Bengaluru" },
    { id: "blr4", name: "PVR: Orion Mall", location: "Rajajinagar, Bengaluru" },
    { id: "blr5", name: "Urvashi Cinema", location: "Lalbagh Road, Bengaluru" },
    { id: "blr6", name: "PVR: Phoenix Marketcity", location: "Whitefield, Bengaluru" },
    { id: "blr7", name: "INOX: Mantri Square", location: "Malleshwaram, Bengaluru" },
    { id: "blr8", name: "Gopalan Cinemas: Grand Mall", location: "Old Madras Road, Bengaluru" },
    { id: "blr9", name: "Mukta A2 Cinemas", location: "Jayanagar, Bengaluru" },
    { id: "blr10", name: "PVR: Vega City Mall", location: "Bannerghatta Road, Bengaluru" }
  ],
  "Chennai": [
    { id: "chn1", name: "Sathyam Cinemas (SPI)", location: "Royapettah, Chennai" },
    { id: "chn2", name: "PVR: Express Avenue Mall", location: "Whites Road, Royapettah, Chennai" },
    { id: "chn3", name: "INOX: Chennai Citi Centre", location: "Mylapore, Chennai" },
    { id: "chn4", name: "Escape Cinemas", location: "Express Avenue, Chennai" },
    { id: "chn5", name: "AGS Cinemas: OMR", location: "Navalur, Chennai" },
    { id: "chn6", name: "Rohini Silver Screens", location: "Koyambedu, Chennai" },
    { id: "chn7", name: "Vettri Theatres", location: "Chromepet, Chennai" },
    { id: "chn8", name: "Palazzo Cinemas", location: "Forum Vijaya Mall, Vadapalani, Chennai" },
    { id: "chn9", name: "Devi Cineplex", location: "Anna Salai, Chennai" },
    { id: "chn10", name: "PVR: Grand Galada Mall", location: "Pallavaram, Chennai" }
  ],
  "Mumbai": [
    { id: "mum1", name: "PVR: Phoenix Palladium", location: "Lower Parel, Mumbai" },
    { id: "mum2", name: "Cinepolis: Viviana Mall", location: "Thane West, Mumbai" },
    { id: "mum3", name: "INOX: Megaplex Inorbit", location: "Malad West, Mumbai" },
    { id: "mum4", name: "Carnival Cinemas: IMAX", location: "Wadala, Mumbai" },
    { id: "mum5", name: "Regal Cinema", location: "Colaba, Mumbai" },
    { id: "mum6", name: "PVR: Dynamix Mall", location: "Juhu, Mumbai" },
    { id: "mum7", name: "Maratha Mandir Cinema", location: "Mumbai Central, Mumbai" },
    { id: "mum8", name: "PVR: Oberoi Mall", location: "Goregaon East, Mumbai" },
    { id: "mum9", name: "Sterling Cineplex", location: "Fort, South Mumbai" },
    { id: "mum10", name: "G7 Multiplex (Gaiety Galaxy)", location: "Bandra West, Mumbai" }
  ],
  "Delhi-NCR": [
    { id: "del1", name: "PVR: Plaza CP", location: "Connaught Place, New Delhi" },
    { id: "del2", name: "PVR: Select Citywalk", location: "Saket, New Delhi" },
    { id: "del3", name: "Cinepolis: DLF Avenue", location: "Saket, New Delhi" },
    { id: "del4", name: "INOX: Epicuria Nehru Place", location: "Nehru Place, New Delhi" },
    { id: "del5", name: "PVR: Pacific Mall", location: "Subhash Nagar, New Delhi" },
    { id: "del6", name: "Carnival Odeon Cinema", location: "Connaught Place, New Delhi" },
    { id: "del7", name: "Delite Cinema", location: "Asaf Ali Road, Daryaganj, New Delhi" },
    { id: "del8", name: "PVR: Logix City Centre", location: "Sector 32, Noida" },
    { id: "del9", name: "PVR: Ambience Mall", location: "Gurugram, Delhi-NCR" },
    { id: "del10", name: "Cinepolis: Grand Venice Mall", location: "Greater Noida" }
  ],
  "Vijayawada": [
    { id: "vij1", name: "PVR: Ripples Mall", location: "MG Road, Vijayawada" },
    { id: "vij2", name: "Cinepolis: Power One Mall", location: "Auto Nagar, Vijayawada" },
    { id: "vij3", name: "INOX: LEPL Icon Mall", location: "Patamata, Vijayawada" },
    { id: "vij4", name: "Sailaja Theatre", location: "Governerpet, Vijayawada" },
    { id: "vij5", name: "Capital Cinemas: Trendset Mall", location: "Benz Circle, Vijayawada" },
    { id: "vij6", name: "Alankar Theatre Complex", location: "Arundelpet, Vijayawada" },
    { id: "vij7", name: "Raj & Yuvaraj Theatres", location: "Gandhinagar, Vijayawada" },
    { id: "vij8", name: "Miraj Cinemas: D-Address", location: "MG Road, Vijayawada" },
    { id: "vij9", name: "Annapurna Theatre", location: "Besant Road, Vijayawada" },
    { id: "vij10", name: "Navrang Theatre", location: "Eluru Road, Vijayawada" }
  ],
  "Kolkata": [
    { id: "kol1", name: "INOX: South City Mall", location: "Prince Anwar Shah Rd, Kolkata" },
    { id: "kol2", name: "PVR: Mani Square Mall", location: "EM Bypass, Kolkata" },
    { id: "kol3", name: "Cinepolis: Acropolis Mall", location: "Kasba, Kolkata" },
    { id: "kol4", name: "Navina Cinema", location: "Tollygunge, Kolkata" },
    { id: "kol5", name: "Priya Cinema", location: "Rashbehari Avenue, Kolkata" },
    { id: "kol6", name: "INOX: Quest Mall", location: "Syed Amir Ali Avenue, Kolkata" },
    { id: "kol7", name: "Star Theatre", location: "Hatibagan, Bidhan Sarani, Kolkata" },
    { id: "kol8", name: "Miraj Cinemas: New Empire", location: "Esplanade, Kolkata" },
    { id: "kol9", name: "PVR: Diamond Plaza", location: "Jessore Road, Dum Dum, Kolkata" },
    { id: "kol10", name: "SVF Cinemas: Wood Square", location: "Narendrapur, Kolkata" }
  ],
  "Kochi": [
    { id: "koc1", name: "PVR: LuLu Mall", location: "Edappally, Kochi" },
    { id: "koc2", name: "Cinepolis: Centre Square Mall", location: "MG Road, Kochi" },
    { id: "koc3", name: "Shenoys Theatre", location: "MG Road, Kochi" },
    { id: "koc4", name: "Padma Cinema", location: "Shenoys Junction, Kochi" },
    { id: "koc5", name: "Kavitha Theatre", location: "MG Road, Ernakulam, Kochi" },
    { id: "koc6", name: "PVR: Forum Mall Kochi", location: "Maradu, Kochi" },
    { id: "koc7", name: "Kanoos Theatre", location: "Edappally, Kochi" },
    { id: "koc8", name: "Sridhar Cinemas", location: "Marine Drive, Kochi" },
    { id: "koc9", name: "EVM Cinema", location: "Kaloor, Kochi" },
    { id: "koc10", name: "Vanitha-Vineetha Theatres", location: "Edappally, Kochi" }
  ],
  "Pune": [
    { id: "pun1", name: "PVR: Phoenix Marketcity", location: "Viman Nagar, Pune" },
    { id: "pun2", name: "Cinepolis: Seasons Mall", location: "Magarpatta City, Hadapsar, Pune" },
    { id: "pun3", name: "INOX: Bund Garden", location: "Camp, Pune" },
    { id: "pun4", name: "PVR: Pavilion Mall", location: "SB Road, Pune" },
    { id: "pun5", name: "Cinepolis: Westend Mall", location: "Aundh, Pune" },
    { id: "pun6", name: "City Pride Multiplex", location: "Kothrud, Pune" },
    { id: "pun7", name: "E-Square Multiplex", location: "University Road, Pune" },
    { id: "pun8", name: "Victory Theatre", location: "Camp, Pune" },
    { id: "pun9", name: "INOX: Amanora Town Centre", location: "Hadapsar, Pune" },
    { id: "pun10", name: "Carnival Cinemas: Premier", location: "Shivaji Nagar, Pune" }
  ]
};

function getCinemasForCity(city) {
  return CINEMAS_BY_CITY[city] || CINEMAS_BY_CITY["Visakhapatnam"];
}

const SHOWTIMES_LIST = ["10:30 AM", "01:45 PM", "05:15 PM", "08:30 PM"];

// ==========================================================================
// 2. APPLICATION STATE
// ==========================================================================
const AppState = {
  movies: MOVIES_DATA,
  comingSoon: COMING_SOON_DATA,
  cinemas: getCinemasForCity("Visakhapatnam"),
  activeFilter: "All Movies",
  searchQuery: "",
  sortOption: "rating-desc",
  selectedCity: "Visakhapatnam",
  heroCarouselIndex: 0,
  heroTimer: null,
  user: null, // Loaded from localStorage
  
  // Interactive Booking Session State
  booking: {
    movie: null,
    cinema: getCinemasForCity("Visakhapatnam")[0],
    date: null,
    showtime: SHOWTIMES_LIST[0],
    selectedSeats: [] // Array of { id: 'E4', row: 'E', num: 4, tier: 'Premium', price: 300 }
  }
};

// ==========================================================================
// 3. UTILITIES & FALLBACK IMAGE HANDLER
// ==========================================================================
function formatCurrency(val) {
  return "₹" + Number(val).toLocaleString("en-IN");
}

function handlePosterError(imgEl, title) {
  imgEl.onerror = () => {
    imgEl.onerror = null;
    imgEl.src = "images/poster-placeholder.svg";
  };
  imgEl.src = "images/poster-placeholder.png";
}

function showToast(message) {
  let toast = document.getElementById("appToast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "appToast";
    toast.className = "toast-notice";
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add("show");
  setTimeout(() => toast.classList.remove("show"), 2800);
}

function generateDemoRef() {
  const randNum = Math.floor(10000 + Math.random() * 90000);
  return `ME-2026-${randNum}`;
}

// Generate next 5 calendar dates starting from Today
function getUpcomingDatesList() {
  const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  const months = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  const list = [];
  const now = new Date();
  
  for (let i = 0; i < 5; i++) {
    const d = new Date();
    d.setDate(now.getDate() + i);
    list.push({
      dateStr: `${d.getDate()} ${months[d.getMonth()]}`,
      dayLabel: i === 0 ? "TODAY" : i === 1 ? "TOMORROW" : days[d.getDay()],
      dateNum: d.getDate(),
      fullFormat: `${d.getDate()} ${months[d.getMonth()]} 2026`
    });
  }
  return list;
}

// ==========================================================================
// 4. HERO BANNER PROMOTIONAL CAROUSEL (3 Slides)
// ==========================================================================
function initHeroBanner() {
  const slides = document.querySelectorAll(".hero-slide");
  const dots = document.querySelectorAll(".hero-dot");
  if (!slides.length) return;

  function showSlide(idx) {
    AppState.heroCarouselIndex = (idx + slides.length) % slides.length;
    slides.forEach((s, i) => s.classList.toggle("active", i === AppState.heroCarouselIndex));
    dots.forEach((d, i) => d.classList.toggle("active", i === AppState.heroCarouselIndex));
  }

  const prevBtn = document.getElementById("heroPrevBtn");
  const nextBtn = document.getElementById("heroNextBtn");
  if (prevBtn) prevBtn.addEventListener("click", () => showSlide(AppState.heroCarouselIndex - 1));
  if (nextBtn) nextBtn.addEventListener("click", () => showSlide(AppState.heroCarouselIndex + 1));

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => showSlide(i));
  });

  // Autoplay with pause on hover
  const carouselEl = document.getElementById("heroBannerSection");
  function startTimer() {
    clearInterval(AppState.heroTimer);
    AppState.heroTimer = setInterval(() => showSlide(AppState.heroCarouselIndex + 1), 5000);
  }
  if (carouselEl) {
    carouselEl.addEventListener("mouseenter", () => clearInterval(AppState.heroTimer));
    carouselEl.addEventListener("mouseleave", startTimer);
  }
  startTimer();
}

// ==========================================================================
// 5. RECOMMENDED MOVIES HORIZONTAL CAROUSEL
// ==========================================================================
function renderRecommendedCarousel() {
  const track = document.getElementById("recommendedTrack");
  if (!track) return;

  // Use top 8 critically acclaimed movies
  const recommended = AppState.movies.slice(0, 8);
  track.innerHTML = recommended.map(m => `
    <article class="movie-poster-card" onclick="openMovieDetails(${m.id})">
      <div class="card-img-box">
        <img src="${m.poster}" alt="${m.title} Poster" class="card-img" loading="lazy" onerror="handlePosterError(this, '${m.title}')">
        ${!m.hasIntegratedBadge ? `
        <div class="card-rating-strip">
          <span>⭐</span> ${m.rating.toFixed(1)} / 10
        </div>` : ''}
      </div>
      <div class="card-info-pane">
        <h4 class="card-movie-title" title="${m.title}">${m.title}</h4>
        <div class="card-movie-genre">${m.genre} • ${m.year}</div>
        <button class="card-btn-action" type="button" onclick="event.stopPropagation(); openMovieDetails(${m.id});">
          View Details
        </button>
      </div>
    </article>
  `).join("");

  // Smooth scroll buttons
  const leftBtn = document.getElementById("recScrollLeft");
  const rightBtn = document.getElementById("recScrollRight");
  if (leftBtn) leftBtn.addEventListener("click", () => track.scrollBy({ left: -460, behavior: "smooth" }));
  if (rightBtn) rightBtn.addEventListener("click", () => track.scrollBy({ left: 460, behavior: "smooth" }));
}

// ==========================================================================
// 6. NOW SHOWING & MULTI-FILTER PIPELINE
// ==========================================================================
function setupFilterListeners() {
  // Search input
  const searchInput = document.getElementById("mainSearchInput");
  const clearBtn = document.getElementById("mainSearchClear");

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      AppState.searchQuery = e.target.value.trim().toLowerCase();
      if (clearBtn) clearBtn.classList.toggle("active", AppState.searchQuery.length > 0);
      applyFiltersAndRenderNowShowing();
    });
  }

  if (clearBtn) {
    clearBtn.addEventListener("click", () => {
      if (searchInput) {
        searchInput.value = "";
        searchInput.focus();
      }
      AppState.searchQuery = "";
      clearBtn.classList.remove("active");
      applyFiltersAndRenderNowShowing();
    });
  }

  // Filter chips
  const chips = document.querySelectorAll(".filter-chip-btn");
  chips.forEach(chip => {
    chip.addEventListener("click", () => {
      chips.forEach(c => c.classList.remove("active"));
      chip.classList.add("active");
      AppState.activeFilter = chip.getAttribute("data-filter");
      applyFiltersAndRenderNowShowing();
    });
  });

  // Sorting dropdown
  const sortSelect = document.getElementById("nowShowingSortSelect");
  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      AppState.sortOption = e.target.value;
      applyFiltersAndRenderNowShowing();
    });
  }

  // City selector dropdown (10 Cities Supported)
  const citySelect = document.getElementById("headerCitySelect");
  if (citySelect) {
    citySelect.addEventListener("change", (e) => {
      AppState.selectedCity = e.target.value;
      AppState.cinemas = getCinemasForCity(AppState.selectedCity);
      AppState.booking.cinema = AppState.cinemas[0];

      // Update booking and browse headings
      const bookingLabel = document.getElementById("bookingCinemaLabel");
      if (bookingLabel) {
        bookingLabel.textContent = `1. Select Cinema in ${AppState.selectedCity}`;
      }
      const browseTitle = document.getElementById("browseCinemasTitle");
      if (browseTitle) {
        browseTitle.textContent = `Cinemas in ${AppState.selectedCity}`;
      }
      const profileCity = document.getElementById("profileModalCity");
      if (profileCity) {
        profileCity.textContent = AppState.selectedCity;
      }

      showToast(`📍 Switched to ${AppState.selectedCity} (10 partner cinemas available)`);
      const bookingModalEl = document.getElementById("bookingModal");
      if (bookingModalEl && bookingModalEl.classList.contains("active")) {
        renderBookingModalView();
      }
    });
  }
}

function applyFiltersAndRenderNowShowing() {
  let list = [...AppState.movies];
  const filter = AppState.activeFilter;
  const query = AppState.searchQuery;

  // 1. Language or Genre Filter Chip
  if (filter !== "All Movies") {
    list = list.filter(m => {
      const matchGenre = m.genre.toLowerCase() === filter.toLowerCase();
      const matchLang = m.language && m.language.toLowerCase() === filter.toLowerCase();
      return matchGenre || matchLang;
    });
  }

  // 2. Real-time Search by Title
  if (query) {
    list = list.filter(m => m.title.toLowerCase().includes(query));
  }

  // 3. Sorting (Non-destructive)
  if (AppState.sortOption === "rating-desc") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (AppState.sortOption === "year-desc") {
    list.sort((a, b) => b.year - a.year);
  } else if (AppState.sortOption === "year-asc") {
    list.sort((a, b) => a.year - b.year);
  } else if (AppState.sortOption === "title-asc") {
    list.sort((a, b) => a.title.localeCompare(b.title));
  }

  renderNowShowingGrid(list);
}

function renderNowShowingGrid(moviesList) {
  const grid = document.getElementById("nowShowingGrid");
  const countDisplay = document.getElementById("nowShowingCount");
  if (!grid) return;

  if (countDisplay) {
    countDisplay.textContent = `Showing ${moviesList.length} of ${AppState.movies.length} movies`;
  }

  if (moviesList.length === 0) {
    grid.innerHTML = `
      <div class="empty-results-banner">
        <h4>No movies found</h4>
        <p>No titles match "${AppState.searchQuery}" with filter "${AppState.activeFilter}".</p>
        <button class="btn-hero-cta" type="button" onclick="resetSearchAndFilters()">
          Clear All Filters
        </button>
      </div>
    `;
    return;
  }

  grid.innerHTML = moviesList.map(m => `
    <article class="movie-poster-card" onclick="openMovieDetails(${m.id})">
      <div class="card-img-box">
        <img src="${m.poster}" alt="${m.title} Poster" class="card-img" loading="lazy" onerror="handlePosterError(this, '${m.title}')">
        ${!m.hasIntegratedBadge ? `
        <div class="card-rating-strip">
          <span>⭐</span> ${m.rating.toFixed(1)} / 10
        </div>` : ''}
      </div>
      <div class="card-info-pane">
        <h4 class="card-movie-title" title="${m.title}">${m.title}</h4>
        <div class="card-movie-genre">${m.language !== 'Unspecified' ? m.language : ''} • ${m.genre}</div>
        <button class="card-btn-action" type="button" onclick="event.stopPropagation(); startBookingProcess(${m.id});">
          Book Tickets
        </button>
      </div>
    </article>
  `).join("");
}

function resetSearchAndFilters() {
  AppState.searchQuery = "";
  AppState.activeFilter = "All Movies";
  AppState.sortOption = "rating-desc";

  const searchInput = document.getElementById("mainSearchInput");
  if (searchInput) searchInput.value = "";
  const clearBtn = document.getElementById("mainSearchClear");
  if (clearBtn) clearBtn.classList.remove("active");

  const chips = document.querySelectorAll(".filter-chip-btn");
  chips.forEach(c => c.classList.toggle("active", c.getAttribute("data-filter") === "All Movies"));

  const sortSelect = document.getElementById("nowShowingSortSelect");
  if (sortSelect) sortSelect.value = "rating-desc";

  applyFiltersAndRenderNowShowing();
}

// ==========================================================================
// 7. COMING SOON SECTION
// ==========================================================================
function renderComingSoon() {
  const grid = document.getElementById("comingSoonGrid");
  if (!grid) return;

  grid.innerHTML = AppState.comingSoon.map(m => `
    <article class="movie-poster-card" onclick="openComingSoonDetails(${m.id})">
      <div class="card-img-box">
        <img src="${m.poster}" alt="${m.title} Poster" class="card-img" loading="lazy" onerror="handlePosterError(this, '${m.title}')">
        <div class="release-date-pill">📅 ${m.releaseDate}</div>
      </div>
      <div class="card-info-pane">
        <h4 class="card-movie-title" title="${m.title}">${m.title}</h4>
        <div class="card-movie-genre">${m.language} • ${m.genre}</div>
        <button class="card-btn-action" type="button" onclick="event.stopPropagation(); openComingSoonDetails(${m.id});">
          View Details
        </button>
      </div>
    </article>
  `).join("");
}

// ==========================================================================
// 8. MOVIE RATINGS & REVIEWS REPOSITORY
// ==========================================================================
const DEFAULT_MOVIE_REVIEWS = {
  1: [ // HanuMan
    { author: "Aditya V.", rating: 10, date: "2 days ago", comment: "Mind-blowing blend of Indian mythology and superhero genre. The climax sequence in theatre gave pure goosebumps! A must-watch on the big screen.", verified: true },
    { author: "Sneha Reddy", rating: 9, date: "4 days ago", comment: "Superb execution with great VFX and storytelling. Teja Sajja and Prasanth Varma delivered an extraordinary cinematic wonder.", verified: true },
    { author: "Rohan M.", rating: 10, date: "1 week ago", comment: "The background score and Hanuman Chalisa elevation was peak cinema! Outstanding work by the whole technical team.", verified: true }
  ],
  2: [ // The Paradise
    { author: "Sravan Kumar", rating: 10, date: "Yesterday", comment: "Natural Star Nani + Srikanth Odela combination will set the box office on fire! The teaser visuals look raw, gritty and fiercely intense.", verified: true },
    { author: "Pooja Sharma", rating: 9, date: "3 days ago", comment: "Most anticipated Telugu film of the year. Music by Anirudh is going to elevate this to an international level.", verified: true },
    { author: "Kiran R.", rating: 9, date: "5 days ago", comment: "Dasara proved what this director is capable of. High hopes for another masterpiece from Nani!", verified: true }
  ],
  3: [ // Kalki 2898 AD
    { author: "Vikram R.", rating: 9, date: "3 days ago", comment: "Nag Ashwin has crafted an epic sci-fi mythological marvel. Amitabh Bachchan as Ashwatthama steals every single frame!", verified: true },
    { author: "Meera K.", rating: 9, date: "5 days ago", comment: "World-class VFX and futuristic world building in Kasi. Prabhas and Kamal Haasan deliver power-packed roles.", verified: true }
  ],
  4: [ // Inception
    { author: "Karthik N.", rating: 10, date: "1 week ago", comment: "Nolan's ultimate masterpiece. The dream-within-a-dream concept and Hans Zimmer's score remain unmatched in cinema history.", verified: true },
    { author: "Ananya S.", rating: 9, date: "2 weeks ago", comment: "Mind-bending narrative with brilliant acting by Leonardo DiCaprio. A benchmark for modern science fiction.", verified: true }
  ],
  5: [ // Jawan
    { author: "Sameer Khan", rating: 8, date: "4 days ago", comment: "Shah Rukh Khan in top form! High-voltage action sequences and mass elevation scenes designed to perfection by Atlee.", verified: true },
    { author: "Priya D.", rating: 9, date: "1 week ago", comment: "Anirudh's background music and the double-role performance made it an absolute theatrical feast.", verified: true }
  ],
  6: [ // Leo
    { author: "Vijay Anand", rating: 9, date: "3 days ago", comment: "Thalapathy Vijay's intense performance and Lokesh's gripping direction kept me hooked from the first minute to the last.", verified: true },
    { author: "Dinesh K.", rating: 8, date: "6 days ago", comment: "The cafe fight sequence was world-class. Action lovers will thoroughly enjoy this film.", verified: true }
  ],
  7: [ // RRR
    { author: "Charan Tej", rating: 10, date: "1 week ago", comment: "Rajamouli's vision is unparalleled. Jr NTR and Ram Charan gave career-defining performances. Proud moment for Indian cinema!", verified: true },
    { author: "Harika G.", rating: 9, date: "2 weeks ago", comment: "Naatu Naatu, the interval fire-water block, and the climax are pure adrenaline rush!", verified: true }
  ],
  8: [ // The Dark Knight
    { author: "David P.", rating: 10, date: "5 days ago", comment: "Heath Ledger's Joker is arguably the greatest cinematic villain performance ever. Flawless superhero thriller.", verified: true },
    { author: "Siddharth T.", rating: 9, date: "1 week ago", comment: "Christopher Nolan redefined cinema with this gritty, realistic masterpiece.", verified: true }
  ]
};

function getMovieReviews(movieId) {
  let userReviews = [];
  try {
    const stored = localStorage.getItem(`movie_reviews_${movieId}`);
    if (stored) {
      userReviews = JSON.parse(stored);
    }
  } catch (e) {
    userReviews = [];
  }
  const defaultReviews = DEFAULT_MOVIE_REVIEWS[movieId] || [
    { author: "Rahul V.", rating: 9, date: "3 days ago", comment: "Outstanding storytelling and direction. Thoroughly engaging throughout with great pacing.", verified: true },
    { author: "Divya N.", rating: 8, date: "1 week ago", comment: "Loved the performances and technical brilliance. Well worth the cinema ticket!", verified: true }
  ];
  return [...userReviews, ...defaultReviews];
}

let activeReviewRating = 10;

function setReviewRating(rating) {
  activeReviewRating = rating;
  const stars = document.querySelectorAll(".star-rating-btn");
  stars.forEach((s, idx) => {
    s.classList.toggle("active", (idx + 1) * 2 <= rating);
  });
  const label = document.getElementById("ratingScoreLabel");
  if (label) {
    const desc = rating >= 9 ? "Masterpiece ⭐" : rating >= 7 ? "Very Good 👍" : rating >= 5 ? "Average 👌" : "Needs Improvement";
    label.textContent = `${rating} / 10 — ${desc}`;
  }
}

function handleReviewSubmit(movieId) {
  const nameInput = document.getElementById("reviewAuthorInput");
  const commentInput = document.getElementById("reviewCommentInput");

  let author = nameInput ? nameInput.value.trim() : "";
  const comment = commentInput ? commentInput.value.trim() : "";

  if (!author) {
    if (AppState.user && AppState.user.name) {
      author = AppState.user.name;
    } else {
      author = "Movie Explorer Fan";
    }
  }

  if (!comment || comment.length < 3) {
    showToast("Please write a short review before posting.");
    if (commentInput) commentInput.focus();
    return;
  }

  const newReview = {
    author: author,
    rating: activeReviewRating,
    date: "Just now",
    comment: comment,
    verified: Boolean(AppState.user)
  };

  try {
    const existing = JSON.parse(localStorage.getItem(`movie_reviews_${movieId}`) || "[]");
    existing.unshift(newReview);
    localStorage.setItem(`movie_reviews_${movieId}`, JSON.stringify(existing));
  } catch (e) {
    console.warn("Saving review failed:", e);
  }

  const movie = AppState.movies.find(m => m.id === movieId);
  showToast(`🎉 Review posted successfully for ${movie ? movie.title : 'movie'}!`);
  openMovieDetails(movieId);
}

// ==========================================================================
// 8B. MOVIE DETAILS MODAL WITH REVIEWS & RATINGS
// ==========================================================================
function openMovieDetails(movieId) {
  const movie = AppState.movies.find(m => m.id === movieId);
  if (!movie) return;

  const content = document.getElementById("movieDetailsBody");
  if (!content) return;

  const reviews = getMovieReviews(movie.id);
  activeReviewRating = 10; // Reset rating picker to 10

  content.innerHTML = `
    <div class="details-layout-grid">
      <div class="details-poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" onerror="handlePosterError(this, '${movie.title}')">
      </div>
      <div class="details-content-body">
        <h3 class="details-modal-title">${movie.title}</h3>
        <div class="details-badges-row">
          <span class="badge-lang-tag">${movie.language}</span>
          <span class="badge-genre-tag">${movie.genre}</span>
          <span class="badge-genre-tag">${movie.year}</span>
        </div>
        <div class="details-rating-banner">
          ⭐ <strong>${movie.rating.toFixed(1)} / 10</strong> Audience Score &bull; <strong>${reviews.length} Reviews</strong>
        </div>
        <p class="details-desc-p">
          <strong>Director:</strong> ${movie.director}<br>
          ${movie.description}
        </p>
        <div class="details-showtimes-box">
          <div class="details-showtimes-label">Available Shows in ${AppState.selectedCity}:</div>
          <div class="showtimes-chips-bar">
            ${SHOWTIMES_LIST.map(st => `<span class="showtime-badge-item">🕒 ${st}</span>`).join("")}
          </div>
        </div>
        <button class="btn-book-tickets-cta" type="button" onclick="closeModal('movieDetailsModal'); startBookingProcess(${movie.id});">
          🎟️ Book Tickets (${formatCurrency(movie.price)})
        </button>
      </div>
    </div>

    <!-- Ratings & Audience Reviews Section -->
    <div class="details-reviews-divider"></div>
    <div class="details-reviews-header">
      <div class="reviews-section-title">
        💬 Audience Ratings &amp; Reviews
      </div>
      <div class="reviews-summary-badge">
        ⭐ ${movie.rating.toFixed(1)} / 10 &bull; ${reviews.length} Verified Reviews
      </div>
    </div>

    <!-- Write a Review Box -->
    <div class="write-review-box">
      <div class="write-review-title">✍️ Rate &amp; Review this Movie</div>
      <div class="rating-stars-picker">
        <span style="font-size:0.85rem; font-weight:700; color:var(--text-body); margin-right:4px;">Your Rating:</span>
        <button type="button" class="star-rating-btn active" onclick="setReviewRating(2)" title="2/10">★</button>
        <button type="button" class="star-rating-btn active" onclick="setReviewRating(4)" title="4/10">★</button>
        <button type="button" class="star-rating-btn active" onclick="setReviewRating(6)" title="6/10">★</button>
        <button type="button" class="star-rating-btn active" onclick="setReviewRating(8)" title="8/10">★</button>
        <button type="button" class="star-rating-btn active" onclick="setReviewRating(10)" title="10/10">★</button>
        <span class="rating-score-label" id="ratingScoreLabel">10 / 10 — Masterpiece ⭐</span>
      </div>
      <div class="review-form-row">
        <input type="text" id="reviewAuthorInput" class="review-input-name" placeholder="Your Name" value="${AppState.user ? AppState.user.name : ''}">
      </div>
      <textarea id="reviewCommentInput" class="review-textarea" placeholder="Write your thoughts about the story, performances, music, or visuals..."></textarea>
      <button type="button" class="btn-submit-review" onclick="handleReviewSubmit(${movie.id})">
        Post Review
      </button>
    </div>

    <!-- Reviews Feed List -->
    <div class="reviews-feed-list">
      ${reviews.map(r => `
        <div class="review-item-card">
          <div class="review-item-header">
            <div class="reviewer-meta">
              <div class="reviewer-avatar-mini">${r.author.charAt(0).toUpperCase()}</div>
              <div>
                <span class="reviewer-name">${r.author}</span>
                ${r.verified ? `<span class="verified-buyer-tag">✓ Verified Viewer</span>` : ''}
              </div>
            </div>
            <div style="display:flex; align-items:center; gap:8px;">
              <span class="review-stars-pill">⭐ ${r.rating} / 10</span>
              <span class="review-date">${r.date}</span>
            </div>
          </div>
          <p class="review-comment-text">${r.comment}</p>
        </div>
      `).join("")}
    </div>
  `;

  openModal("movieDetailsModal");
}

function openComingSoonDetails(movieId) {
  const movie = AppState.comingSoon.find(m => m.id === movieId);
  if (!movie) return;

  const content = document.getElementById("movieDetailsBody");
  if (!content) return;

  content.innerHTML = `
    <div class="details-layout-grid">
      <div class="details-poster-wrap">
        <img src="${movie.poster}" alt="${movie.title}" onerror="handlePosterError(this, '${movie.title}')">
      </div>
      <div class="details-content-body">
        <h3 class="details-modal-title">${movie.title}</h3>
        <div class="details-badges-row">
          <span class="badge-lang-tag">${movie.language}</span>
          <span class="badge-genre-tag">${movie.genre}</span>
          <span class="badge-genre-tag">Expected ${movie.year}</span>
        </div>
        <div class="details-rating-banner" style="background:#eff6ff; border-color:#dbeafe; color:#1d4ed8;">
          📅 <strong>Release Date:</strong> ${movie.releaseDate}
        </div>
        <p class="details-desc-p">
          <strong>Director:</strong> ${movie.director}<br>
          ${movie.description}
        </p>
        <button class="btn-ticket-close" style="width:100%; margin-top:16px;" type="button" onclick="closeModal('movieDetailsModal')">
          Close Preview
        </button>
      </div>
    </div>
  `;

  openModal("movieDetailsModal");
}

// ==========================================================================
// 9. CINEMA & INTERACTIVE SEAT SELECTION FLOW
// ==========================================================================
function startBookingProcess(movieId) {
  const movie = AppState.movies.find(m => m.id === movieId) || AppState.movies[0];
  AppState.booking.movie = movie;
  AppState.booking.cinema = AppState.cinemas[0];
  AppState.booking.selectedSeats = [];
  
  const dates = getUpcomingDatesList();
  AppState.booking.date = dates[0];
  AppState.booking.showtime = SHOWTIMES_LIST[0];

  renderBookingModalView();
  openModal("bookingModal");
}

function renderBookingModalView() {
  const titleEl = document.getElementById("bookingMovieHeading");
  if (titleEl) {
    titleEl.textContent = `Book Tickets — ${AppState.booking.movie.title} (${AppState.booking.movie.language})`;
  }

  const bookingLabel = document.getElementById("bookingCinemaLabel");
  if (bookingLabel) {
    bookingLabel.textContent = `1. Select Cinema in ${AppState.selectedCity}`;
  }

  // 1. Cinema Selection Choices
  const cinemaBox = document.getElementById("bookingCinemaChoices");
  if (cinemaBox) {
    cinemaBox.innerHTML = AppState.cinemas.map(c => `
      <div class="cinema-card-choice ${c.id === AppState.booking.cinema.id ? 'active' : ''}" onclick="selectCinemaChoice('${c.id}')">
        <div class="cinema-choice-name">${c.name}</div>
        <div class="cinema-choice-loc">📍 ${c.location}</div>
      </div>
    `).join("");
  }

  // 2. Date Strip
  const dateStrip = document.getElementById("bookingDateStrip");
  const dates = getUpcomingDatesList();
  if (dateStrip) {
    dateStrip.innerHTML = dates.map((d, i) => `
      <button class="date-pill-btn ${AppState.booking.date && AppState.booking.date.dateNum === d.dateNum ? 'active' : ''}" onclick="selectDatePill(${i})">
        <div class="date-pill-day">${d.dayLabel}</div>
        <div class="date-pill-num">${d.dateNum}</div>
      </button>
    `).join("");
  }

  // 3. Showtimes Chips
  const showtimeBox = document.getElementById("bookingShowtimeChoices");
  if (showtimeBox) {
    showtimeBox.innerHTML = SHOWTIMES_LIST.map(st => `
      <button class="showtime-btn-chip ${st === AppState.booking.showtime ? 'active' : ''}" onclick="selectShowtimeChip('${st}')">
        ${st}
      </button>
    `).join("");
  }

  // 4. Render Theatre Seat Matrix
  renderTheatreSeatMatrix();

  // 5. Update Running Summary
  updateBookingRunningSummary();
}

function selectCinemaChoice(cinemaId) {
  AppState.booking.cinema = AppState.cinemas.find(c => c.id === cinemaId) || AppState.cinemas[0];
  AppState.booking.selectedSeats = [];
  renderBookingModalView();
  showToast(`Cinema changed to: ${AppState.booking.cinema.name}`);
}

function selectDatePill(index) {
  const dates = getUpcomingDatesList();
  AppState.booking.date = dates[index];
  AppState.booking.selectedSeats = [];
  renderBookingModalView();
}

function selectShowtimeChip(st) {
  AppState.booking.showtime = st;
  AppState.booking.selectedSeats = [];
  renderBookingModalView();
}

/**
 * Seating Layout:
 * - Regular Section (Rows A, B, C) — ₹200
 * - Premium Section (Rows D, E — at the LAST) — ₹300
 */
function renderTheatreSeatMatrix() {
  const container = document.getElementById("theatreSeatMatrix");
  if (!container) return;

  // Deterministic unavailable seats for realism
  const unavailable = ["A2", "A7", "B4", "C3", "C8", "D1", "E6"];
  const currentSelectedCodes = AppState.booking.selectedSeats.map(s => s.id);

  const tiers = [
    { title: "REGULAR SECTION (Rows A, B, C)", price: 200, rows: ["A", "B", "C"], tierName: "Regular" },
    { title: "PREMIUM SECTION (Rows D, E — Recliner / Balcony)", price: 300, rows: ["D", "E"], tierName: "Premium" }
  ];

  container.innerHTML = tiers.map(t => `
    <div class="seat-tier-category">
      <div class="seat-tier-title-bar">
        <span>${t.title}</span>
        <span>${formatCurrency(t.price)} / SEAT</span>
      </div>
      ${t.rows.map(rowLetter => `
        <div class="seat-row-line">
          <span class="row-label">${rowLetter}</span>
          <div class="seat-group-split">
            ${[1, 2, 3, 4].map(num => renderSingleSeatUnit(rowLetter, num, t.tierName, t.price, unavailable, currentSelectedCodes)).join("")}
          </div>
          <div class="seat-center-aisle"></div>
          <div class="seat-group-split">
            ${[5, 6, 7, 8].map(num => renderSingleSeatUnit(rowLetter, num, t.tierName, t.price, unavailable, currentSelectedCodes)).join("")}
          </div>
          <span class="row-label">${rowLetter}</span>
        </div>
      `).join("")}
    </div>
  `).join("");
}

function renderSingleSeatUnit(row, num, tierName, price, unavailable, selectedCodes) {
  const seatId = `${row}${num}`;
  const isUnavail = unavailable.includes(seatId);
  const isSelected = selectedCodes.includes(seatId);

  return `
    <button 
      class="seat-unit-btn ${isUnavail ? 'unavailable' : ''} ${isSelected ? 'selected' : ''}"
      ${isUnavail ? 'disabled aria-disabled="true"' : ''}
      title="${isUnavail ? 'Unavailable' : `Seat ${seatId} (${tierName} - ${formatCurrency(price)})`}"
      onclick="toggleSeatSelection('${row}', ${num}, '${tierName}', ${price})">
      ${num}
    </button>
  `;
}

function toggleSeatSelection(row, num, tierName, price) {
  const seatId = `${row}${num}`;
  const existingIndex = AppState.booking.selectedSeats.findIndex(s => s.id === seatId);

  if (existingIndex >= 0) {
    // Deselect
    AppState.booking.selectedSeats.splice(existingIndex, 1);
  } else {
    // Limit to 6 seats per transaction
    if (AppState.booking.selectedSeats.length >= 6) {
      showToast("Maximum 6 seats allowed per booking transaction.");
      return;
    }
    AppState.booking.selectedSeats.push({ id: seatId, row, num, tier: tierName, price });
  }

  renderTheatreSeatMatrix();
  updateBookingRunningSummary();
}

function updateBookingRunningSummary() {
  const seats = AppState.booking.selectedSeats;
  const seatsListDisplay = document.getElementById("summarySeatsList");
  const countDisplay = document.getElementById("summaryTicketsCount");
  const totalDisplay = document.getElementById("summaryTotalAmount");
  const continueBtn = document.getElementById("btnProceedConfirmation");

  const subtotal = seats.reduce((sum, s) => sum + s.price, 0);
  const convenienceFee = seats.length > 0 ? 30 : 0;
  const grandTotal = subtotal + convenienceFee;

  if (seatsListDisplay) {
    seatsListDisplay.textContent = seats.length > 0 ? seats.map(s => s.id).sort().join(", ") : "None";
  }
  if (countDisplay) {
    countDisplay.textContent = `${seats.length} Seat${seats.length === 1 ? '' : 's'}`;
  }
  if (totalDisplay) {
    totalDisplay.textContent = formatCurrency(grandTotal);
  }
  if (continueBtn) {
    continueBtn.disabled = seats.length === 0;
  }
}

// ==========================================================================
// 10. BOOKING CONFIRMATION & SIMULATED TICKET
// ==========================================================================
function finalizeBookingConfirmation() {
  const seats = AppState.booking.selectedSeats;
  if (seats.length === 0) return;

  const subtotal = seats.reduce((sum, s) => sum + s.price, 0);
  const total = subtotal + 30; // ₹30 fee
  const refCode = generateDemoRef();

  const ticketContent = document.getElementById("ticketDetailsContent");
  if (ticketContent) {
    ticketContent.innerHTML = `
      <div class="ticket-container-card">
        <div class="ticket-header-band">
          <div class="ticket-status-pill">✓ BOOKING CONFIRMED</div>
          <div class="ticket-ref-code">${refCode}</div>
        </div>
        <div class="ticket-content-body">
          <h3 class="ticket-movie-title">${AppState.booking.movie.title}</h3>
          <div class="ticket-info-grid">
            <div>
              <div class="ticket-label">Cinema Location</div>
              <div class="ticket-val">${AppState.booking.cinema.name}</div>
            </div>
            <div>
              <div class="ticket-label">Date & Time</div>
              <div class="ticket-val">${AppState.booking.date.fullFormat} | ${AppState.booking.showtime}</div>
            </div>
            <div>
              <div class="ticket-label">Seats (${seats.length})</div>
              <div class="ticket-val" style="color:var(--primary-brand); font-weight:800;">${seats.map(s => s.id).sort().join(", ")}</div>
            </div>
            <div>
              <div class="ticket-label">Total Amount</div>
              <div class="ticket-val" style="font-weight:900;">${formatCurrency(total)}</div>
            </div>
            ${AppState.user ? `
            <div style="grid-column: 1 / -1; background: #f8fafc; padding: 10px 14px; border-radius: 8px; border: 1px dashed var(--border-medium); margin-top: 4px;">
              <div class="ticket-label" style="margin-bottom: 2px;">Guest / Booker Details</div>
              <div class="ticket-val" style="color:var(--text-main); font-weight:700; font-size:0.88rem;">👤 ${AppState.user.name} &bull; <span style="color:var(--text-muted); font-weight:500;">${AppState.user.email}</span> &bull; <span style="color:var(--primary-brand); font-weight:700;">${AppState.user.phone || ''}</span></div>
            </div>` : ''}
          </div>
          <div class="ticket-perforation-divider"></div>
          <div class="ticket-barcode-box">
            <div class="barcode-simulated"></div>
            <small style="color:#64748b; font-size:0.72rem; letter-spacing:1px;">${refCode} • SCAN FOR ENTRY</small>
          </div>
          <div class="ticket-actions-row">
            <button class="btn-ticket-print" type="button" onclick="window.print()">
              🖨️ Print Ticket
            </button>
            <button class="btn-ticket-close" type="button" onclick="closeModal('ticketConfirmationModal')">
              Done
            </button>
          </div>
        </div>
      </div>
    `;
  }

  closeModal("bookingModal");
  openModal("ticketConfirmationModal");
  showToast("🎉 Booking Confirmed Successfully!");
}

// ==========================================================================
// 11. BROWSE BY CINEMAS DEMO PANEL
// ==========================================================================
function openBrowseCinemasModal() {
  const content = document.getElementById("cinemasListContent");
  const title = document.getElementById("browseCinemasTitle");
  if (title) {
    title.textContent = `Cinemas in ${AppState.selectedCity}`;
  }
  if (!content) return;

  const cityCinemas = AppState.cinemas;
  content.innerHTML = `
    <div style="display:flex; flex-direction:column; gap:14px; max-height:60vh; overflow-y:auto; padding-right:4px;">
      <p style="color:var(--text-muted); font-size:0.88rem;">
        Showing <strong>${cityCinemas.length} partner theatres</strong> in <strong>${AppState.selectedCity}</strong>:
      </p>
      ${cityCinemas.map((c, i) => `
        <div style="background:#f8fafc; border:1px solid var(--border-light); border-radius:8px; padding:14px 16px;">
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:4px;">
            <h4 style="font-size:1rem; font-weight:700; color:var(--text-main);">${i + 1}. ${c.name}</h4>
            <span style="font-size:0.75rem; background:#ecfdf5; color:#059669; font-weight:700; padding:2px 8px; border-radius:12px;">Active</span>
          </div>
          <p style="font-size:0.82rem; color:var(--text-muted); margin-bottom:10px;">📍 ${c.location}</p>
          <div style="display:flex; gap:6px; flex-wrap:wrap;">
            ${SHOWTIMES_LIST.map(st => `
              <button class="showtime-btn-chip" type="button" onclick="closeModal('browseCinemasModal'); startBookingProcess(1);">
                ${st}
              </button>
            `).join("")}
          </div>
        </div>
      `).join("")}
    </div>
  `;

  openModal("browseCinemasModal");
}

// ==========================================================================
// 12. MODAL CONTROLS & EVENT LISTENERS
// ==========================================================================
function openModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.classList.remove("active");
  if (!document.querySelector(".modal-overlay.active")) {
    document.body.style.overflow = "";
  }
}

function setupModalListeners() {
  // Click outside backdrop to dismiss
  document.querySelectorAll(".modal-overlay").forEach(overlay => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        closeModal(overlay.id);
      }
    });
  });

  // ESC key listener
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const active = document.querySelector(".modal-overlay.active");
      if (active) closeModal(active.id);
    }
  });

  // Nonfunctional categories demo feedback
  document.querySelectorAll(".demo-category-link").forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const cat = link.getAttribute("data-cat");
      showToast(`${cat} booking is a demo category. Only Movies is currently active.`);
    });
  });
}

// ==========================================================================
// 12. PHONE NUMBER OTP AUTHENTICATION SERVICE & LOGIC
// ==========================================================================
/**
 * OtpAuthService:
 * Modular authentication service designed for test/demo mode today and easily
 * swappable for real SMS OTP providers (Supabase Auth, Firebase Auth, Twilio)
 * in production.
 */
const OtpAuthService = {
  activeSession: null,
  countdownTimer: null,
  countdownSeconds: 30,

  /**
   * Generates a 6-digit sample OTP for phone verification.
   * For production, replace this body with an API call:
   * e.g. await supabase.auth.signInWithOtp({ phone: fullPhoneNumber })
   */
  async requestOtp(fullName, email, countryCode, phone) {
    const rawOtp = Math.floor(100000 + Math.random() * 900000).toString();
    this.activeSession = {
      name: fullName.trim(),
      email: email.trim().toLowerCase(),
      countryCode: countryCode,
      phoneNumber: phone.trim(),
      fullPhone: `${countryCode} ${phone.trim()}`,
      demoOtp: rawOtp,
      createdAt: Date.now()
    };
    return {
      success: true,
      message: "Your OTP has been generated successfully. Please verify your phone number.",
      demoOtp: rawOtp,
      targetPhone: this.activeSession.fullPhone
    };
  },

  /**
   * Verifies the user entered OTP against the active session.
   * In production, replace with:
   * e.g. await supabase.auth.verifyOtp({ phone: ..., token: ..., type: 'sms' })
   */
  async verifyOtp(enteredOtp) {
    if (!this.activeSession) {
      return { success: false, message: "Session expired. Please request a new OTP." };
    }
    const cleanEntered = (enteredOtp || "").toString().trim();
    if (cleanEntered === this.activeSession.demoOtp) {
      const user = {
        name: this.activeSession.name,
        email: this.activeSession.email,
        phone: this.activeSession.fullPhone,
        signedInAt: new Date().toISOString(),
        authMethod: "phone_otp_sample"
      };
      this.clearSession();
      return { success: true, user: user };
    } else {
      return { success: false, message: "Invalid OTP. Please try again." };
    }
  },

  clearSession() {
    this.activeSession = null;
    if (this.countdownTimer) {
      clearInterval(this.countdownTimer);
      this.countdownTimer = null;
    }
  }
};

function initAuth() {
  try {
    const saved = localStorage.getItem("movieExplorerUser");
    if (saved) {
      AppState.user = JSON.parse(saved);
    }
  } catch (err) {
    AppState.user = null;
  }
  renderAuthNav();
  setupOtpInputHandlers();
}

function getInitials(name) {
  if (!name) return "U";
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].charAt(0).toUpperCase();
  return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase();
}

function renderAuthNav() {
  const container = document.getElementById("authNavWrapper");
  if (!container) return;

  if (AppState.user && AppState.user.name && AppState.user.email) {
    const initials = getInitials(AppState.user.name);
    const shortName = AppState.user.name.trim().split(/\s+/)[0];
    container.innerHTML = `
      <button type="button" class="user-nav-btn" onclick="openUserProfileModal()" title="View Account (${AppState.user.email})">
        <span class="user-avatar-badge">${initials}</span>
        <span class="user-name-text">${shortName}</span>
      </button>
    `;
  } else {
    container.innerHTML = `
      <button type="button" class="btn-signin-demo" id="demoSignInBtn" onclick="openSignInModal()">
        Sign In
      </button>
    `;
  }
}

function openSignInModal() {
  if (AppState.user) {
    openUserProfileModal();
    return;
  }

  // Reset steps to Step 1
  returnToDetailsStep();

  // Clear inputs and errors
  const nameInput = document.getElementById("signInNameInput");
  const emailInput = document.getElementById("signInEmailInput");
  const phoneInput = document.getElementById("signInPhoneInput");
  const nameError = document.getElementById("signInNameError");
  const emailError = document.getElementById("signInEmailError");
  const phoneError = document.getElementById("signInPhoneError");
  const generalError = document.getElementById("signInGeneralError");
  const otpVerifyError = document.getElementById("otpVerifyError");

  if (nameInput) {
    nameInput.value = "";
    nameInput.classList.remove("input-error");
  }
  if (emailInput) {
    emailInput.value = "";
    emailInput.classList.remove("input-error");
  }
  if (phoneInput) {
    phoneInput.value = "";
    phoneInput.classList.remove("input-error");
  }
  if (nameError) nameError.classList.remove("show");
  if (emailError) emailError.classList.remove("show");
  if (phoneError) phoneError.classList.remove("show");
  if (generalError) {
    generalError.textContent = "";
    generalError.classList.remove("show");
  }
  if (otpVerifyError) {
    otpVerifyError.textContent = "";
    otpVerifyError.classList.remove("show");
  }

  clearOtpDigitBoxes();
  openModal("signInModal");

  setTimeout(() => {
    if (nameInput) nameInput.focus();
  }, 100);
}

function returnToDetailsStep() {
  const step1 = document.getElementById("authStepDetails");
  const step2 = document.getElementById("authStepOtp");
  if (step1) step1.style.display = "block";
  if (step2) step2.style.display = "none";
  if (OtpAuthService.countdownTimer) {
    clearInterval(OtpAuthService.countdownTimer);
    OtpAuthService.countdownTimer = null;
  }
}

async function handleSendOtp(e) {
  if (e) e.preventDefault();

  const nameInput = document.getElementById("signInNameInput");
  const emailInput = document.getElementById("signInEmailInput");
  const countryCodeSelect = document.getElementById("signInCountryCode");
  const phoneInput = document.getElementById("signInPhoneInput");
  const nameError = document.getElementById("signInNameError");
  const emailError = document.getElementById("signInEmailError");
  const phoneError = document.getElementById("signInPhoneError");
  const generalError = document.getElementById("signInGeneralError");

  const name = nameInput ? nameInput.value.trim() : "";
  const email = emailInput ? emailInput.value.trim() : "";
  const countryCode = countryCodeSelect ? countryCodeSelect.value : "+91";
  const rawPhone = phoneInput ? phoneInput.value.trim().replace(/[\s-]/g, "") : "";

  let isValid = true;

  // 1. Validate Name (minimum 2 letters)
  if (!name || name.length < 2) {
    if (nameInput) nameInput.classList.add("input-error");
    if (nameError) nameError.classList.add("show");
    isValid = false;
  } else {
    if (nameInput) nameInput.classList.remove("input-error");
    if (nameError) nameError.classList.remove("show");
  }

  // 2. Validate Email Address
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    if (emailInput) emailInput.classList.add("input-error");
    if (emailError) emailError.classList.add("show");
    isValid = false;
  } else {
    if (emailInput) emailInput.classList.remove("input-error");
    if (emailError) emailError.classList.remove("show");
  }

  // 3. Validate Phone Number (must be 7-14 digits, typically 10 for India)
  const phoneDigitsPattern = /^\d{7,14}$/;
  if (!rawPhone || !phoneDigitsPattern.test(rawPhone)) {
    if (phoneInput) phoneInput.classList.add("input-error");
    if (phoneError) phoneError.classList.add("show");
    isValid = false;
  } else {
    if (phoneInput) phoneInput.classList.remove("input-error");
    if (phoneError) phoneError.classList.remove("show");
  }

  if (!isValid) return;

  const sendBtn = document.getElementById("sendOtpSubmitBtn");
  if (sendBtn) {
    sendBtn.disabled = true;
    sendBtn.textContent = "Generating OTP...";
  }

  try {
    const res = await OtpAuthService.requestOtp(name, email, countryCode, rawPhone);

    // Switch to Step 2: OTP Verification
    const step1 = document.getElementById("authStepDetails");
    const step2 = document.getElementById("authStepOtp");
    const displayPhoneEl = document.getElementById("otpDisplayPhone");
    const demoOtpValEl = document.getElementById("demoOtpCodeDisplay");
    const otpVerifyError = document.getElementById("otpVerifyError");

    if (step1) step1.style.display = "none";
    if (step2) step2.style.display = "block";
    if (displayPhoneEl) displayPhoneEl.textContent = res.targetPhone;
    if (demoOtpValEl) demoOtpValEl.textContent = res.demoOtp;
    if (otpVerifyError) {
      otpVerifyError.textContent = "";
      otpVerifyError.classList.remove("show");
    }

    clearOtpDigitBoxes();
    startResendCountdown(30);

    // Auto focus the first OTP digit box
    setTimeout(() => {
      const firstBox = document.querySelector(".otp-digit-box[data-idx='0']");
      if (firstBox) firstBox.focus();
    }, 150);

  } catch (err) {
    if (generalError) {
      generalError.textContent = "Failed to generate OTP. Please try again.";
      generalError.classList.add("show");
    }
  } finally {
    if (sendBtn) {
      sendBtn.disabled = false;
      sendBtn.textContent = "Send OTP";
    }
  }
}

function clearOtpDigitBoxes() {
  const boxes = document.querySelectorAll(".otp-digit-box");
  boxes.forEach(box => {
    box.value = "";
    box.classList.remove("input-error", "filled");
  });
}

function getEnteredOtp() {
  const boxes = document.querySelectorAll(".otp-digit-box");
  let code = "";
  boxes.forEach(box => {
    code += box.value.trim();
  });
  return code;
}

function autofillDemoOtp() {
  if (!OtpAuthService.activeSession || !OtpAuthService.activeSession.demoOtp) return;
  const demoOtp = OtpAuthService.activeSession.demoOtp;
  const boxes = document.querySelectorAll(".otp-digit-box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].value = demoOtp[i] || "";
    boxes[i].classList.add("filled");
    boxes[i].classList.remove("input-error");
  }
  const lastBox = boxes[boxes.length - 1];
  if (lastBox) lastBox.focus();

  // Clear any existing error message
  const otpVerifyError = document.getElementById("otpVerifyError");
  if (otpVerifyError) {
    otpVerifyError.textContent = "";
    otpVerifyError.classList.remove("show");
  }
}

function setupOtpInputHandlers() {
  const boxesGroup = document.getElementById("otpBoxesGroup");
  if (!boxesGroup) return;

  const boxes = Array.from(boxesGroup.querySelectorAll(".otp-digit-box"));

  boxes.forEach((box, idx) => {
    // Focus & click: select content so user can immediately type/replace
    box.addEventListener("focus", () => box.select());
    box.addEventListener("click", () => box.select());

    // Handle typing and auto-advancing
    box.addEventListener("input", (e) => {
      const val = e.target.value.replace(/\D/g, "");
      e.target.value = val ? val.charAt(val.length - 1) : "";

      if (e.target.value) {
        e.target.classList.add("filled");
        e.target.classList.remove("input-error");
        // Move to next box if available
        if (idx < boxes.length - 1) {
          boxes[idx + 1].focus();
          boxes[idx + 1].select();
        }
      } else {
        e.target.classList.remove("filled");
      }

      // Check if all 6 digits entered; optionally auto-verify or clear error
      const otpVerifyError = document.getElementById("otpVerifyError");
      if (otpVerifyError) otpVerifyError.classList.remove("show");
    });

    // Handle Backspace, Arrow keys, Delete
    box.addEventListener("keydown", (e) => {
      if (e.key === "Backspace") {
        if (!e.target.value && idx > 0) {
          boxes[idx - 1].focus();
          boxes[idx - 1].select();
        }
      } else if (e.key === "ArrowLeft" && idx > 0) {
        boxes[idx - 1].focus();
        boxes[idx - 1].select();
      } else if (e.key === "ArrowRight" && idx < boxes.length - 1) {
        boxes[idx + 1].focus();
        boxes[idx + 1].select();
      } else if (e.key === "Enter") {
        handleVerifyOtp();
      }
    });

    // Handle Paste (e.g. user pastes 6 digits)
    box.addEventListener("paste", (e) => {
      e.preventDefault();
      const pasted = (e.clipboardData || window.clipboardData).getData("text");
      const digits = pasted.replace(/\D/g, "").slice(0, 6);
      if (digits) {
        for (let i = 0; i < boxes.length; i++) {
          if (digits[i]) {
            boxes[i].value = digits[i];
            boxes[i].classList.add("filled");
            boxes[i].classList.remove("input-error");
          }
        }
        const focusIdx = Math.min(digits.length, boxes.length) - 1;
        if (boxes[focusIdx]) boxes[focusIdx].focus();
      }
    });
  });

  // Also enforce digit-only input on the phone number box
  const phoneInput = document.getElementById("signInPhoneInput");
  if (phoneInput) {
    phoneInput.addEventListener("input", (e) => {
      e.target.value = e.target.value.replace(/\D/g, "");
      const phoneError = document.getElementById("signInPhoneError");
      if (phoneError) phoneError.classList.remove("show");
      phoneInput.classList.remove("input-error");
    });
  }
}

async function handleVerifyOtp() {
  const enteredOtp = getEnteredOtp();
  const otpVerifyError = document.getElementById("otpVerifyError");
  const boxes = document.querySelectorAll(".otp-digit-box");
  const verifyBtn = document.getElementById("verifyOtpBtn");

  if (!enteredOtp || enteredOtp.length < 6) {
    if (otpVerifyError) {
      otpVerifyError.textContent = "Please enter all 6 digits of the OTP.";
      otpVerifyError.classList.add("show");
    }
    boxes.forEach(b => {
      if (!b.value) b.classList.add("input-error");
    });
    return;
  }

  if (verifyBtn) {
    verifyBtn.disabled = true;
    verifyBtn.textContent = "Verifying...";
  }

  try {
    const result = await OtpAuthService.verifyOtp(enteredOtp);

    if (result.success) {
      AppState.user = result.user;
      try {
        localStorage.setItem("movieExplorerUser", JSON.stringify(AppState.user));
      } catch (err) {
        console.warn("localStorage save failed:", err);
      }

      renderAuthNav();
      closeModal("signInModal");
      showToast(`Welcome, ${AppState.user.name}! Phone verified successfully.`);
    } else {
      // Invalid OTP handling
      if (otpVerifyError) {
        otpVerifyError.textContent = result.message || "Invalid OTP. Please try again.";
        otpVerifyError.classList.add("show");
      }
      boxes.forEach(b => b.classList.add("input-error"));
    }
  } catch (err) {
    if (otpVerifyError) {
      otpVerifyError.textContent = "Verification failed. Please try again.";
      otpVerifyError.classList.add("show");
    }
  } finally {
    if (verifyBtn) {
      verifyBtn.disabled = false;
      verifyBtn.textContent = "Verify OTP";
    }
  }
}

function startResendCountdown(seconds) {
  const btn = document.getElementById("btnResendOtp");
  if (!btn) return;

  if (OtpAuthService.countdownTimer) {
    clearInterval(OtpAuthService.countdownTimer);
  }

  let timeLeft = seconds;
  btn.disabled = true;
  btn.textContent = `Resend OTP (${timeLeft}s)`;

  OtpAuthService.countdownTimer = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      clearInterval(OtpAuthService.countdownTimer);
      OtpAuthService.countdownTimer = null;
      btn.disabled = false;
      btn.textContent = "Resend OTP";
    } else {
      btn.textContent = `Resend OTP (${timeLeft}s)`;
    }
  }, 1000);
}

async function handleResendOtp() {
  if (!OtpAuthService.activeSession) {
    showToast("Session expired. Please re-enter your details.");
    returnToDetailsStep();
    return;
  }

  const { name, email, countryCode, phoneNumber } = OtpAuthService.activeSession;
  const res = await OtpAuthService.requestOtp(name, email, countryCode, phoneNumber);

  const demoOtpValEl = document.getElementById("demoOtpCodeDisplay");
  if (demoOtpValEl) demoOtpValEl.textContent = res.demoOtp;

  const otpVerifyError = document.getElementById("otpVerifyError");
  if (otpVerifyError) {
    otpVerifyError.textContent = "";
    otpVerifyError.classList.remove("show");
  }

  clearOtpDigitBoxes();
  startResendCountdown(30);

  const firstBox = document.querySelector(".otp-digit-box[data-idx='0']");
  if (firstBox) firstBox.focus();

  showToast("A new Demo OTP has been generated!");
}

function openUserProfileModal() {
  if (!AppState.user) {
    openSignInModal();
    return;
  }

  const nameEl = document.getElementById("profileModalName");
  const emailEl = document.getElementById("profileModalEmail");
  const phoneEl = document.getElementById("profileModalPhone");
  const cityEl = document.getElementById("profileModalCity");
  const avatarEl = document.getElementById("profileModalAvatar");

  if (nameEl) nameEl.textContent = AppState.user.name;
  if (emailEl) emailEl.textContent = AppState.user.email;
  if (phoneEl) phoneEl.textContent = AppState.user.phone || "Not linked";
  if (cityEl) cityEl.textContent = AppState.selectedCity || "Visakhapatnam";
  if (avatarEl) avatarEl.textContent = getInitials(AppState.user.name);

  openModal("userProfileModal");
}

function handleSignOut() {
  AppState.user = null;
  OtpAuthService.clearSession();
  try {
    localStorage.removeItem("movieExplorerUser");
  } catch (err) {
    console.warn("localStorage remove failed:", err);
  }
  renderAuthNav();
  closeModal("userProfileModal");
  showToast("You have been signed out.");
}

function openIntroModal() {
  openModal("introSlideModal");
}

function closeIntroModal() {
  closeModal("introSlideModal");
}

// ==========================================================================
// 13. DOM CONTENT LOADED INITIALIZATION
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
  initAuth();
  initHeroBanner();
  renderRecommendedCarousel();
  setupFilterListeners();
  applyFiltersAndRenderNowShowing();
  renderComingSoon();
  setupModalListeners();

  // Show the Academic Introduction slide on opening the website
  setTimeout(() => {
    openIntroModal();
  }, 450);
});