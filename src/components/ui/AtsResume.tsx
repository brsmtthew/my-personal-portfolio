import { FiDownload, FiMail, FiMapPin, FiPhone, FiArrowLeft } from 'react-icons/fi'
import type { PortfolioData } from '../../data/portfolio'

type AtsResumeProps = {
  portfolio: PortfolioData
  onToggleAts: () => void
}

function AtsResume({ portfolio, onToggleAts }: AtsResumeProps) {
  const { profile, skillGroups, experiences, projects, education, certificates } = portfolio
  const competencies = Array.from(new Set(skillGroups.flatMap((group) => group.skills)))

  return (
    <main className="ats-shell" data-ats-view>
      <div className="ats-toolbar" aria-label="ATS view controls">
        <div>
          <p className="ats-kicker">Structured candidate profile</p>
          <p className="ats-toolbar-note">Plain-text hierarchy for recruiters, clients, and applicant tracking systems.</p>
        </div>
        <div className="ats-toolbar-actions">
          <button type="button" className="ats-secondary-button" onClick={onToggleAts}>
            <FiArrowLeft aria-hidden="true" /> Portfolio view
          </button>
          <a className="ats-primary-button" href={profile.atsCvUrl} download>
            <FiDownload aria-hidden="true" /> Download CV
          </a>
        </div>
      </div>

      <article className="ats-document">
        <header className="ats-header">
          <p className="ats-overline">IT SPECIALIST · AI WORKFLOWS · EMR · IOT</p>
          <h1>{profile.name}</h1>
          <h2>{profile.role}</h2>
          <div className="ats-contact-line">
            <span><FiMapPin aria-hidden="true" /> {profile.location}</span>
            <a href={`mailto:${profile.email}`}><FiMail aria-hidden="true" /> {profile.email}</a>
            <a href={`tel:${profile.phone}`}><FiPhone aria-hidden="true" /> {profile.phone}</a>
          </div>
        </header>

        <section className="ats-section" aria-labelledby="ats-summary-heading">
          <h3 id="ats-summary-heading">Professional Summary</h3>
          <p>{profile.summary}</p>
        </section>

        <section className="ats-section" aria-labelledby="ats-skills-heading">
          <h3 id="ats-skills-heading">Core Competencies</h3>
          <div className="ats-keywords">
            {competencies.map((skill) => <span key={skill}>{skill}</span>)}
          </div>
        </section>

        <section className="ats-section" aria-labelledby="ats-experience-heading">
          <h3 id="ats-experience-heading">Professional Experience</h3>
          <div className="ats-entry-list">
            {experiences.map((experience) => (
              <article key={`${experience.role}-${experience.company}`} className="ats-entry">
                <div className="ats-entry-heading">
                  <div>
                    <h4>{experience.role}</h4>
                    <p>{experience.company}</p>
                  </div>
                  <time>{experience.period}</time>
                </div>
                <ul>
                  {experience.details.map((detail) => <li key={detail}>{detail}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="ats-section" aria-labelledby="ats-projects-heading">
          <h3 id="ats-projects-heading">Selected Projects</h3>
          <div className="ats-entry-list">
            {projects.map((project) => (
              <article key={project.title} className="ats-entry">
                <div className="ats-entry-heading">
                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.type} · {project.category}</p>
                  </div>
                </div>
                <p>{project.description}</p>
                <p><strong>Impact:</strong> {project.impact}</p>
                <p><strong>Technologies:</strong> {project.stack.join(', ')}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="ats-two-column">
          <section className="ats-section" aria-labelledby="ats-education-heading">
            <h3 id="ats-education-heading">Education</h3>
            {education.map((item) => (
              <article key={`${item.school}-${item.degree}`} className="ats-compact-entry">
                <h4>{item.degree}</h4>
                <p>{item.school} · {item.period}</p>
                <p>{item.summary}</p>
              </article>
            ))}
          </section>

          <section className="ats-section" aria-labelledby="ats-certifications-heading">
            <h3 id="ats-certifications-heading">Certifications & Training</h3>
            <ul className="ats-plain-list">
              {certificates.map((certificate) => (
                <li key={`${certificate.title}-${certificate.date}`}>
                  <strong>{certificate.title}</strong>
                  <span>{certificate.issuer} · {certificate.date}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <footer className="ats-footer">
          <span>Available for remote, freelance, and full-time opportunities.</span>
          <a href={`mailto:${profile.email}?subject=Online%20Job%20Opportunity`}>Invite Boris to a project →</a>
        </footer>
      </article>
    </main>
  )
}

export default AtsResume
