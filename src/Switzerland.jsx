
import { useState, useEffect } from 'react'
import './App.css';


function Switzerland() {
    const switzerlandImages = [ 'BeylerFoundationBaselSwitzerland.png', 'CastelgrandeBellinzonaSwitzerland.png', 'SwarovskiSnohetta.png' ];
    return (
      <>
        <h1>Switzerland</h1>
          <section>
          <h2>Featured Projects in Switzerland</h2>
          <div className='image-container'>
          {switzerlandImages.map((switzerlandImages, index) => (
            <img className='image' src={switzerlandImages} alt={`Project ${index + 1}`} key={index} />
          ))}
        </div>
        </section>
        </>
    )
  }
  
  export default Switzerland