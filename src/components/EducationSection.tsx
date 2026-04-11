import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap } from "lucide-react";

const EducationSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Education</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12">
            Academic Background<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="space-y-6 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex items-start gap-6 p-8 rounded-xl bg-background border border-border"
          >
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">SOS Technical High School</h3>
              <p className="text-primary font-medium text-sm mt-1">High School Diploma</p>
              <p className="text-muted-foreground text-sm mt-2"></p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-start gap-6 p-8 rounded-xl bg-background border border-border"
          >
            <div className="p-3 rounded-lg bg-primary/10">
              <GraduationCap size={28} className="text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-foreground">BBA in Marketing</h3>
              <p className="text-primary font-medium text-sm mt-1">Bachelor of Business Administration — In Progress</p>
              <p className="text-muted-foreground text-sm mt-2">Currently Enrolled</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
