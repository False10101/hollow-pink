import { BorderBeam } from '@stianlarsen/border-beam'

type NeonFrameProps = {
  soft?: boolean
}

export function NeonFrame({ soft = false }: NeonFrameProps) {
  return (
    <>
      <BorderBeam
        borderWidth={soft ? 0.9 : 1.1}
        className="neon-border-beam"
        colorFrom="rgba(96, 165, 250, 0.08)"
        colorTo="rgba(96, 165, 250, 0.58)"
        duration={soft ? 12 : 11}
        size={soft ? 360 : 720}
      />
      <BorderBeam
        borderWidth={soft ? 0.9 : 1.1}
        className="neon-border-beam neon-border-beam-pink"
        colorFrom="rgba(236, 72, 153, 0.08)"
        colorTo="rgba(236, 72, 153, 0.54)"
        delay={soft ? 6 : 5.5}
        duration={soft ? 12 : 11}
        size={soft ? 360 : 720}
      />
    </>
  )
}
