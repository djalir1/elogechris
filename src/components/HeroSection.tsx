import { motion } from "framer-motion";
import { ArrowDown, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-profile.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center section-padding pt-32 pb-20 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="text-primary font-medium text-sm tracking-widest uppercase mb-4">
            Brand & Digital Experience Specialist
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-[1.1] text-foreground mb-6">
            HAKIZUWERA
            <br />
            ELOGE <span className="text-gradient">CHRIS</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed mb-10">
            Designing meaningful digital experiences that connect users and businesses.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:opacity-90 transition-opacity"
            >
              View Work
              <ArrowDown size={16} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg border border-border text-foreground font-semibold text-sm hover:bg-secondary transition-colors"
            >
              Contact Me
              <ExternalLink size={16} />
            </a>
          </div>
        </motion.div>

        {/* Right Image - BIGGER on Mobile */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center lg:justify-end"
        >
          <div className="relative w-full flex justify-center lg:justify-end">
            
            {/* Main Image Container */}
            <div className="relative w-[88vw] max-w-[340px] sm:max-w-[380px] md:w-96 md:max-w-none aspect-[4/5] rounded-3xl overflow-hidden border-2 border-primary/20 shadow-2xl">
              <img
                src={heroImage}
                alt="Eloge Chris - Designer"
                className="w-full h-full object-cover"
                width={800}
                height={1000}
              />
            </div>

            {/* Decorative Offset Border */}
            <div className="absolute -bottom-6 -right-6 w-[88vw] max-w-[340px] sm:max-w-[380px] md:w-96 md:max-w-none aspect-[4/5] rounded-3xl border border-primary/30 -z-10" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
