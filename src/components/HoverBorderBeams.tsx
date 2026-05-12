import type { CSSProperties } from 'react'

type HoverBorderBeamsProps = {
  size: number
  duration?: number
  borderWidth?: number
  delay?: number
}

export function HoverBorderBeams({
  size,
  duration = 7,
  borderWidth = 1,
  delay = 0,
}: HoverBorderBeamsProps) {
  const styles = {
    '--hover-trail-size': `${size}px`,
    '--hover-trail-duration': `${duration}s`,
    '--hover-trail-delay': `${delay}s`,
    '--hover-trail-border-width': `${borderWidth}px`,
  } as CSSProperties

  return (
    <div className="hover-border-trails absolute inset-0 rounded-[inherit]" style={styles}>
      <span className="hover-border-trail-layer hover-border-trail-blue" />
      <span className="hover-border-trail-layer hover-border-trail-pink" />
    </div>
  )
}
