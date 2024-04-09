
import { useState, useEffect } from 'react'
import './App.css';


function Switzerland() {
    const switzerlandImages = [ 'BeylerFoundationBaselSwitzerland.png', 'CastelgrandeBellinzonaSwitzerland.png', 'SwarovskiSnohetta.png' ];
    return (
      <>
        <h1>Switzerland</h1>
          <section>
          <h2>Featured Projects in Switzerland</h2>
            <div>
              {switzerlandImages.map((image, index) => (
                <div>
                  <img className='image' src={image} alt={`Project ${index + 1}`} />
                </div>
              ))}</div>
        </section>
        </>
    )
  }
  
  export default Switzerland