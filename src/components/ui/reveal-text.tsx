"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import "./reveal-text.css"

export type RevealTextProps = {
  text?: string
  textColor?: string
  overlayColor?: string
  fontSize?: string
  fontWeight?: string
  letterDelay?: number
  overlayDelay?: number
  overlayDuration?: number
  springDuration?: number
  letterImages?: string[]
}

const DEFAULT_LETTER_IMAGES = [
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1518837695005-2083093ee35b?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1519904981063-b0cf448d479e?auto=format&fit=crop&w=1200&q=80",
  "https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?auto=format&fit=crop&w=1200&q=80",
]

export function RevealText({
  text = "STUNNING",
  textColor = "rt:text-white",
  overlayColor = "rt:text-red-500",
  fontSize = "rt:text-[250px]",
  fontWeight = "rt:font-black",
  letterDelay = 0.08,
  overlayDelay = 0.05,
  overlayDuration = 0.4,
  springDuration = 600,
  letterImages = DEFAULT_LETTER_IMAGES,
}: RevealTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showOverlayText, setShowOverlayText] = useState(false)

  useEffect(() => {
    const lastLetterDelay = (text.length - 1) * letterDelay
    const totalDelay = lastLetterDelay * 1000 + springDuration

    const timer = setTimeout(() => {
      setShowOverlayText(true)
    }, totalDelay)

    return () => clearTimeout(timer)
  }, [text.length, letterDelay, springDuration])

  return (
    <div className="rt:flex rt:items-center rt:justify-center rt:relative">
      <div className="rt:flex" aria-hidden>
        {text.split("").map((letter, index) => (
          <motion.span
            key={`${letter}-${index}`}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            className={`${fontSize} ${fontWeight} rt:tracking-tight rt:cursor-pointer rt:relative rt:overflow-hidden rt:leading-none`}
            initial={{
              scale: 0,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              delay: index * letterDelay,
              type: "spring",
              damping: 8,
              stiffness: 200,
              mass: 0.8,
            }}
          >
            <motion.span
              className={`rt:absolute rt:inset-0 ${textColor}`}
              animate={{
                opacity: hoveredIndex === index ? 0 : 1,
              }}
              transition={{ duration: 0.1 }}
            >
              {letter}
            </motion.span>
            <motion.span
              className="rt:text-transparent rt:bg-clip-text rt:bg-cover rt:bg-no-repeat"
              animate={{
                opacity: hoveredIndex === index ? 1 : 0,
                backgroundPosition: hoveredIndex === index ? "10% center" : "0% center",
              }}
              transition={{
                opacity: { duration: 0.1 },
                backgroundPosition: {
                  duration: 3,
                  ease: "easeInOut",
                },
              }}
              style={{
                backgroundImage: `url('${letterImages[index % letterImages.length]}')`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {letter}
            </motion.span>

            {showOverlayText ? (
              <motion.span
                className={`rt:absolute rt:inset-0 ${overlayColor} rt:pointer-events-none`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: [0, 1, 1, 0],
                }}
                transition={{
                  delay: index * overlayDelay,
                  duration: overlayDuration,
                  times: [0, 0.1, 0.7, 1],
                  ease: "easeInOut",
                }}
              >
                {letter}
              </motion.span>
            ) : null}
          </motion.span>
        ))}
      </div>
    </div>
  )
}
