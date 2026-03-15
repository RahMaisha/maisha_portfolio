export default function Contact() {
  const contactInfo = [
    { icon: '✉️', label: 'Email', value: 'maisharahman01x@gmail.com', href: 'mailto:maisharahman01x@gmail.com' },
    { icon: '📱', label: 'Phone', value: '+880 1980 312 210', href: 'tel:+8801980312210' },
    { icon: '📍', label: 'Location', value: 'Dhaka, Bangladesh', href: null },
  ]
  const social = [
    { icon: '💻', label: 'GitHub', value: 'RahMaisha', href: 'https://github.com/RahMaisha' },
    { icon: '🔗', label: 'LinkedIn', value: 'maisha-rahman-87b4a32a9', href: 'https://linkedin.com/in/maisha-rahman-87b4a32a9' },
  ]

  return (
    <>
      <style>{`
        .ct-info-item { display:flex;align-items:center;gap:14px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,0.04); }
        .ct-info-item:last-child { border-bottom:none; }
        .ct-icon-box { width:42px;height:42px;border-radius:10px;background:rgba(0,212,255,0.1);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0; }
        .ct-info-label { font-size:11px;color:#4a5568;font-family:'Fira Code',monospace;letter-spacing:.06em;margin-bottom:2px; }
        .ct-info-value { font-size:14px;font-weight:500;color:#e8eaf0; }
        .ct-info-link { font-size:14px;font-weight:500;color:#00d4ff;text-decoration:none; }
        .ct-info-link:hover { color:#33ddff; }
        @keyframes pulse-g { 0%,100%{box-shadow:0 0 0 0 rgba(34,197,94,.5)}50%{box-shadow:0 0 0 5px rgba(34,197,94,0)} }
        .avail-g { width:7px;height:7px;border-radius:50%;background:#22c55e;animation:pulse-g 2s ease infinite;display:inline-block; }
      `}</style>

      <section id="contact" style={{ padding: '80px 0', borderTop: '1px solid rgba(255,255,255,0.05)', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: 1080, margin: '0 auto', padding: '0 48px 80px' }}>
          <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>06. contact</div>
          <h2 style={{ fontSize: 36, fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 12 }}>
            Get In <span style={{ color: '#00d4ff' }}>Touch</span>
          </h2>
          <p style={{ fontSize: 15, color: '#8892a4', maxWidth: 520, fontWeight: 300, lineHeight: 1.7, marginBottom: 48 }}>
            Open to AI engineering roles, fullstack positions, research collaborations, and interesting problems. Based in Dhaka — available globally.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Contact Info */}
            <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Contact Information</h3>
              {contactInfo.map(c => (
                <div key={c.label} className="ct-info-item">
                  <div className="ct-icon-box">{c.icon}</div>
                  <div>
                    <div className="ct-info-label">{c.label}</div>
                    {c.href
                      ? <a className="ct-info-link" href={c.href}>{c.value}</a>
                      : <div className="ct-info-value">{c.value}</div>
                    }
                  </div>
                </div>
              ))}
            </div>

            {/* Follow */}
            <div style={{ background: '#0d1117', border: '1px solid rgba(255,255,255,0.06)', borderRadius: 16, padding: 28 }}>
              <h3 style={{ fontSize: 18, fontWeight: 700, marginBottom: 20 }}>Follow Me</h3>
              {social.map(s => (
                <div key={s.label} className="ct-info-item">
                  <div className="ct-icon-box">{s.icon}</div>
                  <div>
                    <div className="ct-info-label">{s.label}</div>
                    <a className="ct-info-link" href={s.href} target="_blank" rel="noreferrer">{s.value}</a>
                  </div>
                </div>
              ))}
              <div style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#8892a4' }}>
                <span className="avail-g" />
                Currently available for new opportunities
              </div>
            </div>
          </div>

          <div style={{ textAlign: 'center' as const, marginTop: 48, fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#4a5568' }}>
            © 2025 Maisha Rahman · Built with Next.js · Deployed on Vercel
          </div>
        </div>
      </section>
    </>
  )
}