import emailjs from "@emailjs/browser";
import { toast } from 'react-toastify';



const sendEmail = async (serviceId, templateId, values, otherParams,resetForm) => {
    try {

      resetForm();
      await emailjs.send(serviceId, templateId, values, otherParams);
   
     } catch (error) {
      alert.error("Error! Try again.",{
        position: "top-center"
      });
    }
  };
  
  export default sendEmail;
  