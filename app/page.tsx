import Carousel from './components/ui/crousel'
import PropertyBuddyNoida from './components/ui/propertybuddynoida/PropertyBuddyNoida'
import Contactus from './components/ui//contactus//Contactus'

import CustomerReview from './components/ui/costumerrevies/costumerReview'
import ContactUsUpperPart from './components/ui/contactusupperpart/ContactUsUpperPart'
export default function Home() {
  return (
    <>
      <Carousel />
      <PropertyBuddyNoida/>
      <Contactus/>
      <ContactUsUpperPart/>
      <CustomerReview/>
      
      
    </>
  );
}