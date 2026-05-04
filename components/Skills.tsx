'use client'

const SKILLS = [
  {
    cat: 'AI & Machine Learning',
    accent: 'rgba(108,92,231,0.12)',
    border: 'rgba(108,92,231,0.25)',
    tags: ['Machine Learning','Deep Learning','Generative AI','LLMs','RAG Pipelines','Prompt Engineering','NLP','Model Evaluation','Hyperparameter Tuning'],
  },
  {
    cat: 'Data Science & Analysis',
    accent: 'rgba(0,198,224,0.08)',
    border: 'rgba(0,198,224,0.2)',
    tags: ['Exploratory Data Analysis','Statistical Analysis','Data Cleaning','Feature Engineering','Predictive Modelling','Big Data Analytics','SPSS','R'],
  },
  {
    cat: 'Programming & Libraries',
    accent: 'rgba(56,139,253,0.08)',
    border: 'rgba(56,139,253,0.2)',
    tags: ['Python','SQL','Pandas','NumPy','Scikit-learn','TensorFlow','Keras','Matplotlib','Seaborn','Plotly'],
  },
  {
    cat: 'Visualisation & BI',
    accent: 'rgba(255,168,0,0.08)',
    border: 'rgba(255,168,0,0.2)',
    tags: ['Tableau','Power BI','Plotly Dashboards','Google Sheets','Excel','DAX'],
  },
  {
    cat: 'Tools & Infrastructure',
    accent: 'rgba(255,100,80,0.08)',
    border: 'rgba(255,100,80,0.2)',
    tags: ['Git & GitHub','Docker','Linux','Azure AI','CI/CD','REST APIs','Flask','FastAPI','MongoDB','Web Scraping'],
  },
  {
    cat: 'Web & Other',
    accent: 'rgba(0,214,143,0.08)',
    border: 'rgba(0,214,143,0.2)',
    tags: ['React','Next.js','TailwindCSS','Apache Spark','Hadoop','3D Animation'],
  },
]

export default function Skills() {
  return (
    <section
      id="skills"
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
          What I know
        </div>
        <h2
          style={{
            fontSize: 'clamp(26px, 3.5vw, 40px)',
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: 'var(--text)',
            marginBottom: '48px',
            lineHeight: 1.1,
          }}
        >
          Skills &{' '}
          <span style={{ color: 'var(--accent-purple)' }}>Expertise</span>
        </h2>

        {/* Grid */}
        <div
          className="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
          }}
        >
          {SKILLS.map((s) => (
            <div
              key={s.cat}
              style={{
                background: 'var(--card-bg)',
                border: `1px solid var(--border)`,
                borderRadius: '12px',
                padding: '22px',
                transition: 'border-color 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = s.border
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--border)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Category label */}
              <div
                style={{
                  display: 'inline-block',
                  background: s.accent,
                  border: `1px solid ${s.border}`,
                  borderRadius: '4px',
                  padding: '4px 10px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: 'var(--text2)',
                  letterSpacing: '0.05em',
                  marginBottom: '16px',
                }}
              >
                {s.cat}
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '11px',
                      color: 'var(--tag-text)',
                      background: 'var(--tag-bg)',
                      border: '1px solid var(--tag-border)',
                      borderRadius: '3px',
                      padding: '3px 9px',
                      letterSpacing: '0.03em',
                      transition: 'color 0.15s, border-color 0.15s',
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}