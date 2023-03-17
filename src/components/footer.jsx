import React from "react";
import "../css/footer.css";
import { Button, Tab,Tabs } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
//import { fabFacebook} from "@fortawesome/free-solid-svg-icons";
import { faFacebook,faWhatsapp,faFacebookMessenger} from "@fortawesome/free-brands-svg-icons";


const Footers = () => {

  return (
    <div className="footer">
      <div className="firts-place">
        <div className="logo-f">
          <h3>FITOH</h3>
          
          <h6>autoparts y multiservicios</h6>
        </div>
        <div className="descrip">
          
        </div>
        <div className="links-f">
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faFacebookMessenger} />
          <FontAwesomeIcon icon={faWhatsapp} />  
        </div>
      </div>
      <div className="second-place">
        <div> <p>El salvador</p> </div>
        <div className="creditos"> <p> copyright © 2023</p> </div>
      </div>
    </div>
  );
};

export default Footers;
