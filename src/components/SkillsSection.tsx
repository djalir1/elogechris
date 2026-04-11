import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Palette, Layers, MousePointerClick, Eye, Grid3X3, Figma } from "lucide-react";

const designSkills = [
  { icon: Palette, label: "UI/UX Design" },
  { icon: Layers, label: "Wireframing & Prototyping" },
  { icon: MousePointerClick, label: "Usability Testing" },
  { icon: Eye, label: "Visual Design" },
  { icon: Grid3X3, label: "Design Systems" },
];

const tools = ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Premiere Pro", "After Effects", "CapCut"];
const languages = ["English", "Kinyarwanda", "Basic French"];

const SkillsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="section-padding bg-card" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-3">Skills</p>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mb-12">
            What I Do Best<span className="text-primary">.</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {designSkills.map((skill, i) => (
            <motion.div
              key={skill.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="p-6 rounded-xl bg-background border border-border hover:border-primary/30 transition-colors group"
            >
              <skill.icon
                size={28}
                className="text-primary mb-4 group-hover:scale-110 transition-transform"
              />
              <p className="font-semibold text-foreground">{skill.label}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {[
            { title: "Tools", items: tools },
            { title: "Languages", items: languages },
          ].map((group) => (
            <div key={group.title}>
              <h3 className="font-semibold text-foreground mb-4">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
