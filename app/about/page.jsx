import ContactUsUpperPart from '../components/ui/contactusupperpart/ContactUsUpperPart'
import CustomerReview from '../components/ui/costumerrevies/costumerReview'
import Contactus from '../components/ui/contactus/Contactus'
export default function page(){
    return(
        <>
          <ContactUsUpperPart h1='about us'/>  
          <Contactus/>
           <CustomerReview/>
        </>
    );

}