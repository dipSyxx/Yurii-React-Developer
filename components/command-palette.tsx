"use client";

import { useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import {
  Home,
  User,
  FolderOpen,
  Target,
  Code2,
  Heart,
  Zap,
  BookOpen,
  Briefcase,
  GraduationCap,
  Globe,
  Mail,
  FileText,
  Github,
  Linkedin,
  Send,
  Sun,
  Moon,
} from "lucide-react";
import { useTheme } from "next-themes";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import { profile } from "@/src/content/profile";

interface CommandPaletteProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sections = [
  { id: "hero", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "projects", label: "Projects", icon: FolderOpen },
  { id: "ambitions", label: "Ambitions", icon: Target },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "interests", label: "Interests", icon: Heart },
  { id: "strengths", label: "Strengths", icon: Zap },
  { id: "knowledge", label: "Knowledge", icon: BookOpen },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "languages", label: "Languages", icon: Globe },
  { id: "contact", label: "Contact", icon: Mail },
];

export function CommandPalette({ open, onOpenChange }: CommandPaletteProps) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const scrollToSection = useCallback(
    (id: string) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        onOpenChange(false);
      }
    },
    [onOpenChange]
  );

  const openLink = useCallback(
    (url: string) => {
      window.open(url, "_blank", "noopener,noreferrer");
      onOpenChange(false);
    },
    [onOpenChange]
  );

  const handleNavigate = useCallback(
    (path: string) => {
      router.push(path);
      onOpenChange(false);
    },
    [router, onOpenChange]
  );

  // Handle keyboard shortcut
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        onOpenChange(!open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [open, onOpenChange]);

  return (
    <CommandDialog
      open={open}
      onOpenChange={onOpenChange}
      title="Command Palette"
      description="Navigate sections, open links, or change settings"
      className="max-w-md w-full max-h-[70vh]"
    >
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>

        <CommandGroup heading="Navigation">
          {sections.map(({ id, label, icon: Icon }) => (
            <CommandItem
              key={id}
              onSelect={() => scrollToSection(id)}
              className="cursor-pointer"
            >
              <Icon className="mr-2 h-4 w-4" />
              <span>Go to {label}</span>
            </CommandItem>
          ))}
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Quick Actions">
          <CommandItem
            onSelect={() => openLink(profile.links.cv)}
            className="cursor-pointer"
          >
            <FileText className="mr-2 h-4 w-4" />
            <span>Open CV</span>
          </CommandItem>
          <CommandItem
            onSelect={() => handleNavigate("/application")}
            className="cursor-pointer"
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>View Cover Letter</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Links">
          <CommandItem
            onSelect={() => openLink(profile.links.github)}
            className="cursor-pointer"
          >
            <Github className="mr-2 h-4 w-4" />
            <span>Open GitHub</span>
          </CommandItem>
          <CommandItem
            onSelect={() => openLink(profile.links.linkedin)}
            className="cursor-pointer"
          >
            <Linkedin className="mr-2 h-4 w-4" />
            <span>Open LinkedIn</span>
          </CommandItem>
          <CommandItem
            onSelect={() => openLink(profile.links.telegram)}
            className="cursor-pointer"
          >
            <Send className="mr-2 h-4 w-4" />
            <span>Open Telegram</span>
          </CommandItem>
          <CommandItem
            onSelect={() => openLink(`mailto:${profile.email}`)}
            className="cursor-pointer"
          >
            <Mail className="mr-2 h-4 w-4" />
            <span>Send Email</span>
          </CommandItem>
        </CommandGroup>

        <CommandSeparator />

        <CommandGroup heading="Settings">
          <CommandItem
            onSelect={() => {
              setTheme(theme === "dark" ? "light" : "dark");
              onOpenChange(false);
            }}
            className="cursor-pointer"
          >
            {theme === "dark" ? (
              <Sun className="mr-2 h-4 w-4" />
            ) : (
              <Moon className="mr-2 h-4 w-4" />
            )}
            <span>Toggle {theme === "dark" ? "Light" : "Dark"} Mode</span>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
}
