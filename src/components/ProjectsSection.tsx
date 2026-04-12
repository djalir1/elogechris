import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

// Import ALL your project images
import crebranding from "@/assets/crebranding.png";
import dateapp from "@/assets/dateapp.png";
import iwacuremit from "@/assets/iwacu remit.jpg";
import sunshinetrading from "@/assets/sunshinetrading.jpg";
import coffeeapp from "@/assets/coffeeapp.png";
import crelogocopy from "@/assets/crelogo copy.png";
import genzura from "@/assets/genzura.png";
import kazerestraurant from "@/assets/kazerestraurant.png";
import kpiweb from "@/assets/kpiweb.png";
import logisticweb from "@/assets/logisticweb.png";
import sukabalogo from "@/assets/sukaba logo.jpg";
import cakeweb from "@/assets/cakeweb.png";
import coffeeapp2 from "@/assets/coffeeapp2.png";
import creweb from "@/assets/creweb.png";
import fastbreakm from "@/assets/fastbreakm.png";
import foodorderapp from "@/assets/foodorderapp.png";
import gamewebdesign from "@/assets/gamewebdesign.png";
import iwacucoffee from "@/assets/iwacucoffee.png";
import meterapp from "@/assets/meterapp.png";
import sukababranding from "@/assets/sukababranding.png";
import fastbreaklogo from "@/assets/fastbreaklogo.jpg";
import radarlogo from "@/assets/radar logo.jpg";
import rentalapp from "@/assets/rentalapp .png";
import furniturewebM from "@/assets/furniturewebM.png";
import hospitalweb from "@/assets/hospitalweb.png";
import projectMobile1 from "@/assets/project-mobile-1.jpg";
import projectWeb1 from "@/assets/project-web-1.jpg";
import projectBranding1 from "@/assets/project-branding-1.jpg";
import projectMobile2 from "@/assets/project-mobile-2.jpg";
import projectPoster1 from "@/assets/project-poster-1.jpg";
import mockupcreconnect from "@/assets/Mockup creconnect copy.png";
import branding from "@/assets/branding.png";
import olcwebdesign from "@/assets/olcwebdesign.png";
import dashboard from "@/assets/dashboard.png";
import radarBranding from "@/assets/branding.png";
import clothingapp from "@/assets/clothingapp.png";

// Flyers
import burgerFlyer from "@/assets/bur.jpeg";
import africaqueen from "@/assets/Africaqueen.png";
import bestgadgetsflyer from "@/assets/bestgadgetsflyer.png";
import carFlyer from "@/assets/car_flyer.png";
import carrental from "@/assets/carrental.png";
import doveProduct from "@/assets/dove_product.jpeg";
import f1 from "@/assets/f1.png";
import farmersDay from "@/assets/farmer_s_day.jpg";
import plateflyer from "@/assets/Plateflyer.png";
import productFlyer from "@/assets/product_flyer.jpeg";
import shoeflyer from "@/assets/shoeflyer.png";
import womensDayFlyer from "@/assets/womens_day_flyer.png";
import freshjuiceFlyer from "@/assets/freshjuice_flyer.png";

const filters = ["All", "UI/UX", "Web Design", "App Design", "Graphic Design"];

