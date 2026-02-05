"use client";

import { motion } from "framer-motion";
import { X, ExternalLink, Github, Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import type { Project } from "@/src/content/projects";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={true} onOpenChange={(open) => !open && onClose()}>
      <DialogContent
        className="max-w-4xl w-full max-h-[min(90vh,48rem)] overflow-hidden rounded-2xl border-border bg-card p-0"
        showCloseButton={false}
      >
        <div className="flex h-full max-h-[min(90vh,48rem)] flex-col">
          {/* Header */}
          <div className="flex items-start justify-between border-b border-border bg-card/95 p-6 backdrop-blur-sm">
            <div className="flex-1 pr-8">
              <div className="mb-2 flex items-center gap-2">
                {project.featured && (
                  <Badge className="bg-gradient-to-r from-gradient-start to-gradient-end text-white border-0">
                    Featured
                  </Badge>
                )}
              </div>
              <DialogTitle className="text-2xl font-bold">
                {project.title}
              </DialogTitle>
              <DialogDescription className="mt-1 text-muted-foreground">
                {project.tagline}
              </DialogDescription>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="shrink-0"
              aria-label="Close modal"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Scrollable content */}
          <div className="flex-1 space-y-6 overflow-y-auto p-6">
            <div className="relative h-56 w-full overflow-hidden rounded-xl border border-border/60 bg-muted/50">
              <img
                src={project.image ?? "/placeholder.jpg"}
                alt={`${project.title} preview`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
            </div>

            <div>
              <h3 className="mb-2 text-sm font-medium text-muted-foreground">
                Description
              </h3>
              <p className="text-foreground leading-relaxed">
                {project.description}
              </p>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                Key Highlights
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-3 w-3 text-primary" />
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {highlight}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="flex items-center gap-3 border-t border-border bg-card/95 p-6 backdrop-blur-sm">
            {project.links.demo && (
              <Button asChild className="flex-1">
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  View Demo
                </a>
              </Button>
            )}
            {project.links.repo && (
              <Button
                variant="outline"
                asChild
                className="flex-1 bg-transparent"
              >
                <a
                  href={project.links.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
