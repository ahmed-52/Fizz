import Hero from './sections/hero'
import HeroMobile from './sections/heroMobile'
import Navbar from './sections/navbar'
import Products from './sections/products'
import ProteinBenefits from './sections/protein-benefits'
import ProductBadges from './sections/product-badges'
import ProteinWeightLoss from './sections/protein-weightloss'
import FlavorsShowcase from './sections/flavors-showcase'
import FlavorsShowcaseScroll from './sections/flavorshowcase'
import FlavorsDisplay from './sections/flavors-display'
import WeightLossSupport from './sections/weightloss-support'
import Footer from './sections/Footer'
import NutritionFacts from './sections/NutritionFacts'


function App() {
  return (
   <>
    <Navbar />
    {/* Desktop Hero - Hidden on mobile */}
    <div className="hidden lg:block">
      <Hero />
    </div>
    {/* Mobile Hero - Hidden on desktop */}
    <div className="lg:hidden">
      <HeroMobile />
    </div>
    {/* <ProteinWeightLoss /> */}
    <ProteinBenefits />
    <WeightLossSupport />
    {/* <ProductBadges /> */}
    {/* <FlavorsShowcase /> */}
    <FlavorsShowcaseScroll />
    <FlavorsDisplay />
    <NutritionFacts />
    {/* <Products /> */}
    <Footer />


   </>
  )
}

export default App

