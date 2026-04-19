import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";

// ── Types ────────────────────────────────────────────────────────────────────
export interface ProjectDetail {
  title: string;
  category: string;
  image: string;
  overview: string;
  problem: string;
  goals: string[];
  researchInsights: string[];
  designApproach: { heading: string; points: string[] }[];
  solution: string;
  outcomes: string[];
  impact: string[];
}

// ── All case study data ──────────────────────────────────────────────────────
// Import images
import coffeeapp from "@/assets/coffeeapp.png";
import meterapp from "@/assets/meterapp.png";
import dateapp from "@/assets/dateapp.png";
import foodorderapp from "@/assets/foodorderapp.png";
import projectMobile1 from "@/assets/project-mobile-1.jpg";
import projectMobile2 from "@/assets/project-mobile-2.jpg";
import rentalapp from "@/assets/rentalapp .png";
import coffeeapp2 from "@/assets/coffeeapp2.png";
import clothingapp from "@/assets/clothingapp.png";
import iwacucoffee from "@/assets/iwacucoffee.png";
import logisticweb from "@/assets/logisticweb.png";
import projectWeb1 from "@/assets/project-web-1.jpg";
import furniturewebM from "@/assets/furniturewebM.png";
import hospitalweb from "@/assets/hospitalweb.png";
import kazerestraurant from "@/assets/kazerestraurant.png";
import gamewebdesign from "@/assets/gamewebdesign.png";
import cakeweb from "@/assets/cakeweb.png";
import olcwebdesign from "@/assets/olcwebdesign.png";
import kpiweb from "@/assets/kpiweb.png";
import creweb from "@/assets/creweb.png";
import dashboard from "@/assets/dashboard.png";

