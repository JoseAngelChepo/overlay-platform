"use client"

import { RevealText } from "@/components/ui/reveal-text"
import { landingContent } from "@/content/landing"

type Props = {
  tagline?: string
}

const OVERLAY_LETTER_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1200&q=80",
]

export default function OverlayWordmark({ tagline }: Props) {
  const brandName = landingContent.brand.name

  return (
    <header className="overlay-wordmark">
      <h1 className="overlay-wordmark__title">
        <span className="overlay-wordmark__sr-only">{brandName}</span>
        <RevealText
          text={brandName}
          textColor="rt:text-zinc-900"
          overlayColor="rt:text-violet-600"
          fontSize="rt:text-[clamp(2.875rem,10vw,4.25rem)]"
          fontWeight="rt:font-semibold"
          letterDelay={0.06}
          overlayDelay={0.04}
          overlayDuration={0.35}
          springDuration={500}
          letterImages={OVERLAY_LETTER_IMAGES}
        />
      </h1>
      {tagline ? <p className="overlay-wordmark__tagline">{tagline}</p> : null}

      <style jsx>{`
        .overlay-wordmark {
          margin: 0 0 2.25rem;
          text-align: center;
          user-select: none;
        }

        .overlay-wordmark__title {
          margin: 0;
          font-family: var(--app-font);
          line-height: 1;
        }

        .overlay-wordmark__sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          padding: 0;
          margin: -1px;
          overflow: hidden;
          clip: rect(0, 0, 0, 0);
          white-space: nowrap;
          border: 0;
        }

        .overlay-wordmark__tagline {
          margin: 0.875rem 0 0;
          font-family: var(--app-font);
          font-size: 1.0625rem;
          font-weight: 400;
          letter-spacing: -0.01em;
          color: var(--app-text-muted);
        }
      `}</style>
    </header>
  )
}
