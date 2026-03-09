import Carousel from './component/ui/crousel'
import PropertyBuddyNoida from './component/ui/propertybuddynoida/PropertyBuddyNoida'
import Contactus from './component/ui//contactus//Contactus'
import Footer from './component/Footer'
import CustomerReview from './component/ui/costumerrevies/costumerReview'
export default function Home() {
  return (
    <>
      <Carousel />
      <PropertyBuddyNoida/>
      <Contactus/>
      <CustomerReview/>
      <Footer/>

    </>
  );
}