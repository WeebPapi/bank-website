import React from "react"
import {
  AboutBadge,
  GSButton,
  StandardSection,
  ColorReveal,
} from "../../Components"
import "./About.css"
import { aboutCardsData } from "../../data"
import { useWindowSize } from "../../hooks/useWindowSize"

const About: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <>
      <StandardSection
        name="about"
        firstSide={
          <>
            <ColorReveal>
              <h2 style={{ marginBottom: 32 }}>
                You do the business, we’ll handle the money.
              </h2>
            </ColorReveal>
            <ColorReveal>
              <p style={{ marginBottom: 32 }}>
                With the right credit card, you can improve your financial life
                by building credit, earning rewards and saving money. But with
                hundreds of credit cards on the market.
              </p>
            </ColorReveal>
            <GSButton />
          </>
        }
        secondSide={
          <div className="about-cards d-flex flex-column justify-content-center align-items-center">
            {aboutCardsData.map((card) => (
              <AboutBadge
                key={card.title + "2345"}
                title={card.title}
                desc={card.desc}
                icon={card.icon}
              />
            ))}
          </div>
        }
        flexDirection={width < 768 ? "column" : "row"}
      />
    </>
  )
}

export default About
