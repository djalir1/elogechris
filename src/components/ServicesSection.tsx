import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Globe, Smartphone, PenTool, Megaphone, ArrowRight } from "lucide-react";

const services = [
  { icon: Palette, title: "UI/UX Design", desc: "User-centered interfaces that delight and convert." },
  { icon: Globe, title: "Website Design", desc: "Responsive, modern websites built for performance." },
  { icon: Smartphone, title: "Mobile App Design", desc: "Intuitive mobile experiences for iOS and Android." },
  { icon: PenTool, title: "Branding & Visual Identity", desc: "Memorable brand systems that stand out." },
  { icon: Megaphone, title: "Content & Social Media Design", desc: "Social media visual strategy, content layout systems, and campaign-based content creation." },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Services</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12">
            How I Can Help<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border hover:border-primary/30 transition-all group"
            >
              <s.icon size={32} className="text-primary mb-5 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold text-foreground mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.desc}</p>
              <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all">
                Learn more <ArrowRight size={14} />
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
