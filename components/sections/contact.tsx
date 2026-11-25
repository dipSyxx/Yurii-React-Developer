import { ArrowUp, ArrowUpRight, FileText, Github, Linkedin, Mail } from 'lucide-react'
import { SectionWrapper } from '@/components/section-wrapper'
import { profile } from '@/src/content/profile'

const contactLinks = [
  { label: 'LinkedIn', href: profile.links.linkedin, icon: Linkedin },
  { label: 'GitHub', href: profile.links.github, icon: Github },
  { label: 'View CV', href: profile.links.cv, icon: FileText },
]

export function ContactSection() {
  return (
    <SectionWrapper
      id="contact"
      index="05"
      label="Contact"
      title="Let’s work together"
      subtitle="Open to software engineering opportunities and freelance projects."
      className="ref-contact-section"
    >
      <div className="ref-contact-panel" data-reveal="viewport">
        <p>Email</p>
        <a className="ref-contact-email" href={`mailto:${profile.email}`}>
          <span><Mail size={20} aria-hidden="true" /> {profile.email}</span>
          <ArrowUpRight size={34} aria-hidden="true" />
        </a>
        <div className="ref-contact-links">
          {contactLinks.map((link, index) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              <span>{String(index + 1).padStart(2, '0')}</span>
              <link.icon size={15} aria-hidden="true" />
              <strong>{link.label}</strong>
              <ArrowUpRight size={13} aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>

      <footer className="ref-site-footer">
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <p>{profile.location}</p>
        <a href="#top">Back to top <ArrowUp size={14} aria-hidden="true" /></a>
      </footer>
    </SectionWrapper>
  )
}
