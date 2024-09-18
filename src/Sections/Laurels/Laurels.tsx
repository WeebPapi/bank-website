import React from "react"
import "./Laurels.css"
import { ColorReveal, Laurel, StandardSection } from "../../Components"
import { laurelsData } from "../../data"
import { useWindowSize } from "../../hooks/useWindowSize"

const Laurels: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <>
      <StandardSection
        flexDirection="column"
        firstSide={
          <div
            className={`laurels-header d-flex flex-${
              width <= 768 ? "column" : "row"
            } justify-content-between align-items-center`}
          >
            <ColorReveal>
              <h2>What people are saying about us</h2>
            </ColorReveal>
            <ColorReveal>
              <p>
                Everything you need to accept card payments and grow your
                business anywhere on the planet.
              </p>
            </ColorReveal>
          </div>
        }
        secondSide={
          <div
            className={`laurels-container d-flex flex-${
              width <= 768 ? "column" : "row"
            } justify-content-between`}
          >
            {laurelsData.map((laurel) => (
              <Laurel
                key={laurel.name}
                imgUrl={laurel.imgUrl}
                text={laurel.text}
                name={laurel.name}
                relation={laurel.relation}
              />
            ))}
          </div>
        }
      />
    </>
  )
}

export default Laurels