export const projectDetails: ProjectDetail[] = [
  // ─── APP DESIGN ────────────────────────────────────────────────────────────
  {
    title: "BlissCoffee Mobile App",
    category: "App Design",
    image: coffeeapp,
    overview:
      "BlissCoffee is a mobile ordering app designed to give coffee lovers a smooth, immersive, and premium digital experience through a dark, atmospheric mobile interface with intuitive browsing and seamless checkout.",
    problem:
      "The coffee brand had no immersive mobile ordering system. Product discovery was limited, emotional connection was weak, and the ordering flow was not optimized for mobile behavior — leaving mobile users disengaged.",
    goals: [
      "Create an immersive coffee ordering mobile app",
      "Improve product discovery and browsing experience",
      "Design a smooth and fast cart and checkout flow",
      "Strengthen emotional connection with the brand",
      "Build a modern mobile-first coffee experience",
    ],
    researchInsights: [
      "Users prefer fast browsing with minimal steps",
      "Visual-first product discovery increases engagement",
      "Dark themes enhance premium brand perception",
      "Category-based navigation improves usability",
      "Smooth cart experience reduces drop-offs",
    ],
    designApproach: [
      {
        heading: "Dark-Themed Immersive UI",
        points: [
          "Deep dark backgrounds for focus and elegance",
          "Warm coffee-inspired accent colors",
          "Soft lighting effects to create depth",
          "High contrast for readability and product focus",
        ],
      },
      {
        heading: "Product Discovery System",
        points: [
          "Category-based browsing (espresso, latte, cappuccino, etc.)",
          "Featured coffee selections on home screen",
          "Scroll-based discovery experience",
          "Visual-first product cards",
        ],
      },
      {
        heading: "Cart & Ordering Flow",
        points: [
          "Simple and minimal cart interface",
          "Quick quantity adjustment",
          "Clear pricing breakdown",
          "Fast checkout process with minimal steps",
        ],
      },
    ],
    solution:
      "A premium mobile coffee ordering app that blends immersive visuals with fast and intuitive ordering — letting users discover coffee engagingly, explore categories effortlessly, and order with minimal friction.",
    outcomes: [
      "Elevated mobile brand experience for coffee lovers",
      "Improved user engagement through immersive UI",
      "Faster and smoother ordering process",
      "Stronger emotional connection with the brand",
      "More enjoyable product discovery journey",
    ],
    impact: [
      "Strengthened mobile-first brand identity",
      "Increased user interaction and retention potential",
      "Enhanced perceived product quality",
      "Improved usability for mobile users",
      "Created a more memorable coffee experience",
    ],
  },
  {
    title: "GreenRide Meter App",
    category: "App Design",
    image: meterapp,
    overview:
      "GreenRide Meter App is a mobile solution designed to help taxi drivers calculate fares accurately and efficiently, supporting daily operations while improving transparency between drivers and passengers.",
    problem:
      "Taxi drivers faced inaccurate fare calculations, no simple digital pricing tool, manual processes causing delays, and difficulty maintaining fair pricing transparency — creating uncertainty for both drivers and passengers.",
    goals: [
      "Create a simple and accurate fare calculation tool",
      "Improve efficiency for taxi drivers",
      "Provide real-time tracking functionality",
      "Reduce errors in fare estimation",
      "Build a clean and easy-to-use mobile interface",
    ],
    researchInsights: [
      "Studied taxi driver behavior and daily workflows",
      "Identified pain points in manual fare calculation",
      "Speed and simplicity are the top requirements",
      "Large touch targets are essential for on-the-go usage",
      "Real-time feedback improves driver confidence",
    ],
    designApproach: [
      {
        heading: "Clean Dark-Themed Interface",
        points: [
          "Dark UI for better readability in different lighting",
          "High contrast elements for quick visibility",
          "Minimal distractions to focus on core function",
        ],
      },
      {
        heading: "Simple Fare Calculation Flow",
        points: [
          "Easy input for distance and time",
          "Instant fare output display",
          "Clear breakdown of pricing logic",
          "No unnecessary steps or complexity",
        ],
      },
      {
        heading: "Mobile-First UX",
        points: [
          "Designed specifically for driver usage on the go",
          "Large touch-friendly buttons",
          "Fast response interactions",
          "Simple navigation for quick access",
        ],
      },
    ],
    solution:
      "A clean, efficient mobile meter app enabling taxi drivers to calculate fares accurately and track trips in real time — reducing manual errors and improving operational confidence.",
    outcomes: [
      "Successfully adopted by local taxi drivers",
      "Improved accuracy in fare calculation",
      "Faster trip management process",
      "Reduced confusion between drivers and passengers",
      "Increased operational efficiency",
    ],
    impact: [
      "Simplified daily work for taxi drivers",
      "Improved trust in fare transparency",
      "Reduced manual calculation errors",
      "Enhanced digital adoption in transport sector",
      "Provided a reliable on-the-go solution",
    ],
  },
  {
    title: "Dating App Redesign",
    category: "App Design",
    image: dateapp,
    overview:
      "A redesign project focused on improving user trust, safety, and overall experience in an environment often perceived as cluttered and overwhelming — creating a modern, intuitive, and emotionally safe platform.",
    problem:
      "Existing dating apps had overcrowded interfaces, lacked trust and safety perception, had poor profile clarity, caused emotional fatigue from overwhelming swiping, and suffered low engagement due to confusing navigation.",
    goals: [
      "Simplify the dating experience and reduce clutter",
      "Improve user trust and sense of safety",
      "Create a clean and modern interface",
      "Enhance profile clarity and match interactions",
      "Increase meaningful user engagement",
    ],
    researchInsights: [
      "Users want clarity and safety as top priorities",
      "Overcrowded UIs cause emotional fatigue and drop-off",
      "Verified profiles and trust signals directly affect retention",
      "Fewer actions between steps leads to higher match engagement",
      "Warm visual tones create emotional comfort",
    ],
    designApproach: [
      {
        heading: "Clean & Modern UI",
        points: [
          "Minimal layout with focused content",
          "Soft colors to create a calm emotional tone",
          "Clear typography for readability",
          "Balanced spacing to avoid visual clutter",
        ],
      },
      {
        heading: "Safety-Focused Design",
        points: [
          "Verified profile indicators",
          "Clear reporting and blocking options",
          "Transparent user information display",
          "Trust elements integrated into UI",
        ],
      },
      {
        heading: "Emotional Experience Design",
        points: [
          "Human-centered profile presentation",
          "Warm and friendly visual tone",
          "Reduced pressure in user interactions",
          "Focus on meaningful connections over quantity",
        ],
      },
    ],
    solution:
      "A modern, safe, and intuitive dating app experience that reduces clutter, improves user trust, and allows users to connect more meaningfully with less emotional overwhelm.",
    outcomes: [
      "Improved user engagement and retention",
      "Increased trust in platform safety",
      "Reduced interface complexity",
      "Better quality of user interactions",
      "More meaningful connection experiences",
    ],
    impact: [
      "Enhanced emotional comfort for users",
      "Stronger perception of safety and reliability",
      "More focused and intentional user behavior",
      "Improved overall dating experience quality",
      "Reduced frustration from app clutter",
    ],
  },
  {
    title: "Food Ordering App",
    category: "App Design",
    image: foodorderapp,
    overview:
      "A food ordering app designed to simplify and improve the experience for users frustrated with slow, confusing systems — creating a smooth, visually appealing, and highly intuitive mobile ordering interface.",
    problem:
      "Users faced complicated and lengthy ordering processes, confusing navigation, too many steps before checkout, poor visual clarity, and low satisfaction — leading to frequent order abandonment.",
    goals: [
      "Simplify the food ordering journey from start to finish",
      "Reduce friction in browsing and checkout processes",
      "Improve visual presentation of food items",
      "Make ordering fast, intuitive, and enjoyable",
      "Increase overall user satisfaction and retention",
    ],
    researchInsights: [
      "Key drop-off points identified through user testing",
      "Unnecessary steps in ordering process cause abandonment",
      "High-quality food imagery increases ordering intent",
      "One-tap add-to-cart dramatically improves flow",
      "Mobile-first design is essential for food ordering",
    ],
    designApproach: [
      {
        heading: "Clean & Appetizing Interface",
        points: [
          "High-quality food imagery for strong visual appeal",
          "Clean layout to reduce cognitive load",
          "Warm and inviting color palette",
          "Focus on appetite-driven design",
        ],
      },
      {
        heading: "Smooth Ordering Flow",
        points: [
          "Quick add-to-cart functionality",
          "Minimal steps from browsing to checkout",
          "Clear order summary before payment",
          "Fast confirmation experience",
        ],
      },
      {
        heading: "Mobile-First UX",
        points: [
          "Designed for fast mobile interactions",
          "Large touch-friendly elements",
          "Smooth scrolling and transitions",
          "Optimized for one-hand usage",
        ],
      },
    ],
    solution:
      "A smooth and beautiful food ordering mobile app that removes friction and enhances the overall ordering experience — letting users browse visually, add in one tap, and checkout quickly.",
    outcomes: [
      "Faster food ordering process",
      "Higher user satisfaction levels",
      "Reduced drop-off during checkout",
      "Improved engagement with menu items",
      "More efficient ordering experience overall",
    ],
    impact: [
      "Simplified digital food ordering experience",
      "Increased usability for mobile users",
      "Better conversion from browsing to ordering",
      "Improved customer retention and satisfaction",
      "Stronger overall app experience",
    ],
  },
  {
    title: "FitTrack Mobile App",
    category: "App Design",
    image: projectMobile1,
    overview:
      "FitTrack is a mobile fitness tracking app designed to help users monitor their workouts, progress, and daily activity in a simple and consistent way — improving motivation through a clean, data-driven experience.",
    problem:
      "Users struggled to maintain consistency in tracking fitness progress due to overcomplicated apps, lack of visual progress feedback, poorly structured dashboards, and low daily engagement leading to app abandonment.",
    goals: [
      "Create a simple and motivating fitness tracking experience",
      "Improve consistency in daily user engagement",
      "Provide clear and actionable progress insights",
      "Design a clean and focused fitness dashboard",
      "Encourage habit-building through visual feedback",
    ],
    researchInsights: [
      "Drop-off happens most at complex data input screens",
      "Visual streaks and milestones drive daily return",
      "Dark UI reduces eye strain during workouts",
      "Progress bars are more motivating than raw numbers",
      "Simplified navigation reduces cognitive friction",
    ],
    designApproach: [
      {
        heading: "Clean Dark-Themed Interface",
        points: [
          "Dark UI to reduce eye strain during workouts",
          "High contrast elements for readability",
          "Focused layout with minimal distractions",
          "Modern fitness aesthetic with energy-driven accents",
        ],
      },
      {
        heading: "Intuitive Dashboard",
        points: [
          "Daily activity overview at a glance",
          "Progress tracking for workouts and goals",
          "Clear visual indicators (charts, progress bars)",
          "Quick access to start workouts",
        ],
      },
      {
        heading: "Motivation-Driven UX",
        points: [
          "Visual progress feedback system",
          "Streak tracking to encourage consistency",
          "Achievement indicators and milestones",
          "Simple goal-setting flow",
        ],
      },
    ],
    solution:
      "A clean, dark-themed fitness mobile app that helps users track their progress easily and stay consistent through a clear and motivating dashboard experience.",
    outcomes: [
      "40% increase in daily active users within 3 months",
      "Improved user consistency in tracking workouts",
      "Higher engagement with dashboard and progress features",
      "Reduced drop-off rate in app usage",
      "Stronger user motivation and retention",
    ],
    impact: [
      "Improved long-term fitness habit formation",
      "Increased daily engagement and app retention",
      "Simplified fitness tracking experience",
      "Stronger emotional connection with progress data",
      "More consistent user behavior over time",
    ],
  },
  {
    title: "Food Delivery App",
    category: "App Design",
    image: projectMobile2,
    overview:
      "A food delivery app redesign focused on improving a confusing and inefficient ordering experience — simplifying the user journey, improving navigation clarity, and reducing order completion time.",
    problem:
      "Existing apps had confusing navigation, too many ordering steps, poor food category organization, difficulty finding items quickly, and a slow process — causing frequent order abandonment.",
    goals: [
      "Simplify the overall food ordering experience",
      "Improve clarity of navigation and app structure",
      "Reduce the number of steps to place an order",
      "Make food discovery faster and easier",
      "Improve user satisfaction and speed of ordering",
    ],
    researchInsights: [
      "Users abandon orders due to confusing navigation",
      "Reorganized menu structure dramatically improves clarity",
      "Logical food groupings reduce decision fatigue",
      "Clear hierarchy of content boosts discovery speed",
      "Bottom navigation is preferred for key mobile actions",
    ],
    designApproach: [
      {
        heading: "Simplified Multi-Screen Flow",
        points: [
          "Clear separation of app sections (Home, Menu, Cart, Checkout)",
          "Logical progression from browsing to ordering",
          "Reduced cognitive load across screens",
        ],
      },
      {
        heading: "Fast Ordering Experience",
        points: [
          "Quick add-to-cart interactions",
          "Reduced checkout steps",
          "Clear order summary before payment",
          "Smooth transitions between screens",
        ],
      },
      {
        heading: "Improved Navigation",
        points: [
          "Bottom navigation for key actions",
          "Easy access to categories and search",
          "Faster switching between sections",
          "Clear content hierarchy",
        ],
      },
    ],
    solution:
      "A multi-screen food delivery mobile app with a simplified and optimized ordering flow designed for speed and usability — reducing order time and confusion at every step.",
    outcomes: [
      "Reduced average order time by 45 seconds",
      "Improved overall user satisfaction",
      "Faster completion of food orders",
      "Reduced confusion in navigation",
      "More efficient user journey from browsing to checkout",
    ],
    impact: [
      "Significant improvement in ordering efficiency",
      "Better usability for first-time users",
      "Increased likelihood of order completion",
      "More intuitive app experience overall",
      "Stronger user retention through simplicity",
    ],
  },
  {
    title: "Luxury Car Rental App",
    category: "App Design",
    image: rentalapp,
    overview:
      "A luxury car rental app designed to transform a slow and confusing booking experience into a seamless, premium mobile journey — making renting luxury cars feel fast, simple, and exclusive.",
    problem:
      "The existing car rental experience had a slow booking process, confusing navigation between car options and pricing, poor visual presentation of vehicles, and too many steps before confirming a booking.",
    goals: [
      "Simplify the car rental booking experience",
      "Create a premium and luxurious mobile interface",
      "Improve clarity in car selection and pricing",
      "Reduce booking time and friction",
      "Build a high-end digital rental experience",
    ],
    researchInsights: [
      "Luxury users expect fewer taps to confirm bookings",
      "Full-screen car imagery dramatically increases appeal",
      "Date and pickup selection is the biggest drop-off point",
      "Minimal input fields correlate with booking completion",
      "Premium dark palettes reinforce luxury perception",
    ],
    designApproach: [
      {
        heading: "Luxury Visual Identity",
        points: [
          "Dark, elegant color palette with premium accents",
          "Full-screen car imagery for strong visual impact",
          "Minimal interface to highlight vehicles",
          "Smooth gradients and subtle lighting effects",
        ],
      },
      {
        heading: "Car Discovery Experience",
        points: [
          "Category-based browsing (SUVs, sports, luxury, etc.)",
          "High-quality car cards with key details",
          "Clear pricing and availability indicators",
          "Easy comparison between vehicles",
        ],
      },
      {
        heading: "Seamless Booking Flow",
        points: [
          "Simple date and time selection",
          "Clear pickup and drop-off interface",
          "Fast confirmation process",
          "Minimal input fields to reduce friction",
        ],
      },
    ],
    solution:
      "A luxury car rental mobile app combining elegant design with a fast and simplified booking experience — letting users browse, select, and confirm rentals in just a few steps.",
    outcomes: [
      "Simplified premium rental experience",
      "Reduced booking friction significantly",
      "Faster user journey from browsing to confirmation",
      "Improved clarity in car selection process",
      "Stronger perception of luxury and quality",
    ],
    impact: [
      "Elevated digital experience for car rental users",
      "Increased usability for mobile booking",
      "Stronger premium brand positioning",
      "Improved customer satisfaction",
      "More efficient rental process overall",
    ],
  },
  {
    title: "BlissCoffee Mobile App v2",
    category: "App Design",
    image: coffeeapp2,
    overview:
      "BlissCoffee v2 is an improved version of the original coffee ordering experience, introducing deeper customization options and enhanced product presentation for a more personal and premium mobile ordering journey.",
    problem:
      "The previous app version lacked flexibility — limited product detail, no customization for coffee preferences, a basic ordering flow with minimal engagement, and missed opportunities to enhance product value perception.",
    goals: [
      "Improve product display and clarity",
      "Introduce customization features for coffee orders",
      "Enhance mobile ordering experience",
      "Make the app feel more interactive and premium",
      "Increase user satisfaction during ordering",
    ],
    researchInsights: [
      "Users want to personalize size, milk, and extras",
      "Real-time price updates during customization build trust",
      "Enhanced product visuals increase perceived quality",
      "Step-by-step ordering reduces errors and confusion",
      "Warm UI tones strengthen emotional brand connection",
    ],
    designApproach: [
      {
        heading: "Enhanced Product Display",
        points: [
          "High-quality coffee visuals",
          "Clear product descriptions and highlights",
          "Premium card layouts for each coffee item",
          "Focus on taste, origin, and experience",
        ],
      },
      {
        heading: "Customization Experience",
        points: [
          "Size selection (Small, Medium, Large)",
          "Ingredient adjustments (milk type, sugar level, extras)",
          "Real-time price updates based on choices",
          "Simple toggle-based selection system",
        ],
      },
      {
        heading: "Premium Mobile Feel",
        points: [
          "Dark, modern coffee-inspired UI",
          "Warm accent colors for emotional appeal",
          "Smooth animations for interactions",
          "Clean typography for clarity",
        ],
      },
    ],
    solution:
      "A modern coffee ordering mobile app with enhanced product presentation and flexible customization options — letting users explore in detail, personalize their drinks, and enjoy a smoother ordering flow.",
    outcomes: [
      "Enhanced mobile ordering experience",
      "Increased user engagement with product customization",
      "Improved clarity in product selection",
      "More personalized coffee ordering journey",
      "Stronger interaction with app features",
    ],
    impact: [
      "Elevated user experience through personalization",
      "Improved perceived value of coffee products",
      "More engaging and interactive ordering system",
      "Stronger brand connection with users",
      "Better usability across mobile devices",
    ],
  },
  {
    title: "Clothing & Fashion App",
    category: "App Design",
    image: clothingapp,
    overview:
      "A modern, stylish mobile shopping app delivering a highly engaging fashion experience — built for fast browsing, trend discovery, and a seamless checkout flow with promotions and wishlist features.",
    problem:
      "Users struggled with outdated and cluttered shopping interfaces, difficult navigation between collections, weak visual presentation of fashion items, a slow checkout flow, and a lack of engaging promotional features.",
    goals: [
      "Create a modern and trendy fashion shopping experience",
      "Improve product discovery and browsing flow",
      "Design a smooth and fast checkout system",
      "Enhance visual appeal of fashion collections",
      "Increase engagement through promotions and offers",
    ],
    researchInsights: [
      "Visual storytelling is the number one driver in fashion apps",
      "Wishlist features increase return visits",
      "Promo code visibility directly boosts conversion",
      "Thumb-friendly navigation is critical for mobile shopping",
      "Collection-based browsing reduces decision fatigue",
    ],
    designApproach: [
      {
        heading: "Elegant Fashion-Focused UI",
        points: [
          "Clean and modern aesthetic",
          "High-quality product imagery as the main focus",
          "Stylish typography to match fashion branding",
          "Balanced whitespace for a premium feel",
        ],
      },
      {
        heading: "Collection-Based Browsing",
        points: [
          "Trending collections highlighted on home screen",
          "Category-based navigation (Men, Women, Accessories)",
          "Smooth horizontal and vertical scrolling experience",
          "Visual-first discovery approach",
        ],
      },
      {
        heading: "Smart Shopping Features",
        points: [
          "Quick add-to-cart functionality",
          "Wishlist for saving favorite items",
          "Promo code and discount integration",
          "Real-time price updates during checkout",
        ],
      },
    ],
    solution:
      "A modern and elegant fashion shopping mobile app blending strong visual appeal with a fast purchasing experience — letting users explore collections, apply promos, and complete purchases smoothly.",
    outcomes: [
      "Engaging and visually appealing shopping experience",
      "Improved product discovery and exploration",
      "Faster checkout and purchase flow",
      "Higher user interaction with collections and promotions",
      "Stronger fashion brand experience on mobile",
    ],
    impact: [
      "Enhanced digital fashion shopping experience",
      "Increased user engagement and retention",
      "Improved conversion through simplified flow",
      "Stronger emotional connection with fashion content",
      "More enjoyable mobile shopping journey",
    ],
  },

  // ─── WEB DESIGN ────────────────────────────────────────────────────────────
  {
    title: "Iwacu Coffee Website",
    category: "Web Design",
    image: iwacucoffee,
    overview:
      "Iwacu Coffee needed a strong and engaging digital presence that reflects the richness of its coffee, brand identity, and cultural story — built around emotional storytelling, visual atmosphere, and premium brand presentation.",
    problem:
      "The coffee brand lacked a strong digital identity: weak online presence not reflecting product quality, no emotional storytelling, limited visitor engagement, poor visual representation, and missed opportunities for premium brand perception.",
    goals: [
      "Build a premium and engaging coffee brand website",
      "Create an atmospheric visual experience",
      "Highlight the story behind Iwacu Coffee",
      "Showcase coffee products in an appealing way",
      "Strengthen emotional connection with users",
    ],
    researchInsights: [
      "Coffee brands perform best with emotional storytelling",
      "Atmospheric visuals increase brand perception",
      "Users connect with origin stories and authenticity",
      "Warm tones and cinematic imagery improve engagement",
      "Simplicity enhances premium brand feeling",
    ],
    designApproach: [
      {
        heading: "Atmospheric Visual Direction",
        points: [
          "Warm, earthy color palette inspired by coffee tones",
          "Cinematic photography of coffee beans, brewing, and lifestyle",
          "Soft lighting effects to create depth and warmth",
          "Full-screen visuals to immerse users",
        ],
      },
      {
        heading: "Brand Storytelling",
        points: [
          "Origin of coffee and cultural background sections",
          "Farming and roasting process narrative",
          "Human-centered storytelling approach",
          "Emotional flow from farm to cup",
        ],
      },
      {
        heading: "UI & Experience Design",
        points: [
          "Minimal and refined interface",
          "Smooth scrolling experience",
          "Elegant typography for premium feel",
          "Balanced whitespace for luxury branding",
        ],
      },
    ],
    solution:
      "A premium, atmospheric coffee website that blends storytelling with strong visual identity — letting users experience the brand emotionally, understand the product story, and explore offerings in a premium way.",
    outcomes: [
      "Stronger digital brand representation",
      "Improved user engagement with brand story",
      "Enhanced perception of product quality",
      "More immersive brand experience online",
      "Better emotional connection with customers",
    ],
    impact: [
      "Elevated brand identity to a premium level",
      "Increased storytelling-driven engagement",
      "Stronger differentiation in the coffee market",
      "Improved trust and authenticity perception",
      "More memorable user experience",
    ],
  },
  {
    title: "Logistics Company Website",
    category: "Web Design",
    image: logisticweb,
    overview:
      "A professional corporate website designed to give a logistics company a trustworthy online presence that clearly communicates services and builds confidence in the brand with corporate clients.",
    problem:
      "The company had a weak online presence not reflecting professionalism, lacked clear service presentation, had low client trust due to outdated design, and struggled to attract corporate clients.",
    goals: [
      "Create a professional and trustworthy corporate website",
      "Clearly present logistics services and solutions",
      "Improve brand credibility and client confidence",
      "Simplify service discovery for users",
      "Build a modern digital identity for the company",
    ],
    researchInsights: [
      "Trust is the most important factor in logistics websites",
      "Clear service breakdown improves understanding",
      "Corporate clients prefer structured and formal layouts",
      "Simplicity enhances professionalism",
      "Contact and inquiry access must be highly visible",
    ],
    designApproach: [
      {
        heading: "Corporate & Trust-Focused Design",
        points: [
          "Clean and minimal layout",
          "Strong grid system for structure",
          "Blue and neutral tones to communicate trust",
          "Consistent spacing for clarity and order",
        ],
      },
      {
        heading: "Service Presentation",
        points: [
          "Freight forwarding, warehousing, transportation sections",
          "Simple descriptions with visual icon or image",
          "Easy-to-understand layout for each service",
        ],
      },
      {
        heading: "User Experience Design",
        points: [
          "Clear navigation menu for quick access",
          "Prominent Request a Quote call-to-action",
          "Contact details always visible",
          "Mobile-friendly responsive design",
        ],
      },
    ],
    solution:
      "A modern logistics website that emphasizes trust, clarity, and professional service presentation — letting users understand services quickly, trust the company's professionalism, and request support easily.",
    outcomes: [
      "Increased client trust and credibility",
      "Improved clarity of logistics services",
      "Better engagement from corporate clients",
      "Stronger professional brand identity",
      "Easier client inquiry process",
    ],
    impact: [
      "Strengthened digital reputation of the company",
      "Improved conversion from visitors to inquiries",
      "Enhanced trust in logistics operations",
      "More professional online presence",
      "Better communication of services",
    ],
  },
  {
    title: "E-Commerce Platform Redesign",
    category: "Web Design",
    image: projectWeb1,
    overview:
      "A conversion-focused e-commerce platform redesign tackling low sales performance and high cart abandonment — driven by data, user behavior insights, and a streamlined checkout experience.",
    problem:
      "Low conversion rate despite consistent traffic, high cart abandonment during checkout, a confusing and outdated UI, unoptimized product discovery, and a lack of trust signals during the purchase journey.",
    goals: [
      "Increase conversion rate across the platform",
      "Reduce cart abandonment significantly",
      "Improve overall user experience and navigation",
      "Streamline the checkout process",
      "Build a modern and trustworthy shopping interface",
    ],
    researchInsights: [
      "Cart abandonment is mainly caused by long checkout flows",
      "Trust elements directly impact conversions",
      "Simpler UI leads to higher purchase completion rates",
      "Mobile optimization is critical for e-commerce success",
      "Clear product presentation increases engagement",
    ],
    designApproach: [
      {
        heading: "Modern UI Redesign",
        points: [
          "Clean and modern interface system",
          "Strong visual hierarchy for products",
          "Simplified navigation structure",
          "Trust indicators added throughout the experience",
        ],
      },
      {
        heading: "Streamlined Checkout Flow",
        points: [
          "Reduced number of checkout steps",
          "Guest checkout option added",
          "Clear progress indicators",
          "Minimal distractions during payment process",
        ],
      },
      {
        heading: "A/B Testing Approach",
        points: [
          "Tested different checkout layouts",
          "Compared button placements and CTAs",
          "Evaluated product page variations",
          "Iterated based on user behavior data",
        ],
      },
    ],
    solution:
      "A modern, conversion-optimized e-commerce platform that simplifies purchasing and improves user trust — making product discovery easy, checkout frictionless, and the overall experience confidence-building.",
    outcomes: [
      "15% increase in conversion rate",
      "25% reduction in cart abandonment",
      "Improved user satisfaction during checkout",
      "Faster purchase completion times",
      "Stronger overall shopping experience",
    ],
    impact: [
      "Significant revenue performance improvement",
      "More efficient customer journey",
      "Reduced friction in buying process",
      "Increased trust in the platform",
      "Better retention of potential buyers",
    ],
  },
  {
    title: "Furniture Store Website",
    category: "Web Design",
    image: furniturewebM,
    overview:
      "A visual-first furniture website designed to give a furniture brand better product presentation online, showcasing pieces through lifestyle imagery and a modern, clean aesthetic.",
    problem:
      "The furniture brand needed better product presentation online — existing digital presence lacked the visual quality and lifestyle context to communicate the appeal of their pieces.",
    goals: [
      "Create a visually rich furniture shopping experience",
      "Showcase products through lifestyle imagery",
      "Build a modern and attractive online store",
      "Improve product discovery and browsing",
      "Strengthen the brand's digital presence",
    ],
    researchInsights: [
      "Lifestyle imagery increases furniture purchase intent",
      "Room-context visuals help users envision products at home",
      "Minimal layouts keep focus on product beauty",
      "Clean navigation reduces decision fatigue",
      "Mobile browsing is growing in furniture retail",
    ],
    designApproach: [
      {
        heading: "Visual-First Experience",
        points: [
          "Full-width lifestyle photography",
          "Product imagery in real room contexts",
          "Clean layout to highlight product aesthetics",
          "Generous whitespace for a premium feel",
        ],
      },
      {
        heading: "Modern Store Structure",
        points: [
          "Category-based navigation",
          "Product cards with clear pricing and specs",
          "Easy filtering and sorting options",
          "Smooth browsing between collections",
        ],
      },
    ],
    solution:
      "A modern furniture website with lifestyle imagery and a clean, premium structure — giving the brand an attractive online store presence that communicates product quality through visual storytelling.",
    outcomes: [
      "Attractive and modern online store presence",
      "Improved product presentation quality",
      "Better user engagement with collections",
      "Stronger visual brand identity online",
      "Increased interest from digital shoppers",
    ],
    impact: [
      "Elevated brand perception through lifestyle design",
      "Improved product discovery experience",
      "Stronger digital foundation for online sales",
      "More memorable browsing experience",
      "Better competitive positioning in furniture retail",
    ],
  },
  {
    title: "Healthcare Website",
    category: "Web Design",
    image: hospitalweb,
    overview:
      "A calm, professional, and human-centered healthcare website designed to build trust instantly, reduce patient anxiety, and improve access to medical services — transforming a basic presence into a modern digital healthcare experience.",
    problem:
      "Healthcare providers had outdated websites causing lack of trust, poor UX creating confusion instead of clarity, patients struggling to find services and booking options, and no emotional connection between patient and medical brand.",
    goals: [
      "Build trust instantly through design",
      "Reduce patient anxiety when interacting with the website",
      "Make medical information simple and easy to understand",
      "Improve accessibility of key services",
      "Create a professional identity that reflects care and reliability",
    ],
    researchInsights: [
      "Patients value clarity over creativity in healthcare platforms",
      "Calm colors and minimal layouts reduce stress",
      "Trust is strongly influenced by doctor visibility and transparency",
      "Users prefer fast access to Book Appointment actions",
      "Mobile usability is critical for healthcare information access",
    ],
    designApproach: [
      {
        heading: "Emotional Design",
        points: [
          "Soft blue tones, white space, and gentle visual hierarchy",
          "Calm, safe, and human-centered interface feel",
          "Designed to reduce anxiety and create comfort",
        ],
      },
      {
        heading: "UX Structure",
        points: [
          "Home with clear overview and quick actions",
          "Easy-to-understand medical service categories",
          "Doctor profiles with credibility focus",
          "Frictionless appointment booking flow",
        ],
      },
      {
        heading: "Trust-Building Elements",
        points: [
          "Doctor profiles with qualifications and experience",
          "Patient testimonials for credibility",
          "Visible certifications and hospital credibility indicators",
          "Clear emergency contact section",
        ],
      },
    ],
    solution:
      "A modern healthcare website balancing professionalism with emotional comfort — letting users quickly understand services, easily find doctors, book appointments in a few steps, and feel reassured throughout.",
    outcomes: [
      "Strong increase in user trust and perceived professionalism",
      "Better engagement with key pages including services and booking",
      "Reduced drop-off rate during navigation",
      "More confident user interactions with healthcare services",
    ],
    impact: [
      "Improved patient confidence in the medical brand",
      "Simplified access to healthcare services",
      "Reduced confusion and stress during user journeys",
      "Strengthened digital identity of the healthcare provider",
    ],
  },
  {
    title: "Kaze Restaurant Website",
    category: "Web Design",
    image: kazerestraurant,
    overview:
      "Kaze Restaurant needed a digital presence that reflects the taste and quality of its food — combining visual appetite appeal with a seamless table booking system to maximize online customer reach.",
    problem:
      "The restaurant had a weak digital identity, lacked engaging visuals to trigger appetite and interest, had no smooth reservation system, relied on phone calls and walk-ins, and missed opportunities for online engagement.",
    goals: [
      "Create a visually appetizing and attractive restaurant website",
      "Showcase food in a way that increases desire and engagement",
      "Build a simple and fast table booking system",
      "Improve customer convenience and accessibility",
      "Strengthen the restaurant's brand identity online",
    ],
    researchInsights: [
      "High-quality food images significantly increase conversion rates",
      "Users prefer fast booking systems with minimal steps",
      "Menus should be easy to scan, not overwhelming",
      "Visual storytelling plays a huge role in food decision-making",
      "Mobile-first design is essential for restaurant users",
    ],
    designApproach: [
      {
        heading: "Visual Appetite Focus",
        points: [
          "High-resolution food photography",
          "Close-up shots highlighting texture and freshness",
          "Warm color tones to stimulate appetite",
          "Clean layouts to keep attention on food visuals",
        ],
      },
      {
        heading: "Booking System Design",
        points: [
          "Fast and intuitive booking flow",
          "Mobile-friendly time-slot selection",
          "Simple form (name, date, time, guests)",
          "Instant confirmation feedback",
        ],
      },
    ],
    solution:
      "A modern restaurant website blending visual storytelling with a frictionless booking system — letting users explore meals visually, feel emotionally connected, and book tables in seconds.",
    outcomes: [
      "Increased online table reservations",
      "Higher engagement with menu pages",
      "Improved customer satisfaction due to easy booking",
      "Stronger brand perception as a modern restaurant",
      "Reduced dependency on manual phone bookings",
    ],
    impact: [
      "Better conversion from website visitors to customers",
      "Enhanced appetite-driven user experience",
      "Improved operational efficiency for reservations",
      "Strong digital identity for Kaze Restaurant",
    ],
  },
  {
    title: "Gaming Website - KriGame",
    category: "Web Design",
    image: gamewebdesign,
    overview:
      "KriGame needed a bold, modern, and immersive gaming website reflecting energy, speed, and intensity — directly appealing to gamers and digital entertainment audiences through high-impact visuals and structured product showcase.",
    problem:
      "The gaming brand lacked a modern online identity, had weak visual direction not reflecting gaming culture, no immersive experience to engage users, poor product visibility, and difficulty attracting a gaming audience.",
    goals: [
      "Create a bold and high-energy gaming website",
      "Build an immersive experience that reflects gaming culture",
      "Use visuals that feel dynamic, modern, and powerful",
      "Improve product and game showcase clarity",
      "Engage users instantly through strong visual impact",
    ],
    researchInsights: [
      "Gamers prefer dark UI themes with strong contrast and glow effects",
      "Motion, gradients, and dynamic visuals increase engagement",
      "Fast loading and smooth interactions are essential",
      "Hero sections are critical for first impression impact",
      "Product displays should feel interactive and bold",
    ],
    designApproach: [
      {
        heading: "Dark & Energetic Theme",
        points: [
          "Deep black and dark gray backgrounds",
          "Neon-inspired accent colors for energy",
          "Glow effects to emphasize key elements",
          "High contrast for visual clarity",
        ],
      },
      {
        heading: "Dynamic Hero Section",
        points: [
          "Bold typography with strong presence",
          "Gaming imagery reflecting action and intensity",
          "Clear call-to-action to engage users instantly",
        ],
      },
      {
        heading: "Product & Game Showcase",
        points: [
          "Card-based layout for games and products",
          "Hover effects to create interactivity",
          "Clear visuals with minimal text clutter",
          "Micro-interactions to enhance engagement",
        ],
      },
    ],
    solution:
      "A high-energy gaming website blending immersive visuals with a structured product showcase — letting users instantly feel the gaming atmosphere and interact with a modern responsive interface.",
    outcomes: [
      "Strong visual appeal to gaming audiences",
      "Increased engagement through immersive design",
      "Improved product visibility and exploration",
      "Stronger brand identity in the gaming space",
      "Better retention due to interactive UI experience",
    ],
    impact: [
      "Enhanced emotional connection with gamers",
      "Clear positioning as a modern gaming brand",
      "Improved user interaction and time on site",
      "Strong differentiation from traditional gaming websites",
    ],
  },
  {
    title: "Cake & Bakery Website",
    category: "Web Design",
    image: cakeweb,
    overview:
      "An elegant bakery website designed to showcase cakes and baked goods in a visually irresistible way — combining a visual-first approach with a structured product catalog to improve discovery and strengthen brand identity.",
    problem:
      "The bakery had poor online product presentation, no structured catalog, a lack of emotional appeal in its digital presence, difficulty for customers to browse products, and missed opportunities for online orders.",
    goals: [
      "Create a visually rich and attractive bakery website",
      "Showcase cakes and baked goods in a mouth-watering way",
      "Build a structured and easy-to-browse product catalog",
      "Improve customer engagement and discovery of products",
      "Strengthen the bakery's online identity and appeal",
    ],
    researchInsights: [
      "Users respond strongly to high-quality close-up food imagery",
      "Visual appeal directly influences purchase decisions",
      "Simple navigation increases product exploration",
      "Categories improve browsing experience",
      "Emotional design drives engagement in food brands",
    ],
    designApproach: [
      {
        heading: "Visual-First Experience",
        points: [
          "Large, high-resolution cake photography",
          "Close-up shots showing texture, cream, and detail",
          "Soft lighting to enhance freshness and sweetness",
          "Minimal distractions to keep focus on products",
        ],
      },
      {
        heading: "Elegant UI Direction",
        points: [
          "Soft pastel tones inspired by bakery aesthetics",
          "Clean typography for readability and elegance",
          "Spacious layouts to highlight product visuals",
          "Gentle shadows for depth and softness",
        ],
      },
      {
        heading: "Product Catalog Structure",
        points: [
          "Categories such as cakes, cupcakes, pastries, desserts",
          "Grid-based product layout for clarity",
          "Product cards with images, names, and short descriptions",
          "Simple filtering for faster discovery",
        ],
      },
    ],
    solution:
      "A beautiful, elegant bakery website combining visual storytelling with a structured product catalog — letting users experience cakes visually, browse easily, and feel emotionally connected through design.",
    outcomes: [
      "Improved visual appeal of bakery products online",
      "Increased customer engagement and browsing time",
      "Stronger brand perception as a premium bakery",
      "Easier product discovery and exploration",
      "Better foundation for online orders and sales growth",
    ],
    impact: [
      "Enhanced emotional connection with customers",
      "Increased interest in bakery products through visuals",
      "Improved digital identity for the bakery brand",
      "More professional and modern online presence",
    ],
  },
  {
    title: "OLC Web Design",
    category: "Web Design",
    image: olcwebdesign,
    overview:
      "A modern, clean, and appetizing website for OLC food outlet — focused on strong food visuals, a simplified ordering experience, and an interface that builds confidence and drives online orders.",
    problem:
      "OLC had an outdated and unappealing digital presence, lacked strong visual food appeal, had a complicated online ordering experience, limited digital engagement, and a weak brand identity online.",
    goals: [
      "Create a modern and appetizing restaurant website",
      "Improve food presentation through strong visuals",
      "Simplify the online ordering experience",
      "Build a clean and user-friendly interface",
      "Strengthen brand trust and digital presence",
    ],
    researchInsights: [
      "Users decide quickly based on visual food appeal",
      "Simplicity in ordering increases conversion rates",
      "Clear menu structure improves user experience",
      "Mobile-friendly design is essential for food ordering",
      "Trust elements increase customer confidence",
    ],
    designApproach: [
      {
        heading: "Food-Focused Visual Design",
        points: [
          "High-quality food photography",
          "Clean presentation of dishes",
          "Focus on freshness and texture",
          "Minimal distractions to highlight food",
        ],
      },
      {
        heading: "Ordering Experience",
        points: [
          "Quick add-to-cart functionality",
          "Clear pricing and item descriptions",
          "Minimal steps to complete an order",
          "Smooth checkout process",
        ],
      },
    ],
    solution:
      "A modern and inviting restaurant website prioritizing food appeal and a seamless ordering experience — letting users explore the menu visually, feel confident in food quality, and place orders quickly.",
    outcomes: [
      "Improved online ordering experience",
      "Better engagement with menu and food items",
      "Increased user confidence in the restaurant brand",
      "More efficient customer ordering flow",
      "Stronger digital presence for OLC",
    ],
    impact: [
      "Enhanced customer satisfaction through simplicity",
      "Improved conversion from browsing to ordering",
      "Stronger visual identity for the restaurant",
      "Better usability across mobile and desktop users",
    ],
  },
  {
    title: "KPI Stock Management Dashboard",
    category: "Web Design",
    image: kpiweb,
    overview:
      "A real-time KPI Stock Management Dashboard designed to transform complex inventory data into clear, actionable insights — improving decision-making speed and operational efficiency for businesses.",
    problem:
      "The existing inventory system had complex data with no clear structure, no real-time stock visibility, difficulty tracking KPIs, poor decision-making due to unclear insights, and time-consuming manual monitoring.",
    goals: [
      "Simplify complex inventory data into a clean dashboard",
      "Provide real-time visibility of stock performance",
      "Highlight key performance indicators clearly",
      "Improve decision-making speed and accuracy",
      "Create a user-friendly analytics experience",
    ],
    researchInsights: [
      "Users prefer visual data over raw numbers",
      "KPIs must be visible immediately without searching",
      "Real-time updates improve operational control",
      "Charts and graphs increase data understanding",
      "Clean layouts reduce cognitive overload in data-heavy systems",
    ],
    designApproach: [
      {
        heading: "Clarity-First Dashboard Design",
        points: [
          "Clean grid layout for structured data display",
          "Clear separation of KPIs and detailed analytics",
          "Minimal distractions to focus on performance data",
          "Logical grouping of inventory categories",
        ],
      },
      {
        heading: "Data Visualization System",
        points: [
          "Line charts for trends and performance over time",
          "Bar charts for stock comparison",
          "Highlight cards for critical metrics",
          "Color-coded indicators for stock status",
        ],
      },
    ],
    solution:
      "A real-time KPI Stock Management Dashboard turning complex inventory data into clear, actionable insights — letting users monitor stock levels instantly, identify trends, and make faster business decisions.",
    outcomes: [
      "Improved inventory visibility across the system",
      "Faster and more accurate decision-making",
      "Reduced confusion in stock tracking",
      "Better operational efficiency for businesses",
      "Clear understanding of key performance metrics",
    ],
    impact: [
      "Transformed complex data into simple insights",
      "Increased productivity in inventory management",
      "Improved business control over stock flow",
      "Reduced errors in manual monitoring",
      "Enhanced user confidence in data accuracy",
    ],
  },
  {
    title: "CReconnect Studio Finder",
    category: "Web Design",
    image: creweb,
    overview:
      "CReconnect Studio Finder is a platform designed to help users easily discover creative studios in Kigali — simplifying the process of finding, comparing, and exploring creative spaces through a modern directory experience.",
    problem:
      "Finding creative studios in Kigali was challenging: no centralized platform, difficulty comparing options, limited visibility for small studios, no structured search or filtering, and heavy reliance on word-of-mouth.",
    goals: [
      "Create a centralized platform for studio discovery",
      "Make it easy to search and filter creative spaces",
      "Improve visibility for local studios in Kigali",
      "Simplify the booking and discovery journey",
      "Build a modern, user-friendly directory experience",
    ],
    researchInsights: [
      "Users want fast discovery, not long browsing",
      "Filters by location, type, price, and availability are essential",
      "Visual previews increase trust and interest",
      "Creatives prefer platforms that feel modern and minimal",
      "Search-first design improves usability in directories",
    ],
    designApproach: [
      {
        heading: "Search-Driven Experience",
        points: [
          "Prominent search bar for instant discovery",
          "Smart filtering by studio type and category",
          "Quick suggestions for faster navigation",
          "Minimal steps to reach results",
        ],
      },
      {
        heading: "Studio Listing System",
        points: [
          "High-quality studio images",
          "Short descriptions and key details",
          "Location and availability indicators",
          "Clear call-to-action for viewing or booking",
        ],
      },
    ],
    solution:
      "A modern creative studio directory platform making discovering and accessing studios in Kigali simple and efficient — letting users quickly find, compare, and connect with studios based on their needs.",
    outcomes: [
      "Improved discoverability of creative studios in Kigali",
      "Easier access for creatives and clients",
      "Increased visibility for local studios",
      "Faster search and decision-making process",
      "Stronger digital presence for creative spaces",
    ],
    impact: [
      "Strengthened creative ecosystem connectivity",
      "Simplified studio discovery experience",
      "Increased opportunities for local studios",
      "Improved user satisfaction through easy navigation",
      "Built a foundation for a scalable creative marketplace",
    ],
  },
  {
    title: "Recruitment Dashboard",
    category: "Web Design",
    image: dashboard,
    overview:
      "A centralized recruitment dashboard designed to help recruiters manage job applications simply, track hiring progress, and manage interviews efficiently — eliminating disorganized hiring workflows.",
    problem:
      "Recruiters faced too many applications with no clear overview, difficulty tracking candidate progress, no centralized interview schedule view, time-consuming manual sorting, and inefficient communication workflows.",
    goals: [
      "Create a clean and structured recruitment dashboard",
      "Provide a clear overview of all applicants",
      "Simplify candidate tracking through hiring stages",
      "Integrate scheduling and calendar functionality",
      "Improve recruiter productivity and decision-making speed",
    ],
    researchInsights: [
      "Recruiters need fast access to candidate status",
      "Visual pipelines improve hiring clarity",
      "Calendar integration is essential for interview management",
      "Bulk data must be simplified into digestible sections",
      "Quick actions reduce workflow delays",
    ],
    designApproach: [
      {
        heading: "Clean Dashboard Structure",
        points: [
          "KPI overview cards (total applicants, shortlisted, hired)",
          "Clear separation of hiring stages",
          "Minimal distractions for focused workflow",
          "Logical layout for recruiter tasks",
        ],
      },
      {
        heading: "Applicant Tracking System",
        points: [
          "Structured pipeline: New — Shortlisted — Interview — Hired",
          "Candidate cards with name, role, and status",
          "Quick action buttons (shortlist, reject, schedule)",
          "Search and filter functionality for applicants",
        ],
      },
      {
        heading: "Calendar & Scheduling",
        points: [
          "Integrated interview calendar",
          "Visual interview scheduling system",
          "Clear time-slot organization",
          "Easy drag-and-schedule concept",
        ],
      },
    ],
    solution:
      "A modern recruitment dashboard simplifying hiring workflows through structured applicant tracking and calendar integration — letting recruiters view all applicants in one place, track progress visually, and schedule interviews efficiently.",
    outcomes: [
      "Improved hiring workflow efficiency",
      "Reduced time spent managing applications",
      "Better organization of recruitment stages",
      "Faster communication between recruiters and candidates",
      "More structured hiring process overall",
    ],
    impact: [
      "Streamlined recruitment operations",
      "Improved productivity for HR teams",
      "Reduced hiring delays",
      "Clear visibility into recruitment pipeline",
      "Better decision-making through structured data",
    ],
  },
];

