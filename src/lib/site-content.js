
export const defaultSiteContent = {
  _id: "homepage",

  navbar: {
    logo: "/sunshine_logo.png",
    links: [
      { label: "Products", href: "#products" },
      { label: "Crop guides", href: "#crops" },
      { label: "Krishikul", href: "#krishikul" },
      { label: "About", href: "#about" },
    ],
    languages: ["EN", "मराठी", "हिंदी"],
    phone: "+91 00000 00000",
    phoneLink: "+910000000000",
    hours: "7 am – 8 pm",
    ctaText: "Talk to us",
    ctaLink: "#contact",
  },

  hero: {
    eyebrow: "— Jalgaon · Since 2005",
    headingLine1: "Grown with care.",
    headingLine2: "Tested for",
    highlightedWord: "every",
    headingLine3: "field.",
    description:
      "Crop nutrition made in our own Jalgaon lab — with free advice from agronomists who come to your farm.",
    primaryButtonText: "Find my crop",
    primaryButtonLink: "#crops",
    secondaryButtonText: "Get crop advice",
    secondaryButtonLink: "#contact",
    seasonalText: "September · Banana flowering, cotton boll setting",
    backgroundImage: "/landingpage.jpeg",
    backgroundImageAlt: "Banana crops growing on an agricultural farm",

    farmerCardImage: "/world.png",
    farmerCardHeading: "4,20,000+ farmers",
    farmerCardDescription: "Punjab · Maharashtra · Tamil Nadu and more",

    fieldCardImage: "/land.jpg",
    fieldCardImageAlt: "Agricultural field",
    fieldCardHeading: "From our lab to your field",
    fieldCardDescription: "Free soil checks and science-led advice",
  },


  stats: {
    items: [
      { value: "21", label: "years in Jalgaon" },
      { value: "4,20,000+", label: "farmers" },
      { value: "1,850+", label: "dealers" },
      { value: "100%", label: "batches tested" },
    ],
  },

  cropSection: {
    badge: "Find my crop",
    heading: "Start with your crop",
    description:
      "Twelve crops, all on one screen. Tap yours to see what it needs this month.",
    crops: [
      { name: "Banana", season: "Flowering · Aug-Sep", image: "/banana.jpg", warning: "Panama wilt and zinc deficiency — yellowing on the lower leaves." },
      { name: "Cotton", season: "Boll setting · Sep-Oct", image: "/cotton.jpg", warning: "Monitor boll development and maintain balanced nutrition." },
      { name: "Soybean", season: "Pod filling · Sep", image: "/soybean.jpg", warning: "Monitor pod development and check for nutrient deficiencies." },
      { name: "Sugarcane", season: "Grand growth · Jul-Oct", image: "/sugarcane.jpg", warning: "Maintain adequate nutrition during active vegetative growth." },
      { name: "Onion", season: "Bulb planting · Oct-Nov", image: "/onion.jpg", warning: "Maintain balanced nutrition during bulb development." },
      { name: "Tomato", season: "Fruit set · Sep-Oct", image: "/tomato.jpg", warning: "Monitor fruit development and maintain balanced nutrition." },
      { name: "Grape", season: "October pruning", image: "/grape.jpg", warning: "Follow an appropriate nutrition plan for the current growth stage." },
      { name: "Pomegranate", season: "Hasta bahar · Sep-Oct", image: "/pomegranate.jpg", warning: "Monitor fruit development and maintain consistent irrigation." },
      { name: "Chilli", season: "Flowering · Sep-Nov", image: "/chilli.jpg", warning: "Monitor flowering and fruit setting throughout the season." },
      { name: "Turmeric", season: "Bulking · Sep-Nov", image: "/tumeric.jpg", warning: "Maintain suitable moisture and nutrition during rhizome development." },
      { name: "Wheat", season: "Sowing · Nov", image: "/wheat.jpg", warning: "Prepare the soil and follow locally appropriate nutrient recommendations." },
      { name: "Gram", season: "Sowing · Oct-Nov", image: "/gram.jpg", warning: "Check soil conditions and follow suitable nutrient recommendations." },
    ],
    products: [
      { name: "Zinc Gold", description: "Chelated zinc · 500 ml", price: "₹380", bestseller: false },
      { name: "Mag Gold", description: "Magnesium sulphate · 1 kg", price: "₹210", bestseller: false },
      { name: "Sunshine Zinc EDTA 12%", description: "Chelated zinc · 250 ml", price: "₹240", bestseller: true },
    ],
    warningLabel: "Watch out for",
    productsHeading: "Products that help right now",
    agronomistNote: "Not sure which one? An agronomist replies on WhatsApp, 7 am – 8 pm.",
    cropGuideButton: "Full {crop} guide",
    adviceButton: "Ask on WhatsApp",
  },

};  