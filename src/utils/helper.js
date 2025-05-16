import LuxuryFamilyOne from "/src/assets/images/png/luxury-family-1.png";
import LuxuryFamilyTwo from "/src/assets/images/png/luxury-family-2.png";
import LuxuryFamilyThree from "/src/assets/images/png/luxury-family-3.png";
import QuarterTwelve from "/src/assets/images/png/quarter-12.png";
import SecFifteen from "/src/assets/images/png/sec-15.png";
import ExploreMore from "/src/assets/images/png/explore-more.png";
import AzadNagar from "/src/assets/images/png/azad-nagar.png";
import RajGuru from "/src/assets/images/png/raj-guru-market.png";
import TownPark from "/src/assets/images/png/town-park.png";
import SecFourteen from "/src/assets/images/png/sec-14.png";
import RishiNager from "/src/assets/images/png/rishi-nager.png";
import ClientOne from "/src/assets/images/png/client-one.png";
import ClientTwo from "/src/assets/images/png/client-two.png";
import BlogOne from "/src/assets/images/png/blog-img-one.png";
import BlogTwo from "/src/assets/images/png/blog-img-two.png";
import BlogThree from "/src/assets/images/png/blog-img-three.png";
import ConfidentGrowth from "/src/assets/images/png/confident-growth.png";
import TurningComplexity from "/src/assets/images/png/turning-complexity.png";
import PreparationPrevents from "/src/assets/images/png/preparation-prevents.png";
import HowAutomation from "/src/assets/images/png/how-automation.png";
import Financial from "/src/assets/images/png/financial.png";
import FromChaos from "/src/assets/images/png/from-chaos.png";
import MrWadhwaOne from "/src/assets/images/png/mr-wadhwa-1.png";
import MrWadhwaTwo from "/src/assets/images/png/mr-wadhwa-2.png";
import MrWadhwaThree from "/src/assets/images/png/mr-wadhwa-3.png";

export const slugify = (text) => {
  return text
    .toLowerCase()
    .trim()
    .replace(/,/g, "")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "")
    .replace(/-+/g, "-");
};

export const BLOGS_CARD_LIST = [
  {
    date: "03.04.2025",
    title: "Confident growth, guided by expert support",
    description:
      "How a fast-growing tech startup exited successfully within 6 months with Audalex’s strategic partnership",
    image: ConfidentGrowth,
  },
  {
    date: "03.04.2025",
    title: "Turning complexity into confidence through expert guidance.",
    description:
      "An overwhelmed founder found clarity and confidence before closing a complex deal...",
    image: TurningComplexity,
  },
  {
    date: "03.04.2025",
    title: "Preparation prevents risk and ensures successful outcomes",
    description:
      "A manufacturing company avoided legal traps and tax delays thanks to our pre-sale audit...",
    image: PreparationPrevents,
  },
  {
    date: "08.04.2025",
    title: "How automation unlocked 3x growth",
    description:
      "Discover how streamlined processes led to exponential growth for an innovative business...",
    image: HowAutomation,
  },
  {
    date: "10.04.2025",
    title: "Financial clarity fuels confident decisions",
    description:
      "Clear financial insights helped a business leader make bold strategic moves with certainty...",
    image: Financial,
  },
  {
    date: "12.04.2025",
    title: "From chaos to control: Building a resilient operations system",
    description:
      "A chaotic workflow was transformed into an efficient, resilient operations system...",
    image: FromChaos,
  },
];

export const MEETTHETEAMLIST = [
  {
    img: MrWadhwaOne,
    name: "Mr. Wadhwa",
    designation: "Founder & CEO",
  },
  {
    img: MrWadhwaTwo,
    name: "Mr. Wadhwa",
    designation: "Founder & CEO",
  },
  {
    img: MrWadhwaThree,
    name: "Mr. Wadhwa",
    designation: "Founder & CEO",
  },
];

export const HEADER_LIST = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Services",
    path: "/services",
  },
  {
    title: "Blogs",
    path: "/blog",
  },
];

export const HERO_TAB = ["All", "Buy", "Sale", "Rent"];

