"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Mail, Phone, Briefcase } from "lucide-react";
import { profile } from "@/src/content/profile";
import { SectionWrapper } from "@/components/section-wrapper";
import { TiltCard } from "@/components/tilt-card";
import { AnimatedCounter } from "@/components/animated-counter";

export function AboutSection() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const currentRole = profile.experience[0]
    ? `${profile.experience[0].role} @ ${profile.experience[0].company}`
    : "Open to work";

  const paragraphs = [
    profile.about.intro,
    profile.about.description,
    profile.about.background,
  ];

  return (
    <SectionWrapper id="about" title="About Me">
      <div ref={ref} className="grid md:grid-cols-3 gap-8">
        {/* Main content */}
        <div className="md:col-span-2 space-y-6">
          {paragraphs.map((text, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.215, 0.61, 0.355, 1],
              }}
              className={`leading-relaxed text-pretty ${
                index === 0 ? "text-lg" : "text-muted-foreground"
              }`}
            >
              {text}
            </motion.p>
          ))}

          {/* Animated highlight line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0.215, 0.61, 0.355, 1],
            }}
            className="h-1 w-32 bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end rounded-full origin-left"
          />
        </div>

        {/* Info card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.3,
            ease: [0.215, 0.61, 0.355, 1],
          }}
          className="space-y-4"
        >
          <TiltCard
            className="p-6 rounded-2xl bg-card border border-border spotlight"
            tiltAmount={5}
          >
            <div className="space-y-4">
              {[
                { icon: MapPin, text: profile.location },
                {
                  icon: Mail,
                  text: profile.email,
                  href: `mailto:${profile.email}`,
                },
                {
                  icon: Phone,
                  text: profile.phone,
                  href: `tel:${profile.phone}`,
                },
                { icon: Briefcase, text: currentRole },
              ].map(({ icon: Icon, text, href }, index) => (
                <motion.div
                  key={`${text}-${index}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  className="flex items-center gap-3 text-muted-foreground group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-4 w-4 text-primary" />
                  </div>
                  {href ? (
                    <a
                      href={href}
                      className="hover:text-foreground transition-colors"
                    >
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </TiltCard>

          {/* Quick stats with animated counters */}
          <div className="grid grid-cols-2 gap-3">
            {[
              { value: 2, suffix: "+", label: "Years Exp." },
              { value: 15, suffix: "+", label: "Projects" },
            ].map(({ value, suffix, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -2 }}
                className="p-4 rounded-xl bg-secondary/50 text-center cursor-default border border-transparent hover:border-primary/20 transition-all"
              >
                <div className="text-2xl font-bold gradient-text">
                  <AnimatedCounter value={value} suffix={suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  {label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
