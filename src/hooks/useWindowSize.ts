import { useState } from "react"

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const getSize = (newSize: number) => {
    setWindowSize(newSize)
  }
}
