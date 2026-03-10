import ContactUsUpperPart from '../component/ui/contactusupperpart/ContactUsUpperPart'
import CustomerReview from '../component/ui/costumerrevies/costumerReview'
import Contactus from '../component/ui/contactus/Contactus'
export default function page(){
    return(
        <>
          <ContactUsUpperPart h1='about us'/>  
          <Contactus/>
           <CustomerReview/>
        </>
    );

}