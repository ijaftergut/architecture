import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'
import './App.css';


function Berlin() {
  const berlinImages = [{image:'./JudiscesMuseumBerlin.png', link: '/JudiscesMuseum'}, {image:'./NeuseMuseumBerlin.png', link:'/NeuseMuseum'}, {image: './Berlin.png', link: '/BabyBerlin'}];

  return (
    <>
      <h1>Berlin</h1>
      <section>
        <h2>Featured Projects in Berlin</h2>
        <div className='image-container'>
          {berlinImages.map((berlinImage, index) => (
            <Link to={berlinImage.link} key={index}>
            <img className='image' src={berlinImage.image} alt={`Project ${index + 1}`} />
          </Link>

          ))}
        </div>
      </section>
    </>
  );
}

  
  export default Berlin