
import { useState, useEffect } from 'react'
import './App.css';


function Berlin() {
    const berlinImages = ['./JudiscesMuseumBerlin.png', './NeuseMuseumBerlin.png', 'Berlin.png' ];
     
    
    return (
      <>
        <h1>Berlin</h1>
          <section>
          <h2>Featured Projects in Berlin</h2>
            <div className='image-container'>
              {berlinImages.map((berlinImages, index) => (
                <img className='image' src={berlinImages} alt={`Project ${index + 1}`} />
              ))}
            </div>
        </section>
        </>
    )
  }
  
  export default Berlin