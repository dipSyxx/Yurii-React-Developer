---
version: beta
name: "Yurii Linetskyi Portfolio"
description: "A graphic developer portfolio combining bold editorial type with compact technical workspaces."
colors:
  background: "#F6F7F3"
  surface: "#FFFFFF"
  surface-muted: "#EAEDE7"
  foreground: "#090B0F"
  muted: "#626971"
  border: "#CFD5CF"
  primary: "#135CFF"
  accent-strong: "#0A39BD"
  dark-background: "#0B0F16"
  dark-surface: "#111720"
  dark-surface-muted: "#18202B"
  dark-foreground: "#F2F4EF"
  dark-primary: "#4E7CFF"
typography:
  display:
    fontFamily: "Archivo Black, Impact, sans-serif"
  sans:
    fontFamily: "Instrument Sans, Arial, sans-serif"
  mono:
    fontFamily: "IBM Plex Mono, Consolas, monospace"
rounded:
  DEFAULT: "0rem"
  sm: "0rem"
  md: "0rem"
  lg: "0.25rem"
spacing:
  section-gap: "clamp(5.75rem, 9vw, 9.5rem)"
  page-max: "92rem"
  page-gutter: "clamp(1.1rem, 4.5vw, 4.5rem)"
components:
  navigation:
    backgroundColor: "{colors.background}"
    textColor: "{colors.foreground}"
  technical-window:
    backgroundColor: "{colors.surface}"
    textColor: "{colors.foreground}"
  project-reel:
    backgroundColor: "{colors.surface-muted}"
    textColor: "{colors.foreground}"
  selected-control:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
  inverse-panel:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.surface}"
  supporting-copy:
    backgroundColor: "{colors.background}"
    textColor: "{colors.muted}"
  chrome-rule:
    backgroundColor: "{colors.border}"
    textColor: "{colors.foreground}"
  focus-ring:
    backgroundColor: "{colors.accent-strong}"
    textColor: "{colors.surface}"
  action-link:
    backgroundColor: "{colors.foreground}"
    textColor: "{colors.surface}"
  action-link-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.surface}"
---

# Yurii Linetskyi Portfolio Design System

## Overview

### Creative North Star

The portfolio should feel like a bold graphic identity opening into a precise digital workspace. Large misregistered typography creates the first impression; compact file browsers, window bars, numbered controls, and real product screenshots then make the work tangible.

### Product context and register

- **Audience and primary job:** Engineering managers, senior developers, recruiters, consultancies, and potential clients should quickly understand that Yurii designs and ships production software.
- **Target market and evidence:** International and Norwegian technology teams; portfolio content is English and the profile is based in Norway.
- **Locale and language policy:** The portfolio is English-first.
- **Usage scene:** Desktop and laptop portfolio review with an equally intentional compact mobile layout.
- **Register:** Brand and content site focused on profile, work, experience, and direct contact.
- **Memorable signature:** `YL_WORKSPACE` begins with the cobalt-offset `YURII LINETSKYI` nameplate and resolves into the `TECHNOLOGIES/` signal viewport: a CV-cross-checked tool index with pointer-relative inspection lines, brand marks, and hard-edged category controls.
- **Restraint:** System UI is used only where it communicates navigation, project framing, profile files, career history, or tool categories. It is not decorative filler.
- **Anti-references:** No oversized theme control, gradient type, glassmorphism, animated blobs, fake terminal commands, auto-playing project carousel, skill percentages, custom cursor, or decorative analytics.
- **Token ownership/runtime mapping:** `app/globals.css` owns reset, compatibility tokens, and retained secondary-page foundations. `app/kinetic.css` owns the approved reference-led visual system and responsive behavior. Tailwind v4 maps shared CSS variables through `@theme inline`.

## Colors

