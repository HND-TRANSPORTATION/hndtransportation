import React from "react";
import '../static/Main.css';
import image from "../static/Main-pic.jpeg";
import { Link } from "react-router-dom";

const Main = () => {

  return (
    <div className="main-container"> 

      <div className="text-container">
        <h1> Welcome to our website! </h1>
        <div className="mobile-img-container">
          <img src={image} className="mobile-img" />
        </div>
        <p>
        We're delighted that you're here and interested in our services. At HND Transportation And Logistic, we specialize in three main areas: moving, storage, and white glove furniture assembly.
        </p>

        <br></br>

        <p>
        Our expert movers are dedicated to making your move as smooth and efficient as possible. We'll carefully pack and transport your belongings to your new home, making sure that everything arrives safely and securely. And if you need to store your belongings for any length of time, we offer secure and climate-controlled storage facilities to meet your needs.
        </p>

        <br></br>

        <p>
        But that's not all - we also offer a white glove service that includes furniture assembly. Our skilled technicians will assemble your furniture with care and precision, making sure that it's ready to use in your new space right away. And as part of our commitment to providing a truly hassle-free experience, we also offer a "garbage out" service to take care of any waste or debris generated during your move.
        </p>

        <br></br>

        <p>
        We pride ourselves on providing excellent customer service and ensuring that your move is stress-free and efficient. If you have any questions about our services or would like to schedule a consultation, please don't hesitate to contact us. Thank you for considering HND Transportation And Logistic for your moving, storage, and furniture assembly needs.
        </p>

        <br></br>

        <Link to='/contact'>
          <button className='contact-us-button'> CONTACT US </button>
        </Link>
      </div>

      <div className="main-pic-container second">
      </div>
      
    </div>
  )
}

export default Main;