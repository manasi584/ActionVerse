import { MapPin, Video, HandCoins, Users, Star, Music } from "lucide-react";

import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";
import user4 from "/user4.jpg";
import user5 from "/user5.jpg";
import user6 from "/user6.jpg";



export const testimonials = [
  {
    user: "Aarav Mehta",
    company: "Street Dancer",
    image: user1,
    text: "Artfluence helped me land gigs I never imagined! I went from performing at signals to getting hired for big events. Life-changing!",
  },
  {
    user: "Simran Kaur",
    company: "Graffiti Artist",
    image: user2,
    text: "This platform gave me exposure and a fan base. Now I get commissions for my street art from local businesses!",
  },
  {
    user: "Rahul Verma",
    company: "Beatboxer",
    image: user3,
    text: "Thanks to Artfluence, I can showcase my talent and earn through live tipping! More power to the hustlers out there.",
  },
  {
    user: "Neha Sharma",
    company: "Folk Singer",
    image: user4,
    text: "The crowdfunding feature helped me get my first professional mic! Artfluence truly empowers grassroots artists.",
  },
  {
    user: "Manoj Gupta",
    company: "Street Magician",
    image: user5,
    text: "I used to perform on the streets without much recognition. Now, I get online gigs and even teach magic workshops!",
  },
  {
    user: "Sofia Ali",
    company: "Poet & Storyteller",
    image: user6,
    text: "Artfluence turned my passion into a profession. Performing live and getting tipped online keeps me going!",
  },
];

export const features = [
  {
    icon: <MapPin />,
    text: "Geo-Tagged Talent Map",
    description:
      "Discover artists near you! View street performers, dancers, painters, and more on an interactive talent map.",
  },
  {
    icon: <Video />,
    text: "Live Streaming & Tipping",
    description:
      "Watch street performers go live and support them instantly via UPI tips.",
  },
  {
    icon: <HandCoins />,
    text: "Street Hustle Crowdfunding",
    description:
      "Help young artists raise funds for essentials like instruments, paints, or training.",
  },
  {
    icon: <Users />,
    text: "Artist Communities",
    description:
      "Join niche communities for networking, collaborations, and learning opportunities.",
  },
  {
    icon: <Star />,
    text: "Talent Spotlight",
    description:
      "The best talents get featured, boosting their visibility and chances of landing gigs.",
  },
  {
    icon: <Music />,
    text: "Gig Bookings",
    description:
      "Businesses and individuals can hire artists for performances, mural painting, or music gigs directly from the platform.",
  },
];

