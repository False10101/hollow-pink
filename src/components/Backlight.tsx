type BacklightProps = {
  intensity?: 'normal' | 'subtle'
}

export function Backlight({ intensity = 'normal' }: BacklightProps) {
  const opacity = intensity === 'subtle' ? 'opacity-35' : 'opacity-70'

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 z-0 rounded-[inherit] ${opacity}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_28%_18%,rgba(59,130,246,0.24),transparent_44%),radial-gradient(ellipse_at_78%_86%,rgba(236,72,153,0.20),transparent_42%)]" />
    </div>
  )
}
