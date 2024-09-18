import React from "react"
import "./Brands.css"
import { useWindowSize } from "../../hooks/useWindowSize"
import { brands } from "../../assets"
import ColorReveal from "../ColorReveal/ColorReveal"

const Brands: React.FC = () => {
  const { width } = useWindowSize()
  return (
    <div
      className={`brands container-md d-flex flex-${
        width <= 768 ? "column" : "row"
      } justify-content-between align-items-center`}
    >
      <ColorReveal>
        <img src={brands.airBnb} alt="airbnb" />
      </ColorReveal>
      <ColorReveal>
        <img src={brands.binance} alt="binance" />
      </ColorReveal>
      <ColorReveal>
        <img src={brands.coinbase} alt="coinbase" />
      </ColorReveal>
      <ColorReveal>
        <img src={brands.dropbox} alt="dropbox" />
      </ColorReveal>
    </div>
  )
}

export default Brands
