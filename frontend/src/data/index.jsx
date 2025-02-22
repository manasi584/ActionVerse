import { MapPin, Video, HandCoins, Users, Star, Music } from "lucide-react";

import user1 from "/user1.jpg";
import user2 from "/user2.jpg";
import user3 from "/user3.jpg";
import user4 from "/user4.jpg";
import user5 from "/user5.jpg";
import user6 from "/user6.jpg";

export const testimonials = [
  {
    user: "Aisha Khan",
    organization: "Climate Action Now",
    image: user1,
    text: "ActionVerse connected us with volunteers and donors we wouldn't have reached otherwise.  It's a game-changer for our climate advocacy efforts.",
  },
  {
    user: "Raj Patel",
    organization: "Community Food Bank",
    image: user2,
    text: "The crowdfunding feature on ActionVerse helped us raise funds for essential supplies during a crisis.  The transparent donation system built trust with our supporters.",
  },
  {
    user: "Maria Rodriguez",
    organization: "Human Rights Watch",
    image: user3,
    text: "ActionVerse's secure communication tools were crucial for organizing our campaign. The real-time map kept our team coordinated and informed.",
  },
  {
    user: "David Lee",
    organization: "Local Environmental Group",
    image: user4,
    text: "The AI-driven insights helped us target our messaging and reach a wider audience. ActionVerse is essential for effective activism.",
  },
  {
    user: "Sarah Chen",
    organization: "Education Reform Initiative",
    image: user5,
    text: "ActionVerse made it easy to connect with other organizations and collaborate on joint projects.  It's strengthened our collective impact.",
  },
  {
    user: "Juan Garcia",
    organization: "Social Justice Collective",
    image: user6,
    text: "The live streaming feature on ActionVerse allowed us to engage with our supporters in real-time.  It's a powerful tool for building community.",
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
    title: "Effortless Campaign Initiation",
    description:
      "Activists can quickly launch campaigns for protests, events, or initiatives with streamlined setup and integrated tools.",
  },
  {
    title: "Seamless Donation & Funding",
    description:
      "Supporters can instantly contribute to causes and campaigns through secure, integrated payment gateways, including cryptocurrency options.",
  },
  {
    title: "Real-Time Movement Mapping",
    description:
      "A dynamic geo-map displays active movements and causes, allowing users to discover local initiatives and connect with relevant groups.",
  },
  {
    title: "Crowdfunding & Grant Platform",
    description:
      "Activists and organizations can raise funds for campaigns, resources, or community projects through integrated crowdfunding and grant application tools.",
  },
];

