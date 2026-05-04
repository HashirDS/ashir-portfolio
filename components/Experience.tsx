'use client'

const ROLES = [
  {
    company: 'XactGen',
    role: 'Founder & CEO',
    sub: 'AI & Data Science Consulting — Registered under SCO STP, Islamabad',
    date: '09/2024 – Present',
    badge: 'Founder',
    badgeBg: 'rgba(0,214,143,0.1)',
    badgeColor: 'var(--accent-green)',
    badgeBorder: 'rgba(0,214,143,0.25)',
    points: [
      'Founded and registered an AI and data science consultancy, overseeing business operations from client acquisition to delivery.',
      'Lead end-to-end client engagements covering machine learning, data analysis, dashboard development, and custom AI solutions.',
      'Manage project scoping, technical execution, and delivery timelines across multiple active client projects.',
    ],
  },
  {
    company: 'Robx.AI',
    role: 'AI Developer',
    sub: 'LLM Systems, Web Apps & Data Intelligence — Remote',
    date: '10/2024 – 04/2025 · 6 months',
    badge: 'Full-time',
    badgeBg: 'rgba(108,92,231,0.1)',
    badgeColor: '#9B8FFF',
    badgeBorder: 'rgba(108,92,231,0.25)',
    points: [
      'Built Pulisint — a live sentiment analysis platform that scrapes data from multiple sources and processes it through custom LLM pipelines.',
      'Developed Humint — a social media intelligence app collecting public profile data and surfacing structured outputs via Nadara API.',
      'Contributed to I Am Scientist, building teacher-facing AI tools integrated into the platform\'s web environment.',
    ],
  },
  {
    company: 'Datix AI',
    role: 'Freelance AI & Data Consultant',
    sub: 'End-to-End Project Delivery — Remote · datixai.com',
    date: '2024 – Present',
    badge: 'Freelance',
    badgeBg: 'rgba(255,168,0,0.1)',
    badgeColor: '#FFB347',
    badgeBorder: 'rgba(255,168,0,0.25)',
    points: [
      'Delivered client-facing data science projects end-to-end — data cleaning, statistical analysis, modelling, and dashboard delivery.',
      'Worked across SPSS, R, Tableau, and Python to meet diverse client requirements across analytics and visualisation.',
      'Handled projects spanning predictive modelling, EDA, and business intelligence for clients across multiple countries.',
    ],
  },
  {
    company: 'Systems Limited',
    role: 'Intern — DevOps & Generative AI',
    sub: 'Islamabad, Pakistan',
    date: '06/2025 – 08/2025',
    badge: 'Internship',
    badgeBg: 'rgba(0,198,224,0.08)',
    badgeColor: 'var(--accent)',
    badgeBorder: 'rgba(0,198,224,0.2)',
    points: [
      'Supported DevOps workflows including CI/CD pipelines and containerisation using Git and Docker in a production environment.',
      'Contributed to AI chatbot development and integration of generative AI components into live applications.',
      'Worked within Linux-based environments and Azure AI services to deploy and manage AI-related solutions.',
    ],
  },
]

export default function Experience() {
  return (
    <section
      id="experience"
      style={{
        position: 'relative',
        zIndex: 1,
        padding: '80px 0',
      }}
    >
      <div style={{ maxWidth: '1160px', margin: '0 auto', padding: '0 2rem' }}>
        {/* Header */}
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--accent)',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: '12px',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span style={{ display: 'inline-block', width: '20px', height: '1px', background: 'var(--accent)' }} />
          Where I've worked
        </div>
        <h2
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '52px',
            lineHeight: 1.1,
          }}
        >
          Work{' '}
          <span style={{ color: 'var(--accent)' }}>Experience</span>
        </h2>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: '28px' }}>
          <div className="timeline-line" />

          {ROLES.map((r, i) => (
            <div
              key={r.company}
              style={{
                position: 'relative',
                marginBottom: i < ROLES.length - 1 ? '44px' : 0,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: 'absolute',
                  left: '-32px',
                  top: '10px',
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  border: '2px solid var(--bg)',
                  boxShadow: '0 0 0 3px rgba(0,198,224,0.15)',
                }}
              />

              <div
                style={{
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: '12px',
                  padding: '22px 24px',
                  transition: 'border-color 0.2s',
                }}
                onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'var(--border2)')}
                onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--border)')}
              >
                {/* Top row */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '4px',
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '16px',
                      fontWeight: 600,
                      color: 'var(--text)',
                      letterSpacing: '-0.015em',
                    }}
                  >
                    {r.company}
                  </span>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '10px',
                      padding: '2px 10px',
                      borderRadius: '20px',
                      background: r.badgeBg,
                      color: r.badgeColor,
                      border: `1px solid ${r.badgeBorder}`,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {r.badge}
                  </span>
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '13px',
                    color: 'var(--text2)',
                    marginBottom: '2px',
                    fontWeight: 400,
                  }}
                >
                  {r.role} · {r.sub}
                </div>

                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '11px',
                    color: 'var(--text3)',
                    letterSpacing: '0.05em',
                    marginBottom: '16px',
                  }}
                >
                  {r.date}
                </div>

                {/* Points */}
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {r.points.map((p) => (
                    <li
                      key={p}
                      style={{
                        display: 'flex',
                        gap: '10px',
                        fontSize: '13px',
                        color: 'var(--text2)',
                        lineHeight: 1.7,
                      }}
                    >
                      <span style={{ color: 'var(--text3)', flexShrink: 0, marginTop: '2px' }}>–</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}