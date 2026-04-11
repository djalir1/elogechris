import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink } from "lucide-react";

import projectMobile1 from "@/assets/project-mobile-1.jpg";
import projectWeb1 from "@/assets/project-web-1.jpg";
import projectBranding1 from "@/assets/project-branding-1.jpg";
import projectPoster1 from "@/assets/project-poster-1.jpg";
import projectMobile2 from "@/assets/project-mobile-2.jpg";

const filters = ["All", "UI/UX", "Web Design", "Branding", "Graphic Design"];

const projects = [
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
    title: "E-Commerce Platform Redesign",
    category: "Web Design",
    image: projectWeb1,
    problem: "Low conversion rate on existing e-commerce site.",
    process: "Competitive analysis, user journey mapping, A/B testing.",
    solution: "Modernized UI with streamlined checkout flow.",
    outcome: "15% increase in conversion rate, 25% reduction in cart abandonment.",
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
    title: "Event Poster Series",
    category: "Graphic Design",
    image: projectPoster1,
    problem: "Events lacked visual appeal and attendance was low.",
    process: "Creative direction, typography exploration, print-ready design.",
    solution: "Bold, eye-catching poster series with strong hierarchy.",
    outcome: "30% increase in event attendance after visual rebrand.",
  },
  {
    title: "Food Delivery App",
    category: "UI/UX",
    image: projectMobile2,
    problem: "Users found existing food ordering apps confusing.",
    process: "User interviews, information architecture, iterative design.",
    solution: "Multi-screen mobile app with simplified ordering flow.",
    outcome: "Reduced average order time by 45 seconds.",
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
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActiveFilter(f)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl overflow-hidden bg-background border border-border hover:border-primary/30 transition-all"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6 md:p-8">
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mt-2 mb-4">{project.title}</h3>

                <div className="space-y-3 text-sm text-muted-foreground">
                  <div>
                    <span className="font-semibold text-foreground">Problem: </span>
                    {project.problem}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Process: </span>
                    {project.process}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Solution: </span>
                    {project.solution}
                  </div>
                  <div>
                    <span className="font-semibold text-foreground">Outcome: </span>
                    <span className="text-primary font-medium">{project.outcome}</span>
                  </div>
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
