import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Eloge's design work transformed our online presence. His attention to detail and user-centric approach is unmatched.",
    name: "Client, Fastbreak Trading",
    role: "CEO",
  },
  {
    quote: "Working with Eloge was seamless. He understood our brand vision and delivered beyond expectations.",
    name: "Client, Glory Graphics",
    role: "Project Manager",
  },
  {
    quote: "His ability to combine aesthetics with usability sets him apart. Highly recommended for any design project.",
    name: "Colleague",
    role: "Developer",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12">
            Kind Words<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-8 rounded-xl bg-card border border-border"
            >
              <Quote size={24} className="text-primary/40 mb-4" />
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">"{t.quote}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
