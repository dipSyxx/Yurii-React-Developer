'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Code2, Server, Wrench, Palette, ChevronRight } from 'lucide-react'
import { profile } from '@/src/content/profile'
import { SectionWrapper } from '@/components/section-wrapper'
import { TiltCard } from '@/components/tilt-card'

const skillCategories = [
  { key: 'frontend', label: 'Frontend', icon: Code2, color: 'from-blue-500 to-cyan-500' },
  { key: 'backend', label: 'Backend', icon: Server, color: 'from-green-500 to-emerald-500' },
  { key: 'tools', label: 'Tools', icon: Wrench, color: 'from-orange-500 to-amber-500' },
  { key: 'design', label: 'Design', icon: Palette, color: 'from-pink-500 to-rose-500' },
] as const

export function SkillsSection() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [hoveredCategory, setHoveredCategory] = useState<string | null>(null)
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <SectionWrapper
      id="skills"
      title="Skills & Technologies"
      subtitle="Technologies and tools I use to bring ideas to life."
    >
      <div ref={ref} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skillCategories.map(({ key, label, icon: Icon, color }, categoryIndex) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ 
              duration: 0.5, 
              delay: categoryIndex * 0.1,
              ease: [0.215, 0.61, 0.355, 1]
            }}
            onMouseEnter={() => setHoveredCategory(key)}
            onMouseLeave={() => setHoveredCategory(null)}
          >
            <TiltCard 
              className="h-full p-6 rounded-2xl bg-card border border-border spotlight cursor-default"
              tiltAmount={8}
            >
              <div className="flex items-center gap-3 mb-5">
                <motion.div 
                  className={`p-2.5 rounded-xl bg-gradient-to-br ${color} text-white`}
                  animate={{
                    scale: hoveredCategory === key ? 1.1 : 1,
                    rotate: hoveredCategory === key ? 5 : 0,
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.div>
                <h3 className="font-semibold text-lg">{label}</h3>
              </div>
              <ul className="space-y-2.5">
                {profile.skills[key].map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{
                      duration: 0.4,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.2,
                    }}
                    onMouseEnter={() => setHoveredSkill(skill)}
                    onMouseLeave={() => setHoveredSkill(null)}
                    className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default"
                  >
                    <motion.span 
                      className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${color}`}
                      animate={{
                        scale: hoveredSkill === skill ? 1.5 : 1,
                      }}
                      transition={{ duration: 0.2 }}
                    />
                    <span className="flex-1">{skill}</span>
                    <motion.span
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ 
                        opacity: hoveredSkill === skill ? 1 : 0,
                        x: hoveredSkill === skill ? 0 : -5
                      }}
                      transition={{ duration: 0.15 }}
                    >
                      <ChevronRight className="h-3 w-3 text-primary" />
                    </motion.span>
                  </motion.li>
                ))}
              </ul>
              
              {/* Skill count badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: categoryIndex * 0.1 + 0.5 }}
                className="mt-4 pt-4 border-t border-border"
              >
                <span className="text-xs text-muted-foreground">
                  {profile.skills[key].length} skills
                </span>
              </motion.div>
            </TiltCard>
          </motion.div>
        ))}
      </div>
      
      {/* Total skills indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="mt-8 text-center"
      >
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 text-sm text-muted-foreground">
          <span className="w-2 h-2 rounded-full bg-gradient-to-r from-gradient-start to-gradient-end animate-pulse" />
          {Object.values(profile.skills).flat().length} total technologies
        </span>
      </motion.div>
    </SectionWrapper>
  )
}
