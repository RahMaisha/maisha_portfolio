'use client'

import { FormEvent, useState } from 'react'
import Reveal from './Reveal'

const DIRECT = [
  { label: 'Email', value: 'maisharahman01x@gmail.com', href: 'mailto:maisharahman01x@gmail.com' },
  { label: 'GitHub', value: 'github.com/RahMaisha', href: 'https://github.com/RahMaisha' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/maisha-rahman-01x',
    href: 'https://linkedin.com/in/maisha-rahman-01x',
  },
  { label: 'Location', value: 'Dhaka, Bangladesh', href: '' },
]

const FIELD =
  'w-full border-0 border-b border-rule-strong bg-transparent pb-3 pt-2 text-[1rem] text-ink outline-none transition-colors duration-200 placeholder:text-ink-3 focus:border-ink'

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitState, setSubmitState] = useState<{
    type: 'idle' | 'success' | 'error'
    message: string
  }>({ type: 'idle', message: '' })

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.currentTarget
    const data = new FormData(form)
    data.append('access_key', 'f60bff5d-e782-453c-8280-069fde48f541')

    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data })
      const json = await res.json()
      if (!json.success) throw new Error('Failed')
      form.reset()
      setSubmitState({ type: 'success', message: 'Message sent. I’ll get back to you soon.' })
    } catch {
      setSubmitState({
        type: 'error',
        message: 'Something went wrong. Email me directly at maisharahman01x@gmail.com',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="border-t border-rule bg-paper pt-[clamp(72px,10vw,132px)]">
      <div className="u-shell">
        <Reveal>
          <div className="mb-[clamp(40px,5vw,64px)]">
            <div className="mb-6 flex items-baseline gap-4">
              <span className="u-label u-mono">08</span>
              <span className="u-label">Contact</span>
              <span aria-hidden className="h-px flex-1 translate-y-[-3px] bg-rule" />
            </div>
            <h2 className="u-h2 max-w-[16ch]">Let&rsquo;s talk.</h2>
            <p className="u-prose mt-7 max-w-[54ch]">
              Open to AI engineering, software engineering, and full-stack roles. Reach out directly,
              or send a message here.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-x-16 gap-y-14 lg:grid-cols-[minmax(0,340px)_minmax(0,1fr)]">
          {/* Direct */}
          <Reveal>
            <dl className="border-t border-ink">
              {DIRECT.map((item) => (
                <div key={item.label} className="border-b border-rule py-5">
                  <dt className="u-label mb-1.5">{item.label}</dt>
                  <dd className="text-[1rem]">
                    {item.href ? (
                      <a
                        className="u-link"
                        href={item.href}
                        target={item.href.startsWith('mailto') ? undefined : '_blank'}
                        rel="noreferrer"
                      >
                        {item.value}
                      </a>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>

          {/* Form */}
          <Reveal delay={80}>
            <form onSubmit={handleSubmit} className="border-t border-ink pt-8">
              {/* Web3Forms honeypot — real people never fill this in. */}
              <input
                type="checkbox"
                name="botcheck"
                tabIndex={-1}
                autoComplete="off"
                className="sr-only !absolute !h-px !w-px !overflow-hidden"
                aria-hidden
              />

              <div className="grid gap-x-10 gap-y-9 sm:grid-cols-2">
                <div>
                  <label className="u-label mb-1 block" htmlFor="fullName">
                    Full name
                  </label>
                  <input
                    className={FIELD}
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>

                <div>
                  <label className="u-label mb-1 block" htmlFor="emailAddress">
                    Email address
                  </label>
                  <input
                    className={FIELD}
                    id="emailAddress"
                    name="emailAddress"
                    type="email"
                    placeholder="you@example.com"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="u-label mb-1 block" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    className={FIELD}
                    id="subject"
                    name="subject"
                    type="text"
                    placeholder="What is this about?"
                    required
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="u-label mb-1 block" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className={`${FIELD} min-h-[120px] resize-y`}
                    id="message"
                    name="message"
                    placeholder="Tell me about the role, project, or collaboration."
                    required
                  />
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <button
                  className="u-label !text-paper inline-flex cursor-pointer items-center gap-3 rounded-lg bg-ink px-7 py-4 transition-opacity duration-200 hover:opacity-80 disabled:opacity-50"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending…' : 'Send message'}
                  {!isSubmitting ? <span aria-hidden>&rarr;</span> : null}
                </button>

                {submitState.type !== 'idle' ? (
                  <p
                    role="status"
                    className={`text-[0.875rem] ${
                      submitState.type === 'success' ? 'text-ink' : 'text-ink-2'
                    }`}
                  >
                    {submitState.message}
                  </p>
                ) : null}
              </div>

              <p className="mt-8 max-w-[56ch] text-[0.8125rem] leading-relaxed text-ink-3">
                Messages are delivered to maisharahman01x@gmail.com. Submissions are handled by
                Web3Forms; your address is only used to reply.
              </p>
            </form>
          </Reveal>
        </div>

        {/* Footer */}
        <footer className="mt-[clamp(72px,9vw,120px)] flex flex-wrap items-baseline justify-between gap-x-8 gap-y-3 border-t border-rule py-8">
          <p className="u-label">© {new Date().getFullYear()} Maisha Rahman</p>
          <p className="u-label">Next.js · Vercel · Spline</p>
        </footer>
      </div>
    </section>
  )
}