export const checklistItems = [
  {
    title: "Easy Gig Booking",
    description:
      "Businesses can find and book talented individuals in just a few clicks.",
  },
  {
    title: "Instant Online Tipping",
    description:
      "Support your favorite street artist through UPI-based tipping while they perform live.",
  },
  {
    title: "Talent Discovery",
    description:
      "Artists get geo-tagged so people nearby can discover and support them.",
  },
  {
    title: "Financial Freedom for Artists",
    description:
      "Performers can raise money via crowdfunding campaigns for essential tools or training.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "Rs 0",
    features: [
      "Create a Profile & Showcase Work",
      "Live Streaming Access",
      "Get Tipped Online",
      "Join Artist Communities",
    ],
  },
  {
    title: "Pro",
    price: "Rs 10",
    features: [
      "Premium Profile Listing",
      "Priority Gig Bookings",
      "Advanced Analytics",
      "Higher Visibility on Talent Map",
    ],
  },
  {
    title: "Enterprise",
    price: "Rs 50",
    features: [
      "Corporate & Business Listings",
      "Direct Hiring of Artists",
      "Custom Talent Requests",
      "Sponsored Talent Promotions",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "How It Works" },
  { href: "#", text: "Success Stories" },
  { href: "#", text: "Community Guidelines" },
  { href: "#", text: "Help & Support" },
];

export const platformLinks = [
  { href: "#", text: "Explore Talent" },
  { href: "#", text: "Book a Gig" },
  { href: "#", text: "Live Performances" },
  { href: "#", text: "Crowdfunding Campaigns" },
];

export const communityLinks = [
  { href: "#", text: "Artist Meetups" },
  { href: "#", text: "Workshops & Training" },
  { href: "#", text: "Collaboration Hub" },
  { href: "#", text: "Talent Spotlight" },
  { href: "#", text: "Hire an Artist" },
]; 

export const visualArtworks = [
    {
      id: 1,
      artist: "Ravi Verma",
      profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
      image: "https://cdn11.bigcommerce.com/s-x49po/images/stencil/1500x1500/products/87735/251479/handmade%2Fdownscaled%2Fh_fg12dw13pcv_2000x2000__77522.1734984187.jpg?c=2",
      description: "A beautiful Indian traditional painting.",
    },
    {
      id: 2,
      artist: "Aisha Kapoor",
      profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3RmDkiAyoth-ojPZzs4AP-yD3QmQC-TJAaw&s",
      description: "Abstract art that speaks to the soul.",
    },
    {
      id: 3,
      artist: "Arjun Sharma",
      profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
      image: "https://thumbs.dreamstime.com/b/kitten-beach-hyper-detailed-pencil-drawing-tropical-landscape-style-black-white-pristine-sandy-family-291030252.jpg",
      description: "Minimalist black and white sketch.",
    },
    {
      id: 4,
      artist: "Meera Singh",
      profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
      image: "https://images.adsttc.com/media/images/5980/996c/b22e/38b2/5600/0472/newsletter/9_Colours_of_the_soul_by_SENKOE_by_AN.jpg?1501600105",
      description: "A vibrant street mural capturing Indian culture.",
    },
    {
      id: 5,
      artist: "Vikram Das",
      profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
      image: "https://www.iordanoff.com/images/abstract-art-iordanoff-0284.jpg",
      description: "A contemporary abstract masterpiece.",
    },
    {
      id: 6,
      artist: "Priya Nair",
      profilePic: "https://randomuser.me/api/portraits/women/48.jpg",
      image: "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8",
      description: "A digital artwork inspired by Indian mythology.",
    },
    {
      id: 7,
      artist: "Kabir Malhotra",
      profilePic: "https://randomuser.me/api/portraits/men/40.jpg",
      image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
      description: "A surrealistic piece showing nature’s beauty.",
    },
    {
      id: 8,
      artist: "Ananya Joshi",
      profilePic: "https://randomuser.me/api/portraits/women/52.jpg",
      image: "https://i.ytimg.com/vi/pbFgSA1FewM/maxresdefault.jpg",
      description: "A delicate watercolor painting of Indian festivals.",
    },
    {
      id: 9,
      artist: "Rajesh Iyer",
      profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
      image: "https://creator.nightcafe.studio/jobs/P1xHhxjas1EiYsUYhO1g/P1xHhxjas1EiYsUYhO1g--1--59dua.jpg",
      description: "A bold and dynamic oil painting.",
    },
    {
      id: 10,
      artist: "Sanya Patel",
      profilePic: "https://randomuser.me/api/portraits/women/39.jpg",
      image: "https://i.pinimg.com/736x/19/17/c8/1917c82cacea020fe7e90de26320442d.jpg",
      description: "An emotional portrait of Indian rural life.",
    },
    {
      id: 11,
      artist: "Harsh Mehta",
      profilePic: "https://randomuser.me/api/portraits/men/43.jpg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUjrhGsnto9TZ5lEtNtNSsDzb86Cc0uoGhw&s",
      description: "A hyperrealistic charcoal drawing of an old man.",
    },
    {
      id: 12,
      artist: "Tanya Arora",
      profilePic: "https://randomuser.me/api/portraits/women/31.jpg",
      image: "https://t4.ftcdn.net/jpg/10/81/68/67/360_F_1081686798_GXDeLJ9neswLk2o1ffOIhTvG8wxtWKWE.jpg",
      description: "A fusion of street art and traditional patterns.",
    },
    {
      id: 13,
      artist: "Amit Roy",
      profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
      image: "https://www.postergully.com/cdn/shop/products/de9a5e7d1cb9a8a4a2fbf4ace96c9106.jpg?v=1578644318",
      description: "An intricate mandala artwork.",
    },
    {
      id: 14,
      artist: "Riya Sen",
      profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnlKs99KovXUx99ATCSfIJYZPiY2vh52-tg&s",
      description: "A modern interpretation of folk art.",
    },
    {
      id: 15,
      artist: "Nikhil Chatterjee",
      profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
      image: "https://easy-peasy.ai/cdn-cgi/image/quality=70,format=auto,width=300/https://media.easy-peasy.ai/83e1d5a1-d7d9-495c-be7f-fcd08a4daa05/61da7a17-885f-4a37-8088-f981b665ac2e.png",
      description: "A geometric abstraction painting.",
    },
  ];
  