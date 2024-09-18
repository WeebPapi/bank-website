import "./App.css"
import { Brands, CTA, Navbar, Stats } from "./Components"
import { About, Features, Footer, Header, Laurels } from "./Sections"

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Stats />
      <About />
      <Features />
      <Laurels />
      <Brands />
      <CTA />
      <Footer />
    </>
  )
}

export default App
