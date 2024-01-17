import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home">
      <div className="overlay">
        <h1>Bem vindas</h1>
        <p>Lista de presentes divertida via pix</p>
        <div className='switch'>
          <div>
            <Link to="/bridal-shower"><button className='button'>Chá da Manu e Julio</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
