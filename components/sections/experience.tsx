import { ArrowUpRight, BriefcaseBusiness, GraduationCap, Languages } from 'lucide-react'
import { SectionWrapper } from '@/components/section-wrapper'
import { profile } from '@/src/content/profile'

export function ExperienceSection() {
  return (
    <SectionWrapper
      id="experience"
      index="03"
      label="Experience"
      title="High-volume product work that holds up."
      subtitle="Three years of commercial delivery across frontend, backend workflows, data-heavy interfaces, and production performance."
    >
      <div className="ref-career-window" data-reveal="viewport">
        <div className="ref-window-bar" aria-hidden="true">
          <span className="ref-window-dots"><i /><i /><i /></span>
          <span>CAREER.LOG</span>
          <span>1 POSITION</span>
        </div>

        <div className="ref-career-layout">
          <div className="ref-career-primary">
            {profile.experience.map((item) => (
              <article key={`${item.company}-${item.role}`}>
                <header>
                  <p><BriefcaseBusiness size={14} aria-hidden="true" /> {item.type}</p>
                  <span>{item.period}</span>
                </header>
                <h3>{item.role}</h3>
                <a href={item.website} target="_blank" rel="noreferrer">{item.company} <ArrowUpRight size={14} aria-hidden="true" /></a>
                <ol>
                  {item.highlights.map((highlight, index) => (
                    <li key={highlight}>
                      <span>{String(index + 1).padStart(2, '0')}</span>
                      <p>{highlight}</p>
                      <i aria-hidden="true"><ArrowUpRight size={14} /></i>
                    </li>
                  ))}
                </ol>
              </article>
            ))}
          </div>

          <aside className="ref-career-aside">
            <section aria-labelledby="education-heading">
              <p><GraduationCap size={15} aria-hidden="true" /> EDUCATION/</p>
              <h3 id="education-heading">Education</h3>
              {profile.education.map((item) => (
                <article key={`${item.school}-${item.degree}`}>
                  <strong>{item.degree}</strong>
                  <span>{item.school}</span>
                  <span>{item.period}</span>
                </article>
              ))}
            </section>
            <section aria-labelledby="languages-heading">
              <p><Languages size={15} aria-hidden="true" /> LANGUAGES/</p>
              <h3 id="languages-heading">Working languages</h3>
              <ul>{profile.languages.map((language) => <li key={language.name}><span>{language.name}</span><i>{language.level}</i></li>)}</ul>
            </section>
          </aside>
        </div>
      </div>
    </SectionWrapper>
  )
}
