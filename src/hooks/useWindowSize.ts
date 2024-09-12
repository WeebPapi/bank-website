import { useEffect, useState } from "react"

export const useWindowSize = () => {
  // State to store the window's width and height
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEffect(() => {
    // Function to update window size state
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }

    // Attach the event listener on mount
    window.addEventListener("resize", handleResize)

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, []) // Empty dependency array means this effect runs only once

  return windowSize // Return the current window size
}
