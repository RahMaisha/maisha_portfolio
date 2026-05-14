'use client'

import { FormEvent, useEffect, useState } from 'react'

const contactInfo = [
  { icon: '@', label: 'Email', value: 'maisharahman01x@gmail.com', href: 'mailto:maisharahman01x@gmail.com' },
  { icon: '+', label: 'Phone', value: '+880 1980 312 210', href: 'tel:+8801980312210' },
  { icon: 'O', label: 'Location', value: 'Dhaka, Bangladesh', href: '' },
]

const socialLinks = [
  { label: 'GitHub', short: 'GH', href: 'https://github.com/RahMaisha' },
  { label: 'LinkedIn', short: 'IN', href: 'https://linkedin.com/in/maisha-rahman-01x' },
  { label: 'Email', short: 'EM', href: 'mailto:maisharahman01x@gmail.com' },
]

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{ type: 'idle' | 'success' | 'error'; message: string }>({
    type: 'idle',
    message: '',
  })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).style.animation = 'fadeUp .6s ease forwards'
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.ct-reveal').forEach((element) => {
      ;(element as HTMLElement).style.opacity = '0'
      observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)
    setSubmitState({ type: 'idle', message: '' })

    const form = event.currentTarget
    const formData = new FormData(form)
    formData.append('_subject', 'New portfolio contact message')
    formData.append('_captcha', 'false')
    formData.append('_template', 'table')

    try {
      const response = await fetch('https://formsubmit.co/ajax/maisharahman01x@gmail.com', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Form submission failed')
      }

      form.reset()
      setSubmitState({
        type: 'success',
        message: 'Message sent. Check your inbox for the FormSubmit activation email if this is the first submission.',
      })
    } catch {
      setSubmitState({
        type: 'error',
        message: 'Something went wrong while sending the message. Please email me directly at maisharahman01x@gmail.com.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <style>{`
        @keyframes fadeUp { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        .ct-wrap {
          display:grid;
          grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.25fr);
          gap: 36px;
          align-items: start;
        }
        .ct-panel {
          background: linear-gradient(180deg, rgba(13,17,23,0.96), rgba(7,9,15,0.98));
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 20px;
          padding: 34px;
          box-shadow: 0 18px 44px rgba(0,0,0,0.22);
        }
        .ct-left {
          min-height: 100%;
        }
        .ct-heading {
          font-size: 18px;
          font-weight: 700;
          color: #fff1eb;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .ct-copy {
          font-size: 14px;
          line-height: 1.8;
          color: #8892a4;
          max-width: 32ch;
          margin-bottom: 28px;
        }
        .ct-item {
          display:flex;
          align-items:flex-start;
          gap:14px;
          margin-bottom:18px;
        }
        .ct-icon {
          width:42px;
          height:42px;
          border-radius:12px;
          border:1px solid rgba(0,212,255,0.28);
          background: rgba(0,212,255,0.08);
          color:#00d4ff;
          display:flex;
          align-items:center;
          justify-content:center;
          font-family:'Fira Code', monospace;
          font-size:14px;
          flex-shrink:0;
        }
        .ct-label {
          font-family:'Fira Code', monospace;
          font-size:11px;
          letter-spacing:.12em;
          text-transform:uppercase;
          color:#4a5568;
          margin-bottom:4px;
        }
        .ct-value, .ct-link {
          font-size:15px;
          line-height:1.6;
          color:#f6ebe8;
          text-decoration:none;
        }
        .ct-link:hover {
          color:#00d4ff;
        }
        .ct-divider {
          height:1px;
          background: rgba(255,255,255,0.08);
          margin: 28px 0 24px;
        }
        .ct-social-title {
          font-family:'Fira Code', monospace;
          font-size:11px;
          letter-spacing:.16em;
          text-transform:uppercase;
          color:#4a5568;
          margin-bottom:14px;
        }
        .ct-social-row {
          display:flex;
          flex-wrap:wrap;
          gap:10px;
        }
        .ct-social {
          width:44px;
          height:44px;
          border-radius:12px;
          border:1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.03);
          color:#d6c2be;
          display:flex;
          align-items:center;
          justify-content:center;
          text-decoration:none;
          font-family:'Fira Code', monospace;
          font-size:12px;
          transition: all .25s ease;
        }
        .ct-social:hover {
          border-color: rgba(0,212,255,0.28);
          color: #e8eaf0;
          background: rgba(0,212,255,0.08);
          transform: translateY(-2px);
        }
        .ct-form-title {
          font-size: 18px;
          font-weight: 700;
          color: #fff1eb;
          margin-bottom: 24px;
          letter-spacing: -0.02em;
        }
        .ct-form-grid {
          display:grid;
          grid-template-columns:1fr 1fr;
          gap:14px;
          margin-bottom:14px;
        }
        .ct-field-wrap {
          display:flex;
          flex-direction:column;
          gap:8px;
        }
        .ct-field-wrap.full {
          grid-column:1 / -1;
        }
        .ct-field-label {
          font-family:'Fira Code', monospace;
          font-size:11px;
          letter-spacing:.12em;
          text-transform:uppercase;
          color:#8892a4;
        }
        .ct-input, .ct-textarea {
          width:100%;
          border-radius:14px;
          border:1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color:#f6ebe8;
          padding:14px 16px;
          font-size:14px;
          outline:none;
          transition: all .2s ease;
        }
        .ct-input::placeholder, .ct-textarea::placeholder {
          color:#7e6b6f;
        }
        .ct-input:focus, .ct-textarea:focus {
          border-color: rgba(0,212,255,0.4);
          box-shadow: 0 0 0 3px rgba(0,212,255,0.12);
        }
        .ct-textarea {
          min-height: 140px;
          resize: vertical;
        }
        .ct-submit {
          margin-top: 16px;
          width: 100%;
          border: none;
          border-radius: 14px;
          background: linear-gradient(90deg, #00d4ff, #0ea5e9);
          color: #07090f;
          padding: 15px 18px;
          font-size: 16px;
          font-weight: 700;
          cursor: pointer;
          transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
        }
        .ct-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 14px 30px rgba(0,212,255,0.24);
          filter: brightness(1.03);
        }
        .ct-note {
          margin-top: 14px;
          font-size: 12px;
          color: #8892a4;
          line-height: 1.6;
        }
        .ct-status {
          margin-top: 14px;
          border-radius: 12px;
          padding: 12px 14px;
          font-size: 13px;
          line-height: 1.6;
        }
        .ct-status.success {
          border: 1px solid rgba(34,197,94,0.24);
          background: rgba(34,197,94,0.08);
          color: #d8f7df;
        }
        .ct-status.error {
          border: 1px solid rgba(239,68,68,0.24);
          background: rgba(239,68,68,0.08);
          color: #ffd7d7;
        }
        .ct-inner { padding: 0 48px 80px; }
        @media (max-width: 1024px) {
          .ct-wrap {
            grid-template-columns: 1fr;
          }
          .ct-inner { padding: 0 32px 72px !important; }
        }
        @media (max-width: 768px) {
          .ct-inner { padding: 0 20px 60px !important; }
          .ct-panel { padding: 22px; border-radius: 18px; }
          .ct-form-grid { grid-template-columns: 1fr; }
          .ct-section { padding: 60px 0 !important; }
          .ct-title { font-size: 28px !important; }
        }
      `}</style>

      <section
        id="contact"
        className="ct-section"
        style={{
          padding: '80px 0',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          background: 'radial-gradient(circle at top left, rgba(0,212,255,0.08), transparent 30%)',
        }}
      >
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <div className="ct-inner" style={{ padding: '0 48px 80px' }}>
            <div style={{ fontFamily: 'Fira Code, monospace', fontSize: 12, color: '#00d4ff', letterSpacing: '0.15em', marginBottom: 6 }}>06. contact</div>
            <h2 className="ct-title" style={{ fontSize: 'clamp(28px,3vw,36px)', fontWeight: 800, letterSpacing: '-0.025em', marginBottom: 12 }}>
              Let&apos;s <span style={{ color: '#00d4ff' }}>Connect</span>
            </h2>
            <p style={{ fontSize: 15, color: '#8892a4', maxWidth: 620, fontWeight: 300, lineHeight: 1.8, marginBottom: 42 }}>
              Open to AI engineering, software engineering, and fullstack opportunities. Reach out directly or send a message through the form.
            </p>

            <div className="ct-wrap">
              <div className="ct-panel ct-left ct-reveal">
                <h3 className="ct-heading">Get In Touch</h3>
                <p className="ct-copy">
                  Reach out directly or connect with me online. I&apos;d love to hear about roles, collaborations, and interesting product ideas.
                </p>

                {contactInfo.map((item) => (
                  <div key={item.label} className="ct-item">
                    <div className="ct-icon">{item.icon}</div>
                    <div>
                      <div className="ct-label">{item.label}</div>
                      {item.href ? (
                        <a className="ct-link" href={item.href}>
                          {item.value}
                        </a>
                      ) : (
                        <div className="ct-value">{item.value}</div>
                      )}
                    </div>
                  </div>
                ))}

                <div className="ct-divider" />

                <div className="ct-social-title">Follow Me</div>
                <div className="ct-social-row">
                  {socialLinks.map((item) => (
                    <a key={item.label} className="ct-social" href={item.href} target="_blank" rel="noreferrer" aria-label={item.label}>
                      {item.short}
                    </a>
                  ))}
                </div>
              </div>

              <div className="ct-panel ct-reveal">
                <h3 className="ct-form-title">Send Us a Message</h3>
                <form onSubmit={handleSubmit}>
                  <div className="ct-form-grid">
                    <div className="ct-field-wrap">
                      <label className="ct-field-label" htmlFor="fullName">
                        Full Name
                      </label>
                      <input className="ct-input" id="fullName" name="fullName" type="text" placeholder="John Doe" required />
                    </div>

                    <div className="ct-field-wrap">
                      <label className="ct-field-label" htmlFor="emailAddress">
                        Email Address
                      </label>
                      <input className="ct-input" id="emailAddress" name="emailAddress" type="email" placeholder="you@example.com" required />
                    </div>

                    <div className="ct-field-wrap full">
                      <label className="ct-field-label" htmlFor="subject">
                        Subject
                      </label>
                      <input className="ct-input" id="subject" name="subject" type="text" placeholder="How can we help?" required />
                    </div>

                    <div className="ct-field-wrap full">
                      <label className="ct-field-label" htmlFor="message">
                        Message
                      </label>
                      <textarea className="ct-textarea" id="message" name="message" placeholder="Tell us about your project, role, or collaboration idea..." required />
                    </div>
                  </div>

                  <button className="ct-submit" type="submit" disabled={isSubmitting} style={{ opacity: isSubmitting ? 0.8 : 1 }}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
                {submitState.type !== 'idle' ? (
                  <div className={`ct-status ${submitState.type}`}>{submitState.message}</div>
                ) : null}
                <p className="ct-note">
                  Messages are sent to
                  {' '}
                  <a className="ct-link" href="mailto:maisharahman01x@gmail.com">
                    maisharahman01x@gmail.com
                  </a>
                  . FormSubmit may send a one-time activation email to this address before the first live submission starts arriving.
                </p>
              </div>
            </div>

            <div style={{ textAlign: 'center', marginTop: 48, fontFamily: 'Fira Code, monospace', fontSize: 11, color: '#4a5568' }}>
              © 2026 Maisha Rahman | Built with Next.js | Deployed on Vercel
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
