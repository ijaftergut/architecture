
import './App.css';


function Rome() {
    const romeImages = ['./RomeColiseum.png' ,'PantheonRome.png'];
     
    return (
      <>
        <h1>Rome</h1>
          <section>
          <h2>Featured Projects in Rome</h2>
          <div className='image-container'>
          {romeImages.map((romeImages, index) => (
            <img className='image' src={romeImages} alt={`Project ${index + 1}`} key={index} />
          ))}
        </div>
        </section>
        </>
    )
  }
  
  export default Rome