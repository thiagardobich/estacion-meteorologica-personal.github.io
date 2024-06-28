import React from 'react';
import 'bulma/css/bulma.min.css';
import './assets/styles/main.css';
import zabala from './assets/img/zabala.jpeg';
import zabala2 from './assets/img/zabala2.jpg';
import thiago from './assets/img/yo.jpg';
import gabi from './assets/img/gabi.jpg';
import bruno from './assets/img/bruno.jpg';

const App = () => {
  const proyecto = {
    nombre: 'Estacion Meteoroloica Personal',
    descripcion: 'Este proyecto de robótica tiene como objetivo crear un sistema meteorologico para el uso personal de cada uno, como por ejemplo: utilizarlo en un invernadero para mejorar tu cosecha o el cultivo de tus plantas.',
    integrantes: [
      {
        nombre: 'Thiago Vilchez',
        imagen: thiago,
        fortalezas: 'Trabajo en equipo y aprendizaje rápido.',
        oportunidades: 'Disponibilidad de recursos financieros.',
        debilidades: 'Distracción fácil.',
        amenazas: 'Ausencia por viaje programado.'
      },
      {
        nombre: 'Gabriel Villegas',
        imagen: gabi,
        fortalezas: 'Comprometido y buen compañero.',
        oportunidades: 'Aprender habilidades de hardware y software.',
        debilidades: 'Tiempo limitado.',
        amenazas: 'Ausencia de compañero por viaje.'
      },
      {
        nombre: 'Bruno Peralta',
        imagen: bruno,
        fortalezas: 'Rápido en resolver problemas.',
        oportunidades: 'Experiencia útil para futuros proyectos.',
        debilidades: 'Desagrado por el trabajo prolongado.',
        amenazas: 'Compromiso limitado.'
      }
      
    ],
    contacto: {
      email: 'lucianolugani@iresm.edu.ar',
      telefono: '+54 3541 987654',
      direccion: 'Av. Estrada, s/n, X5152 Villa Carlos Paz, Córdoba'
    }
  };

  return (
    <div className="App">
      <header className="hero is-primary">
        <div className="hero-body">
          <h1 className="title">{proyecto.nombre}</h1>
          <nav className="navbar">
            <div className="navbar-menu is-active">
              <div className="navbar-start"></div>
              <div className="navbar-center">
                <a href="#about" className="navbar-item">Sobre Nosotros</a>
                <a href="#team" className="navbar-item">Equipo</a>
                <a href="#contact" className="navbar-item">Contacto</a>
              </div>
              <div className="navbar-end"></div>
            </div>
          </nav>
        </div>
      </header>

      <section id="about" className="section">
        <div className="container">
          <h2 className="title">Sobre Nosotros</h2>
          <p>{proyecto.descripcion}</p>
          <div className="columns">
            <div id='zaba' className="column">
              <img  src={zabala} alt="Zabala" />
            </div>
            <div id='zaba1' className="column">
              <img  src={zabala2} alt="Zabala 2" />
            </div>
          </div>
        </div>
      </section>

      <section id="team" className="section">
        <div className="container">
          <h2 className="title">Equipo</h2>
          {proyecto.integrantes.map((integrante, index) => (
            <div key={index} className="box">
              <h3 className="subtitle">{integrante.nombre}</h3>
              <img src={integrante.imagen} alt={integrante.nombre} className="integrante-imagen-sm" />
              <p><strong>Fortalezas:</strong> {integrante.fortalezas}</p>
              <p><strong>Oportunidades:</strong> {integrante.oportunidades}</p>
              <p><strong>Debilidades:</strong> {integrante.debilidades}</p>
              <p><strong>Amenazas:</strong> {integrante.amenazas}</p>
            </div>
          ))}
        </div>
      </section>

      <footer id="contact" className="footer">
        <div className="content has-text-centered">
          <h2 className="title">Contacto</h2>
          <p>
            <strong>Email:</strong> {proyecto.contacto.email}<br />
            <strong>Teléfono:</strong> {proyecto.contacto.telefono}<br />
            <strong>Dirección:</strong> {proyecto.contacto.direccion}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default App;