export const pricingOptions = [
  {
    title: "Activist",
    price: "10+ petitions signed",
    features: [
      "Join & Organize Social Movements",
      "Access Secure Activist Chat & Coordination",
      "Participate in Live Protest Streams",
      "Earn Impact Badges for Contributions",
    ],
  },
  {
    title: "Changemaker",
    price: "500+ lives changed",
    features: [
      "Launch Social Awareness Campaigns",
      "Crowdfund for Activist Initiatives",
      "Gain Higher Visibility on the Action Map",
      "Track & Measure Your Social Impact",
    ],
  },
  {
    title: "Cause Leader",
    price: "1,000+ trees planted",
    features: [
      "Mobilize Large-Scale Protests & Events",
      "Access Direct Support from NGOs & Sponsors",
      "Run AI-Powered Activism Analytics",
      "Get Featured in the Global Action Network",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "How ActionVerse Works" },
  { href: "#", text: "Impact Stories" },
  { href: "#", text: "Activist Code of Conduct" },
  { href: "#", text: "Help & Safety Resources" },
];

export const platformLinks = [
  { href: "#", text: "Find Activists & Movements" },
  { href: "#", text: "Join a Social Campaign" },
  { href: "#", text: "Live Protest & Awareness Streams" },
  { href: "#", text: "Fund a Social Cause" },
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
    image:
      "https://images.unsplash.com/photo-1617380613434-7495e9b45dfb?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGltYWxheWF8ZW58MHx8MHx8fDA%3D",
    description:
      "A traditional painting depicting the beauty of the Himalayas.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Conservation",
  },
  {
    id: 2,
    artist: "Aisha Kapoor",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSfGdk4if5R8i9DiesgoixPbijqYoOtNKePg&s",
    description: "Abstract art visualizing the impact of climate change.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Climate Change",
  },
  {
    id: 3,
    artist: "Arjun Sharma",
    profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnM3KQmfp2OJrWb3dn4RI9gOye9xJyKUPoSw&s",
    description: "A sketch of endangered wildlife in their natural habitat.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Wildlife Protection",
  },
  {
    id: 4,
    artist: "Meera Singh",
    profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHmstI-DVzKWJk8TfneNF29wLhqxjOYywKYw&s",
    description: "A mural promoting sustainable living practices.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Sustainable Development",
  },
  {
    id: 5,
    artist: "Vikram Das",
    profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
    image: "https://www.iordanoff.com/images/abstract-art-iordanoff-0284.jpg",
    description: "Abstract art representing the fragility of ecosystems.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Ecosystems",
  },
  {
    id: 6,
    artist: "Priya Nair",
    profilePic: "https://randomuser.me/api/portraits/women/48.jpg",
    image: "https://images.unsplash.com/photo-1527181152855-fc03fc7949c8",
    description: "Digital art advocating for clean energy solutions.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Renewable Energy",
  },
  {
    id: 7,
    artist: "Kabir Malhotra",
    profilePic: "https://randomuser.me/api/portraits/men/40.jpg",
    image: "https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0",
    description: "Surreal art depicting the impact of pollution on nature.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Pollution",
  },
  {
    id: 8,
    artist: "Ananya Joshi",
    profilePic: "https://randomuser.me/api/portraits/women/52.jpg",
    image: "https://i.ytimg.com/vi/pbFgSA1FewM/maxresdefault.jpg",
    description: "Watercolor paintings of endangered birds of India.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Wildlife Protection",
  },
  {
    id: 9,
    artist: "Rajesh Iyer",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
    image:
      "https://creator.nightcafe.studio/jobs/P1xHhxjas1EiYsUYhO1g/P1xHhxjas1EiYsUYhO1g--1--59dua.jpg",
    description: "Oil painting capturing the beauty of coral reefs.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Ocean Conservation",
  },
  {
    id: 10,
    artist: "Sanya Patel",
    profilePic: "https://randomuser.me/api/portraits/women/39.jpg",
    image:
      "https://i.pinimg.com/736x/19/17/c8/1917c82cacea020fe7e90de26320442d.jpg",
    description:
      "A portrait highlighting the struggles of indigenous communities fighting for their land.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Land Rights",
  },
  {
    id: 11,
    artist: "Harsh Mehta",
    profilePic: "https://randomuser.me/api/portraits/men/43.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmUjrhGsnto9TZ5lEtNtNSsDzb86Cc0uoGhw&s",
    description: "Charcoal drawing depicting the impact of deforestation.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Deforestation",
  },
  {
    id: 12,
    artist: "Tanya Arora",
    profilePic: "https://randomuser.me/api/portraits/women/31.jpg",
    image:
      "https://t4.ftcdn.net/jpg/10/81/68/67/360_F_1081686798_GXDeLJ9neswLk2o1ffOIhTvG8wxtWKWE.jpg",
    description: "Street art raising awareness about plastic pollution.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Plastic Pollution",
  },
  {
    id: 13,
    artist: "Amit Roy",
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
    image:
      "https://www.postergully.com/cdn/shop/products/de9a5e7d1cb9a8a4a2fbf4ace96c9106.jpg?v=1578644318",
    description: "Mandala art symbolizing the interconnectedness of nature.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Nature",
  },
  {
    id: 14,
    artist: "Riya Sen",
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAnlKs99KovXUx99ATCSfIJYZPiY2vh52-tg&s",
    description:
      "Folk art inspired by traditional environmental conservation practices.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Traditional Practices",
  },
  {
    id: 15,
    artist: "Nikhil Chatterjee",
    profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgmznkTlg80xgJ5I67lGPRE3CoEJMUqQJBfA&s",
    description:
      "A geometric abstraction painting inspired by natural patterns.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Nature",
  },
  {
    id: 16,
    artist: "Isha Sharma",
    profilePic: "https://randomuser.me/api/portraits/women/55.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGfke6e5pwzdgl1dXTfDL0PcdftfpKVDk_gA&s", // Example image
    description: "A vibrant painting depicting the beauty of a rainforest.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Rainforests",
  },
  {
    id: 17,
    artist: "Vikrant Kapoor",
    profilePic: "https://randomuser.me/api/portraits/men/60.jpg",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_49/2669406/181204-japan-tsunami-earthquake-cs-920a.jpg", // Example image
    description:
      "Digital art promoting environmental awareness among children.", // Environmental theme
    category: "Visual Art",
    environmentalTheme: "Environmental Education",
  },
  {
    id: 18,
    artist: "Divya Patel",
    profilePic: "https://randomuser.me/api/portraits/women/42.jpg",
    image:
      "https://i.pinimg.com/560x/5e/09/a4/5e09a47814a6006c3a2a3563919e9184.jpg", // Example image
    description:
      "Sculpture made from recycled materials, highlighting the issue of waste.", // Environmental theme
    category: "Sculpture",
    environmentalTheme: "Waste Management",
  },
  {
    id: 19,
    artist: "Sameer Khan",
    profilePic: "https://randomuser.me/api/portraits/men/58.jpg",
    image:
      "https://i.pinimg.com/560x/55/26/50/55265057b587a8582f3a6755452f1e60.jpg", // Example image
    description: "Photography showcasing the impact of industrial pollution.", // Environmental theme
    category: "Photography",
    environmentalTheme: "Pollution",
  },
  {
    id: 20,
    artist: "Nalini Reddy",
    profilePic: "https://randomuser.me/api/portraits/women/49.jpg",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/newscms/2018_49/2669406/181204-japan-tsunami-earthquake-cs-920a.jpg", // Example image
    description:
      "A performance art piece exploring the relationship between humans and nature.", // Environmental theme
    category: "Performance Art",
    environmentalTheme: "Human-Nature Interaction",
  },
];
export const digitalMediaWorks = [
  {
    id: 1,
    artist: "Ravi Verma",
    profilePic: "https://randomuser.me/api/portraits/men/32.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlHM0iIZ6xTZ9upGROZd6i7hIg2xLe3sD8BV5oPbZi_rHFI-Naa5-tJdjf2LzNoIBrBGU&usqp=CAU",
    description:
      "Visual campaign for women's equal rights, highlighting societal disparities.",
  },
  {
    id: 2,
    artist: "Aisha Kapoor",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuavoHs1vlDnkqFo-iGiZiaw-c64Qgp3wrWg&s",
    description:
      "Digital artwork supporting the #MeToo movement, amplifying survivor voices.",
  },
  {
    id: 3,
    artist: "Arjun Sharma",
    profilePic: "https://randomuser.me/api/portraits/men/51.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7Jx7K42y4rIUZVxrsEbHJsEnq61CpbDWSuA&s",
    description:
      "Digital art reflecting the urgency and impact of the Black Lives Matter movement.",
  },
  {
    id: 4,
    artist: "Meera Singh",
    profilePic: "https://randomuser.me/api/portraits/women/36.jpg",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGxlvfnlKVhOK60qBoE6H3xfnayUYJdGlbew&s",
    description:
      "Futuristic digital portrait exploring themes of technology and identity.",
  },
  {
    id: 5,
    artist: "Vikram Das",
    profilePic: "https://randomuser.me/api/portraits/men/29.jpg",
    image:
      "https://img.freepik.com/premium-photo/digital-india-map-with-india-flag_1203803-853.jpg?ga=GA1.1.69946619.1719594377&semt=ais_hybrid",
    description:
      "Digital representation of caste inequality in India, sparking social dialogue.",
  },
  {
    id: 6,
    artist: "Priya Nair",
    profilePic: "https://randomuser.me/api/portraits/women/48.jpg",
    image:
      "https://img.freepik.com/premium-photo/independence-day-celebration-indian-woman-displaying-smartphone-with-blank-screen_1257902-1294.jpg?ga=GA1.1.69946619.1719594377&semt=ais_hybrid",
    description:
      "Visual campaign highlighting the transformative power of Digital India.",
  },
  {
    id: 7,
    artist: "Kabir Malhotra",
    profilePic: "https://randomuser.me/api/portraits/men/40.jpg",
    image:
      "https://thumbs.dreamstime.com/b/captivating-wavy-blue-abstract-visualization-depicting-technology-data-elements-featuring-luminous-lines-dynamic-flowing-343026305.jpg",
    description:
      "Abstract digital art exploring the dynamic flow of data and technology.",
  },
  {
    id: 8,
    artist: "Ananya Joshi",
    profilePic: "https://randomuser.me/api/portraits/women/52.jpg",
    image:
      "https://img.freepik.com/premium-photo/world-development-information-day-image_1198884-23244.jpg?ga=GA1.1.69946619.1719594377&semt=ais_hybrid",
    description:
      "Digital artwork showcasing the integration of technology in agriculture.",
  },
  {
    id: 9,
    artist: "Rajesh Iyer",
    profilePic: "https://randomuser.me/api/portraits/men/34.jpg",
    image:
      "https://img.freepik.com/premium-photo/indian-work-education_917664-124179.jpg?ga=GA1.1.69946619.1719594377&semt=ais_hybrid",
    description:
      "Visual story of digital education initiatives in rural Indian communities.",
  },
  {
    id: 10,
    artist: "Sanya Patel",
    profilePic: "https://randomuser.me/api/portraits/women/39.jpg",
    image:
      "https://img.freepik.com/free-photo/front-view-people-celebrating-indian-republic-day_23-2150901270.jpg?ga=GA1.1.69946619.1719594377&semt=ais_hybrid",
    description:
      "Digital campaign promoting voter participation and civic engagement.",
  },
  {
    id: 11,
    artist: "Harsh Mehta",
    profilePic: "https://randomuser.me/api/portraits/men/43.jpg",
    image:
      "https://creator.nightcafe.studio/jobs/0OIJT3VCV38I7LTx2toV/0OIJT3VCV38I7LTx2toV.jpg",
    description:
      "Hyperrealistic digital painting of a sprawling, advanced future city.",
  },
  {
    id: 12,
    artist: "Tanya Arora",
    profilePic: "https://randomuser.me/api/portraits/women/31.jpg",
    image:
      "https://t4.ftcdn.net/jpg/10/81/68/67/360_F_1081686798_GXDeLJ9neswLk2o1ffOIhTvG8wxtWKWE.jpg",
    description:
      "Digital artwork fusing traditional Indian narratives with modern techniques.",
  },
  {
    id: 13,
    artist: "Amit Roy",
    profilePic: "https://randomuser.me/api/portraits/men/50.jpg",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c77350965a707ed1710a1bc/1592324984483-YGAI488E2HV60HX424FZ/Generative+Art+by+Manolo+Gamboa+Naon.jpeg?format=500w",
    description:
      "Code-driven generative art, creating dynamic and evolving visual patterns.",
  },
  {
    id: 14,
    artist: "Riya Sen",
    profilePic: "https://randomuser.me/api/portraits/women/45.jpg",
    image:
      "https://cdn.dribbble.com/users/2624753/screenshots/14131393/media/4297b40bf342e3543bbfd09fb9fb4d85.png?format=webp&resize=400x300&vertical=center",
    description:
      "Dynamic motion poster combining striking typography with digital artistry.",
  },
  {
    id: 15,
    artist: "Nikhil Chatterjee",
    profilePic: "https://randomuser.me/api/portraits/men/47.jpg",
    image:
      "https://static.vecteezy.com/system/resources/thumbnails/036/046/424/small/ai-generated-enchanting-sci-fi-cityscape-3d-rendered-with-dazzling-cyberpunk-aesthetics-photo.jpg",
    description:
      "A 3D-rendered futuristic cityscape infused with cyberpunk aesthetics.",
  },
];
