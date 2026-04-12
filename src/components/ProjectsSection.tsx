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

import mockupcreconnect from "@/assets/Mockup creconnect copy.png";
import branding from "@/assets/branding.png";
import olcwebdesign from "@/assets/olcwebdesign.png";
import dashboard from "@/assets/dashboard.png";
import clothingapp from "@/assets/clothingapp.png";   // ← New Clothing App added

const filters = ["All", "UI/UX", "Web Design", "App Design", "Branding", "Graphic Design"];

const projects = [
  // ==================== UI/UX (3 Mobile Apps + 3 Web Designs) ====================
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

  // ==================== Web Design (All websites & dashboards) ====================
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

  // ==================== App Design (Every Mobile App - including the new Clothing App) ====================
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
    title: "FitTrack Mobile App",
    category: "UI/UX",
    image: projectMobile1,
    problem: "Users struggled to track fitness progress consistently.",
    process: "User research, wireframing, prototyping, usability testing.",
    solution: "Clean dark-theme mobile app with intuitive dashboard.",
    outcome: "40% increase in daily active users within 3 months.",
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
    title: "Luxury Car Rental App",
    category: "App Design",
    image: rentalapp,
    problem: "Car rental booking was slow and confusing.",
    process: "Premium mobile-first design.",
    solution: "Elegant car rental app with easy booking flow.",
    outcome: "Simplified premium rental experience.",
  },
  {
    title: "BlissCoffee Mobile App",
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

  // ==================== Branding (Full Brand Identities) ====================
  {
    title: "CRECONNECT Brand Identity",
    category: "Branding",
    image: crebranding,
    problem: "New creative platform needed a strong memorable brand.",
    process: "Logo design and full brand system.",
    solution: "Modern infinity logo with complete collateral.",
    outcome: "Professional and cohesive brand identity.",
  },
  {
    title: "Sukaba LLC Brand Identity",
    category: "Branding",
    image: sukababranding,
    problem: "Consulting firm needed a trustworthy corporate identity.",
    process: "Logo and full branding package.",
    solution: "Growth-oriented logo with business stationery.",
    outcome: "Strong professional brand presence.",
  },
    {
    title: "Brand Identity – Isanny Court",
    category: "Branding",
    image: projectBranding1,
    problem: "New hospitality brand needed a premium visual identity.",
    process: "Brand strategy workshop, mood boards, multiple iterations.",
    solution: "Complete brand package: logo, stationery, business cards.",
    outcome: "Successfully launched brand with consistent recognition.",
  },
  {
    title: "Fastbreak Trading Brand Identity",
    category: "Branding",
    image: fastbreakm,
    problem: "Trading company needed a dynamic brand look.",
    process: "Bold logo and full merchandise branding.",
    solution: "Energetic arrow logo with complete assets.",
    outcome: "Memorable brand across all touchpoints.",
  },

  // ==================== Graphic Design (Logos only) ====================
  {
    title: "Iwacu Remit Logo",
    category: "Graphic Design",
    image: iwacuremit,
    problem: "Remittance service needed a clean and trustworthy logo.",
    process: "Logo design focused on finance and security.",
    solution: "Modern shield-inspired logo for Iwacu Remit.",
    outcome: "Clear and professional brand mark.",
  },
  {
    title: "RADAR Technology Logo",
    category: "Graphic Design",
    image: radarlogo,
    problem: "Tech company needed a modern and technical brand symbol.",
    process: "Circuit-inspired logo design.",
    solution: "Stylized R logo representing technology and connectivity.",
    outcome: "Strong tech brand identity.",
  },
  
  {
    title: "Sunshine Trading Logo",
    category: "Graphic Design",
    image: sunshinetrading,
    problem: "Trading company needed a global yet local brand mark.",
    process: "Logo design with logistics elements.",
    solution: "Professional trading company logo.",
    outcome: "Strong market brand presence.",
  },
  {
    title: "Sukaba LLC Logo",
    category: "Graphic Design",
    image: sukabalogo,
    problem: "Financial consulting firm needed a clean logo.",
    process: "Logo design with growth elements.",
    solution: "Upward-trending logo for Sukaba LLC.",
    outcome: "Professional corporate logo.",
  },
  {
    title: "Fastbreak Trading Logo",
    category: "Graphic Design",
    image: fastbreaklogo,
    problem: "Trading company needed a dynamic logo.",
    process: "Bold arrow concept logo.",
    solution: "Circular arrow logo for Fastbreak Trading.",
    outcome: "Memorable trading logo.",
  },
  {
    title: "CRECONNECT Logo",
    category: "Graphic Design",
    image: crelogocopy,
    problem: "Creative platform needed a simple and modern logo.",
    process: "Infinity-inspired logo design.",
    solution: "Clean infinity symbol logo.",
    outcome: "Strong minimalist logo.",
  },
  {
    title: "GenzuraDrive Logo",
    category: "Graphic Design",
    image: genzura,
    problem: "Fleet management company needed a modern mobility logo.",
    process: "Multiple logo explorations focused on the mark.",
    solution: "Dynamic and contemporary GenzuraDrive logo.",
    outcome: "Clear and modern logo for the brand.",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = activeFilter === "All"
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
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Projects</p>
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
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group rounded-3xl overflow-hidden bg-background border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-2xl"
            >
              <div className="aspect-[16/10] overflow-hidden">
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
                <h3 className="text-2xl font-bold text-foreground mb-5 leading-tight">{project.title}</h3>

                <div className="space-y-4 text-sm text-muted-foreground">
                  <p><span className="font-semibold text-foreground">Problem: </span>{project.problem}</p>
                  <p><span className="font-semibold text-foreground">Process: </span>{project.process}</p>
                  <p><span className="font-semibold text-foreground">Solution: </span>{project.solution}</p>
                  <p><span className="font-semibold text-foreground">Outcome: </span><span className="text-primary font-medium">{project.outcome}</span></p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