export const FAQ_LIST = [
  {
    question: "How can I search for properties to buy or rent?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
  {
    question: "Can I schedule property visits through your site?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
  {
    question: "Are the properties verified?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
  {
    question: "How do I contact your support team?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
  {
    question: "What documents are required to buy a property?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
  {
    question: "Can I negotiate directly with the property owner?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
  {
    question: "Is my personal information safe on your website?",
    answer:
      "Lorem ipsum dolor sit amet consectetur. Ac pharetra sit quam eu senectus. Sit eget et nisl imperdiet. Dui tristique auctor tellus diam nibh arcu eget. Pretium volutpat leo odio morbi ultrices commodo sem.",
  },
];

export const CLIENT_REVIEW_LIST = [
  {
    authorImage: ClientOne,
    author: "Rajeev Sharma",
    title: "Amazing Customer Service",
    description:
      "At Wadhwa Properties, we do more than just help you buy, sell, or rent property — we help you take a confident step toward your dream home. We know that real estate decisions come with emotions, expectations, and investments — and that’s why customer satisfaction is at the heart of everything we do.",
  },
  {
    authorImage: ClientTwo,
    author: "Pooja Verma",
    title: "Amazing Customer Service",
    description:
      "At Wadhwa Properties, we do more than just help you buy, sell, or rent property — we help you take a confident step toward your dream home. We know that real estate decisions come with emotions, expectations, and investments — and that’s why customer satisfaction is at the heart of everything we do.",
  },
  {
    authorImage: ClientOne,
    author: "Rajeev Sharma",
    title: "Amazing Customer Service",
    description:
      "At Wadhwa Properties, we do more than just help you buy, sell, or rent property — we help you take a confident step toward your dream home. We know that real estate decisions come with emotions, expectations, and investments — and that’s why customer satisfaction is at the heart of everything we do.",
  },
  {
    authorImage: ClientTwo,
    author: "Pooja Verma",
    title: "Amazing Customer Service",
    description:
      "At Wadhwa Properties, we do more than just help you buy, sell, or rent property — we help you take a confident step toward your dream home. We know that real estate decisions come with emotions, expectations, and investments — and that’s why customer satisfaction is at the heart of everything we do.",
  },
];

export const CLIENT_BLOGS_LIST = [
  {
    authorImage: BlogOne,
    date: "Feb 12, 2024",
    time: "10 minutes",
    title: "our Trusted Partner in Property: Buy, Sell & Rent with Confidence",
    description:
      "Discover verified listings, expert guidance, and seamless transaction.",
  },
  {
    authorImage: BlogTwo,
    date: "Feb 12, 2024",
    time: "10 minutes",
    title: "our Trusted Partner in Property: Buy, Sell & Rent with Confidence",
    description:
      "Discover verified listings, expert guidance, and seamless transaction.",
  },
  {
    authorImage: BlogThree,
    date: "Feb 12, 2024",
    time: "10 minutes",
    title: "our Trusted Partner in Property: Buy, Sell & Rent with Confidence",
    description:
      "Discover verified listings, expert guidance, and seamless transaction.",
  },
  {
    authorImage: BlogOne,
    date: "Feb 12, 2024",
    time: "10 minutes",
    title: "our Trusted Partner in Property: Buy, Sell & Rent with Confidence",
    description:
      "Discover verified listings, expert guidance, and seamless transaction.",
  },
  {
    authorImage: BlogTwo,
    date: "Feb 12, 2024",
    time: "10 minutes",
    title: "our Trusted Partner in Property: Buy, Sell & Rent with Confidence",
    description:
      "Discover verified listings, expert guidance, and seamless transaction.",
  },
  {
    authorImage: BlogThree,
    date: "Feb 12, 2024",
    time: "10 minutes",
    title: "our Trusted Partner in Property: Buy, Sell & Rent with Confidence",
    description:
      "Discover verified listings, expert guidance, and seamless transaction.",
  },
];

export const EXPLORE_MOE = [
  { img: ExploreMore, title: "Explore More" },
  { img: AzadNagar, title: "Azad Nagar" },
  {
    img: RajGuru,
    title: "Raj Guru Market",
  },
  { img: QuarterTwelve, title: "12 Quarter" },
  { img: SecFifteen, title: "15 Sector" },
  { img: TownPark, title: "Town Park" },
  { img: SecFourteen, title: "14 Sector" },
  { img: RishiNager, title: "Rishi Nagar" },
];

export const SOCAL_ICON = [
  {
    icon: "facebookIcon",
    url: "https://www.facebook.com/",
  },
  {
    icon: "instagramIcon",
    url: "https://www.instagram.com/",
  },
  {
    icon: "xIcon",
    url: "https://www.linkedin.com/",
  },
];

export const MAIN_LINK = [
  { title: "Home", link: "/" },
  { title: "About Us", link: "##about" },
  { title: "Properties", link: "##properties" },
  { title: "Agent", link: "##agent" },
];

export const CONTACT_LIST = [
  {
    icon: "mailIcon",
    title: "mail@Wadhwagmail.com",
    link: "mailto:mail@Wadhwagmail.com",
  },
  {
    icon: "callIcon",
    title: "(252) 555-0126",
    link: "tel:(252) 555-0126",
  },
  {
    icon: "callIcon",
    title: "(229) 555-0109",
    link: "tel:(229) 555-0109",
  },
  {
    icon: "locationIcon",
    title: "Hisar Haryana-125001",
    link: "https://g.co/kgs/MXz5Nbn",
  },
];

export const EXPLORE_LIST = [
  {
    img: LuxuryFamilyOne,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    beds: "4 Beds",
    baths: "2 Baths",
    sqft: "450 sqft",
  },
  {
    img: LuxuryFamilyTwo,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    beds: "4 Beds",
    baths: "2 Baths",
    sqft: "450 sqft",
  },
  {
    img: LuxuryFamilyThree,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    beds: "4 Beds",
    baths: "2 Baths",
    sqft: "450 sqft",
  },
  {
    img: LuxuryFamilyOne,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    beds: "4 Beds",
    baths: "2 Baths",
    sqft: "450 sqft",
  },
  {
    img: LuxuryFamilyTwo,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    beds: "4 Beds",
    baths: "2 Baths",
    sqft: "450 sqft",
  },
  {
    img: LuxuryFamilyThree,
    title: "Luxury Family Home",
    location: "1800-1818 79th St",
    beds: "4 Beds",
    baths: "2 Baths",
    sqft: "450 sqft",
  },
];

export const FACILITIES_LIST = [
    { label: "Pool", icon: "PoolIcon:" },
    { label: "Jacuzzi", icon: "JacuzziIcon" },
    { label: "WIFI", icon: "WifiIcon" },
    { label: "TV", icon: "TvIcon" },
    { label: "Parking spot", icon: "ParkingSpotIcon" },
    { label: "Pets Allowed", icon: "PetsAllowedIcon" },
    { label: "Breakfast", icon: "BreakfastIcon" },
    { label: "Grill", icon: "GrillIcon" },
    { label: "Can Smoke Inside", icon: "CanSmokeInsideIcon" }
];