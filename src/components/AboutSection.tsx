import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const AboutSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">
              About Me
            </p>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-6">
              Creative Problem
              <br />
              Solver<span className="text-primary">.</span>
            </h2>
          </div>
          <div>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              A creative and detail-oriented UI/UX Designer and Brand Specialist with 5+ years of
              experience designing digital products, systems, and visual identities. Passionate about
              creating user-centered designs that solve real problems and drive business results.
            </p>
            <div className="grid grid-cols-3 gap-6">
              {[
                { num: "5+", label: "Years Experience" },
                { num: "50+", label: "Projects Done" },
                { num: "15%", label: "Avg. Conversion Lift" },
              ].map((stat) => (
                <div key={stat.label} className="text-center p-4 rounded-xl bg-card border border-border">
                  <p className="text-2xl md:text-3xl font-display font-bold text-primary">{stat.num}</p>
                  <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
