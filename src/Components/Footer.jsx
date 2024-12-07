import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok } from 'react-icons/fa';
import Style from "../Styles/Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={Style.dhlogo}>
        <img src="/images/DH.png" alt="DH-logo" />
      </div>
      <div className={Style.social}>
        <div><FaFacebook size={30} /></div>
        <div><FaInstagram size={30} /></div>
        <div><FaWhatsapp size={30} /></div>
        <div><FaTiktok size={30} /></div>
      </div>
    </footer>
  );
};

export default Footer;