// ── Section pill ─────────────────────────────────────────────────────────────
const SectionLabel = ({ text }: { text: string }) => (
  <p className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-3">{text}</p>
);

// ── The full-page case study view ────────────────────────────────────────────
interface ProjectCaseStudyPageProps {
  project: ProjectDetail;
  onBack: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ProjectCaseStudyPage = ({ project, onBack }: ProjectCaseStudyPageProps) => {
  // Scroll to top when page mounts
  const pageRef = (el: HTMLDivElement | null) => {
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-background">
      {/* ── Top bar ── */}
      <div className="sticky top-0 z-40 bg-background/90 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </button>
          <span className="px-4 py-1 text-xs font-bold tracking-widest uppercase bg-primary/10 text-primary rounded-full">
            {project.category}
          </span>
        </div>
      </div>

      {/* ── Hero: title ── */}
      <div className="max-w-7xl mx-auto px-6 pt-12 pb-10">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          className="text-4xl md:text-6xl font-display font-bold text-foreground leading-tight"
        >
          {project.title}
          <span className="text-primary">.</span>
        </motion.h1>
      </div>

      {/* ── Main two-column layout ── */}
      <div className="max-w-7xl mx-auto px-6 pb-24">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">

          {/* LEFT — sticky image + overview */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:sticky lg:top-24 w-full lg:w-[44%] flex-shrink-0 space-y-6"
          >
            {/* Project image */}
            <div className="w-full rounded-3xl overflow-hidden shadow-2xl border border-border">
              <img
                src={project.image}
                alt={project.title}
                className="w-full object-cover"
              />
            </div>

            {/* Overview — sits directly under the image on desktop */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
              <SectionLabel text="Overview" />
              <p className="text-foreground leading-relaxed text-sm md:text-base">
                {project.overview}
              </p>
            </div>

            {/* Problem — also sits under image so it's paired with it */}
            <div className="bg-card rounded-2xl border border-border p-6 space-y-3">
              <SectionLabel text="Problem Statement" />
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {project.problem}
              </p>
            </div>
          </motion.div>

          {/* RIGHT — all detailed content scrolls */}
          <div className="w-full lg:flex-1 space-y-8">

            {/* Goals */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="bg-card rounded-2xl border border-border p-6"
            >
              <SectionLabel text="Project Goals" />
              <ul className="space-y-3 mt-1">
                {project.goals.map((g, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    <span className="text-foreground text-sm md:text-base leading-relaxed">{g}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Research & Insights */}
            <motion.div
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="bg-card rounded-2xl border border-border p-6"
            >
              <SectionLabel text="Research & Insights" />
              <ul className="space-y-3 mt-1">
                {project.researchInsights.map((r, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <ArrowRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                    <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{r}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Design Approach */}
            <motion.div
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="space-y-4"
            >
              <div className="px-1">
                <SectionLabel text="Design Approach" />
              </div>
              {project.designApproach.map((block, i) => (
                <div key={i} className="bg-card rounded-2xl border border-border p-6">
                  <p className="font-bold text-foreground mb-3">{block.heading}</p>
                  <ul className="space-y-2.5">
                    {block.points.map((pt, j) => (
                      <li key={j} className="flex items-start gap-3">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                        <span className="text-muted-foreground text-sm md:text-base leading-relaxed">{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </motion.div>

            {/* Solution */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="bg-primary/5 border border-primary/25 rounded-2xl p-6"
            >
              <SectionLabel text="Solution" />
              <p className="text-foreground leading-relaxed text-sm md:text-base">{project.solution}</p>
            </motion.div>

            {/* Outcomes + Impact — side by side on larger screens */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="grid sm:grid-cols-2 gap-6"
            >
              <div className="bg-card rounded-2xl border border-border p-6">
                <SectionLabel text="Outcomes" />
                <ul className="space-y-3 mt-1">
                  {project.outcomes.map((o, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground text-sm leading-relaxed">{o}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-card rounded-2xl border border-border p-6">
                <SectionLabel text="Impact" />
                <ul className="space-y-3 mt-1">
                  {project.impact.map((imp, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground text-sm leading-relaxed">{imp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Back button at the bottom */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="pt-4"
            >
              <button
                onClick={onBack}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity group"
              >
                <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                Back to Projects
              </button>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCaseStudyPage;