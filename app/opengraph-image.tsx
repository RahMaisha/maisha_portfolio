import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Maisha Rahman — Software Engineer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#ffffff',
          color: '#0a0a0a',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#8b8b85',
            borderBottom: '1px solid #e3e3df',
            paddingBottom: 24,
          }}
        >
          <span>Maisha Rahman</span>
          <span>Dhaka, Bangladesh</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 108,
              fontWeight: 500,
              letterSpacing: '-0.045em',
              lineHeight: 1,
            }}
          >
            Software engineer
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 32,
              color: '#55554f',
              marginTop: 28,
              letterSpacing: '-0.02em',
            }}
          >
            Full-stack engineering · Applied AI &amp; LLM systems · Computer vision research
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontSize: 20,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: '#8b8b85',
            borderTop: '1px solid #e3e3df',
            paddingTop: 24,
          }}
        >
          <span>IEEE ICCIT 2025</span>
          <span>In-house developer — Armani Group</span>
        </div>
      </div>
    ),
    size
  )
}
