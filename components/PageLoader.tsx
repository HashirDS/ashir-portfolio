'use client'

import { useEffect, useState } from 'react'

export default function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [fadeOut, setFadeOut] = useState(false)

  useEffect(() => {
    // Start fade out after 1.1s
    const t1 = setTimeout(() => setFadeOut(true), 1100)
    // Remove from DOM after animation
    const t2 = setTimeout(() => setVisible(false), 1500)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [])

  if (!visible) return null

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      background: '#050810',
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 0.4s cubic-bezier(0.16,1,0.3,1)',
      pointerEvents: fadeOut ? 'none' : 'all',
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px' }}>
        {/* Logo mark */}
        <div style={{
          width: '72px', height: '72px', borderRadius: '18px',
          background: 'linear-gradient(135deg, #38BDF8, #A78BFA)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontFamily: 'Plus Jakarta Sans, sans-serif',
          fontSize: '26px', fontWeight: 800, color: '#fff',
          letterSpacing: '-0.03em',
          boxShadow: '0 0 40px rgba(56,189,248,0.4)',
          animation: 'loaderPulse 1s ease-in-out infinite',
        }}>
          AM
        </div>

        {/* Name */}
        <div style={{ textAlign: 'center' }}>
          <div style={{
            fontFamily: 'Plus Jakarta Sans, sans-serif',
            fontSize: '18px', fontWeight: 700,
            letterSpacing: '-0.02em', color: '#F0F4FF',
            marginBottom: '4px',
          }}>
            Ashir Mehfooz
          </div>
          <div style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '11px', color: '#4A6080',
            letterSpacing: '0.12em', textTransform: 'uppercase',
          }}>
            AI Developer & Data Scientist
          </div>
        </div>

        {/* Progress bar */}
        <div style={{ width: '120px', height: '2px', background: 'rgba(255,255,255,0.08)', borderRadius: '2px', overflow: 'hidden' }}>
          <div style={{
            height: '100%', borderRadius: '2px',
            background: 'linear-gradient(90deg, #38BDF8, #A78BFA)',
            animation: 'loaderBar 1.1s cubic-bezier(0.16,1,0.3,1) forwards',
          }} />
        </div>
      </div>

      <style>{`
        @keyframes loaderPulse {
          0%,100%{transform:scale(1);box-shadow:0 0 40px rgba(56,189,248,0.4)}
          50%{transform:scale(1.04);box-shadow:0 0 60px rgba(56,189,248,0.6)}
        }
        @keyframes loaderBar {
          from{width:0%}
          to{width:100%}
        }
      `}</style>
    </div>
  )
}