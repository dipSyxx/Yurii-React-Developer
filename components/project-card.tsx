"use client";

import React from "react";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ExternalLink, Github, ChevronRight, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/src/content/projects";
import { cn } from "@/lib/utils";
import { useRef } from "react";

interface ProjectCardProps {
  project: Project;
  onViewDetails: (project: Project) => void;
  index: number;
}

export function ProjectCard({
  project,
  onViewDetails,
  index,
}: ProjectCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);

  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  const springConfig = { damping: 20, stiffness: 300 };
  const smoothX = useSpring(x, springConfig);
  const smoothY = useSpring(y, springConfig);

  const rotateX = useTransform(smoothY, [0, 1], [5, -5]);
  const rotateY = useTransform(smoothX, [0, 1], [-5, 5]);

  const updatePointer = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = rectRef.current ?? ref.current?.getBoundingClientRect();
    if (!rect) return;
    if (!rectRef.current) {
      rectRef.current = rect;
    }
    const xVal = (e.clientX - rect.left) / rect.width;
    const yVal = (e.clientY - rect.top) / rect.height;
    x.set(xVal);
    y.set(yVal);
    e.currentTarget.style.setProperty("--mouse-x", `${xVal * 100}%`);
    e.currentTarget.style.setProperty("--mouse-y", `${yVal * 100}%`);
  };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    rectRef.current = ref.current.getBoundingClientRect();
    updatePointer(e);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    updatePointer(e);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    rectRef.current = null;
    x.set(0.5);
    y.set(0.5);
    e.currentTarget.style.setProperty("--mouse-x", "50%");
    e.currentTarget.style.setProperty("--mouse-y", "50%");
  };

  return (
    <motion.div
      ref={ref}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: "1000px",
      }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "group relative p-6 rounded-2xl bg-card border border-border spotlight cursor-pointer",
        "hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
      )}
      onClick={() => onViewDetails(project)}
    >
      {project.featured && (
        <motion.div
          className="absolute -top-3 -right-3"
          initial={{ scale: 0, rotate: -15 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ delay: index * 0.1 + 0.3, type: "spring", bounce: 0.5 }}
        >
          <span className="inline-flex items-center gap-1 px-2.5 py-1 text-xs font-medium bg-gradient-to-r from-gradient-start to-gradient-end text-white rounded-full shadow-lg">
            <Star className="h-3 w-3 fill-current" />
            Featured
          </span>
        </motion.div>
      )}

      <div className="space-y-4" style={{ transform: "translateZ(20px)" }}>
        <div className="relative h-40 w-full overflow-hidden rounded-xl border border-border/60 bg-muted/50">
          <img
            src={project.image ?? "/placeholder.jpg"}
            alt={`${project.title} preview`}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
        </div>

        <div>
          <motion.h3
            className="text-xl font-semibold mb-1 group-hover:gradient-text transition-all"
            whileHover={{ x: 3 }}
            transition={{ duration: 0.2 }}
          >
            {project.title}
          </motion.h3>
          <p className="text-sm text-muted-foreground">{project.tagline}</p>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag, tagIndex) => (
            <motion.div
              key={tag}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 + tagIndex * 0.05 + 0.2 }}
              viewport={{ once: true }}
            >
              <Badge
                variant="secondary"
                className="text-xs hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {tag}
              </Badge>
            </motion.div>
          ))}
          {project.tags.length > 4 && (
            <Badge variant="outline" className="text-xs">
              +{project.tags.length - 4}
            </Badge>
          )}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="flex gap-2">
            {project.links.repo && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                onClick={(e) => e.stopPropagation()}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <motion.a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} on GitHub`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Github className="h-4 w-4" />
                </motion.a>
              </Button>
            )}
            {project.links.demo && (
              <Button
                variant="ghost"
                size="sm"
                asChild
                onClick={(e) => e.stopPropagation()}
                className="hover:bg-primary/10 hover:text-primary"
              >
                <motion.a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.title} demo`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink className="h-4 w-4" />
                </motion.a>
              </Button>
            )}
          </div>

          <motion.span
            className="text-xs text-muted-foreground flex items-center gap-1 group-hover:text-primary transition-colors"
            whileHover={{ x: 3 }}
          >
            View details
            <motion.span
              animate={{ x: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="h-3 w-3" />
            </motion.span>
          </motion.span>
        </div>
      </div>

      {/* Gradient border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-start), var(--gradient-mid), var(--gradient-end))",
          padding: "1px",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
    </motion.div>
  );
}