const projects = [
  // ==================== UI/UX ====================
  {
    title: "GreenRide Meter App",
    category: "UI/UX",
    image: meterapp,
    problem: "Taxi drivers needed a simple and accurate fare calculation tool.",
    process: "User research, wireframing, prototyping, and testing.",
    solution: "Clean dark-themed mobile app with real-time tracking.",
    outcome: "Successfully adopted by local taxi drivers.",
  },
  {
    title: "Dating App Redesign",
    category: "UI/UX",
    image: dateapp,
    problem: "Users found dating apps cluttered and unsafe.",
    process: "User interviews and interface refinement.",
    solution: "Modern, safe, and intuitive dating experience.",
    outcome: "Improved user engagement and trust.",
  },
  {
    title: "Clothing & Fashion App",
    category: "UI/UX",
    image: clothingapp,
    problem: "Users needed a modern and trendy fashion shopping experience.",
    process: "Mobile-first UI design with smooth browsing and cart flow.",
    solution: "Elegant fashion app with promo codes, collections, and quick add-to-cart.",
    outcome: "Engaging shopping experience with strong visual appeal.",
  },
  {
    title: "KPI Stock Management Dashboard",
    category: "UI/UX",
    image: kpiweb,
    problem: "Complex inventory system was hard to monitor.",
    process: "Dashboard UI focused on clarity and insights.",
    solution: "Real-time analytics dashboard with intuitive layout.",
    outcome: "Better visibility for the team.",
  },
  {
    title: "FitTrack Mobile App",
    category: "UI/UX",
    image: projectMobile1,
    problem: "Users struggled to track fitness progress consistently.",
    process: "User research, wireframing, prototyping, usability testing.",
    solution: "Clean dark-theme mobile app with intuitive dashboard.",
    outcome: "40% increase in daily active users within 3 months.",
  },
  {
    title: "CReconnect Studio Finder",
    category: "UI/UX",
    image: creweb,
    problem: "Difficult to discover creative studios in Kigali.",
    process: "Platform interface design with strong search experience.",
    solution: "Modern directory platform with excellent UX.",
    outcome: "Helpful platform for creatives and clients.",
  },
  {
    title: "Recruitment Dashboard",
    category: "UI/UX",
    image: dashboard,
    problem: "Recruiters needed a clean overview of applications.",
    process: "Dashboard UI design focused on clarity and quick actions.",
    solution: "Modern recruitment dashboard with calendar and applicant tracking.",
    outcome: "Improved hiring workflow efficiency.",
  },

  // ==================== Web Design ====================
  {
    title: "Iwacu Coffee Website",
    category: "Web Design",
    image: iwacucoffee,
    problem: "Coffee brand lacked an engaging online presence.",
    process: "Atmospheric web design with strong visuals.",
    solution: "Elegant website showcasing coffee and brand story.",
    outcome: "Strong digital brand representation.",
  },
  {
    title: "Logistics Company Website",
    category: "Web Design",
    image: logisticweb,
    problem: "Needed a professional and trustworthy website.",
    process: "Corporate web design focused on services.",
    solution: "Clean modern logistics website.",
    outcome: "Increased client trust.",
  },
  {
    title: "E-Commerce Platform Redesign",
    category: "Web Design",
    image: projectWeb1,
    problem: "Low conversion rate on existing e-commerce site.",
    process: "Competitive analysis, user journey mapping, A/B testing.",
    solution: "Modernized UI with streamlined checkout flow.",
    outcome: "15% increase in conversion rate, 25% reduction in cart abandonment.",
  },
  {
    title: "Furniture Store Website",
    category: "Web Design",
    image: furniturewebM,
    problem: "Furniture needed better product presentation online.",
    process: "Visual-first web design.",
    solution: "Modern furniture website with lifestyle imagery.",
    outcome: "Attractive online store presence.",
  },
  {
    title: "Healthcare Website",
    category: "Web Design",
    image: hospitalweb,
    problem: "Medical services needed a professional digital presence.",
    process: "Trust-building healthcare web design.",
    solution: "Calming and professional healthcare website.",
    outcome: "Increased patient confidence.",
  },
  {
    title: "Kaze Restaurant Website",
    category: "Web Design",
    image: kazerestraurant,
    problem: "Restaurant needed an appetizing online presence.",
    process: "Food photography and booking flow.",
    solution: "Delicious restaurant website with table booking.",
    outcome: "Increased online reservations.",
  },
  {
    title: "Gaming Website - KriGame",
    category: "Web Design",
    image: gamewebdesign,
    problem: "Gaming brand needed an energetic and modern website.",
    process: "Dark theme, dynamic hero, product showcase.",
    solution: "High-energy gaming website with immersive visuals.",
    outcome: "Strong appeal to gaming audience.",
  },
  {
    title: "Cake & Bakery Website",
    category: "Web Design",
    image: cakeweb,
    problem: "Bakery needed attractive product display online.",
    process: "Visual-first web design with mouth-watering imagery.",
    solution: "Elegant cake shop website with product catalog.",
    outcome: "Beautiful online bakery presence.",
  },
  {
    title: "OLC Web Design",
    category: "Web Design",
    image: olcwebdesign,
    problem: "Restaurant needed a modern and appetizing website.",
    process: "Food-focused web design.",
    solution: "Clean and inviting food outlet website.",
    outcome: "Improved online ordering experience.",
  },
  {
    title: "KPI Stock Management Dashboard",
    category: "Web Design",
    image: kpiweb,
    problem: "Complex inventory system was hard to monitor.",
    process: "Dashboard design focused on clarity.",
    solution: "Real-time analytics dashboard.",
    outcome: "Better inventory visibility.",
  },
  {
    title: "CReconnect Studio Finder",
    category: "Web Design",
    image: creweb,
    problem: "Hard to discover creative studios in Kigali.",
    process: "Platform design with powerful search.",
    solution: "Modern directory website for creative spaces.",
    outcome: "Helpful platform for creatives.",
  },
  {
    title: "Recruitment Dashboard",
    category: "Web Design",
    image: dashboard,
    problem: "Recruiters needed a clean overview of applications.",
    process: "Dashboard UI design focused on clarity and quick actions.",
    solution: "Modern recruitment dashboard with calendar and applicant tracking.",
    outcome: "Improved hiring workflow efficiency.",
  },

  // ==================== App Design ====================
  {
    title: "BlissCoffee Mobile App",
    category: "App Design",
    image: coffeeapp,
    problem: "Coffee brand needed an immersive mobile ordering experience.",
    process: "Dark-themed mobile UI with product discovery and cart flow.",
    solution: "Rich coffee app with category browsing, item details, and ordering.",
    outcome: "Elevated mobile brand experience for coffee lovers.",
  },
  {
    title: "GreenRide Meter App",
    category: "App Design",
    image: meterapp,
    problem: "Taxi drivers needed a simple and accurate fare calculation tool.",
    process: "User research, wireframing, prototyping, and testing.",
    solution: "Clean dark-themed mobile app with real-time tracking.",
    outcome: "Successfully adopted by local taxi drivers.",
  },
  {
    title: "Dating App Redesign",
    category: "App Design",
    image: dateapp,
    problem: "Users found dating apps cluttered and unsafe.",
    process: "User interviews and interface refinement.",
    solution: "Modern, safe, and intuitive dating experience.",
    outcome: "Improved user engagement and trust.",
  },
  {
    title: "Food Ordering App",
    category: "App Design",
    image: foodorderapp,
    problem: "Complicated food ordering process frustrated users.",
    process: "User testing and flow optimization.",
    solution: "Smooth and beautiful food delivery interface.",
    outcome: "Faster ordering and higher satisfaction.",
  },
  {
    title: "FitTrack Mobile App",
    category: "App Design",
    image: projectMobile1,
    problem: "Users struggled to track fitness progress consistently.",
    process: "User research, wireframing, prototyping, usability testing.",
    solution: "Clean dark-theme mobile app with intuitive dashboard.",
    outcome: "40% increase in daily active users within 3 months.",
  },
  {
    title: "Food Delivery App",
    category: "App Design",
    image: projectMobile2,
    problem: "Users found existing food ordering apps confusing.",
    process: "User interviews, information architecture, iterative design.",
    solution: "Multi-screen mobile app with simplified ordering flow.",
    outcome: "Reduced average order time by 45 seconds.",
  },
  {
    title: "Luxury Car Rental App",
    category: "App Design",
    image: rentalapp,
    problem: "Car rental booking was slow and confusing.",
    process: "Premium mobile-first design.",
    solution: "Elegant car rental app with easy booking flow.",
    outcome: "Simplified premium rental experience.",
  },
  {
    title: "BlissCoffee Mobile App v2",
    category: "App Design",
    image: coffeeapp2,
    problem: "Coffee shop app needed better product display and ordering.",
    process: "Mobile UI with customization options.",
    solution: "Modern coffee app with size and ingredient selection.",
    outcome: "Enhanced mobile ordering experience.",
  },
  {
    title: "Clothing & Fashion App",
    category: "App Design",
    image: clothingapp,
    problem: "Users needed a modern and trendy fashion shopping experience.",
    process: "Mobile-first UI design with smooth browsing and cart flow.",
    solution: "Elegant fashion app with promo codes, collections, and quick add-to-cart.",
    outcome: "Engaging shopping experience with strong visual appeal.",
  },

  // ==================== Graphic Design (Clean - Title + Category Only) ====================
  {
    title: "CRECONNECT Brand Identity",
    category: "Graphic Design",
    image: crebranding,
  },
  {
    title: "Sukaba LLC Brand Identity",
    category: "Graphic Design",
    image: sukababranding,
  },
  {
    title: "Brand Identity – Isanny Court",
    category: "Graphic Design",
    image: projectBranding1,
  },
  {
    title: "RADAR Technology Brand Identity",
    category: "Graphic Design",
    image: radarBranding,
  },
  {
    title: "Fastbreak Trading Brand Identity",
    category: "Graphic Design",
    image: fastbreakm,
  },
  {
    title: "Iwacu Remit Logo",
    category: "Graphic Design",
    image: iwacuremit,
  },
  {
    title: "RADAR Technology Logo",
    category: "Graphic Design",
    image: radarlogo,
  },
  {
    title: "Sunshine Trading Logo",
    category: "Graphic Design",
    image: sunshinetrading,
  },
  {
    title: "Sukaba LLC Logo",
    category: "Graphic Design",
    image: sukabalogo,
  },
  {
    title: "Fastbreak Trading Logo",
    category: "Graphic Design",
    image: fastbreaklogo,
  },
  {
    title: "CRECONNECT Logo",
    category: "Graphic Design",
    image: crelogocopy,
  },
  {
    title: "GenzuraDrive Logo",
    category: "Graphic Design",
    image: genzura,
  },
  {
    title: "Spicy Burger – CraveHaus Flyer",
    category: "Graphic Design",
    image: burgerFlyer,
  },
  {
    title: "African Queen – Culture Poster",
    category: "Graphic Design",
    image: africaqueen,
  },
  {
    title: "Batife Premium Gadgets – Business Flyer",
    category: "Graphic Design",
    image: bestgadgetsflyer,
  },
  {
    title: "GenzuraDrive – Car Promo Flyer",
    category: "Graphic Design",
    image: carFlyer,
  },
  {
    title: "Auto Plug – Car Sales Flyer",
    category: "Graphic Design",
    image: carrental,
  },
  {
    title: "Dove Body Love – Product Ad",
    category: "Graphic Design",
    image: doveProduct,
  },
  {
    title: "Best Gadgets – Tech Store Flyer",
    category: "Graphic Design",
    image: f1,
  },
  {
    title: "Africa Summing – Farmer's Day Poster",
    category: "Graphic Design",
    image: farmersDay,
  },
  {
    title: "Good Food Good Vibes – Restaurant Flyer",
    category: "Graphic Design",
    image: plateflyer,
  },
  {
    title: "Leomasucre – Fresh Juice Product Ad",
    category: "Graphic Design",
    image: productFlyer,
  },
  {
    title: "GEL-KAYANO 14 – Shoe Product Poster",
    category: "Graphic Design",
    image: shoeflyer,
  },
  {
    title: "International Women's Day – CRenet Poster",
    category: "Graphic Design",
    image: womensDayFlyer,
  },
  {
    title: "Yura Fresh Juice – Product Flyer",
    category: "Graphic Design",
    image: freshjuiceFlyer,
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered =
    activeFilter === "All"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
            Projects
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-8">
            Selected Work<span className="text-primary">.</span>
          </h2>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-6 py-2.5 rounded-2xl text-sm font-medium transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary hover:bg-muted text-secondary-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => {
            const isGraphicDesign = project.category === "Graphic Design";

            return (
              <motion.div
                key={`${activeFilter}-${project.title}-${i}`}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="group rounded-3xl overflow-hidden bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl"
              >
                {/* Larger and freer image area for Graphic Design (Flyers & Branding) */}
                <div className={`overflow-hidden ${isGraphicDesign ? "aspect-[5/6]" : "aspect-[16/10]"}`}>
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="p-8">
                  <span className="inline-block px-4 py-1 text-xs font-semibold tracking-widest bg-primary/10 text-primary rounded-full mb-4">
                    {project.category}
                  </span>

                  <h3 className="text-2xl font-bold text-foreground leading-tight">
                    {project.title}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