The light theme uses off-white technical paper, near-black type, and cobalt structure. The dark theme shifts that same workspace into a blue-black canvas with cool graphite surfaces, warm-white rules, and a brighter cobalt; it preserves hierarchy instead of merely inverting colors. The compact header control follows the system preference on first visit and stores an explicit user choice. Cobalt identifies active states, print-registration offsets, focus, and small structural details in both themes.

## Typography

Archivo Black is reserved for the hero nameplate and case-study titles. Instrument Sans carries section headings, project names, and body copy. IBM Plex Mono is limited to useful labels, file names, indices, paths, dates, and technical controls. Visible utility copy has a 12px floor, metadata starts at 12.8px, and compact body copy stays at 14–15px or larger. Display typography is tightly spaced; body text stays comfortable and sentence case is preferred.

## Layout

The desktop shell is capped at 92rem. The hero pairs an oversized two-line identity with a portrait in a technical window. About is an interactive file workspace. All six projects have equal cards in a manually controlled, scroll-snap reel with three cards visible on wide screens and one on mobile. Capabilities use a two-by-two black-and-white field, followed by a compact category list and technology stage. Experience is one career log with quieter education and language panels. Case routes preserve the same chrome and spacing without imitating an IDE.

## Elevation & Depth

Hierarchy comes from scale, one-pixel rules, tonal fields, and deliberate overlap. Technical windows use one cobalt offset shadow. Project and capability surfaces respond to pointer position with restrained perspective, spotlight, and internal image movement; layout geometry never shifts. Screenshots remain clipped within fixed aspect ratios to prevent layout shift.

## Shapes

The visual language is square. Controls, cards, windows, and panels use hard edges; circles are reserved for window indicators and status dots. The portrait and screenshots inherit the same rectangular framing.

## Components

### Foundational visual states

Interactive elements use cobalt sweeps, near-black inversion, directional icon movement, or a rule change on hover. Keyboard focus uses the shared two-pixel cobalt outline. Selected file and stack controls expose an explicit open state without changing layout. Pointer effects are supplemental: content and controls remain complete on touch devices and without animation.

### Buttons and actions

The hero has one near-black primary action and one outlined CV action; both use a directional cobalt wipe and offset press depth. Project cards use a full-width case link plus compact live and source controls. External actions keep text labels where space permits and have accessible names when icon-only.

### Navigation and data display

The header is compact, sticky, and translucent over the off-white canvas. The mobile navigation is an accessible disclosure that closes after navigation or Escape. The project reel never auto-advances. File and stack selectors are real buttons with selected-state semantics.

### Forms and overlays

The site has no primary form or modal workflow. Contact uses direct email, CV, and profile links.

### Iconography

Lucide icons provide a consistent 13–24px recognition layer for project domains, capability categories, contact actions, and stack navigation. The technology inventory contains 41 CV and product-work entries, each wired to an original brand mark with a quiet typographic fallback if a remote asset fails. Important actions keep visible text; every icon-only link and button has an accessible name.

### Motion

Motion is masked, directional, and brief: the nameplate reveals upward, the portrait enters through a clipped mask, content sections rise gently, active file and stack panels replace one another, and project images respond within their clipped frame. Pointer-reactive surfaces use CSS variables for local perspective and inspection highlights rather than a replacement cursor. The only scroll-linked motion is the thin page progress line and restrained portrait movement. `prefers-reduced-motion` disables smooth scrolling, parallax, scanning, and non-essential transitions.

### Content and data visualization

Copy is concise, factual, technical, and written in active voice. All six projects retain equal access to detailed case routes. Claims come from the existing profile and project content; missing metrics are omitted.

## Do's and Don'ts

- **Do:** Let graphic typography, crisp structure, and real screenshots carry the page.
- **Do:** Give all six projects equal weight and user-controlled navigation.
- **Do:** Use file and window metaphors only for information that benefits from them.
- **Don't:** Turn every section into a dark interface panel or fake developer console.
- **Don't:** Invent metrics, employers, clients, results, responsibilities, or project status.
