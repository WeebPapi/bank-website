import React, { ReactNode } from "react"
import { motion } from "framer-motion"
import { useWindowSize } from "../../hooks/useWindowSize"

interface ColorRevealProps {
  children: ReactNode
  style?: React.CSSProperties
}

const ColorReveal: React.FC<ColorRevealProps> = ({ children, style }) => {
  const { width } = useWindowSize()

  if (width <= 768) {
    return <>{children}</>
  }
  return (
    <div style={{ position: "relative", ...style }}>
      {children}
      <motion.div
        initial={{ left: 0 }}
        whileInView={{ left: "100%" }}
        transition={{ duration: 0.5, ease: "easeIn" }}
        viewport={{ once: true }}
        style={{
          position: "absolute",

          inset: "4px 0",
          background: "#33bbcf",
          zIndex: 20,
        }}
      />
    </div>
  )
}

export default ColorReveal
