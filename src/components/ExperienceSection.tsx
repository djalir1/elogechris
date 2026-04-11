import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    company: "JOB IN RWANDA",
    location: "Kigali — On-site",
    role: "Marketing & Communication Associate",
    period: "Nov 2024 – Dec 2025",
    bullets: [
      "Managed social media campaigns across multiple platforms",
      "Designed marketing materials and newsletters",
      "Analyzed performance and optimized strategies",
      "Collaborated with HR and design teams",
    ],
  },
  {
    company: "FASTBREAK TRADING",
    location: "USA — Remote",
    role: "UI/UX Designer",
    period: "Jan 2023 – Oct 2024",
    bullets: [
      "Designed UI for new website (increased conversions by 15%)",
      "Built full design system from scratch",
      "Created websites and mobile apps",
      "Assisted in workshops and design processes",
    ],
  },
  {
    company: "GLORY GRAPHICS",
    location: "Kigali — On-site",
    role: "Graphics Designer & UI/UX Designer",
    period: "Jun 2020 – Sep 2022",
    bullets: [
      "Designed company system from scratch",
      "Conducted user research & usability testing",
      "Collaborated with product managers and developers",
      "Led design workshops and prototyping sessions",
      "Designed websites and mobile applications",
    ],
  },
  {
    company: "ELOGE ARTS",
    location: "Kigali — On-site",
    role: "Founder & Creative Director",
    period: "2024 – Present",
    bullets: [
      "Built and manage an art gallery brand",
      "Designed identity, marketing, and digital assets",
      "Partnered with hospitality venues for exhibitions",
    ],
  },
  {
    company: "INDEPENDENT CLIENT PROJECTS",
    location: "Remote",
    role: "UI/UX & Brand Designer",
    period: "2023 – Present",
    bullets: [
      "Delivered UI/UX and branding for global clients",
      "Designed websites, apps, and landing pages",
      "Worked on startup product design projects",
    ],
  },
  {
    company: "CREATIVE COLLABORATIONS (DRIBBBLE COMMUNITY)",
    location: "Remote",
    role: "Freelance Designer",
    period: "2022 – Present",
    bullets: [
      "Collaborated with designers and clients via Dribbble",
      "Produced branding, posters, and digital visuals",
      "Contributed to multiple design challenges and projects",
    ],
  },
  {
    company: "SIDE STARTUP SUPPORT WORK",
    location: "Remote",
    role: "UI/UX Designer",
    period: "2023 – Present",
    bullets: [
      "Supported early-stage startups with product design",
      "Built wireframes, prototypes, and design systems",
      "Improved user experience for MVP products",
    ],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Experience</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-16">
            Where I've Worked<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="relative pl-12 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />

                <div className="p-6 md:p-8 rounded-xl bg-card border border-border hover:border-primary/20 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{exp.company}</h3>
                      <p className="text-primary font-medium text-sm">{exp.role}</p>
                    </div>
                    <div className="flex items-center gap-4 mt-2 md:mt-0 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin size={14} /> {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} /> {exp.period}
                      </span>
                    </div>
                  </div>
                  <ul className="space-y-2 mt-4">
                    {exp.bullets.map((b) => (
                      <li key={b} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
