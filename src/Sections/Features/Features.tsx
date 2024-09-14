import React from "react"
import { ColorReveal, GSButton, StandardSection } from "../../Components"
import "./Features.css"
import { brands, features } from "../../assets"
import { useWindowSize } from "../../hooks/useWindowSize"

const Features: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <>
      <StandardSection
        flexDirection={width <= 768 ? "column" : "row"}
        name="features"
        firstSide={
          <img
            src={features.billingFeature}
            alt="billing-across-various-websites"
          />
        }
        secondSide={
          <div className="billing-feature">
            <ColorReveal>
              <h2>Easily control your billing & invoicing.</h2>
            </ColorReveal>
            <ColorReveal>
              <p>
                Elit enim sed massa etiam. Mauris eu adipiscing ultrices
                ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor
                integer platea placerat.
              </p>
            </ColorReveal>
            <div className="billing-feature-icons">
              <img src={brands.appStore} alt="apple-app-store" />
              <img src={brands.googlePlay} alt="google-play-store" />
            </div>
          </div>
        }
      />
      <StandardSection
        flexDirection={width <= 768 ? "column" : "row"}
        firstSide={
          <div className="deals-feature">
            <ColorReveal>
              <h2>Find a better card deal in few easy steps.</h2>
            </ColorReveal>
            <ColorReveal>
              <p>
                Arcu tortor, purus in mattis at sed integer faucibus. Aliquet
                quis aliquet eget mauris tortor.ç Aliquet ultrices ac, ametau.
              </p>
            </ColorReveal>
            <GSButton />
          </div>
        }
        secondSide={<img src={features.dealFeature} alt="deal-feature" />}
      />
    </>
  )
}

export default Features
