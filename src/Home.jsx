
import { useState, useEffect } from 'react'
import './App.css';


function Home() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const projectImages = ['./AthensOlympics.png', './GermanyOlympics.png', './JudiscesMuseumBerlin.png', './NeuseMuseumBerlin.png', './RomeColiseum.png', 'CityArtsScienceValencia.png', 'TombBrionCarloScarpaVenice.png', 'NordwesthausBregenzAustria.png', 'Arantzazu.png', 'PantheonRome.png'
  , 'BeylerFoundationBaselSwitzerland.png', 'RonchampLeCorb.png', 'FlorenceCathedral.png', 'SagradaFamilia.png', 'BarcelonaPavilion.png', 'CastelgrandeBellinzonaSwitzerland.png', 'SwarovskiSnohetta.png', 'MilanItalyCathedral.png', 'Berlin.png' ];
    
    useEffect(() => {
      const intervalId = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
      }, 5000);
      return () => clearInterval(intervalId);
    }, [projectImages]);
  
    const showSlide = (index) => {
      const translateValue = -index * 100 + '%';
      return { transform: `translateX(${translateValue})` };
    };
  
    const nextSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projectImages.length);
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + projectImages.length) % projectImages.length);
    };
  
  
    return (
      <>
        <h1>Architecture Abroad</h1>
          <section>
          <h2>Featured Sites</h2>
          <div className="project-showcase">
            <div className="carousel-container" style={showSlide(currentIndex)}>
              {projectImages.map((image, index) => (
                <div key={index} className="carousel-slide">
                  <img src={image} alt={`Project ${index + 1}`} />
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
  
  export default Home