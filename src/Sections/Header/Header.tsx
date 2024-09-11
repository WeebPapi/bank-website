import React from "react"
import { StandardSection } from "../../Components"
import { icons, features } from "../../assets"
import "./Header.css"

const Header: React.FC = () => {
  return (
    <>
      <StandardSection
        flexDirection="row"
        name="header"
        firstSide={
          <>
            <div className="sale-badge d-flex align-items-center">
              <span>
                <img src={icons.percentage} alt="percentage-symbol" />
              </span>
              <p>20% DISCOUNT FOR 1 MONTH ACCOUNT</p>
            </div>
            <div className="header-heading">
              <h1>
                The Next <span className="text-gradient">Generation </span>
                Payment Method.
              </h1>
              <div className="gs-circular-border">
                <div className="gs-circular">
                  <p className="text-gradient">
                    Get{" "}
                    <span>
                      <img src={icons.arrow} alt="arrow" />
                    </span>{" "}
                    <br /> Started
                  </p>
                </div>
              </div>
            </div>
            <div className="header-paragraph">
              <p>
                Our team of experts uses a methodology to identify the credit
                cards most likely to fit your needs. We examine annual
                percentage rates, annual fees.
              </p>
            </div>
          </>
        }
        secondSide={
          <img
            src={features.robotHand}
            alt="robot-hand-visual"
            style={{ position: "absolute", right: "-40%", top: 0 }}
          />
        }
      />
    </>
  )
}

export default Header
