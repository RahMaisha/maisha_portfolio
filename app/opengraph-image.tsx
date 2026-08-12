import { ImageResponse } from 'next/og'

export const runtime = 'nodejs'
export const alt = 'Maisha Rahman — AI Engineer & Fullstack Developer'
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
          justifyContent: 'center',
          background: '#07090f',
          padding: '80px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '8px',
            background: 'linear-gradient(90deg, #00d4ff, #f5a623)',
          }}
        />
        <div
          style={{
            display: 'flex',
            fontSize: 24,
            color: '#00d4ff',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            marginBottom: 24,
          }}
        >
          maisha_rahman.dev
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 92,
            fontWeight: 900,
            color: '#e8eaf0',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
          }}
        >
          Maisha Rahman
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 40,
            color: '#00d4ff',
            fontWeight: 700,
            marginTop: 12,
            letterSpacing: '-0.02em',
          }}
        >
          AI Engineer &amp; Fullstack Developer
        </div>
        <div
          style={{
            display: 'flex',
            fontSize: 26,
            color: '#8892a4',
            marginTop: 36,
            lineHeight: 1.5,
            maxWidth: 900,
          }}
        >
          In-house developer for Armani Group · IEEE ICCIT 2025 published · Dhaka, Bangladesh
        </div>
      </div>
    ),
    size
  )
}
