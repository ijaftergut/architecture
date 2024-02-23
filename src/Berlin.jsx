
import { useState, useEffect } from 'react'
import './App.css';


function Berlin() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const berlinImages = ['./JudiscesMuseumBerlin.png', './NeuseMuseumBerlin.png', 'Berlin.png' ];
     
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % berlinImages.length);
        }, 5000);
        return () => clearInterval(intervalId);
      }, [berlinImages]);
    
      const showSlide = (index) => {
        const translateValue = -index * 100 + '%';
        return { transform: `translateX(${translateValue})` };
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % berlinImages.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + berlinImages.length) % berlinImages.length);
      };
      var sectionStyle = {
        backgroundImage: { berlinImages } 
      };
    return (
      <>
        <h1>Berlin</h1>
          <section>
          <h2>Featured Projects in Berlin</h2>
          <div className="project-showcase">
            <div className="carousel-container" style={showSlide(currentIndex)}>

              {berlinImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <section style={ { backgroundImage: "url(/"+image+")", height: "200px", width: "200px" } }>
                  <button className="button" onClick={prevSlide}></button>
                   <button  className="button" onClick={nextSlide}></button>
                   </section>                </div>
              ))}
            </div>
          </div>
        </section>
        </>
    )
  }
  
  export default Berlin