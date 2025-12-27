import "./Hero.css";
import logo from "./assets/logo.png";


function Hero() {
  return (
    
    <section className="hero" id="home" >
       <img src={logo} alt="ScoreMate Logo" className="hero-logo" />


      
      <p className="hero-description">
        ScoreMate is a student grade calculation and performance evaluation tool developed to simplify the process of academic assessment. It allows users to input subject-wise marks and automatically calculates total marks, percentage, and final grades based on predefined criteria. The application is designed with a clear and structured interface to ensure accuracy and ease of use. ScoreMate helps students and educators analyze academic performance efficiently while reducing manual calculation errors.
      </p>
    </section>
  );
}

export default Hero;
