
import { useState, useEffect } from 'react'
import './App.css';


function Rome() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const romeImages = ['./RomeColiseum.png' ,'PantheonRome.png'];
      
    useEffect(() => {
        const intervalId = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % romeImages.length);
        }, 5000);
        return () => clearInterval(intervalId);
      }, [romeImages]);
    
      const showSlide = (index) => {
        const translateValue = -index * 100 + '%';
        return { transform: `translateX(${translateValue})` };
      };
    
      const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % romeImages.length);
      };
    
      const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + romeImages.length) % romeImages.length);
      };
      var sectionStyle = {
        backgroundImage: { romeImages } 
      };
    return (
      <>
        <h1>Rome</h1>
          <section>
          <h2>Featured Projects in Berlin</h2>
          <div className="project-showcase">
            <div className="carousel-container" style={showSlide(currentIndex)}>
              {romeImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img className='image' src={image} alt={`Project ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
          <button onClick={prevSlide}>Prev</button>
          <button onClick={nextSlide}>Next</button>
        </section>
        </>
    )
  }
  
  export default Rome